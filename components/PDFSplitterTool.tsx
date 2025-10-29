"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

const MAX_MB = 25; // adjust as needed

export default function PDFSplitterTool() {
  const [file, setFile] = useState<File | null>(null);
  const [splitUrls, setSplitUrls] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  function onFileChange(f: File | null) {
    // Cleanup previous URLs
    if (splitUrls.length) {
      splitUrls.forEach((u) => URL.revokeObjectURL(u));
      setSplitUrls([]);
    }
    setError(null);
    setProgress(null);

    if (!f) {
      setFile(null);
      return;
    }
    const isPdf = f.type === "application/pdf";
    const sizeOk = f.size <= MAX_MB * 1024 * 1024;
    if (!isPdf) {
      setError("Please select a valid PDF file.");
      return;
    }
    if (!sizeOk) {
      setError(`File too large. Max ${MAX_MB} MB allowed.`);
      return;
    }
    setFile(f);
  }

  async function handleSplit() {
    try {
      setError(null);
      if (!file) return;
      setBusy(true);

      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);
      const total = pdfDoc.getPageCount();
      setProgress({ done: 0, total });

      const urls: string[] = [];
      for (let i = 0; i < total; i++) {
        const out = await PDFDocument.create();
        const [page] = await out.copyPages(pdfDoc, [i]);
        out.addPage(page);
        const newBytes = await out.save(); // Uint8Array
        const blob = new Blob([newBytes], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        urls.push(url);
        setProgress({ done: i + 1, total });
      }

      setSplitUrls(urls);
    } catch (e) {
      setError("Failed to split PDF. Try a different file.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">📄 PDF Splitter</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => onFileChange(e.target.files?.[0] || null)}
        className="mb-4 block w-full border rounded px-3 py-2"
        aria-label="Upload PDF to split"
      />

      <button
        onClick={handleSplit}
        disabled={!file || busy}
        className="bg-blue-600 disabled:bg-blue-300 text-white px-4 py-2 rounded hover:bg-blue-700"
        aria-disabled={!file || busy}
      >
        {busy ? "Splitting..." : "Split PDF"}
      </button>

      {progress && (
        <p className="mt-2 text-sm text-slate-600">
          Progress: {progress.done}/{progress.total}
        </p>
      )}

      {error && <p className="mt-3 text-red-600 text-sm">{error}</p>}

      {splitUrls.length > 0 && (
        <div className="mt-6 space-y-2">
          <h3 className="font-semibold">Download Split Pages:</h3>
          {splitUrls.map((url, i) => (
            <a
              key={i}
              href={url}
              download={`page-${i + 1}.pdf`}
              className="text-green-600 underline block"
            >
              📥 Page {i + 1}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
