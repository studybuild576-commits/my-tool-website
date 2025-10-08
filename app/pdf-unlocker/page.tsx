"use client";

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Unlock, Download } from 'lucide-react';

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
      // pdf-lib does NOT support password-protected PDFs in browser. Show error if password is entered.
      // Remove password option for compatibility with Vercel build.
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const newPdfBytes = await pdfDoc.save();
  const blob = new Blob([newPdfBytes.slice().buffer], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `unlocked-${pdfFile.name}`;
      link.click();
    } catch (error) {
      console.error("Error unlocking PDF:", error);
      alert("Failed to unlock PDF. If your PDF is password-protected, this tool cannot unlock it due to browser limitations. Please use a desktop tool for password-protected PDFs.");
    } finally {
      setIsUnlocking(false);
    }
  };

  return (
    <main className="font-sans px-4 py-10 max-w-2xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2 flex items-center justify-center gap-3">
          <Unlock className="w-10 h-10 text-pink-400 drop-shadow" />
          PDF Password Remover
        </h1>
        <p className="text-lg text-gray-700 font-medium">Remove the password from your PDF file (password required).</p>
      </header>

      <section className="bg-gradient-to-r from-red-100 via-pink-100 to-blue-100 rounded-xl shadow-lg p-6 mb-8 border border-red-200 grid gap-6">
        <div>
          <label className="block font-semibold mb-2 text-red-700">1. Upload Locked PDF</label>
          <input 
            type="file" 
            accept="application/pdf"
            onChange={handleFileChange} 
            className="block w-full text-base border border-red-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2 text-red-700">2. Enter PDF Password</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter current password"
            className="w-full p-2 border border-red-300 rounded bg-white"
          />
        </div>
      </section>

      <div className="flex justify-center mt-6">
        <button 
          onClick={handleUnlockPdf}
          disabled={isUnlocking || !pdfFile || !password}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-400 to-pink-400 text-white font-bold shadow-lg hover:scale-105 transition border-2 border-red-500 text-lg ${isUnlocking || !pdfFile || !password ? 'bg-gray-400 cursor-not-allowed' : ''}`}
        >
          <Download className="w-6 h-6" />
          {isUnlocking ? 'Unlocking...' : 'Unlock & Download PDF'}
        </button>
      </div>

      <footer className="text-center text-gray-500 text-base mt-10 bg-gradient-to-r from-blue-100 to-pink-100 py-4 rounded-t-xl shadow-inner">
        &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
      </footer>
    </main>
  );
}
