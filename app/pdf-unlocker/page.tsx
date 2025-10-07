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
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>PDF Password Remover</h1>
        <p style={{ marginTop: '0.5rem', color: '#555' }}>Remove the password from your PDF file (password required).</p>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', display: 'grid', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>1. Upload Locked PDF</label>
          <input 
            type="file" 
            accept="application/pdf"
            onChange={handleFileChange} 
            style={{ fontSize: '1rem' }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>2. Enter PDF Password</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter current password"
            style={{ fontSize: '1rem', padding: '10px', width: '100%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
      </div>
      
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button 
          onClick={handleUnlockPdf}
          disabled={isUnlocking || !pdfFile || !password}
          style={{ 
            padding: '12px 25px', 
            fontSize: '1.2rem', 
            cursor: 'pointer', 
            border: 'none', 
            borderRadius: '5px', 
            backgroundColor: isUnlocking || !pdfFile || !password ? '#ccc' : '#dc3545', 
            color: 'white' 
          }}
        >
          {isUnlocking ? 'Unlocking...' : 'Unlock & Download PDF'}
        </button>
      </div>
    </main>
  );
}
