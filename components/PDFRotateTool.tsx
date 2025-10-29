// components/PDFRotateTool.tsx
"use client";
import { useEffect, useState } from "react";
import { PDFDocument, degrees } from "pdf-lib";

export default function PDFRotateTool() {
  const [file, setFile] = useState<File | null>(null);
  const [rotatedUrl, setRotatedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [rotation, setRotation] = useState<number>(90);
  const [error, setError] = useState<string | null>(null);

  // Blob URL cleanup on unmount or when replaced
  useEffect(() => {
    return () => {
      if (rotatedUrl) URL.revokeObjectURL(rotatedUrl);
    };
  }, [rotatedUrl]);

  async function handleRotate() {
    if (!file) {
      setError("Please select a PDF.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);

      const pages = pdfDoc.getPages();
      pages.forEach((page) => {
        // pdf-lib rotation multiples of 90° support karta hai
        page.setRotation(degrees(rotation));
      });

      const rotatedBytes = await pdfDoc.save();
      if (rotatedUrl) URL.revokeObjectURL(rotatedUrl);
      const blob = new Blob([rotatedBytes as unknown as BlobPart], { type: "application/pdf" });
      setRotatedUrl(URL.createObjectURL(blob));
    } catch (e) {
      setError("Error rotating PDF: " + String(e));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">🔄 Rotate PDF</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">PDF File</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => {
            setFile(e.target.files?.[0] || null);
            setRotatedUrl(null);
            setError(null);
          }}
          className="block w-full border rounded px-3 py-2"
          aria-label="Select PDF to rotate"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Rotation Angle</label>
        <select
          value={rotation}
          onChange={(e) => setRotation(parseInt(e.target.value, 10))}
          className="border rounded px-3 py-2"
          aria-label="Select rotation angle"
        >
          <option value={90}>90° Clockwise</option>
          <option value={180}>180°</option>
          <option value={270}>270° (90° Counter‑clockwise)</option>
        </select>
      </div>

      <button
        onClick={handleRotate}
        disabled={!file || loading}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? "Rotating..." : "Rotate PDF"}
      </button>

      {error && (
        <div className="mt-4 bg-red-50 border border-red-200 rounded p-3 text-sm text-red-700" role="alert">
          {error}
        </div>
      )}

      {rotatedUrl && (
        <div className="mt-6">
          <a
            href={rotatedUrl}
            download={(file?.name?.replace(/.pdf$/i, "") || "rotated") + ".pdf"}
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            📥 Download Rotated PDF
          </a>
        </div>
      )}
    </section>
  );
}
