"use client";

import { useState } from "react";
import { Document, Packer, Paragraph, TextRun, ImageRun } from "docx";

interface PageContent {
  text: string;
  image?: string; // data URL (base64)
}

const MAX_MB = 25;
const WORKER_SRC = "https://unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.js";

export default function PDFToWordTool() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState("");

  function onFileChange(f: File | null) {
    setProgress("");
    if (!f) {
      setFile(null);
      return;
    }
    if (f.type !== "application/pdf") {
      setProgress("Please select a valid PDF file.");
      return;
    }
    if (f.size > MAX_MB * 1024 * 1024) {
      setProgress(`File too large. Max ${MAX_MB} MB allowed.`);
      return;
    }
    setFile(f);
  }

  async function extractPageContent(pdfDoc: any, pageNum: number): Promise<PageContent> {
    const page = await pdfDoc.getPage(pageNum);

    // Text
    const textContent = await page.getTextContent();
    const text = textContent.items.map((item: any) => item.str).join(" ");

    // Render to image
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);

    await page.render({ canvasContext: ctx, viewport }).promise;

    return {
      text,
      image: canvas.toDataURL("image/jpeg", 0.75)
    };
  }

  async function handleConvert() {
    if (!file) return;
    setLoading(true);
    setProgress("Loading PDF...");

    try {
      const pdfjsLib: any = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions = pdfjsLib.GlobalWorkerOptions || {};
      pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER_SRC;

      const data = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data }).promise;
      const numPages = pdf.numPages;

      const pages: PageContent[] = [];
      for (let i = 1; i <= numPages; i++) {
        setProgress(`Processing page ${i} of ${numPages}...`);
        const content = await extractPageContent(pdf, i);
        pages.push(content);
      }

      setProgress("Generating Word document...");
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: pages.flatMap((page, idx) => {
              const elems: Paragraph[] = [];

              if (page.text?.trim()) {
                elems.push(
                  new Paragraph({
                    children: [new TextRun(page.text)]
                  })
                );
              }

              if (page.image) {
                const base64 = page.image.split(",")[1];
                const u8 = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
                elems.push(
                  new Paragraph({
                    children: [
                      new ImageRun({
                        data: u8,
                        transformation: { width: 600, height: 800 },
                        type: "jpg"
                      })
                    ]
                  })
                );
              }

              // Page break except last
              if (idx < pages.length - 1) {
                elems.push(new Paragraph({ children: [new TextRun({ break: 1 })] }));
              }
              return elems;
            })
          }
        ]
      });

      setProgress("Preparing download...");
      const blob = await Packer.toBlob(doc);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = (file.name.replace(/.pdf$/i, "") || "document") + ".docx";
      a.click();
      URL.revokeObjectURL(url);

      setProgress("Done");
      setTimeout(() => setProgress(""), 1500);
    } catch (err: any) {
      console.error(err);
      setProgress("Error converting file. Try a different PDF.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">📄 PDF to Word</h2>
      <p className="text-sm text-slate-600 mb-4">
        Convert PDF to editable DOCX. Text and images are preserved. Processing time depends on file size.
      </p>

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => onFileChange(e.target.files?.[0] || null)}
        className="mb-4 block w-full border rounded px-3 py-2"
        aria-label="Upload PDF to convert to Word"
      />
      <button
        onClick={handleConvert}
        disabled={!file || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Converting..." : "Convert to Word"}
      </button>

      {progress && <div className="mt-4 text-sm text-slate-600">{progress}</div>}
    </section>
  );
}
