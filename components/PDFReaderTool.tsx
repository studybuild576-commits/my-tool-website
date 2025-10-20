"use client";
import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";

export default function PDFReaderTool() {
  const [file, setFile] = useState<File | null>(null);
  const [textContent, setTextContent] = useState<string>("");

  async function handleRead() {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      const typedArray = new Uint8Array(reader.result as ArrayBuffer);
      const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
      let fullText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const strings = content.items.map((item: any) => item.str);
        fullText += strings.join(" ") + "\n\n";
      }

      setTextContent(fullText);
    };
    reader.readAsArrayBuffer(file);
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">📖 PDF Reader</h2>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4 block w-full border rounded px-3 py-2"
      />
      <button
        onClick={handleRead}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Read PDF
      </button>

      {textContent && (
        <div className="mt-6 bg-gray-100 p-4 rounded whitespace-pre-wrap max-h-[500px] overflow-y-auto">
          <h3 className="font-semibold mb-2">Extracted Text:</h3>
          <p>{textContent}</p>
        </div>
      )}
    </section>
  );
}
