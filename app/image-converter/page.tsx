"use client";

import { useState, useRef } from 'react';

export default function ImageConverterPage() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalImageUrl, setOriginalImageUrl] = useState<string | null>(null);
  const [targetFormat, setTargetFormat] = useState<string>('image/png');
  const [isConverting, setIsConverting] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setOriginalFile(file);
      setOriginalImageUrl(URL.createObjectURL(file));
    }
  };

  const handleConvert = () => {
    if (!originalFile) {
      alert("Please upload an image first.");
      return;
    }
    
    setIsConverting(true);
    const img = new Image();
    img.src = originalImageUrl!;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const convertedDataUrl = canvas.toDataURL(targetFormat, 0.95); // 0.95 quality for JPG/WEBP

        const link = document.createElement('a');
        const extension = targetFormat.split('/')[1];
        const fileNameWithoutExt = originalFile.name.split('.').slice(0, -1).join('.');
        link.download = `${fileNameWithoutExt}.${extension}`;
        link.href = convertedDataUrl;
        link.click();
      }
      setIsConverting(false);
    };
    img.onerror = () => {
      alert("Could not load image. Please try another file.");
      setIsConverting(false);
    }
  };

  const selectStyle = {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  return (
    <main className="font-sans px-4 py-10 max-w-2xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">Image Format Converter</h1>
        <p className="text-gray-600 text-lg">Convert your images to JPG, PNG, or WEBP.</p>
      </header>

      <section className="bg-white rounded-lg shadow p-6 mb-8 grid gap-6">
        <div>
          <label className="block font-semibold mb-2 text-gray-700">1. Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="block w-full text-base border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        {originalImageUrl && <img src={originalImageUrl} alt="Preview" className="max-w-full mt-4 rounded border border-gray-200" />}
      </section>

      {originalFile && (
        <section className="mb-8">
          <label className="block font-semibold mb-2 text-gray-700">2. Choose Format to Convert to:</label>
          <select value={targetFormat} onChange={(e) => setTargetFormat(e.target.value)} className="p-2 border border-gray-300 rounded">
            <option value="image/png">PNG</option>
            <option value="image/jpeg">JPG</option>
            <option value="image/webp">WEBP</option>
          </select>
        </section>
      )}

      <div className="text-center mt-6">
        <button 
          onClick={handleConvert}
          disabled={isConverting || !originalFile}
          className={`px-6 py-3 text-lg font-semibold rounded transition text-white ${isConverting || !originalFile ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isConverting ? 'Converting...' : 'Convert & Download'}
        </button>
      </div>

      <footer className="text-center text-gray-400 text-sm mt-10">
        &copy; {new Date().getFullYear()} pdf-text-tools. All rights reserved.
      </footer>
    </main>
  );
}
