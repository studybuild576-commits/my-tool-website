// components/PDFMergeTool.tsx
"use client";
import { useEffect, useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function PDFMergeTool() {
  const [files, setFiles] = useState<File[]>([]);
  const [mergedUrl, setMergedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memory cleanup for blob URL
  useEffect(() => {
    return () => {
      if (mergedUrl) URL.revokeObjectURL(mergedUrl);
    };
  }, [mergedUrl]);

  function handleSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const list = Array.from(e.target.files || []);
    // sirf PDFs allow karo
    const onlyPdf = list.filter((f) => f.type === "application/pdf");
    if (onlyPdf.length !== list.length) {
      setError("Sirf PDF files allow hain.");
    } else {
      setError(null);
    }
    setFiles(onlyPdf);
    if (mergedUrl) {
      URL.revokeObjectURL(mergedUrl);
      setMergedUrl(null);
    }
  }

  async function handleMerge() {
    if (!files.length) return;
    setLoading(true);
    setError(null);
    try {
      const mergedPdf = await PDFDocument.create();

      // Optional: metadata
      mergedPdf.setTitle("Merged PDF — PDF Maker AI");
      mergedPdf.setAuthor("PDF Maker AI");

      for (const file of files) {
        const bytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(bytes);
        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        pages.forEach((p) => mergedPdf.addPage(p));
      }
      const mergedBytes = await mergedPdf.save();

      // Blob create + old URL cleanup
      if (mergedUrl) URL.revokeObjectURL(mergedUrl);
      const blob = new Blob([mergedBytes as unknown as BlobPart], { type: "application/pdf" });
      setMergedUrl(URL.createObjectURL(blob));
    } catch (err) {
      setError("Merge fail hua: " + String(err));
    } finally {
      setLoading(false);
    }
  }

  function moveFile(from: number, to: number) {
    setFiles((arr) => {
      const next = [...arr];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      return next;
    });
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">🔗 Merge PDF</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-2">PDF Files select karein (order maintain hoga)</label>
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={handleSelect}
          className="block w-full border rounded px-3 py-2"
          aria-label="Select PDF files"
        />
      </div>

      {files.length > 0 && (
        <div className="mb-4">
          <p className="text-sm text-slate-600 mb-2">Order change karne ke liye drag & drop karein:</p>
          <ol className="space-y-2">
            {files.map((f, i) => (
              <li
                key={i}
                className="flex items-center justify-between border rounded px-3 py-2 bg-slate-50"
                draggable
                onDragStart={(e) => e.dataTransfer.setData("text/plain", String(i))}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const from = parseInt(e.dataTransfer.getData("text/plain"), 10);
                  moveFile(from, i);
                }}
              >
                <span className="truncate">{f.name}</span>
                <span className="text-xs text-slate-500">Page order: {i + 1}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <button
        onClick={handleMerge}
        disabled={!files.length || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Merging..." : "Merge PDFs"}
      </button>

      {error && (
        <div className="mt-4 bg-red-50 border border-red-200 rounded p-3 text-sm text-red-700" role="alert">
          {error}
        </div>
      )}

      {mergedUrl && (
        <div className="mt-6">
          <a
            href={mergedUrl}
            download="merged.pdf"
            className="inline-flex items-center gap-2 text-green-600 underline"
          >
            <span aria-hidden="true">📥</span>
            <span>Download Merged PDF</span>
          </a>
        </div>
      )}
    </section>
  );
}
