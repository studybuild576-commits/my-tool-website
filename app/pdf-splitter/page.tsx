import React, { useState, useEffect, useCallback } from 'react';

// Define types for state variables
interface PDFFile {
  name: string;
  size: number;
  pages: number;
  data: ArrayBuffer;
}

interface SplitRange {
  start: number;
  end: number;
  fileName: string;
  status: 'pending' | 'downloaded' | 'processing';
}

// Global reference for the dynamically imported library
let PDFLib: any = null;

const SplitterPage = () => {
  const [pdfFile, setPdfFile] = useState<PDFFile | null>(null);
  const [splitRanges, setSplitRanges] = useState<SplitRange[]>([]);
  const [isLoadingLib, setIsLoadingLib] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 1. Dynamic Import pdf-lib client-side only
  useEffect(() => {
    // We use a dynamic import here to ensure pdf-lib is only loaded in the browser (client-side), 
    // bypassing potential server-side module resolution errors in Next.js builds.
    import('pdf-lib').then(lib => {
      PDFLib = lib;
      setIsLoadingLib(false);
    }).catch(err => {
      console.error("Failed to load pdf-lib dynamically:", err);
      setError("PDF library load hone mein vifal rahi. Kripya page reload karein.");
    });
  }, []);
  
  // Utility to check if a range is valid
  const isRangeValid = useCallback((range: SplitRange) => {
    if (!pdfFile) return false;
    return range.start >= 1 && range.end <= pdfFile.pages && range.start <= range.end;
  }, [pdfFile]);

  // Utility to update the total pages selected message
  const getPagesCovered = useCallback(() => {
    if (!pdfFile) return 0;
    return splitRanges.reduce((sum, range) => {
      if (isRangeValid(range)) {
        return sum + (range.end - range.start + 1);
      }
      return sum;
    }, 0);
  }, [pdfFile, splitRanges, isRangeValid]);
  
  // 2. File Change Handler
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setError('Kripya ek valid PDF file upload karein.');
      return;
    }

    if (!PDFLib || !PDFLib.PDFDocument) {
      setError('PDF library abhi bhi load ho rahi hai ya load hone mein vifal rahi.');
      return;
    }

    setIsProcessing(true);
    setError(null);
    setPdfFile(null);
    setSplitRanges([]);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
      const numPages = pdfDoc.getPageCount();

      const newPdfFile: PDFFile = {
        name: file.name,
        size: file.size,
        pages: numPages,
        data: arrayBuffer,
      };
      setPdfFile(newPdfFile);

      // Set initial range (1 to N)
      setSplitRanges([{
        start: 1,
        end: numPages,
        fileName: `split_1_to_${numPages}.pdf`,
        status: 'pending'
      }]);

    } catch (err) {
      console.error(err);
      setError('File load karne mein error. Kripya nischit karein ki PDF valid hai.');
    } finally {
      setIsProcessing(false);
    }
  };

  // 3. Download Logic (Core Fix is here)
  const downloadSplitPdf = async (index: number) => {
    const range = splitRanges[index];
    if (!pdfFile || !range || !isRangeValid(range) || isProcessing) return;

    setIsProcessing(true);
    const originalStatus = range.status;
    
    // Update status to processing visually
    setSplitRanges(prev => prev.map((r, i) => i === index ? { ...r, status: 'processing' } : r));

    try {
      const originalPdfDoc = await PDFLib.PDFDocument.load(pdfFile.data);
      const newPdfDoc = await PDFLib.PDFDocument.create();

      // Pages are 1-indexed in UI, 0-indexed in PDF-lib
      const pagesIndices = Array.from(
        { length: range.end - range.start + 1 }, 
        (_, i) => range.start - 1 + i 
      );

      const copiedPages = await newPdfDoc.copyPages(originalPdfDoc, pagesIndices);
      copiedPages.forEach((page: any) => newPdfDoc.addPage(page));

      const newPdfBytes = await newPdfDoc.save(); // Uint8Array output

      // FIX: The Uint8Array output from pdfDoc.save() is passed directly. 
      // The previous error was a strict TypeScript check issue; passing the array directly 
      // is the standard practice, which should be fine if 'pdf-lib' is installed correctly.
      const blob = new Blob([newPdfBytes], { type: 'application/pdf' }); 
      
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = range.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

      // Success: Update status to downloaded
      setSplitRanges(prev => prev.map((r, i) => i === index ? { ...r, status: 'downloaded' } : r));

    } catch (err) {
      console.error("Download error:", err);
      setError('File split aur download karne mein error aayi.');
      // Revert status on failure
      setSplitRanges(prev => prev.map((r, i) => i === index ? { ...r, status: originalStatus } : r));
    } finally {
      setIsProcessing(false);
    }
  };

  // 4. Range Management Handlers
  const handleRangeInputChange = (index: number, field: 'start' | 'end', value: string) => {
    let numValue = parseInt(value);

    if (isNaN(numValue) || numValue < 1) {
      numValue = 1;
    } else if (pdfFile && numValue > pdfFile.pages) {
      numValue = pdfFile.pages;
    }
    
    setSplitRanges(prev => prev.map((r, i) => {
      if (i === index) {
        const updatedRange = { ...r, [field]: numValue };
        return {
          ...updatedRange,
          fileName: `split_${updatedRange.start}_to_${updatedRange.end}.pdf`,
          status: 'pending' // Reset status on range change
        };
      }
      return r;
    }));
    setError(null);
  };
  
  const addRange = () => {
    if (!pdfFile) return;
    
    const lastEnd = splitRanges[splitRanges.length - 1]?.end || 0;
    const defaultStart = lastEnd + 1;
    
    if (defaultStart > pdfFile.pages) {
      setError('Sabhi page pehle hi cover kiye ja chuke hain.');
      return;
    }

    const newRange: SplitRange = {
      start: defaultStart,
      end: pdfFile.pages,
      fileName: `split_${defaultStart}_to_${pdfFile.pages}.pdf`,
      status: 'pending'
    };
    setSplitRanges(prev => [...prev, newRange]);
    setError(null);
  };

  const deleteRange = (index: number) => {
    setSplitRanges(prev => prev.filter((_, i) => i !== index));
    setError(null);
  };
  
  // UI Render Logic

  const renderFileUploader = () => (
    <section className="bg-white rounded-xl shadow-2xl p-6 mb-10 border-t-4 border-indigo-500">
      <div className="flex flex-col items-center justify-center p-12 border-4 border-dashed border-indigo-300 rounded-xl cursor-pointer transition-all bg-indigo-50 hover:border-indigo-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-upload text-indigo-500 mb-3"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
        <span className="text-xl font-semibold text-gray-700">Apni PDF file chunein</span>
        <span className="text-sm text-gray-500 mt-1">Ya yahan drag aur drop karein</span>
        <input 
          type="file" 
          id="pdf-file-input" 
          accept="application/pdf" 
          className="hidden"
          onChange={handleFileChange}
          disabled={isProcessing || isLoadingLib}
        />
        <label htmlFor="pdf-file-input" className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold shadow-lg hover:bg-indigo-700 transition cursor-pointer disabled:bg-gray-400">
          {isProcessing ? 'Processing...' : (isLoadingLib ? 'Loading Library...' : 'Select File')}
        </label>
      </div>
    </section>
  );

  const renderSplitRanges = () => (
    <section className="bg-white rounded-xl shadow-2xl p-6 mb-10 border-t-4 border-green-500">
      <div className="text-center mb-4">
        <p className="text-xl font-bold text-gray-700">Page Range Chunein</p>
        <p className="text-sm text-gray-500">
          File: <span className="font-semibold text-indigo-600">{pdfFile?.name}</span> | Total Pages: {pdfFile?.pages}
        </p>
      </div>
      
      <div id="split-ranges-container" className="space-y-4 max-h-80 overflow-y-auto pr-2">
        {splitRanges.map((range, index) => {
          const isValid = isRangeValid(range);
          const downloadDisabled = !isValid || isProcessing || range.status === 'processing';
          
          return (
            <div key={index} className={`p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 ${isValid ? 'bg-white border border-gray-300' : 'bg-red-100 border-2 border-red-500'}`}>
              <span className="font-bold text-lg text-indigo-600 w-6 flex-shrink-0">{index + 1}.</span>
              
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-600">Start:</label>
                <input
                  type="number"
                  min="1"
                  max={pdfFile?.pages}
                  value={range.start}
                  onChange={(e) => handleRangeInputChange(index, 'start', e.target.value)}
                  className="w-16 p-2 border rounded-md text-center focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                />
              </div>

              <span className="text-gray-500">-</span>
              
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-600">End:</label>
                <input
                  type="number"
                  min="1"
                  max={pdfFile?.pages}
                  value={range.end}
                  onChange={(e) => handleRangeInputChange(index, 'end', e.target.value)}
                  className="w-16 p-2 border rounded-md text-center focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                />
              </div>

              <div className="flex gap-2 mt-2 sm:mt-0">
                <button 
                  onClick={() => downloadSplitPdf(index)}
                  className={`flex items-center px-4 py-2 text-white rounded-lg shadow-md transition ${range.status === 'downloaded' ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-500 hover:bg-indigo-600'} disabled:bg-gray-400 disabled:cursor-not-allowed text-sm font-medium`}
                  disabled={downloadDisabled}
                >
                  {range.status === 'processing' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Processing...
                    </>
                  ) : range.status === 'downloaded' ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                      Downloaded
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                      Download
                    </>
                  )}
                </button>

                {splitRanges.length > 1 && (
                  <button 
                    onClick={() => deleteRange(index)}
                    className="text-red-500 hover:text-red-700 p-2 rounded-full transition disabled:opacity-50"
                    disabled={isProcessing}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                )}
              </div>
              
              {!isValid && (
                <p className="text-xs text-red-600 w-full sm:w-auto mt-2 sm:mt-0 sm:ml-auto">Invalid range.</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center pt-4 border-t mt-4">
          <button 
              onClick={addRange}
              className="px-4 py-2 text-sm font-medium border border-indigo-500 text-indigo-600 rounded-lg hover:bg-indigo-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isProcessing}
          >
              + Naya Range Jodein
          </button>
          
          <span className={`flex items-center gap-1 ${getPagesCovered() === pdfFile?.pages ? 'text-green-600' : 'text-yellow-600'} font-semibold text-sm`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            <span className="font-bold">{getPagesCovered()}</span> / {pdfFile?.pages} Pages Covered
          </span>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #f4f7fa; }
      `}</style>
      <main className="max-w-4xl mx-auto">
        <header className="mb-10 text-center pt-5">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-split text-indigo-600"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22V8"/><path d="m16 8-4 4-4-4"/></svg>
                PDF Splitter Tool (PDF Vibhajit Karein)
            </h1>
            <p className="text-lg text-gray-600 font-medium">Client-side suraksha ke saath apni PDF files ko aasaani se split karein.</p>
        </header>

        {/* Status Indicators */}
        {(isLoadingLib) && (
          <div className="text-center p-6 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg shadow-md mb-6 flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            PDF Library load ho rahi hai...
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg flex items-center gap-3 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle w-5 h-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/></svg>
            <p className="font-medium">{error}</p>
          </div>
        )}
        
        {/* Main Content Area */}
        {pdfFile ? renderSplitRanges() : renderFileUploader()}
        
      </main>
    </div>
  );
};

export default SplitterPage;
