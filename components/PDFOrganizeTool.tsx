// components/PDFOrganizeTool.tsx
"use client";
import { useEffect, useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function PDFOrganizeTool() {
  const [file, setFile] = useState<File | null>(null);
  const [organizedUrl, setOrganizedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [pageOrder, setPageOrder] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Blob URL cleanup
  useEffect(() => {
    return () => {
      if (organizedUrl) URL.revokeObjectURL(organizedUrl);
    };
  }, [organizedUrl]);

  function parseOrder(input: string, totalPages: number): number[] {
    const parts = input.split(",").map((p) => p.trim()).filter(Boolean);
    const indices: number[] = [];
    for (const p of parts) {
      if (p.includes("-")) {
        const [a, b] = p.split("-").map((n) => parseInt(n.trim(), 10));
        if (Number.isFinite(a) && Number.isFinite(b)) {
          const start = Math.max(1, Math.min(a, b));
          const end = Math.min(totalPages, Math.max(a, b));
          for (let i = start; i <= end; i++) indices.push(i - 1);
        }
      } else {
        const n = parseInt(p, 10);
        if (Number.isFinite(n) && n >= 1 && n <= totalPages) indices.push(n - 1);
      }
    }
    return indices;
  }

  async function handleOrganize() {
    if (!file) return;
    const input = pageOrder.trim();
    if (!input) {
      setError("Please enter page order (e.g., 1,3,2 or 1-3,5,7-9).");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);
      const totalPages = pdfDoc.getPageCount();

      const pageIndices = parseOrder(input, totalPages);
      if (!pageIndices.length) {
        setError("Invalid page order. Check numbers/ranges within total pages.");
        setLoading(false);
        return;
      }

      const newPdf = await PDFDocument.create();
      const copied = await newPdf.copyPages(pdfDoc, pageIndices);
      copied.forEach((p) => newPdf.addPage(p));

      const organizedBytes = await newPdf.save();
      if (organizedUrl) URL.revokeObjectURL(organizedUrl);
      const blob = new Blob([organizedBytes as unknown as BlobPart], { type: "application/pdf" });
      setOrganizedUrl(URL.createObjectURL(blob));
    } catch (err) {
      setError("Error organizing PDF: " + String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">📑 Organize PDF Pages</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">PDF File</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => {
            const f = e.target.files?.[0] || null;
            setFile(f);
            setOrganizedUrl(null);
            setError(null);
          }}
          className="block w-full border rounded px-3 py-2"
          aria-label="Select PDF file"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Page Order</label>
        <input
          type="text"
          value={pageOrder}
          onChange={(e) => setPageOrder(e.target.value)}
          placeholder="e.g., 1,3,2 or 1-3,5,7-9"
          className="border rounded px-3 py-2 w-full"
          aria-label="Enter page order"
        />
        <p className="text-xs text-slate-500 mt-1">
          Numbers ko comma se alag karein; ranges ke liye dash ka use karein.
        </p>
      </div>

      <button
        onClick={handleOrganize}
        disabled={!file || !pageOrder.trim() || loading}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? "Organizing..." : "Organize Pages"}
      </button>

      {error && (
        <div className="mt-4 bg-red-50 border border-red-200 rounded p-3 text-sm text-red-700" role="alert">
          {error}
        </div>
      )}

      {organizedUrl && (
        <div className="mt-6">
          <a
            href={organizedUrl}
            download="organized.pdf"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            📥 Download Organized PDF
          </a>
        </div>
      )}
    </section>
  );
}
