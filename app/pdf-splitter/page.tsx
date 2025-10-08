"use client";

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

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
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">PDF Splitter</h1>
        <p className="text-gray-600 text-lg">Extract specific pages from a PDF file.</p>
      </header>

      <section className="bg-white rounded-lg shadow p-6 mb-8 grid gap-6">
        <div>
          <label className="block font-semibold mb-2 text-gray-700">1. Upload PDF File</label>
          <input 
            type="file" 
            accept="application/pdf"
            onChange={handleFileChange} 
            className="block w-full text-base border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2 text-gray-700">2. Enter Pages to Extract</label>
          <input 
            type="text"
            value={pageNumbers}
            onChange={(e) => setPageNumbers(e.target.value)}
            placeholder="e.g., 1-3, 5, 8"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <small className="text-gray-500">Use commas for individual pages and hyphens for ranges.</small>
        </div>
      </section>

      <div className="text-center mt-6">
        <button 
          onClick={handleSplitPdf}
          disabled={isSplitting || !pdfFile}
          className={`px-6 py-3 text-lg font-semibold rounded transition text-white ${isSplitting || !pdfFile ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isSplitting ? 'Splitting...' : 'Split PDF & Download'}
        </button>
      </div>

      <footer className="text-center text-gray-400 text-sm mt-10">
        &copy; {new Date().getFullYear()} pdf-text-tools. All rights reserved.
      </footer>
    </main>
  );
}
