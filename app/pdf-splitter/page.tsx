"use client";

import { useState } from 'react';
import { Download, MinusCircle, CheckCircle, XCircle } from 'lucide-react';

// --- Toast/Notification Component ---
const Toast = ({ message, type, onClose }: { message: string; type: 'error' | 'success'; onClose: () => void }) => {
  const isError = type === 'error';
  return (
    <div
      className={`fixed bottom-5 right-5 z-50 p-4 rounded-lg shadow-xl flex items-center gap-3 transition-transform duration-300 transform ${
        message ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      } ${isError ? 'bg-red-500' : 'bg-green-500'} text-white`}
      role="alert"
    >
      {isError ? <XCircle className="w-6 h-6" /> : <CheckCircle className="w-6 h-6" />}
      <p className="font-semibold">{message}</p>
      <button onClick={onClose} className="ml-4 opacity-75 hover:opacity-100">
        <XCircle className="w-5 h-5" />
      </button>
    </div>
  );
};

export default function PdfSplitterPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pageNumbers, setPageNumbers] = useState('');
  const [isSplitting, setIsSplitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'error' | 'success' } | null>(null);

  const showToast = (message: string, type: 'error' | 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      setPdfFile(null);
      showToast("कृपया एक मान्य PDF फ़ाइल चुनें।", 'error');
    }
  };

  // पेज नंबर स्ट्रिंग को एरे में बदलना
  const parsePageNumbers = (pageString: string, maxPages: number): number[] => {
    const pages = new Set<number>();
    const parts = pageString.split(',');

    for (const part of parts) {
      if (part.includes('-')) {
        const [start, end] = part.split('-').map(num => parseInt(num.trim(), 10));
        if (!isNaN(start) && !isNaN(end) && start > 0 && end > 0 && start <= end) {
          for (let i = start; i <= end; i++) {
            if (i <= maxPages) pages.add(i - 1); // pdf-lib 0-indexed
          }
        }
      } else {
        const page = parseInt(part.trim(), 10);
        if (!isNaN(page) && page > 0 && page <= maxPages) {
          pages.add(page - 1);
        }
      }
    }
    return Array.from(pages).sort((a, b) => a - b);
  };

  const handleSplitPdf = async () => {
    if (!pdfFile || !pageNumbers) {
      showToast("कृपया PDF अपलोड करें और निकालने के लिए पेज नंबर दर्ज करें।", 'error');
      return;
    }

    setIsSplitting(true);
    showToast("PDF को विभाजित करना शुरू हो रहा है... कृपया प्रतीक्षा करें।", 'success');

    try {
      const { PDFDocument } = await import('pdf-lib');
      const existingPdfBytes = await pdfFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      const totalPages = pdfDoc.getPageCount();
      const pagesToExtract = parsePageNumbers(pageNumbers, totalPages);

      if (pagesToExtract.length === 0) {
        showToast(`कृपया 1 और ${totalPages} के बीच मान्य पेज नंबर दर्ज करें।`, 'error');
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
      link.download = `pdf_splitter_ai_extracted.pdf`;
      link.click();

      showToast("PDF सफलतापूर्वक विभाजित और डाउनलोड हो गई!", 'success');
    } catch (error) {
      console.error("Error splitting PDF:", error);
      showToast("PDF को विभाजित करते समय एक त्रुटि हुई।", 'error');
    } finally {
      setIsSplitting(false);
    }
  };

  return (
    <main className="font-sans px-4 py-10 max-w-4xl mx-auto min-h-screen flex flex-col justify-between">
      <div className="flex-grow">
        <header className="mb-10 text-center pt-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-3 flex items-center justify-center gap-3">
            <MinusCircle className="w-10 h-10 text-orange-500 drop-shadow-md" />
            PDF Splitter (PDF को विभाजित करें)
          </h1>
          <p className="text-lg text-gray-700 font-medium">अपनी PDF फ़ाइल से विशिष्ट पेज या पेज रेंज को अलग करें।</p>
          <div className="mt-4 text-sm text-green-700 bg-green-100 p-2 rounded-lg font-semibold border-l-4 border-green-500">
             ✅ डेटा सुरक्षा गारंटी: आपकी फ़ाइलें **आपके ब्राउज़र** में प्रोसेस होती हैं, हमारे सर्वर पर अपलोड नहीं होतीं।
          </div>
        </header>

        <section className="bg-white rounded-xl shadow-2xl p-8 mb-8 border-4 border-blue-300/50 grid gap-6">
          <label 
            htmlFor="pdf-upload" 
            className="block w-full text-center py-6 px-4 border-4 border-dashed border-orange-400 rounded-lg cursor-pointer hover:bg-orange-50 transition duration-300"
          >
            <input 
              id="pdf-upload"
              type="file" 
              accept="application/pdf"
              onChange={handleFileChange} 
              className="hidden"
            />
            <Download className="w-12 h-12 text-orange-500 mx-auto mb-2" />
            <span className="text-lg font-bold text-gray-800 block">
              {pdfFile ? `फ़ाइल चयनित: ${pdfFile.name}` : 'PDF फ़ाइल अपलोड करें'}
            </span>
            <span className="text-sm text-gray-500">केवल .pdf फॉर्मेट समर्थित है।</span>
          </label>
          
          <div>
            <label className="block font-bold mb-2 text-blue-700 text-lg">2. निकालने के लिए पेज नंबर दर्ज करें</label>
            <input 
              type="text"
              value={pageNumbers}
              onChange={(e) => setPageNumbers(e.target.value)}
              placeholder="उदाहरण: 1-3, 5, 8, 10-12"
              className="w-full p-3 border-2 border-blue-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <small className="text-gray-500 block mt-1">व्यक्तिगत पेजों के लिए कॉमा (,) और हाइफ़न (-) का प्रयोग पेज रेंज के लिए करें।</small>
          </div>
        </section>

        <div className="flex justify-center mt-8">
          <button 
            onClick={handleSplitPdf}
            disabled={isSplitting || !pdfFile || !pageNumbers}
            className={`flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 text-white font-extrabold shadow-xl transition transform duration-300 hover:scale-[1.03] border-4 border-white ${
              isSplitting || !pdfFile || !pageNumbers
                ? 'opacity-60 cursor-not-allowed bg-gray-400 hover:scale-100' 
                : 'shadow-blue-400/50'
            }`}
          >
            <Download className="w-6 h-6 animate-pulse" />
            {isSplitting ? 'पेज निकाले जा रहे हैं...' : 'PDF विभाजित करें और डाउनलोड करें'}
          </button>
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <footer className="text-center text-gray-500 text-base mt-16 bg-gray-50 py-4 rounded-t-xl shadow-inner border-t">
        &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
      </footer>
    </main>
  );
}
