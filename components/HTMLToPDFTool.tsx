// components/HTMLToPDFTool.tsx
"use client";
import { useMemo, useRef, useState } from "react";
import { PDFDocument, StandardFonts } from "pdf-lib";
import html2canvas from "html2canvas";

// A4 points
const A4 = { w: 595, h: 842 };
// Safe margins in points
const MARGIN = 36; // 0.5 inch

export default function HTMLToPDFTool() {
  const [html, setHtml] = useState("");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState(2.0);
  const previewRef = useRef<HTMLIFrameElement>(null);

  const canConvert = useMemo(() => html.trim().length > 0, [html]);

  async function handleConvert() {
    if (!canConvert) {
      setError("Please enter some HTML content first");
      return;
    }
    setLoading(true); setError(null); setPdfUrl(null);

    try {
      // Render HTML inside sandboxed iframe to isolate styles/scripts
      const iframe = previewRef.current;
      if (!iframe) throw new Error("Preview iframe not found");
      const doc = iframe.contentDocument!;
      doc.open();
      // Basic reset & safe base styles
      doc.write(`
        <!doctype html><html><head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <style>
            *{box-sizing:border-box}
            body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Helvetica Neue",Arial}
            img{max-width:100%;height:auto}
            @media print {
              body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            }
          </style>
        </head><body>
          <div id="root">${html}</div>
        </body></html>
      `);
      doc.close();

      // Wait a tick for layout
      await new Promise((r) => setTimeout(r, 50));
      const root = doc.getElementById("root") as HTMLElement | null;
      if (!root) throw new Error("Root element missing in preview");

      // High‑DPI canvas from iframe content
      const canvas = await html2canvas(root, {
        scale, // higher scale => higher DPI
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        windowWidth: root.scrollWidth,
        windowHeight: root.scrollHeight
      });

      // Create PDF and paginate if needed
      const pdf = await PDFDocument.create();

      // Convert the rendered canvas to an image
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const imgBytes = await (await fetch(imgData)).arrayBuffer();
      const img = await pdf.embedJpg(imgBytes);

      // Compute scaling to fit within A4 minus margins
      const maxW = A4.w - 2 * MARGIN;
      const maxH = A4.h - 2 * MARGIN;
      const pxW = canvas.width;
      const pxH = canvas.height;

      const scaleToFit = Math.min(maxW / pxW, maxH / pxH);
      const drawW = pxW * scaleToFit;
      const drawH = pxH * scaleToFit;

      // If content exceeds one page vertically, slice it into multiple pages
      if (drawH <= maxH) {
        const page = pdf.addPage([A4.w, A4.h]);
        page.drawImage(img, { x: MARGIN, y: A4.h - MARGIN - drawH, width: drawW, height: drawH });
      } else {
        // Slice the tall image into vertical bands that fit maxH
        const slices = Math.ceil(drawH / maxH);
        for (let i = 0; i < slices; i++) {
          const page = pdf.addPage([A4.w, A4.h]);

          // Compute source slice region in original canvas pixels
          const srcY = Math.round((i * maxH) / scaleToFit);
          const srcH = Math.min(Math.round(maxH / scaleToFit), pxH - srcY);

          // Create a slice canvas
          const sliceCanvas = document.createElement("canvas");
          sliceCanvas.width = pxW;
          sliceCanvas.height = srcH;
          const sctx = sliceCanvas.getContext("2d")!;
          sctx.drawImage(canvas, 0, srcY, pxW, srcH, 0, 0, pxW, srcH);

          const sliceData = sliceCanvas.toDataURL("image/jpeg", 0.95);
          const sliceBytes = await (await fetch(sliceData)).arrayBuffer();
          const sliceImg = await pdf.embedJpg(sliceBytes);

          const sliceDrawH = srcH * scaleToFit;
          page.drawImage(sliceImg, {
            x: MARGIN,
            y: A4.h - MARGIN - sliceDrawH,
            width: drawW,
            height: sliceDrawH
          });
        }
      }

      // Optional footer: page numbers
      const font = await pdf.embedFont(StandardFonts.Helvetica);
      const pages = pdf.getPages();
      pages.forEach((p, i) => {
        const text = `Page ${i + 1} of ${pages.length}`;
        p.drawText(text, { x: A4.w - MARGIN - font.widthOfTextAtSize(text, 8), y: MARGIN / 2, size: 8, font, color: undefined });
      });

      // Save PDF
      const pdfBytes = await pdf.save();
      const url = URL.createObjectURL(new Blob([pdfBytes], { type: "application/pdf" }));
      setPdfUrl(url);
    } catch (err) {
      console.error("HTML to PDF conversion failed:", err);
      setError("Failed to convert HTML to PDF: " + String(err));
    } finally {
      setLoading(false);
    }
  }

  function cleanupUrl() {
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl(null);
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">🌐 HTML to PDF Converter</h2>
      <p className="text-sm text-slate-600 mb-4">
        Convert HTML to high‑quality A4 PDFs. Processing happens entirely in your browser—no uploads.
      </p>

      {/* Controls */}
      <div className="flex items-center gap-4 mb-4">
        <label className="text-sm flex items-center gap-2">
          DPI scale
          <select
            value={scale}
            onChange={(e)=>setScale(parseFloat(e.target.value))}
            className="border rounded px-2 py-1 text-sm"
            disabled={loading}
          >
            <option value={1.5}>1.5x</option>
            <option value={2.0}>2.0x</option>
            <option value={2.5}>2.5x</option>
            <option value={3.0}>3.0x</option>
          </select>
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter HTML Code:</label>
          <textarea
            rows={12}
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            placeholder="<div style='color: blue;'>
  <h1>Hello World</h1>
  <p>This is a test</p>
</div>"
            className="w-full font-mono text-sm border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
            aria-label="HTML input"
          />
        </div>

        {/* Live preview (sandboxed for safety) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Live Preview:</label>
          <div className="border rounded-lg overflow-hidden">
            <iframe
              ref={previewRef}
              className="w-full h-[300px] bg-white"
              // sandbox prevents JS execution; allow-same-origin off for extra isolation
              sandbox=""
              title="HTML Preview"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={handleConvert}
          disabled={loading || !canConvert}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              Converting...
            </>
          ) : "Generate PDF"}
        </button>

        {pdfUrl && (
          <>
            <a href={pdfUrl} download="converted.pdf" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700">
              <span className="text-2xl">📥</span>
              Download PDF
            </a>
            <button onClick={cleanupUrl} className="text-slate-600 text-sm underline">Clear</button>
          </>
        )}
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
    </section>
  );
}
