"use client";

import { useState } from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

interface TextStyle {
  font: "Helvetica" | "Times-Roman" | "Courier";
  size: number;
  color: string;
  align: "left" | "center" | "right";
}

function parseHexColor(hex: string) {
  const m = hex.trim().match(/^#?([0-9a-f]{6})$/i);
  if (!m) return rgb(0, 0, 0);
  const n = parseInt(m[1], 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return rgb(r / 255, g / 255, b / 255);
}

export default function TextToPDFTool() {
  const [text, setText] = useState("");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [style, setStyle] = useState<TextStyle>({
    font: "Helvetica",
    size: 12,
    color: "#000000",
    align: "left"
  });

  async function handleConvert() {
    if (!text.trim()) return;
    setLoading(true);
    setStatus("Generating PDF...");
    setPdfUrl(null);

    try {
      const pdfDoc = await PDFDocument.create();
      const pageSize: [number, number] = [595, 842]; // A4 in points
      let currentPage = pdfDoc.addPage(pageSize);

      const fontName =
        style.font === "Times-Roman"
          ? StandardFonts.TimesRoman
          : style.font === "Courier"
          ? StandardFonts.Courier
          : StandardFonts.Helvetica;

      const font = await pdfDoc.embedFont(fontName);
      const textColor = parseHexColor(style.color);

      // layout
      const margin = 48;
      const maxWidth = currentPage.getWidth() - margin * 2;
      // Normalize line breaks to spaces, split on whitespace
      const words = text.replace(/\r?\n/g, " ").split(/\s+/).filter(Boolean);
      const lines: string[] = [];
      let currentLine = "";

      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const width = font.widthOfTextAtSize(testLine, style.size);
        if (width <= maxWidth) {
          currentLine = testLine;
        } else {
          if (currentLine) lines.push(currentLine);
          currentLine = word;
        }
      }
      if (currentLine) lines.push(currentLine);

      const lineHeight = style.size * 1.5;
      let y = currentPage.getHeight() - margin;

      for (const line of lines) {
        if (y < margin) {
          currentPage = pdfDoc.addPage(pageSize);
          y = currentPage.getHeight() - margin;
        }

        const width = font.widthOfTextAtSize(line, style.size);
        let x = margin;
        if (style.align === "center") x = (currentPage.getWidth() - width) / 2;
        if (style.align === "right") x = currentPage.getWidth() - margin - width;

        currentPage.drawText(line, {
          x,
          y,
          size: style.size,
          font,
          color: textColor
        });

        y -= lineHeight;
      }

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes as any], { type: "application/pdf" });
      setPdfUrl(URL.createObjectURL(blob));
      setStatus("Done");
      setTimeout(() => setStatus(""), 1200);
    } catch (err) {
      console.error(err);
      setStatus("Failed to convert text to PDF. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">📝 Text to PDF Converter</h2>

      <p className="text-sm text-slate-600 mb-6">
        Convert text to professionally formatted A4 PDFs. Choose font, size, color, and alignment. Runs fully in your browser.
      </p>

      <div className="grid gap-4 md:grid-cols-2 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Font Family:</label>
          <select
            value={style.font}
            onChange={(e) => setStyle({ ...style, font: e.target.value as TextStyle["font"] })}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="Helvetica">Helvetica</option>
            <option value="Times-Roman">Times Roman</option>
            <option value="Courier">Courier</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Font Size:</label>
          <select
            value={style.size}
            onChange={(e) => setStyle({ ...style, size: parseInt(e.target.value) })}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value={10}>10pt</option>
            <option value={12}>12pt</option>
            <option value={14}>14pt</option>
            <option value={16}>16pt</option>
            <option value={18}>18pt</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Text Color:</label>
          <input
            type="color"
            value={style.color}
            onChange={(e) => setStyle({ ...style, color: e.target.value })}
            className="w-full h-10 border rounded-lg px-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Text Alignment:</label>
          <select
            value={style.align}
            onChange={(e) => setStyle({ ...style, align: e.target.value as TextStyle["align"] })}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>

      <textarea
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
        className="w-full border rounded-lg px-4 py-3 mb-4 font-mono text-sm"
      />

      <div className="flex gap-3 items-center">
        <button
          onClick={handleConvert}
          disabled={loading || !text.trim()}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Converting...
            </>
          ) : (
            <>Generate PDF</>
          )}
        </button>

        {pdfUrl && (
          <a href={pdfUrl} download="text.pdf" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700">
            <span className="text-2xl">📥</span>
            Download PDF
          </a>
        )}
      </div>

      {status && <p className="mt-3 text-sm text-slate-600">{status}</p>}
    </section>
  );
}
