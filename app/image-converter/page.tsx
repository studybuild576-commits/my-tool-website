"use client";

import { useState, useRef } from 'react';
import { Download, Image } from 'lucide-react';

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
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-2 flex items-center justify-center gap-3">
          <Image className="w-10 h-10 text-blue-400 drop-shadow" />
          Image Format Converter
        </h1>
        <p className="text-lg text-gray-700 font-medium">Convert your images to JPG, PNG, or WEBP.</p>
      </header>

      <section className="bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 rounded-xl shadow-lg p-6 mb-8 border border-pink-200 grid gap-6">
        <div>
          <label className="block font-semibold mb-2 text-pink-700">1. Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="block w-full text-base border border-pink-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white" />
        </div>
        {originalImageUrl && <img src={originalImageUrl} alt="Preview" className="max-w-full mt-4 rounded-xl border-2 border-blue-200 shadow" />}
      </section>

      {originalFile && (
        <section className="mb-8">
          <label className="block font-semibold mb-2 text-blue-700">2. Choose Format to Convert to:</label>
          <select value={targetFormat} onChange={(e) => setTargetFormat(e.target.value)} className="p-2 border border-blue-300 rounded bg-white">
            <option value="image/png">PNG</option>
            <option value="image/jpeg">JPG</option>
            <option value="image/webp">WEBP</option>
          </select>
        </section>
      )}

      <div className="flex justify-center mt-6">
        <button 
          onClick={handleConvert}
          disabled={isConverting || !originalFile}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-400 to-pink-400 text-white font-bold shadow-lg hover:scale-105 transition border-2 border-blue-500 text-lg ${isConverting || !originalFile ? 'bg-gray-400 cursor-not-allowed' : ''}`}
        >
          <Download className="w-6 h-6" />
          {isConverting ? 'Converting...' : 'Convert & Download'}
        </button>
      </div>

      <footer className="text-center text-gray-500 text-base mt-10 bg-gradient-to-r from-blue-100 to-pink-100 py-4 rounded-t-xl shadow-inner">
        &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
      </footer>
    </main>
  );
}
