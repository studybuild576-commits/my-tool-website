"use client";

import { useState, useRef } from 'react';

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
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">Image Resizer</h1>
        <p className="text-gray-600 text-lg">Easily resize your images online.</p>
      </header>

      <section className="bg-white rounded-lg shadow p-6 mb-8">
        <label className="block font-semibold mb-2 text-gray-700">1. Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} className="block w-full text-base border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </section>

      {originalImage && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">2. Set New Dimensions:</h2>
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <label className="mr-2">Width:</label>
              <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value, 10))} className="w-24 p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="mr-2">Height:</label>
              <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value, 10))} className="w-24 p-2 border border-gray-300 rounded" />
            </div>
            <button onClick={handleResize} className="px-5 py-2 text-base font-semibold rounded bg-blue-600 text-white hover:bg-blue-700 transition">Resize Image</button>
          </div>
        </section>
      )}

      {resizedImage && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">3. Your Resized Image:</h2>
          <img src={resizedImage} alt="Resized" className="max-w-full mt-4 border border-gray-300 rounded" />
          <a href={resizedImage} download={`resized-${originalFileRef.current?.name || 'image'}`} className="block mt-4 px-5 py-2 text-center text-base font-semibold rounded bg-green-600 text-white hover:bg-green-700 transition">Download Resized Image</a>
        </section>
      )}

      <footer className="text-center text-gray-400 text-sm mt-10">
        &copy; {new Date().getFullYear()} pdf-text-tools. All rights reserved.
      </footer>
    </main>
  );
}
