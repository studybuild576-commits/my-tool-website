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
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Image Format Converter</h1>
        <p style={{ marginTop: '0.5rem', color: '#555' }}>Convert your images to JPG, PNG, or WEBP.</p>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', display: 'grid', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>1. Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        {originalImageUrl && <img src={originalImageUrl} alt="Preview" style={{ maxWidth: '100%', marginTop: '1rem' }} />}
      </div>

      {originalFile && (
        <div style={{ marginTop: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>2. Choose Format to Convert to:</label>
          <select value={targetFormat} onChange={(e) => setTargetFormat(e.target.value)} style={selectStyle}>
            <option value="image/png">PNG</option>
            <option value="image/jpeg">JPG</option>
            <option value="image/webp">WEBP</option>
          </select>
        </div>
      )}

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button 
          onClick={handleConvert}
          disabled={isConverting || !originalFile}
          style={{ 
            padding: '12px 25px', 
            fontSize: '1.2rem', 
            cursor: 'pointer', 
            border: 'none', 
            borderRadius: '5px', 
            backgroundColor: isConverting || !originalFile ? '#ccc' : '#0070f3', 
            color: 'white' 
          }}
        >
          {isConverting ? 'Converting...' : 'Convert & Download'}
        </button>
      </div>
    </main>
  );
}
