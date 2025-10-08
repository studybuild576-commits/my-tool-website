"use client";

import { useState } from 'react';
import Head from 'next/head';
import { PDFDocument } from 'pdf-lib';
import { Download, FileText } from 'lucide-react';

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
  const ab = new ArrayBuffer(pdfBytes.length);
  const view = new Uint8Array(ab);
  view.set(pdfBytes);
  const blob = new Blob([ab], { type: 'application/pdf' });
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
    <>
      <Head>
        <title>JPG/PNG to PDF Converter | Free Online Tool</title>
        <meta name="description" content="Convert JPG and PNG images to PDF online. Combine multiple images into a single PDF file. Fast, free, and secure image to PDF converter." />
        <meta name="keywords" content="jpg to pdf, png to pdf, image to pdf, convert images to pdf, online pdf converter, free pdf tool, combine images pdf, photo to pdf" />
      </Head>
      <main className="font-sans px-4 py-10 max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-600 mb-2 flex items-center justify-center gap-3">
            <FileText className="w-10 h-10 text-pink-400 drop-shadow" />
            JPG/PNG to PDF Converter
          </h1>
          <p className="text-lg text-gray-700 font-medium">Combine multiple images into a single PDF file.</p>
        </header>

        <section className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-xl shadow-lg p-6 mb-8 text-center border-2 border-purple-200">
          <input 
            type="file" 
            accept="image/jpeg,image/png" 
            multiple
            onChange={handleFileChange} 
            className="block w-full text-base border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400 mx-auto bg-white"
          />
          {selectedImages && <p className="mt-4 text-purple-700 font-semibold">{selectedImages.length} image(s) selected.</p>}
        </section>

        <div className="flex justify-center mt-6">
          <button 
            onClick={handleConvertToPdf}
            disabled={isConverting || !selectedImages}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold shadow-lg hover:scale-105 transition border-2 border-purple-500 text-lg ${isConverting || !selectedImages ? 'bg-gray-400 cursor-not-allowed' : ''}`}
          >
            <Download className="w-6 h-6" />
            {isConverting ? 'Converting...' : 'Convert to PDF'}
          </button>
        </div>

        <footer className="text-center text-gray-500 text-base mt-10 bg-gradient-to-r from-blue-100 to-pink-100 py-4 rounded-t-xl shadow-inner">
          &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
        </footer>
      </main>
    </>
  );
}

