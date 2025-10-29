"use client";

import { useEffect, useRef, useState } from "react";

const MAX_MB = 25; // adjust if needed
const WORKER_SRC = "https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.js";

export default function PDFToJPGTool() {
  const [file, setFile] = useState<File | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const currentUrls = useRef<string[]>([]);

  useEffect(() => {
    return () => {
      // cleanup on unmount
      currentUrls.current.forEach((u) => URL.revokeObjectURL(u));
    };
  }, []);

  function onFileChange(f: File | null) {
    // cleanup prev
    images.forEach((u) => URL.revokeObjectURL(u));
    currentUrls.current = [];
    setImages([]);
    setError(null);
    setProgress(null);

    if (!f) {
      setFile(null);
      return;
    }
    if (f.type !== "application/pdf") {
      setError("Please select a valid PDF file.");
      return;
    }
    if (f.size > MAX_MB * 1024 * 1024) {
      setError(`File too large. Max ${MAX_MB} MB allowed.`);
      return;
    }
    setFile(f);
  }

  async function handleConvert() {
    if (!file) return;
    setLoading(true);
    setError(null);
    setProgress(null);

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const typedArray = new Uint8Array(reader.result as ArrayBuffer);
          const pdfjsLib: any = await import("pdfjs-dist");
          pdfjsLib.GlobalWorkerOptions = pdfjsLib.GlobalWorkerOptions || {};
          pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER_SRC;

          const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
          const total = Math.min(pdf.numPages, 5); // hard cap for perf
          setProgress({ done: 0, total });

          const imgs: string[] = [];
          for (let i = 1; i <= total; i++) {
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 2 });

            const canvas = document.createElement("canvas");
            canvas.width = Math.ceil(viewport.width);
            canvas.height = Math.ceil(viewport.height);
            const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

            const renderContext = { canvasContext: ctx, viewport };
            await page.render(renderContext).promise;

            const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
            imgs.push(dataUrl);
            setProgress({ done: i, total });
          }

          setImages(imgs);
          currentUrls.current = imgs; // for unified cleanup (even though these are data URLs)
        } catch (e) {
          console.error(e);
          setError("Failed to convert PDF to JPG. Try a different file.");
        } finally {
          setLoading(false);
        }
      };
      reader.readAsArrayBuffer(file);
    } catch (err) {
      console.error(err);
      setError("Failed to read file.");
      setLoading(false);
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">🖼️ PDF to JPG</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => onFileChange(e.target.files?.[0] || null)}
        className="mb-4 block w-full border rounded px-3 py-2"
        aria-label="Upload PDF to convert to JPG"
      />

      <button
        onClick={handleConvert}
        disabled={!file || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Converting..." : "Convert to JPG"}
      </button>

      {progress && (
        <p className="mt-2 text-sm text-slate-600">
          Progress: {progress.done}/{progress.total}
        </p>
      )}

      {error && <p className="mt-3 text-red-600 text-sm">{error}</p>}

      {images.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((src, i) => (
            <div key={i} className="bg-gray-50 p-2 rounded">
              <img
                src={src}
                alt={`page-${i + 1}`}
                className="w-full h-auto rounded"
                loading="lazy"
                decoding="async"
              />
              <a
                href={src}
                download={`page-${i + 1}.jpg`}
                className="text-green-600 underline block mt-2"
              >
                📥 Download Page {i + 1}
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
