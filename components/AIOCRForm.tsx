// components/AIOCRForm.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { createWorker, type Worker } from "tesseract.js";

// pdf.js lazy import and typed worker config (no ts-expect-error)
const loadPdfJs = async () => {
  const pdfjsLib = await import("pdfjs-dist");
  (pdfjsLib as any).GlobalWorkerOptions = (pdfjsLib as any).GlobalWorkerOptions || {};
  (pdfjsLib as any).GlobalWorkerOptions.workerSrc =
    "https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.js";
  return pdfjsLib;
};

interface LoggerMessage { status: string; progress?: number; }

export default function AIOCRForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [progress, setProgress] = useState<string>("");
  const workerRef = useRef<Worker | null>(null);

  // Tesseract worker init
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const worker = await createWorker({
          logger: (m: LoggerMessage) => {
            if (cancelled) return;
            setProgress(
              m.status === "recognizing text"
                ? `Recognizing text... ${Math.floor((m.progress || 0) * 100)}%`
                : m.status
            );
          },
        });
        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        if (!cancelled) workerRef.current = worker;
        else await worker.terminate();
      } catch {
        setError("Failed to initialize OCR engine. Please reload and try again.");
      }
    })();
    return () => {
      cancelled = true;
      workerRef.current?.terminate();
      workerRef.current = null;
    };
  }, []);

  // Image -> dataURL (HiDPI-safe)
  async function processImage(file: File): Promise<string> {
    const img = await createImageBitmap(file);
    const dpr = window.devicePixelRatio || 1;
    const canvas = document.createElement("canvas");
    canvas.width = Math.floor(img.width * dpr);
    canvas.height = Math.floor(img.height * dpr);
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas failed");
    ctx.scale(dpr, dpr);
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png");
  }

  // PDF (first page) -> dataURL via pdf.js (typed render params)
  async function processPDF(file: File): Promise<string> {
    const pdfjsLib = await loadPdfJs();
    const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
    const page = await pdf.getPage(1);

    const scale = 2;
    const viewport = page.getViewport({ scale });
    const dpr = window.devicePixelRatio || 1;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas failed");

    canvas.width = Math.floor(viewport.width * dpr);
    canvas.height = Math.floor(viewport.height * dpr);
    canvas.style.width = `${Math.floor(viewport.width)}px`;
    canvas.style.height = `${Math.floor(viewport.height)}px`;

    ctx.scale(dpr, dpr);

    await page.render({ canvasContext: ctx, canvas, viewport } as any).promise;

    return canvas.toDataURL("image/png");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setResult(null);

    const worker = workerRef.current;
    if (!worker) { setError("OCR engine is not ready. Please wait."); return; }

    const file = (e.currentTarget.elements.namedItem("file") as HTMLInputElement)?.files?.[0];
    if (!file) { setError("Please select a file"); return; }

    try {
      setLoading(true);
      setProgress("Preparing file...");
      const imageData = file.type === "application/pdf" ? await processPDF(file) : await processImage(file);
      setProgress("Starting OCR...");
      const { data: { text } } = await worker.recognize(imageData);
      setResult(text);
    } catch (err: any) {
      setError("Failed to process file: " + (err?.message || String(err)));
    } finally {
      setLoading(false);
      setProgress("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Decorative hero (inline SVG + gradients, no external image) */}
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-fuchsia-500/15 to-pink-500/15" />
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-fuchsia-400 blur-3xl opacity-20" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-400 blur-3xl opacity-20" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="AI OCR online tool converting PDFs and images to text in browser"
        >
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
            <linearGradient id="grad-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="grad-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="none" opacity="0.5" />
          <rect width="100%" height="100%" fill="url(#dot-grid)" className="text-indigo-400/20" />
          <path
            d="M120,220 C180,140 320,140 380,220 C440,300 620,300 680,220 C720,170 700,100 640,80 C560,50 480,90 420,120 C360,150 300,160 240,140 C160,110 100,140 80,180 C60,220 80,260 120,220 Z"
            fill="url(#grad-fill)"
            stroke="url(#grad-stroke)"
            strokeWidth="2"
          />
        </svg>
        <div className="relative p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-900">🤖 AI OCR — Free, Private & In‑Browser</h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            Convert scanned PDFs and images to editable text with a fast, accurate AI OCR that runs on your device—no uploads.
          </p>
          <ul className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-700">
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">No signup</li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">In‑browser processing</li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">PDF • JPG • PNG</li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">Free forever</li>
          </ul>
        </div>
      </div>

      {/* Uploader */}
      <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-indigo-400 transition">
        <input
          type="file"
          name="file"
          accept="application/pdf,image/*"
          className="block w-full text-sm"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          disabled={loading || !workerRef.current}
          aria-label="Upload PDF or image for AI OCR"
        />
        <p className="mt-2 text-xs text-slate-500">
          {fileName ? `Selected: ${fileName}` : "Upload a PDF or image (JPG, PNG) to extract text"}
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
        disabled={loading || !workerRef.current}
        aria-busy={loading}
      >
        {loading ? (progress || "Processing...") : "Extract Text"}
      </button>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4" role="alert">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {result && (
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-green-800 flex items-center gap-2">
              <span>✅</span> Extracted Text
            </h3>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(result)}
              className="text-sm bg-white px-3 py-1 rounded-lg border border-green-300 hover:bg-green-50 transition"
            >
              📋 Copy
            </button>
          </div>
          <div className="bg-white rounded-lg p-4 max-h-96 overflow-y-auto">
            <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">{result}</pre>
          </div>
        </section>
      )}
    </form>
  );
}
