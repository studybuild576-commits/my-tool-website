"use client";

import { useState } from 'react';
import { Download, MinusCircle, CheckCircle, XCircle } from 'lucide-react';

// --- टोस्ट/नोटिफिकेशन कंपोनेंट (AdSense के लिए alert() का विकल्प) ---
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
    setTimeout(() => setToast(null), 4000); // 4 सेकंड बाद टोस्ट हटा दें
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

  // यह फंक्शन पेज नंबर की स्ट्रिंग को नंबर के एरे में बदलता है (जैसे "1-3, 5" को [0, 1, 2, 4] में)
  const parsePageNumbers = (pageString: string, maxPages: number): number[] => {
    const pages = new Set<number>();
    const parts = pageString.split(',');
    
    for (const part of parts) {
      if (part.includes('-')) {
        const [start, end] = part.split('-').map(num => parseInt(num.trim(), 10));
        if (!isNaN(start) && !isNaN(end) && start > 0 && end > 0 && start <= end) {
          for (let i = start; i <= end; i++) {
            if (i <= maxPages) pages.add(i - 1); // pdf-lib 0-indexed होता है
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
      showToast("कृपया PDF अपलोड करें और निकालने के लिए पेज नंबर दर्ज करें।", 'error');
      return;
    }

    setIsSplitting(true);
    showToast("PDF को विभाजित करना शुरू हो रहा है... कृपया प्रतीक्षा करें।", 'success');

    try {
      // Dynamic import of pdf-lib to avoid compilation errors
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
      // copyPages फंक्शन 0-indexed पेज नंबरों का एरे लेता है।
      const copiedPages = await newPdfDoc.copyPages(pdfDoc, pagesToExtract);
      copiedPages.forEach(page => newPdfDoc.addPage(page));

      const newPdfBytes = await newPdfDoc.save();
      
      // Downloading the PDF
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
      
      {/* --- टूल UI सेक्शन --- */}
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
              className="hidden" // इनपुट को छिपाना
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
        
        {/* --- Content Article Section --- */}
        <section className="mt-20 prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2 text-blue-600">PDF Splitter: अपनी PDF से पेज निकालने का सबसे आसान और सुरक्षित तरीका</h2>

          <p className="lead text-lg font-medium text-gray-700">
            क्या आपको किसी बड़ी PDF फ़ाइल से कुछ ही पेज की ज़रूरत है? हमारा **ऑनलाइन PDF Splitter** टूल आपको मिनटों में यह काम करने में मदद करता है। यह पूरी तरह से **मुफ्त** है और **क्लाइंट-साइड प्रोसेसिंग** तकनीक के कारण आपकी फ़ाइलों की **गोपनीयता** बनाए रखता है।
          </p>

          <h3 className="text-2xl font-bold text-gray-800 pt-4 text-orange-500">PDF को विभाजित (Split) कैसे करें: सरल चरण-दर-चरण मार्गदर्शिका</h3>
          <p>
            हमारे **PDF Extractor** टूल का उपयोग करके विशिष्ट पेज या पेज की रेंज को अलग करना बहुत आसान है। किसी जटिल सॉफ्टवेयर की आवश्यकता नहीं है—सिर्फ़ तीन आसान स्टेप्स फॉलो करें:
          </p>
          <ol>
            <li><strong>PDF अपलोड करें:</strong> ऊपर दिए गए "PDF फ़ाइल अपलोड करें" क्षेत्र पर क्लिक करें। अपनी डिवाइस से वह **PDF** फ़ाइल चुनें जिसे आप विभाजित करना चाहते हैं। ध्यान दें: फ़ाइल आपके **ब्राउज़र** में रहती है, हमारे सर्वर पर **अपलोड नहीं** होती।</li>
            <li><strong>पेज नंबर दर्ज करें:</strong> टेक्स्ट बॉक्स में उन सभी पेज नंबरों को दर्ज करें जिन्हें आप निकालना चाहते हैं। आप **कॉमा** (,) का उपयोग करके व्यक्तिगत पेज (जैसे: **2, 5, 10**) को अलग कर सकते हैं और **हाइफ़न** (-) का उपयोग करके पेज रेंज (जैसे: **15-20**) को निर्दिष्ट कर सकते हैं।</li>
            <li><strong>विभाजित करें और डाउनलोड करें:</strong> "PDF विभाजित करें और डाउनलोड करें" बटन पर क्लिक करें। टूल तुरंत आपके द्वारा निर्दिष्ट पेज को एक नई **PDF** फ़ाइल में निकाल देगा और यह आपके डाउनलोड फ़ोल्डर में उपलब्ध हो जाएगी।</li>
          </ol>

          <h3 className="text-2xl font-bold text-gray-800 pt-4 text-blue-600">हमारा PDF Splitter क्यों सर्वश्रेष्ठ है? (गोपनीयता और गति)</h3>
          <p>
            बाजार में कई टूल हैं जो PDF को विभाजित करने की पेशकश करते हैं, लेकिन हमारा टूल निम्नलिखित कारणों से अलग है:
          </p>
          
          <h4 className="text-xl font-semibold text-gray-700 mt-4">🛡️ क्लाइंट-साइड प्रोसेसिंग: आपकी फ़ाइलें 100% सुरक्षित</h4>
          <p>
            यह हमारी सबसे महत्वपूर्ण विशेषता है। जब आप कोई फ़ाइल अपलोड करते हैं, तो वह कभी भी हमारे क्लाउड सर्वर पर नहीं भेजी जाती। विभाजन (Splitting) की पूरी प्रक्रिया **आपके ब्राउज़र** में जावास्क्रिप्ट का उपयोग करके पूरी होती है।
          </p>
          <ul>
            <li>**कोई डेटा ट्रांसफ़र नहीं:** आपकी गोपनीय या निजी फ़ाइलें कभी भी इंटरनेट पर ट्रांसफ़र नहीं होती हैं।</li>
            <li>**तत्काल विलोपन:** प्रोसेसिंग खत्म होने के तुरंत बाद, फ़ाइलें आपकी डिवाइस की मेमोरी से हटा दी जाती हैं।</li>
            <li>**गोपनीयता:** चूंकि हम कोई व्यक्तिगत डेटा या फ़ाइलें नहीं संभालते, यह आपकी गोपनीयता की सुरक्षा करता है।</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-700 mt-4">⚡ तेज़ और सटीक पेज एक्सट्रैक्शन</h4>
          <p>
            हम **pdf-lib** नामक एक शक्तिशाली लाइब्रेरी का उपयोग करते हैं जो बहुत तेज़ी से काम करती है।
          </p>
          <ul>
            <li><strong>सटीक रेंज पार्सिंग:</strong> हमारा टूल आपके इनपुट (**1-3, 5, 8-10** जैसे जटिल इनपुट) को समझने और उन्हें सही ढंग से निकालने में सक्षम है।</li>
            <li><strong>तेज़ प्रदर्शन:</strong> सर्वर अपलोड का इंतज़ार किए बिना, आपको लगभग **तत्काल** परिणाम मिलते हैं, खासकर छोटी फ़ाइलों के लिए।</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 pt-4 text-orange-500">PDF विभाजन (Splitting) के व्यावहारिक उपयोग</h3>
          <p>
            एक PDF को विभाजित करना कई स्थितियों में महत्वपूर्ण हो सकता है:
          </p>
          
          <h4 className="text-xl font-semibold text-gray-700 mt-4">1. फ़ाइल साइज़ प्रबंधन (File Size Management)</h4>
          <p>
            बड़ी रिपोर्ट या ई-बुक्स को छोटे, प्रबंधनीय हिस्सों में विभाजित करने से उन्हें ईमेल करना या सीमित बैंडविड्थ वाले उपयोगकर्ताओं के साथ साझा करना आसान हो जाता है। आप केवल उस हिस्से को भेज सकते हैं जिसकी आवश्यकता है, जिससे समय और डेटा दोनों की बचत होती है।
          </p>

          <h4 className="text-xl font-semibold text-gray-700 mt-4">2. दस्तावेज़ पुनर्व्यवस्था (Document Reorganization)</h4>
          <p>
            यदि आपके पास स्कैन किए गए दस्तावेज़ों का एक बैच है और आपको उन्हें अलग-अलग फ़ाइलों में व्यवस्थित करना है (जैसे: इनवॉइस, कॉन्ट्रैक्ट, रेज़्यूमे), तो यह टूल आपको प्रत्येक पेज को एक नई **PDF फ़ाइल** में निकालने में मदद करता है।
          </p>

          <h4 className="text-xl font-semibold text-gray-700 mt-4">3. गोपनीयता बनाए रखना</h4>
          <p>
            यदि किसी दस्तावेज़ में कुछ गोपनीय पेज हैं जिन्हें आपको साझा नहीं करना है, तो आप केवल **सार्वजनिक पेज** को अलग करके एक नई **PDF** बना सकते हैं, जबकि मूल फ़ाइल को निजी रख सकते हैं।
          </p>

          <h3 className="text-2xl font-bold text-gray-800 pt-4 text-blue-600">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h3>

          <h4 className="text-xl font-semibold text-gray-700 mt-4">Q. PDF Splitter के लिए मैं पेज नंबर कैसे लिखूँ?</h4>
          <p>
            A. आप अलग-अलग पेज के लिए **2, 5, 8** का उपयोग कर सकते हैं। पेज रेंज के लिए **10-15** का उपयोग करें। यदि आप पेज **1, 2, 3, 5, 10, 11, 12** को अलग करना चाहते हैं, तो आप **1-3, 5, 10-12** दर्ज कर सकते हैं।
          </p>
          
          <h4 className="text-xl font-semibold text-gray-700 mt-4">Q. क्या यह टूल मेरी PDF की गुणवत्ता (Quality) को कम करता है?</h4>
          <p>
            A. नहीं। हमारा टूल केवल निर्दिष्ट पेज को मूल फ़ाइल से **कॉपी** करता है। यह पेज की गुणवत्ता, फ़ॉन्ट या लेआउट में कोई बदलाव नहीं करता है। आपको वही उच्च-गुणवत्ता वाली **PDF फ़ाइल** वापस मिलेगी।
          </p>

          <h4 className="text-xl font-semibold text-gray-700 mt-4">Q. यह टूल मेरे लिए कितना तेज़ काम करेगा?</h4>
          <p>
            A. चूंकि यह **क्लाइंट-साइड प्रोसेसिंग** का उपयोग करता है, इसकी गति आपके कंप्यूटर के प्रदर्शन और फ़ाइल के साइज़ पर निर्भर करती है। आमतौर पर, **100 पेज** तक की फ़ाइलें **10 सेकंड** के भीतर प्रोसेस हो जाती हैं।
          </p>

          <h4 className="text-xl font-semibold text-gray-700 mt-4">Q. क्या PDF Splitter मुफ़्त है?</h4>
          <p>
            A. हाँ, यह टूल उपयोग करने के लिए पूरी तरह से मुफ़्त है, और इसकी कोई सीमा नहीं है। आप जितनी चाहें उतनी बार **PDF** को विभाजित कर सकते हैं।
          </p>
          
          <p className="mt-8 text-xl font-bold text-center text-gray-800">
            हमारे सुरक्षित और तेज़ **PDF Splitter** का उपयोग करके अपने दस्तावेज़ों को कुशलतापूर्वक प्रबंधित करें!
          </p>
        </section>

      </div>
      
      {/* Toast Notification */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <footer className="text-center text-gray-500 text-base mt-16 bg-gray-50 py-4 rounded-t-xl shadow-inner border-t">
        &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
      </footer>
    </main>
  );
}
