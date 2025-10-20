"use client";
import { useState } from "react";
import { PDFDocument, StandardFonts } from "pdf-lib";

export default function HTMLToPDFTool() {
  const [html, setHtml] = useState("");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  async function handleConvert() {
    const text = html.replace(/<[^>]+>/g, ""); // strip tags
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 12;

    page.drawText(text, {
      x: 50,
      y: 750,
      size: fontSize,
      font,
      lineHeight: 16,
      maxWidth: 500,
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    setPdfUrl(URL.createObjectURL(blob));
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">🌐 HTML to PDF</h2>
      <textarea
        rows={8}
        value={html}
        onChange={(e) => setHtml(e.target.value)}
        placeholder="<h1>Hello</h1><p>This is a paragraph</p>"
        className="w-full border rounded px-3 py-2 mb-4"
      />
      <button
        onClick={handleConvert}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Convert to PDF
      </button>

      {pdfUrl && (
        <div className="mt-6">
          <a
            href={pdfUrl}
            download="html.pdf"
            className="text-green-600 underline"
          >
            📥 Download PDF
          </a>
        </div>
      )}
    </section>
  );
}
