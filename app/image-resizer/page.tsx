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
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Image Resizer</h1>
        <p style={{ marginTop: '0.5rem', color: '#555' }}>Easily resize your images online.</p>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>1. Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {originalImage && (
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>2. Set New Dimensions:</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <div>
              <label>Width: </label>
              <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value, 10))} style={inputStyle} />
            </div>
            <div>
              <label>Height: </label>
              <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value, 10))} style={inputStyle} />
            </div>
            <button onClick={handleResize} style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', border: 'none', borderRadius: '5px', backgroundColor: '#0070f3', color: 'white' }}>
              Resize Image
            </button>
          </div>
        </div>
      )}

      {resizedImage && (
        <div style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>3. Your Resized Image:</h2>
          <img src={resizedImage} alt="Resized" style={{ maxWidth: '100%', marginTop: '1rem', border: '1px solid #ccc' }} />
          <a href={resizedImage} download={`resized-${originalFileRef.current?.name || 'image'}`} style={{ display: 'block', marginTop: '1rem', padding: '10px 20px', textAlign: 'center', fontSize: '1rem', cursor: 'pointer', border: 'none', borderRadius: '5px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none' }}>
            Download Resized Image
          </a>
        </div>
      )}
    </main>
  );
}
