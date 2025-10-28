// components/ImageResizerTool.tsx
"use client";
import { useEffect, useMemo, useState } from "react";

interface ResizeSettings {
  width: number;
  height: number;
  maintainAspectRatio: boolean;
  quality: number; // 0.1..1 used by JPEG/WebP; PNG ignores
  resizeMode: "dimensions" | "percentage" | "maxSize";
  percentage: number; // 1..100
  maxSize: number;    // longest side cap
}

export default function ImageResizerTool() {
  const [file, setFile] = useState<File | null>(null);
  const [resizedUrl, setResizedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [orig, setOrig] = useState<{ w: number; h: number } | null>(null);

  const [settings, setSettings] = useState<ResizeSettings>({
    width: 800,
    height: 600,
    maintainAspectRatio: true,
    quality: 0.8,
    resizeMode: "dimensions",
    percentage: 50,
    maxSize: 1024,
  });

  // Cleanup object URL on unmount or when replaced
  useEffect(() => {
    return () => {
      if (resizedUrl) URL.revokeObjectURL(resizedUrl);
    };
  }, [resizedUrl]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] || null;
    setFile(f);
    setError(null);
    if (resizedUrl) {
      URL.revokeObjectURL(resizedUrl);
      setResizedUrl(null);
    }
    if (!f) {
      setPreview(null);
      setOrig(null);
      return;
    }

    const img = new Image();
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = String(ev.target?.result || "");
      setPreview(dataUrl);
      img.src = dataUrl;
      img.onload = () => {
        setOrig({ w: img.width, h: img.height });
        // If not dimensions mode, pre-compute suggested dims
        if (settings.resizeMode !== "dimensions") {
          const dims = calcDims(img.width, img.height, settings);
          setSettings((s) => ({ ...s, width: dims.w, height: dims.h }));
        }
      };
      img.onerror = () => setError("Failed to load image for preview.");
    };
    reader.onerror = () => setError("Failed to read the selected file.");
    reader.readAsDataURL(f);
  }

  const aspect = useMemo(() => {
    if (!orig) return null;
    return orig.w / orig.h || 1;
  }, [orig]);

  // Auto update height when width changes with aspect lock in dimensions mode
  useEffect(() => {
    if (!orig) return;
    if (settings.resizeMode !== "dimensions") return;
    if (!settings.maintainAspectRatio) return;
    const ar = orig.w / orig.h;
    setSettings((s) => ({ ...s, height: Math.max(1, Math.round(s.width / ar)) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.width, settings.maintainAspectRatio, orig?.w, orig?.h, settings.resizeMode]);

  function clampQuality(q: number) {
    return Math.min(1, Math.max(0.1, q || 0.8));
  }

  function calcDims(w: number, h: number, s: ResizeSettings) {
    if (s.resizeMode === "percentage") {
      const f = Math.max(1, Math.min(100, s.percentage)) / 100;
      return { w: Math.max(1, Math.round(w * f)), h: Math.max(1, Math.round(h * f)) };
    }
    if (s.resizeMode === "maxSize") {
      const max = Math.max(100, Math.min(4096, s.maxSize));
      if (Math.max(w, h) <= max) return { w, h };
      if (w >= h) {
        const nh = Math.round((h * max) / w);
        return { w: max, h: Math.max(1, nh) };
      } else {
        const nw = Math.round((w * max) / h);
        return { w: Math.max(1, nw), h: max };
      }
    }
    // dimensions
    if (s.maintainAspectRatio) {
      const ar = w / h;
      return { w: s.width, h: Math.max(1, Math.round(s.width / ar)) };
    }
    return { w: s.width, h: s.height };
  }

  async function handleResize() {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const img = new Image();
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = String(e.target?.result || "");
        img.onload = () => {
          const { w, h } = calcDims(img.width, img.height, settings);
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            setError("Canvas context unavailable.");
            setLoading(false);
            return;
          }
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
          ctx.drawImage(img, 0, 0, w, h);

          if (resizedUrl) URL.revokeObjectURL(resizedUrl);

          // Decide output mime (keep original type unless it’s unsupported)
          const origMime = file.type || "image/png";
          const mime = /^image/(png|jpe?g|webp)$/i.test(origMime) ? origMime : "image/png";
          const quality = /jpe?g|webp/i.test(mime) ? clampQuality(settings.quality) : undefined;

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                setError("Failed to resize image. Please try again.");
                setLoading(false);
                return;
              }
              const url = URL.createObjectURL(blob);
              setResizedUrl(url);
              setLoading(false);
            },
            mime,
            quality
          );
        };
        img.onerror = () => {
          setError("Failed to load image. Please try a different file.");
          setLoading(false);
        };
      };
      reader.onerror = () => {
        setError("Failed to read the selected file.");
        setLoading(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError("Error resizing image: " + String(err));
      setLoading(false);
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">📐 Image Resizer</h2>
        <p className="text-sm text-slate-600">
          Resize your images by exact dimensions, percentage scale, or maximum size. High‑quality smoothing, aspect ratio control, and private in‑browser processing.
        </p>
      </div>

      <div className="space-y-6">
        {/* File Upload */}
        <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-indigo-400 transition">
          <label className="block text-sm font-medium text-slate-700 mb-2">Choose an image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-blue-100"
            aria-label="Upload image to resize"
          />
        </div>

        {/* Preview */}
        {preview && (
          <div className="mt-4">
            <p className="text-sm font-medium text-slate-700 mb-2">Original Image:</p>
            <img
              src={preview}
              alt="Selected image preview"
              className="max-w-full h-auto rounded-lg border shadow-sm"
              style={{ maxHeight: "300px" }}
              loading="lazy"
            />
            {orig && (
              <p className="text-sm text-slate-600 mt-2">
                Original size: {orig.w} × {orig.h} px
              </p>
            )}
          </div>
        )}

        {/* Resize Mode */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Resize Mode:</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {(["dimensions", "percentage", "maxSize"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setSettings((s) => ({ ...s, resizeMode: mode }))}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${settings.resizeMode === mode ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                aria-pressed={settings.resizeMode === mode}
              >
                {mode === "dimensions" ? "Exact Dimensions" : mode === "percentage" ? "Percentage Scale" : "Maximum Size"}
              </button>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="space-y-4">
          {settings.resizeMode === "dimensions" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Width (px)</label>
                <input
                  type="number"
                  min="1"
                  value={settings.width}
                  onChange={(e) => setSettings((s) => ({ ...s, width: Math.max(1, parseInt(e.target.value) || 1) }))}
                  className="w-full border rounded-lg px-3 py-2"
                  aria-label="Output width in pixels"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Height (px)</label>
                <input
                  type="number"
                  min="1"
                  value={settings.height}
                  onChange={(e) => setSettings((s) => ({ ...s, height: Math.max(1, parseInt(e.target.value) || 1) }))}
                  disabled={settings.maintainAspectRatio}
                  className="w-full border rounded-lg px-3 py-2 disabled:bg-slate-50 disabled:text-slate-500"
                  aria-label="Output height in pixels"
                />
              </div>
            </div>
          )}

          {settings.resizeMode === "percentage" && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Scale Percentage: {settings.percentage}%
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={settings.percentage}
                onChange={(e) => setSettings((s) => ({ ...s, percentage: parseInt(e.target.value) }))}
                className="w-full"
                aria-label="Scale percentage"
              />
            </div>
          )}

          {settings.resizeMode === "maxSize" && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Maximum Size (px): {settings.maxSize}
              </label>
              <input
                type="range"
                min="100"
                max="4096"
                step="100"
                value={settings.maxSize}
                onChange={(e) => setSettings((s) => ({ ...s, maxSize: parseInt(e.target.value) }))}
                className="w-full"
                aria-label="Maximum size in pixels"
              />
            </div>
          )}

          {/* Quality */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Output Quality: {Math.round(settings.quality * 100)}%
            </label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={settings.quality}
              onChange={(e) => setSettings((s) => ({ ...s, quality: parseFloat(e.target.value) }))}
              className="w-full"
              aria-label="Output quality"
            />
            <p className="text-xs text-slate-500 mt-1">
              Note: PNG is lossless and ignores the quality slider; JPEG/WebP honor it.
            </p>
          </div>

          {/* Aspect Ratio */}
          {settings.resizeMode === "dimensions" && (
            <div className="flex items-center gap-2">
              <input
                id="lock-ar"
                type="checkbox"
                checked={settings.maintainAspectRatio}
                onChange={(e) => setSettings((s) => ({ ...s, maintainAspectRatio: e.target.checked }))}
                className="rounded border-slate-300 text-indigo-600"
              />
              <label htmlFor="lock-ar" className="text-sm text-slate-700">
                Maintain aspect ratio
              </label>
            </div>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4" role="alert">
            <div className="flex items-start gap-3">
              <span className="text-red-500 text-xl" aria-hidden="true">⚠️</span>
              <div>
                <p className="font-semibold text-red-800">Error</p>
                <p className="text-sm text-red-600">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <button
          onClick={handleResize}
          disabled={!file || loading}
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 
            disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Resizing...
            </div>
          ) : (
            "Resize Image"
          )}
        </button>

        {/* Result */}
        {resizedUrl && (
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-slate-700 mb-2">Resized Image:</p>
              <img
                src={resizedUrl}
                alt="Resized preview"
                className="max-w-full h-auto rounded-lg border shadow-sm"
                style={{ maxHeight: "300px" }}
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <a
                href={resizedUrl}
                download={`resized-${file?.name || "image"}`}
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 
                  rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
              >
                <span aria-hidden="true">📥</span>
                <span>Download Resized Image</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
