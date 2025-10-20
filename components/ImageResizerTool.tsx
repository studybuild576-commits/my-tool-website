"use client";
import { useState } from "react";

export default function ImageResizerTool() {
  const [file, setFile] = useState<File | null>(null);

  function handleResize() {
    alert("Image resizing requires canvas or backend.");
  }

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">📐 Image Resizer</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4 block w-full border rounded px-3 py-2"
      />
      <button
        onClick={handleResize}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Resize Image
      </button>
    </section>
  );
}
