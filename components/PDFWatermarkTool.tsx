"use client";
import { useState } from "react";
import { PDFDocument, rgb } from "pdf-lib";

export default function PDFWatermarkTool() {
  const [file, setFile] = useState<File | null>(null);
  const [watermarkedUrl, setWatermarkedUrl] = useState<string | null>(null);

  async function handleWatermark() {
    if (!file) return;
    const bytes = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(bytes);
    const pages = pdfDoc.getPages();

    pages.forEach((page) => {
      page.drawText("Confidential", {
        x: 50,
        y: 50,
        size: 24,
        color: rgb(0.8, 0.1, 0.1),
        opacity: 0.5,
      });
    });

    const newBytes = await pdfDoc.save();
    const blob = new Blob([newBytes], { type: "application/pdf" });
    setWatermarkedUrl(URL.createObjectURL(blob));
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">💧 PDF Watermark</h2>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4 block w-full border rounded px-3 py-2"
      />
      <button
        onClick={handleWatermark}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Watermark
      </button>

      {watermarkedUrl && (
        <div className="mt-6">
          <a
            href={watermarkedUrl}
            download="watermarked.pdf"
            className="text-green-600 underline"
          >
            📥 Download Watermarked PDF
          </a>
        </div>
      )}
    </section>
  );
                                 }
