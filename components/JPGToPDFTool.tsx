// components/JPGToPDFTool.tsx
"use client";
import { useState, useCallback } from "react";
import { PDFDocument } from "pdf-lib";

interface ImageFile {
  file: File;
  preview: string;
  order: number;
}
interface PageSettings {
  pageSize: "A4" | "letter" | "legal" | "fit";
  orientation: "portrait" | "landscape";
  margin: number;   // points
  quality: number;  // 0.1..1 opacity for draw (visual cue only)
}

const PAGE_SIZES = {
  A4: { width: 595.276, height: 841.89 },
  letter: { width: 612, height: 792 },
  legal: { width: 612, height: 1008 }
} as const;

export default function JPGToPDFTool() {
  const [files, setFiles] = useState<ImageFile[]>([]);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [settings, setSettings] = useState<PageSettings>({
    pageSize: "A4",
    orientation: "portrait",
    margin: 20,
    quality: 1.0
  });

  const createPreview = useCallback((file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(String(e.target?.result || ""));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }, []);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(e.target.files || []);
    setError(null);
    if (pdfUrl) { URL.revokeObjectURL(pdfUrl); setPdfUrl(null); }
    try {
      const imageFiles: ImageFile[] = await Promise.all(
        picked.map(async (file, index) => ({
          file,
          preview: await createPreview(file),
          order: index
        }))
      );
      setFiles(imageFiles);
    } catch {
      setError("Failed to load image previews. Please try again.");
    }
  }

  const reorderFiles = (dragIndex: number, dropIndex: number) => {
    setFiles((arr) => {
      const next = [...arr];
      const [dragged] = next.splice(dragIndex, 1);
      next.splice(dropIndex, 0, dragged);
      return next.map((f, i) => ({ ...f, order: i }));
    });
  };

  async function handleConvert() {
    if (!files.length) return;
    setLoading(true);
    setError(null);

    try {
      const pdfDoc = await PDFDocument.create();

      // Optional: embed document metadata for the resulting PDF
      pdfDoc.setTitle("JPG to PDF — PDF Maker AI");
      pdfDoc.setAuthor("PDF Maker AI");
      pdfDoc.setSubject("Converted images to PDF");
      pdfDoc.setProducer("pdf-lib");
      pdfDoc.setCreator("pdf-lib");
      pdfDoc.setKeywords(["jpg", "jpeg", "pdf", "converter", "pdf-maker-ai"]);

      for (const { file } of files) {
        const imgBytes = await file.arrayBuffer();
        // pdf-lib supports JPEG; guard file type:
        const img = await pdfDoc.embedJpg(new Uint8Array(imgBytes));

        // Decide page size
        let pageWidth: number;
        let pageHeight: number;
        if (settings.pageSize === "fit") {
          pageWidth = img.width;
          pageHeight = img.height;
        } else {
          const base = PAGE_SIZES[settings.pageSize];
          const portrait = settings.orientation === "portrait";
          pageWidth = portrait ? base.width : base.height;
          pageHeight = portrait ? base.height : base.width;
        }

        const page = pdfDoc.addPage([pageWidth, pageHeight]);

        // Fit image within margins while keeping aspect ratio
        const availW = Math.max(0, pageWidth - 2 * settings.margin);
        const availH = Math.max(0, pageHeight - 2 * settings.margin);
        const ar = img.width / img.height;

        let drawW = availW;
        let drawH = drawW / ar;
        if (drawH > availH) {
          drawH = availH;
          drawW = drawH * ar;
        }

        const x = (pageWidth - drawW) / 2;
        const y = (pageHeight - drawH) / 2;

        page.drawImage(img, {
          x,
          y,
          width: drawW,
          height: drawH,
          opacity: Math.min(1, Math.max(0.1, settings.quality)) // visual opacity only
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: "application/pdf" });
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
      setPdfUrl(URL.createObjectURL(blob));
    } catch (err) {
      setError("Failed to convert images to PDF: " + String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">🖼️ JPG to PDF Converter</h2>
        <p className="text-sm text-slate-600">
          Convert multiple JPG images to a single PDF. Choose page size, orientation, margins, and reorder pages before exporting.
        </p>
      </div>

      <div className="space-y-6">
        {/* Upload */}
        <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-blue-400 transition">
          <label className="block text-sm font-medium text-slate-700 mb-2">Select JPG images</label>
          <input
            type="file"
            accept="image/jpeg"
            multiple
            onChange={handleFileChange}
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            aria-label="Upload JPG images"
          />
        </div>

        {/* Settings */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Page Size</label>
            <select
              value={settings.pageSize}
              onChange={(e) => setSettings((s) => ({ ...s, pageSize: e.target.value as PageSettings["pageSize"] }))}
              className="w-full border rounded-lg px-3 py-2 bg-white"
            >
              <option value="A4">A4</option>
              <option value="letter">Letter</option>
              <option value="legal">Legal</option>
              <option value="fit">Fit to Image</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Orientation</label>
            <select
              value={settings.orientation}
              onChange={(e) => setSettings((s) => ({ ...s, orientation: e.target.value as PageSettings["orientation"] }))}
              className="w-full border rounded-lg px-3 py-2 bg-white"
            >
              <option value="portrait">Portrait</option>
              <option value="landscape">Landscape</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Margin (pt): {settings.margin}</label>
            <input
              type="range"
              min={0}
              max={100}
              value={settings.margin}
              onChange={(e) => setSettings((s) => ({ ...s, margin: parseInt(e.target.value, 10) }))}
              className="w-full"
              aria-label="Page margin"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Image Opacity: {Math.round(settings.quality * 100)}%</label>
            <input
              type="range"
              min={0.1}
              max={1}
              step={0.1}
              value={settings.quality}
              onChange={(e) => setSettings((s) => ({ ...s, quality: parseFloat(e.target.value) }))}
              className="w-full"
              aria-label="Image opacity"
            />
            <p className="text-xs text-slate-500 mt-1">Note: This slider controls image opacity in the PDF; use lower values for subtle watermark‑style look.</p>
          </div>
        </div>

        {/* Previews with drag reorder */}
        {files.length > 0 && (
          <div>
            <p className="text-sm font-medium text-slate-700 mb-2">Selected Images ({files.length}):</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {files.map((f, index) => (
                <div
                  key={index}
                  className="relative group border rounded-lg p-2 bg-slate-50"
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData("text/plain", String(index))}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const dragIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
                    reorderFiles(dragIndex, index);
                  }}
                >
                  <img
                    src={f.preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-32 object-cover rounded"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() => setFiles((arr) => arr.filter((_, i) => i !== index))}
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Remove image ${index + 1}`}
                  >
                    ✕
                  </button>
                  <p className="text-center text-sm text-slate-600 mt-1">Page {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4" role="alert">
            <div className="flex items-start gap-3">
              <span className="text-red-500 text-xl" aria-hidden="true">⚠️</span>
              <div>
                <p className="font-semibold text-red-800">Error</p>
                <p className="text-sm text-red-600">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Convert */}
        <button
          onClick={handleConvert}
          disabled={!files.length || loading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Converting...
            </div>
          ) : (
            "Convert to PDF"
          )}
        </button>

        {/* Download */}
        {pdfUrl && (
          <div className="text-center">
            <a
              href={pdfUrl}
              download="converted.pdf"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <span aria-hidden="true">📥</span>
              <span>Download PDF</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
