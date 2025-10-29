"use client";

import { useState, useCallback } from "react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import mammoth from "mammoth";

interface ConversionSettings {
  fontName: (typeof StandardFonts)[keyof typeof StandardFonts];
  fontSize: number;
  preserveImages: boolean;
  imageQuality: number; // 0.1 - 1
  marginSize: number;   // points
  lineSpacing: number;  // multiplier
  textColor: [number, number, number]; // 0..1
}

interface ConversionStats {
  textLength: number;
  pageCount: number;
  imageCount: number;
  conversionTime: number; // ms
}

const MAX_MB = 25;

export default function WordToPDFTool() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<ConversionStats | null>(null);

  const [settings, setSettings] = useState<ConversionSettings>({
    fontName: StandardFonts.TimesRoman,
    fontSize: 12,
    preserveImages: true,
    imageQuality: 0.95,
    marginSize: 50,
    lineSpacing: 1.5,
    textColor: [0, 0, 0]
  });

  const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setPdfUrl(null);
    setError(null);
    setStats(null);
    setPreview(null);

    if (!f) {
      setFile(null);
      return;
    }
    if (!/.docx$/i.test(f.name)) {
      setError("Please select a .docx file.");
      setFile(null);
      return;
    }
    if (f.size > MAX_MB * 1024 * 1024) {
      setError(`File too large. Max ${MAX_MB} MB allowed.`);
      setFile(null);
      return;
    }

    setFile(f);
    try {
      const arrayBuffer = await f.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      setPreview(result.value);
    } catch (err) {
      setError("Failed to read document: " + String(err));
    }
  }, []);

  async function convertImagesToPDF(images: HTMLImageElement[], pdfDoc: PDFDocument) {
    for (const img of images) {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth || img.width;
      canvas.height = img.naturalHeight || img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) continue;

      ctx.drawImage(img, 0, 0);
      const imgDataUrl = canvas.toDataURL("image/jpeg", settings.imageQuality);
      const buf = await (await fetch(imgDataUrl)).arrayBuffer();
      const jpg = await pdfDoc.embedJpg(buf);

      const page = pdfDoc.addPage([595, 842]);
      const scale = Math.min(0.9 * page.getWidth() / jpg.width, 0.9 * page.getHeight() / jpg.height);
      const w = jpg.width * scale;
      const h = jpg.height * scale;

      page.drawImage(jpg, {
        x: (page.getWidth() - w) / 2,
        y: (page.getHeight() - h) / 2,
        width: w,
        height: h
      });
    }
  }

  async function handleConvert() {
    if (!file) return;

    setLoading(true);
    setError(null);
    setPdfUrl(null);
    setProgress("Reading Word document...");
    const start = performance.now();

    try {
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.convertToHtml({ arrayBuffer });
      const html = result.value;

      const container = document.createElement("div");
      container.innerHTML = html;

      // Extract images from HTML preview
      const images: HTMLImageElement[] = [];
      if (settings.preserveImages) {
        const imgEls = Array.from(container.getElementsByTagName("img"));
        if (imgEls.length) setProgress(`Processing ${imgEls.length} images...`);
        for (const imgEl of imgEls) {
          const img = new Image();
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = imgEl.src;
          });
          images.push(img);
        }
      }

      setProgress("Creating PDF...");
      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(settings.fontName);

      // Text conversion
      const textContent = container.innerText || "";
      const lines = textContent.split(/
|
|
/);

      let page = pdfDoc.addPage([595, 842]);
      let y = page.getHeight() - settings.marginSize;
      const lineHeight = settings.fontSize * settings.lineSpacing;
      const x = settings.marginSize;
      const maxWidth = page.getWidth() - settings.marginSize * 2;

      for (const raw of lines) {
        const line = raw.replace(/s+$/g, ""); // trim end spaces
        if (!line.trim()) {
          y -= lineHeight;
          if (y < settings.marginSize) {
            page = pdfDoc.addPage([595, 842]);
            y = page.getHeight() - settings.marginSize;
          }
          continue;
        }

        // Wrap long lines roughly by splitting on spaces
        const words = line.split(/s+/);
        let current = "";
        for (const w of words) {
          const test = current ? `${current} ${w}` : w;
          const width = font.widthOfTextAtSize(test, settings.fontSize);
          if (width <= maxWidth) {
            current = test;
          } else {
            page.drawText(current, {
              x,
              y,
              size: settings.fontSize,
              font,
              color: rgb(...settings.textColor)
            });
            y -= lineHeight;
            if (y < settings.marginSize) {
              page = pdfDoc.addPage([595, 842]);
              y = page.getHeight() - settings.marginSize;
            }
            current = w;
          }
        }
        if (current) {
          page.drawText(current, {
            x,
            y,
            size: settings.fontSize,
            font,
            color: rgb(...settings.textColor)
          });
          y -= lineHeight;
          if (y < settings.marginSize) {
            page = pdfDoc.addPage([595, 842]);
            y = page.getHeight() - settings.marginSize;
          }
        }
      }

      // Images as separate pages (optional)
      if (settings.preserveImages && images.length) {
        await convertImagesToPDF(images, pdfDoc);
      }

      const bytes = await pdfDoc.save();
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
      const blob = new Blob([bytes], { type: "application/pdf" });
      setPdfUrl(URL.createObjectURL(blob));

      setStats({
        textLength: textContent.length,
        pageCount: pdfDoc.getPageCount(),
        imageCount: images.length,
        conversionTime: Math.round(performance.now() - start)
      });
    } catch (err) {
      console.error("Word to PDF conversion failed:", err);
      setError(String(err));
    } finally {
      setLoading(false);
      setProgress("");
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-lg">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">📝 Word to PDF Converter</h2>
        <p className="text-sm text-slate-600">
          Convert Word (.docx) to PDF with controllable font, spacing, margins, and optional image preservation. Runs fully in your browser.
        </p>
      </div>

      <div className="space-y-6">
        <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-blue-400 transition">
          <input
            type="file"
            accept=".docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            disabled={loading}
          />
          <p className="mt-2 text-xs text-slate-500">Supports .docx format</p>
        </div>

        {preview && (
          <div className="bg-slate-50 rounded-xl p-4">
            <h3 className="font-medium text-slate-800 mb-2">Document Preview:</h3>
            <div
              className="prose prose-sm max-h-60 overflow-y-auto"
              dangerouslySetInnerHTML={{ __html: preview }}
            />
          </div>
        )}

        {file && (
          <div className="space-y-4">
            <h3 className="font-medium text-slate-800">Conversion Settings:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Font:</label>
                <select
                  value={settings.fontName}
                  onChange={(e) =>
                    setSettings((s) => ({ ...s, fontName: e.target.value as typeof s.fontName }))
                  }
                  className="w-full border rounded-lg px-3 py-2"
                >
                  {Object.values(StandardFonts).map((font) => (
                    <option key={font} value={font}>
                      {font.replace(/([A-Z])/g, " $1").trim()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Font Size: {settings.fontSize}pt
                </label>
                <input
                  type="range"
                  min="8"
                  max="24"
                  value={settings.fontSize}
                  onChange={(e) =>
                    setSettings((s) => ({ ...s, fontSize: parseInt(e.target.value) }))
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Line Spacing: {settings.lineSpacing}x
                </label>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="0.1"
                  value={settings.lineSpacing}
                  onChange={(e) =>
                    setSettings((s) => ({ ...s, lineSpacing: parseFloat(e.target.value) }))
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Margin Size: {settings.marginSize}pt
                </label>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={settings.marginSize}
                  onChange={(e) =>
                    setSettings((s) => ({ ...s, marginSize: parseInt(e.target.value) }))
                  }
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={settings.preserveImages}
                  onChange={(e) => setSettings((s) => ({ ...s, preserveImages: e.target.checked }))}
                  className="rounded border-slate-300 text-blue-600"
                />
                <label className="text-sm text-slate-700">Preserve Images</label>
              </div>

              {settings.preserveImages && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Image Quality: {Math.round(settings.imageQuality * 100)}%
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.1"
                    value={settings.imageQuality}
                    onChange={(e) =>
                      setSettings((s) => ({ ...s, imageQuality: parseFloat(e.target.value) }))
                    }
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {progress && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-700">{progress}</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        <button
          onClick={handleConvert}
          disabled={!file || loading}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50"
        >
          {loading ? "Converting..." : "Convert to PDF"}
        </button>

        {stats && pdfUrl && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-slate-500">Pages</p>
                <p className="font-medium">{stats.pageCount}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Text Length</p>
                <p className="font-medium">{stats.textLength.toLocaleString()} chars</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Images</p>
                <p className="font-medium">{stats.imageCount}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Processing Time</p>
                <p className="font-medium">{(stats.conversionTime / 1000).toFixed(1)}s</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href={pdfUrl}
                download={(file?.name.replace(/.docx?$/i, "") || "document") + ".pdf"}
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
              >
                <span>📥</span>
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
