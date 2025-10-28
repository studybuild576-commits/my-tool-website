// components/ImageConverterTool.tsx
"use client";
import { useEffect, useRef, useState } from "react";

interface ConversionSettings {
  format: "png" | "jpeg" | "webp";
  quality: number;            // 0.1..1 for jpeg/webp
  maxWidth?: number;
  maxHeight?: number;
  maintainAspectRatio: boolean;
}

export default function ImageConverterTool() {
  const [file, setFile] = useState<File | null>(null);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [settings, setSettings] = useState<ConversionSettings>({
    format: "png",
    quality: 0.8,
    maintainAspectRatio: true,
  });

  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // cleanup object URLs on unmount
    return () => {
      if (convertedUrl) URL.revokeObjectURL(convertedUrl);
    };
  }, [convertedUrl]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] || null;
    setFile(f);
    setConvertedUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    setError(null);

    if (f) {
      const reader = new FileReader();
      reader.onload = (ev) => setPreview(String(ev.target?.result || ""));
      reader.readAsDataURL(f);
    } else {
      setPreview(null);
    }
  }

  function getOrientedCanvas(img: HTMLImageElement) {
    // Basic orientation safe path. For full EXIF handling, integrate exif-js if needed.
    // Here we just return a canvas with image drawn as-is.
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0);
    return canvas;
  }

  function applyResize(canvas: HTMLCanvasElement) {
    const { maxWidth, maxHeight, maintainAspectRatio } = settings;
    let w = canvas.width;
    let h = canvas.height;

    if (maxWidth || maxHeight) {
      const ar = w / h;

      if (maxWidth && w > maxWidth) {
        w = maxWidth;
        h = maintainAspectRatio ? Math.round(w / ar) : h;
      }
      if (maxHeight && h > maxHeight) {
        h = maxHeight;
        w = maintainAspectRatio ? Math.round(h * ar) : w;
      }
    }

    if (w === canvas.width && h === canvas.height) return canvas;

    const out = document.createElement("canvas");
    out.width = w;
    out.height = h;
    const octx = out.getContext("2d")!;
    octx.imageSmoothingEnabled = true;
    octx.imageSmoothingQuality = "high";
    octx.drawImage(canvas, 0, 0, w, h);
    return out;
  }

  async function handleConvert() {
    if (!file) return;
    setLoading(true);
    setError(null);

    try {
      const img = new Image();
      img.crossOrigin = "anonymous"; // allow CORS data URLs and local blobs
      img.onload = () => {
        imgRef.current = img;
        // Orientation/base draw
        const base = getOrientedCanvas(img);
        // Resize if needed
        const outCanvas = applyResize(base);

        // Quality guard: PNG ignores quality; JPEG/WEBP use 0.1..1
        const mime = `image/${settings.format}`;
        const quality =
          settings.format === "png"
            ? undefined
            : Math.min(1, Math.max(0.1, settings.quality || 0.8));

        outCanvas.toBlob(
          (blob) => {
            if (!blob) {
              setError("Failed to convert image. Please try again.");
              setLoading(false);
              return;
            }
            // cleanup previous URL
            if (convertedUrl) URL.revokeObjectURL(convertedUrl);
            const url = URL.createObjectURL(blob);
            setConvertedUrl(url);
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

      // Read file as data URL
      const reader = new FileReader();
      reader.onload = (e) => (img.src = String(e.target?.result || ""));
      reader.onerror = () => {
        setError("Failed to read the selected file.");
        setLoading(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError("Error converting image: " + String(err));
      setLoading(false);
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">🖼️ Image Converter</h2>
        <p className="text-sm text-slate-600">
          Convert your images between PNG, JPEG, and WebP with quality and size controls. In‑browser and private.
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
              hover:file:bg-indigo-100"
            aria-label="Upload image to convert"
          />
        </div>

        {/* Preview */}
        {preview && (
          <div className="mt-4">
            <p className="text-sm font-medium text-slate-700 mb-2">Preview:</p>
            <img
              src={preview}
              alt="Selected image preview"
              className="max-w-full h-auto rounded-lg border shadow-sm"
              style={{ maxHeight: "300px" }}
              loading="lazy"
            />
          </div>
        )}

        {/* Settings */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Output Format</label>
            <select
              value={settings.format}
              onChange={(e) => setSettings((s) => ({ ...s, format: e.target.value as ConversionSettings["format"] }))}
              className="w-full border rounded-lg px-3 py-2 bg-white"
              aria-label="Select output image format"
            >
              <option value="png">PNG</option>
              <option value="jpeg">JPEG</option>
              <option value="webp">WebP</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Quality: {settings.format === "png" ? "N/A" : `${Math.round(settings.quality * 100)}%`}
            </label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={settings.quality}
              onChange={(e) => setSettings((s) => ({ ...s, quality: parseFloat(e.target.value) }))}
              className="w-full"
              disabled={settings.format === "png"}
              aria-label="Output quality"
            />
            {settings.format === "png" && (
              <p className="text-xs text-slate-500 mt-1">PNG is lossless; quality slider is disabled.</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Max Width (optional)</label>
            <input
              type="number"
              inputMode="numeric"
              min={1}
              value={settings.maxWidth || ""}
              onChange={(e) =>
                setSettings((s) => ({ ...s, maxWidth: e.target.value ? parseInt(e.target.value) : undefined }))
              }
              placeholder="Original width"
              className="w-full border rounded-lg px-3 py-2"
              aria-label="Resize maximum width"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Max Height (optional)</label>
            <input
              type="number"
              inputMode="numeric"
              min={1}
              value={settings.maxHeight || ""}
              onChange={(e) =>
                setSettings((s) => ({ ...s, maxHeight: e.target.value ? parseInt(e.target.value) : undefined }))
              }
              placeholder="Original height"
              className="w-full border rounded-lg px-3 py-2"
              aria-label="Resize maximum height"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            id="keep-ar"
            type="checkbox"
            checked={settings.maintainAspectRatio}
            onChange={(e) => setSettings((s) => ({ ...s, maintainAspectRatio: e.target.checked }))}
            className="rounded border-slate-300 text-indigo-600"
          />
          <label htmlFor="keep-ar" className="text-sm text-slate-700">
            Maintain aspect ratio when resizing
          </label>
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

        {/* Convert */}
        <button
          onClick={handleConvert}
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
              Converting...
            </div>
          ) : (
            "Convert Image"
          )}
        </button>

        {/* Download */}
        {convertedUrl && (
          <div className="mt-6 text-center">
            <a
              href={convertedUrl}
              download={`converted.${settings.format}`}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 
                rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
            >
              <span aria-hidden="true">📥</span>
              <span>Download {settings.format.toUpperCase()}</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
