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
      const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
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
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>PDF Splitter</h1>
        <p style={{ marginTop: '0.5rem', color: '#555' }}>Extract specific pages from a PDF file.</p>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', display: 'grid', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>1. Upload PDF File</label>
          <input 
            type="file" 
            accept="application/pdf"
            onChange={handleFileChange} 
            style={{ fontSize: '1rem' }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>2. Enter Pages to Extract</label>
          <input 
            type="text"
            value={pageNumbers}
            onChange={(e) => setPageNumbers(e.target.value)}
            placeholder="e.g., 1-3, 5, 8"
            style={{ fontSize: '1rem', padding: '10px', width: '100%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <small style={{ color: '#666' }}>Use commas for individual pages and hyphens for ranges.</small>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button 
          onClick={handleSplitPdf}
          disabled={isSplitting || !pdfFile}
          style={{ 
            padding: '12px 25px', 
            fontSize: '1.2rem', 
            cursor: 'pointer', 
            border: 'none', 
            borderRadius: '5px', 
            backgroundColor: isSplitting || !pdfFile ? '#ccc' : '#0070f3', 
            color: 'white' 
          }}
        >
          {isSplitting ? 'Splitting...' : 'Split PDF & Download'}
        </button>
      </div>
    </main>
  );
}
