"use client";
import { useState } from "react";

export default function WordToPDFTool() {
  const [file, setFile] = useState<File | null>(null);

  function handleConvert() {
    alert("Word to PDF conversion requires backend or LibreOffice API.");
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">📝 Word to PDF</h2>
      <input
        type="file"
        accept=".doc,.docx"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4 block w-full border rounded px-3 py-2"
      />
      <button
        onClick={handleConvert}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Convert to PDF
      </button>
    </section>
  );
}
