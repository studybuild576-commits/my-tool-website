"use client";

import { useState, useEffect, useRef } from "react";
import { createWorker, type Worker } from "tesseract.js";
import {
  Upload,
  FileText,
  Loader2,
  Clipboard,
  Download,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

// Lazy load pdf.js
const loadPdfJs = async () => {
  const pdfjsLib = await import("pdfjs-dist");
  (pdfjsLib as any).GlobalWorkerOptions.workerSrc =
    "https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.js";
  return pdfjsLib;
};

interface LoggerMessage {
  status: string;
  progress?: number;
}

export default function AIOCRForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("");
  const workerRef = useRef<Worker | null>(null);

  // Worker init
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const worker = await createWorker({
          logger: (m: LoggerMessage) => {
            if (cancelled) return;
            if (m.status === "recognizing text") {
              setProgress(Math.floor((m.progress || 0) * 100));
              setStatusText(`Recognizing text... ${Math.floor((m.progress || 0) * 100)}%`);
            } else setStatusText(m.status);
          },
        });
        await worker.loadLanguage("eng");
        await worker.initialize("eng");
        if (!cancelled) workerRef.current = worker;
      } catch {
        setError("❌ Failed to initialize OCR engine. Please reload.");
      }
    })();
    return () => {
      cancelled = true;
      workerRef.current?.terminate();
    };
  }, []);

  // Image to base64
  async function processImage(file: File): Promise<string> {
    const img = await createImageBitmap(file);
    const dpr = window.devicePixelRatio || 1;
    const canvas = document.createElement("canvas");
    canvas.width = img.width * dpr;
    canvas.height = img.height * dpr;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas error");
    ctx.scale(dpr, dpr);
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png");
  }

  // ✅ FIXED: PDF to image
  async function processPDF(file: File): Promise<string> {
    const pdfjsLib = await loadPdfJs();
    const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 2 });
    const dpr = window.devicePixelRatio || 1;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context not found");

    canvas.width = viewport.width * dpr;
    canvas.height = viewport.height * dpr;
    ctx.scale(dpr, dpr);

    // ✅ Correct render parameters
    await page.render({
      canvasContext: ctx,
      canvas,
      viewport,
    }).promise;

    return canvas.toDataURL("image/png");
  }

  // Handle form
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const worker = workerRef.current;
    const file = (e.currentTarget.elements.namedItem("file") as HTMLInputElement)?.files?.[0];
    if (!worker) return setError("Engine not ready. Please wait.");
    if (!file) return setError("Please choose a file first.");

    try {
      setLoading(true);
      setError(null);
      setProgress(0);
      setStatusText("Preparing file...");
      const dataUrl =
        file.type === "application/pdf" ? await processPDF(file) : await processImage(file);
      const { data } = await worker.recognize(dataUrl);
      setResult(data.text);
    } catch (err: any) {
      setError("Failed to process: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  function downloadText() {
    if (!result) return;
    const blob = new Blob([result], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ocr-text.txt";
    link.click();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Upload box */}
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-400 transition-all">
        <Upload className="w-8 h-8 mx-auto mb-2 text-indigo-500" />
        <input
          type="file"
          name="file"
          accept="application/pdf,image/*"
          className="block w-full text-sm text-gray-700 cursor-pointer"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          disabled={loading}
        />
        <p className="mt-1 text-xs text-gray-500">
          {fileName ? `📄 ${fileName}` : "Choose a PDF or image (JPG, PNG)"}
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <FileText className="w-5 h-5" />}
        {loading ? statusText || "Processing..." : "Extract Text"}
      </button>

      {/* Progress bar */}
      {loading && (
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
          <div
            className="bg-indigo-500 h-2 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2 text-red-700 text-sm">
          <AlertTriangle className="w-4 h-4" /> {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-300 rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-green-800 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Extracted Text
            </h3>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(result)}
                className="text-sm flex items-center gap-1 bg-white px-3 py-1 rounded-lg border hover:bg-green-50"
              >
                <Clipboard className="w-4 h-4" /> Copy
              </button>
              <button
                type="button"
                onClick={downloadText}
                className="text-sm flex items-center gap-1 bg-white px-3 py-1 rounded-lg border hover:bg-green-50"
              >
                <Download className="w-4 h-4" /> Download
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 max-h-96 overflow-y-auto font-mono text-sm text-gray-700 whitespace-pre-wrap">
            {result}
          </div>
        </section>
      )}
    </form>
  );
}

