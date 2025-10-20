"use client";
import { useState } from "react";

export default function PDFOrganizeTool() {
  const [file, setFile] = useState<File | null>(null);

  function handleOrganize() {
    alert("PDF page reordering requires drag-drop UI + PDF-lib logic.");
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">📚 Organize PDF</h2>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4 block w-full border rounded px-3 py-2"
      />
      <button
        onClick={handleOrganize}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Reorder Pages
      </button>
    </section>
  );
}
