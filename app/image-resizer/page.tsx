"use client";

import { useState, useRef } from 'react';
import { Download } from 'lucide-react';

export default function ImageResizerPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [resizedImage, setResizedImage] = useState<string | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const originalFileRef = useRef<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      originalFileRef.current = file;
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          setWidth(img.width);
          setHeight(img.height);
        };
        img.src = reader.result as string;
        setOriginalImage(reader.result as string);
        setResizedImage(null); // नई इमेज अपलोड होने पर पुरानी रिसाइज़्ड इमेज हटा दें
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResize = () => {
    if (!originalImage || width <= 0 || height <= 0) {
      alert("Please upload an image and set valid dimensions.");
      return;
    }

    const img = new Image();
    img.src = originalImage;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        const fileType = originalFileRef.current?.type || 'image/jpeg';
        const resizedDataUrl = canvas.toDataURL(fileType, 0.9); // 0.9 क्वालिटी के लिए है
        setResizedImage(resizedDataUrl);
      }
    };
  };

  const inputStyle = {
    width: '100px',
    padding: '8px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  return (
    <main className="font-sans px-4 py-10 max-w-2xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-2 flex items-center justify-center gap-3">
          <Download className="w-10 h-10 text-blue-400 drop-shadow" />
          Image Resizer
        </h1>
        <p className="text-lg text-gray-700 font-medium">Resize your images online in seconds!</p>
      </header>

      <section className="bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 rounded-xl shadow-lg p-6 mb-8 border border-pink-200">
        <label className="block font-semibold mb-2 text-pink-700">1. Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} className="block w-full text-base border border-pink-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white" />
      </section>

      {originalImage && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-blue-600 mb-4">2. Set New Dimensions:</h2>
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <label className="mr-2 text-purple-600 font-semibold">Width:</label>
              <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value, 10))} className="w-24 p-2 border border-purple-300 rounded bg-white" />
            </div>
            <div>
              <label className="mr-2 text-purple-600 font-semibold">Height:</label>
              <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value, 10))} className="w-24 p-2 border border-purple-300 rounded bg-white" />
            </div>
            <button onClick={handleResize} className="px-5 py-2 text-base font-semibold rounded-xl bg-gradient-to-r from-pink-400 to-blue-400 text-white shadow hover:scale-105 transition">Resize Image</button>
          </div>
        </section>
      )}

      {resizedImage && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-600 mb-4">3. Your Resized Image:</h2>
          <img src={resizedImage} alt="Resized" className="max-w-full mt-4 border-2 border-green-300 rounded-xl shadow" />
          <div className="flex justify-center mt-6">
            <a href={resizedImage} download={`resized-${originalFileRef.current?.name || 'image'}`} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold shadow-lg hover:scale-105 transition border-2 border-green-500">
              <Download className="w-6 h-6" />
              Download
            </a>
          </div>
        </section>
      )}

      <footer className="text-center text-gray-500 text-base mt-10 bg-gradient-to-r from-blue-100 to-pink-100 py-4 rounded-t-xl shadow-inner">
        &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
      </footer>
    </main>
  );
}
