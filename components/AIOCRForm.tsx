// components/AIOCRForm.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { createWorker, type Worker } from "tesseract.js";

const loadPdfJs = async () => {
  const pdfjsLib = await import("pdfjs-dist");
  // @ts-expect-error runtime global
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.js";
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

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const worker = await createWorker({
          logger: (m: LoggerMessage) => {
            if (cancelled) return;
            setProgress(m.status === "recognizing text" ? `Recognizing text... ${Math.floor((m.progress || 0) * 100)}%` : m.status);
          },
        });
        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        if (!cancelled) workerRef.current = worker; else await worker.terminate();
      } catch (e) {
        setError("Failed to initialize OCR engine. Please reload and try again.");
      }
    })();
    return () => { cancelled = true; workerRef.current?.terminate(); workerRef.current = null; };
  }, []);

  async function processImage(file: File): Promise<string> {
    const img = await createImageBitmap(file);
    const dpr = window.devicePixelRatio || 1;
    const canvas = document.createElement("canvas");
    canvas.width = img.width * dpr; canvas.height = img.height * dpr;
    const ctx = canvas.getContext("2d"); if (!ctx) throw new Error("Canvas failed");
    ctx.scale(dpr, dpr); ctx.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png");
  }

  async function processPDF(file: File): Promise<string> {
    const pdfjsLib = await loadPdfJs();
    const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 2 });
    const dpr = window.devicePixelRatio || 1;
    const canvas = document.createElement("canvas");
    canvas.width = viewport.width * dpr; canvas.height = viewport.height * dpr;
    const ctx = canvas.getContext("2d"); if (!ctx) throw new Error("Canvas failed");
    ctx.scale(dpr, dpr);
    await page.render({ canvasContext: ctx, viewport }).promise;
    return canvas.toDataURL("image/png");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null); setResult(null);
    const worker = workerRef.current;
    if (!worker) { setError("OCR engine is not ready. Please wait."); return; }
    const file = (e.currentTarget.elements.namedItem("file") as HTMLInputElement)?.files?.[0];
    if (!file) { setError("Please select a file"); return; }

    try {
      setLoading(true); setProgress("Preparing file...");
      const imageData = file.type === "application/pdf" ? await processPDF(file) : await processImage(file);
      setProgress("Starting OCR...");
      const { data: { text } } = await worker.recognize(imageData);
      setResult(text);
    } catch (err: any) {
      setError("Failed to process file: " + (err?.message || String(err)));
    } finally {
      setLoading(false); setProgress("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold text-indigo-900 mb-2">🤖 Browser‑Based AI OCR</h2>
        <p className="text-sm text-slate-600">Extract text from images or PDFs using advanced OCR. Everything runs in your browser—no uploads.</p>
      </div>

      <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-indigo-400 transition">
        <input type="file" name="file" accept="application/pdf,image/*" className="block w-full text-sm" onChange={(e)=>setFileName(e.target.files?.[0]?.name||"")} disabled={loading || !workerRef.current} />
        <p className="mt-2 text-xs text-slate-500">{fileName ? `Selected: ${fileName}` : "Upload a PDF or image (JPG, PNG)"}</p>
      </div>

      <button type="submit" className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold disabled:opacity-50" disabled={loading || !workerRef.current} aria-busy={loading}>
        {loading ? (progress || "Processing...") : "Extract Text"}
      </button>

      {error && <div className="bg-red-50 border border-red-200 rounded-xl p-4"><p className="text-sm text-red-600">{error}</p></div>}

      {result && (
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
          <h3 className="font-semibold text-green-800 mb-2">Extracted Text</h3>
          <div className="bg-white rounded-lg p-4 max-h-96 overflow-y-auto">
            <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">{result}</pre>
          </div>
        </section>
      )}
    </form>
  );
}
