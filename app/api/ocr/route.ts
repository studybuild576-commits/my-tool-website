import { NextResponse } from "next/server";
// pdfjs doesn't ship types for the legacy build path; require dynamically and treat as any
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const pdfjsLib: any = require("pdfjs-dist/legacy/build/pdf.js");

// Try to import tesseract dynamically if available
let Tesseract: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  Tesseract = require("tesseract.js");
} catch (err) {
  // tesseract not installed or not available in environment
  Tesseract = null;
}

async function extractTextFromPdf(buffer: ArrayBuffer) {
  const loadingTask = pdfjsLib.getDocument({ data: buffer });
  const doc = await loadingTask.promise;
  let fullText = "";
  for (let i = 1; i <= doc.numPages; i++) {
    // eslint-disable-next-line no-await-in-loop
    const page = await doc.getPage(i);
    // eslint-disable-next-line no-await-in-loop
    const content = await page.getTextContent();
    const strings = content.items.map((s: any) => s.str);
    fullText += strings.join(" ") + "\n\n";
  }
  return fullText;
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as any;
    if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });

    const buf = await file.arrayBuffer();
    const type = file.type || file.name?.split(".").pop();

    // If PDF, try text extraction via pdfjs
    if (file.type === "application/pdf" || file.name?.endsWith(".pdf")) {
      const text = await extractTextFromPdf(buf);
      return NextResponse.json({ text });
    }

    // For images, fall back to Tesseract if available
    if (Tesseract) {
      const worker = Tesseract.createWorker();
      await worker.load();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const { data } = await worker.recognize(Buffer.from(buf));
      await worker.terminate();
      return NextResponse.json({ text: data.text });
    }

    return NextResponse.json({ error: "OCR not available (tesseract.js missing) and file is not a PDF." }, { status: 501 });
  } catch (err: any) {
    return NextResponse.json({ error: String(err?.message || err) }, { status: 500 });
  }
}
