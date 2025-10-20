"use client";
import { useState } from "react";

export default function PDFSignerTool() {
  const [file, setFile] = useState<File | null>(null);

  function handleSign() {
    alert("PDF signing requires canvas or backend logic.");
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">✍️ PDF Signer</h2>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4 block w-full border rounded px-3 py-2"
      />
      <button
        onClick={handleSign}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Sign PDF
      </button>
    </section>
  );
}
