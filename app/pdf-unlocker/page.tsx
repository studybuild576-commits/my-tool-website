"use client";

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

export default function PdfUnlockerPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [password, setPassword] = useState('');
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPdfFile(file);
    }
  };

  const handleUnlockPdf = async () => {
    if (!pdfFile || !password) {
      alert("Please upload a PDF and enter its password.");
      return;
    }

    setIsUnlocking(true);
    try {
      const existingPdfBytes = await pdfFile.arrayBuffer();
      
      // पासवर्ड का उपयोग करके PDF को लोड करने का प्रयास करें
      const pdfDoc = await PDFDocument.load(existingPdfBytes, {
        password: password,
      });

      // PDF को बिना पासवर्ड के सेव करें
      const newPdfBytes = await pdfDoc.save();
      
      // नई PDF को डाउनलोड करें
      const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `unlocked-${pdfFile.name}`;
      link.click();

    } catch (error) {
      console.error("Error unlocking PDF:", error);
      alert("Failed to unlock PDF. Please double-check your password. This tool cannot crack unknown passwords.");
    } finally {
      setIsUnlocking(false);
    }
  };

  return (
    <main className="font-sans px-4 py-10 max-w-2xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">PDF Password Remover</h1>
        <p className="text-gray-600 text-lg">Remove the password from your PDF file (password required).</p>
      </header>

      <section className="bg-white rounded-lg shadow p-6 mb-8 grid gap-6">
        <div>
          <label className="block font-semibold mb-2 text-gray-700">1. Upload Locked PDF</label>
          <input 
            type="file" 
            accept="application/pdf"
            onChange={handleFileChange} 
            className="block w-full text-base border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2 text-gray-700">2. Enter PDF Password</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter current password"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </section>

      <div className="text-center mt-6">
        <button 
          onClick={handleUnlockPdf}
          disabled={isUnlocking || !pdfFile || !password}
          className={`px-6 py-3 text-lg font-semibold rounded transition text-white ${isUnlocking || !pdfFile || !password ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
        >
          {isUnlocking ? 'Unlocking...' : 'Unlock & Download PDF'}
        </button>
      </div>

      <footer className="text-center text-gray-400 text-sm mt-10">
        &copy; {new Date().getFullYear()} pdf-text-tools. All rights reserved.
      </footer>
    </main>
  );
}
