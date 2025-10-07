"use client";

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

export default function JpgToPdfPage() {
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);
  const [isConverting, setIsConverting] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedImages(event.target.files);
  };

  const handleConvertToPdf = async () => {
    if (!selectedImages || selectedImages.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    setIsConverting(true);
    try {
      // एक नया PDF डॉक्यूमेंट बनाएँ
      const pdfDoc = await PDFDocument.create();

      // हर एक इमेज के लिए
      for (let i = 0; i < selectedImages.length; i++) {
        const file = selectedImages[i];
        const imageBytes = await file.arrayBuffer();

        // इमेज को PDF में एम्बेड करें
        let image;
        if (file.type === 'image/png') {
          image = await pdfDoc.embedPng(imageBytes);
        } else {
          image = await pdfDoc.embedJpg(imageBytes);
        }

        // इमेज के साइज़ के हिसाब से पेज बनाएँ
        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, {
          x: 0,
          y: 0,
          width: image.width,
          height: image.height,
        });
      }

      // PDF को सेव और डाउनलोड करें
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'converted.pdf';
      link.click();

    } catch (error) {
      console.error("Error converting images to PDF:", error);
      alert("An error occurred while converting the images.");
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>JPG/PNG to PDF Converter</h1>
        <p style={{ marginTop: '0.5rem', color: '#555' }}>Combine multiple images into a single PDF file.</p>
      </div>

      <div style={{ marginTop: '2rem', padding: '2rem', border: '2px dashed #ccc', borderRadius: '8px', textAlign: 'center' }}>
        <input 
          type="file" 
          accept="image/jpeg,image/png" 
          multiple // यह एक साथ कई फाइलें चुनने की अनुमति देता है
          onChange={handleFileChange} 
          style={{ fontSize: '1rem' }}
        />
        {selectedImages && <p style={{ marginTop: '1rem' }}>{selectedImages.length} image(s) selected.</p>}
      </div>
      
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button 
          onClick={handleConvertToPdf}
          disabled={isConverting || !selectedImages}
          style={{ 
            padding: '12px 25px', 
            fontSize: '1.2rem', 
            cursor: 'pointer', 
            border: 'none', 
            borderRadius: '5px', 
            backgroundColor: isConverting || !selectedImages ? '#ccc' : '#0070f3', 
            color: 'white' 
          }}
        >
          {isConverting ? 'Converting...' : 'Convert to PDF'}
        </button>
      </div>
    </main>
  );
}

