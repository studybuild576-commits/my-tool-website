"use client";

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Download } from 'lucide-react';

export default function PdfSplitterPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pageNumbers, setPageNumbers] = useState('');
  const [isSplitting, setIsSplitting] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPdfFile(file);
    }
  };

  // यह फंक्शन पेज नंबर की स्ट्रिंग को नंबर के एरे में बदलता है (जैसे "1-3, 5" को [0, 1, 2, 4] में)
  const parsePageNumbers = (pageString: string, maxPages: number): number[] => {
    const pages = new Set<number>();
    const parts = pageString.split(',');
    
    for (const part of parts) {
      if (part.includes('-')) {
        const [start, end] = part.split('-').map(num => parseInt(num.trim(), 10));
        if (!isNaN(start) && !isNaN(end)) {
          for (let i = start; i <= end; i++) {
            if (i > 0 && i <= maxPages) pages.add(i - 1); // pdf-lib 0-indexed होता है
          }
        }
      } else {
        const page = parseInt(part.trim(), 10);
        if (!isNaN(page) && page > 0 && page <= maxPages) {
          pages.add(page - 1); // pdf-lib 0-indexed होता है
        }
      }
    }
    return Array.from(pages).sort((a, b) => a - b);
  };

  const handleSplitPdf = async () => {
    if (!pdfFile || !pageNumbers) {
      alert("Please upload a PDF and enter the page numbers to extract.");
      return;
    }

    setIsSplitting(true);
    try {
      const existingPdfBytes = await pdfFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      
      const totalPages = pdfDoc.getPageCount();
      const pagesToExtract = parsePageNumbers(pageNumbers, totalPages);

      if (pagesToExtract.length === 0) {
        alert("Please enter valid page numbers to extract.");
        setIsSplitting(false);
        return;
      }
      
      const newPdfDoc = await PDFDocument.create();
      const copiedPages = await newPdfDoc.copyPages(pdfDoc, pagesToExtract);
      copiedPages.forEach(page => newPdfDoc.addPage(page));

  const newPdfBytes = await newPdfDoc.save();
  const ab = new ArrayBuffer(newPdfBytes.length);
  const view = new Uint8Array(ab);
  view.set(newPdfBytes);
  const blob = new Blob([ab], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `split-${pdfFile.name}`;
      link.click();

    } catch (error) {
      console.error("Error splitting PDF:", error);
      alert("An error occurred while splitting the PDF.");
    } finally {
      setIsSplitting(false);
    }
  };

  return (
    <main className="font-sans px-4 py-10 max-w-2xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 flex items-center justify-center gap-3">
          <Download className="w-10 h-10 text-pink-400 drop-shadow" />
          PDF Splitter
        </h1>
        <p className="text-lg text-gray-700 font-medium">Extract specific pages from a PDF file.</p>
      </header>

      <section className="bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 rounded-xl shadow-lg p-6 mb-8 border border-blue-200 grid gap-6">
        <div>
          <label className="block font-semibold mb-2 text-blue-700">1. Upload PDF File</label>
          <input 
            type="file" 
            accept="application/pdf"
            onChange={handleFileChange} 
            className="block w-full text-base border border-blue-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2 text-blue-700">2. Enter Pages to Extract</label>
          <input 
            type="text"
            value={pageNumbers}
            onChange={(e) => setPageNumbers(e.target.value)}
            placeholder="e.g., 1-3, 5, 8"
            className="w-full p-2 border border-blue-300 rounded bg-white"
          />
          <small className="text-gray-500">Use commas for individual pages and hyphens for ranges.</small>
        </div>
      </section>

      <div className="flex justify-center mt-6">
        <button 
          onClick={handleSplitPdf}
          disabled={isSplitting || !pdfFile}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-400 to-pink-400 text-white font-bold shadow-lg hover:scale-105 transition border-2 border-blue-500 text-lg ${isSplitting || !pdfFile ? 'bg-gray-400 cursor-not-allowed' : ''}`}
        >
          <Download className="w-6 h-6" />
          {isSplitting ? 'Splitting...' : 'Split PDF & Download'}
        </button>
      </div>

      <footer className="text-center text-gray-500 text-base mt-10 bg-gradient-to-r from-blue-100 to-pink-100 py-4 rounded-t-xl shadow-inner">
        &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
      </footer>
    </main>
  );
}
