"use client";

import { useState } from 'react';
import { Download, FileText, XCircle, CheckCircle } from 'lucide-react';

// --- टोस्ट/नोटिफिकेशन कंपोनेंट ---
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

export default function JpgToPdfPage() {
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'error' | 'success' } | null>(null);

  const showToast = (message: string, type: 'error' | 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000); // 4 सेकंड बाद टोस्ट हटा दें
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedImages(event.target.files);
  };

  const handleConvertToPdf = async () => {
    if (!selectedImages || selectedImages.length === 0) {
      showToast("कृपया कम से कम एक इमेज चुनें।", 'error');
      return;
    }

    setIsConverting(true);
    showToast("कन्वर्टिंग शुरू हो रही है... कृपया प्रतीक्षा करें। (यह प्रक्रिया आपके डिवाइस पर हो रही है)", 'success');

    try {
      // PDF-LIB को Dynamically Import करें ताकि Next.js build error न हो
      const { PDFDocument } = await import('pdf-lib');
      
      const pdfDoc = await PDFDocument.create();

      for (let i = 0; i < selectedImages.length; i++) {
        const file = selectedImages[i];
        const imageBytes = await file.arrayBuffer();

        let image;
        if (file.type === 'image/png') {
          image = await pdfDoc.embedPng(imageBytes);
        } else if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
          image = await pdfDoc.embedJpg(imageBytes);
        } else {
             console.warn(`Skipping unsupported file type: ${file.type}`);
             continue;
        }

        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, {
          x: 0,
          y: 0,
          width: image.width,
          height: image.height,
        });
      }
      
      if (pdfDoc.getPages().length === 0) {
          showToast("इमेज को कन्वर्ट नहीं किया जा सका। सुनिश्चित करें कि फाइलें सही JPG या PNG फॉर्मेट में हैं।", 'error');
          return;
      }

      // PDF को सेव और डाउनलोड करें
      const pdfBytes = await pdfDoc.save();
      const ab = new ArrayBuffer(pdfBytes.length);
      const view = new Uint8Array(ab);
      view.set(pdfBytes);
      const blob = new Blob([ab], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'pdf_maker_ai_converted.pdf';
      link.click();
      
      showToast("PDF सफलतापूर्वक डाउनलोड हो गई!", 'success');

    } catch (error) {
      console.error("Error converting images to PDF:", error);
      showToast("इमेज को PDF में कन्वर्ट करते समय एक त्रुटि हुई।", 'error');
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <main className="font-sans px-4 py-10 max-w-4xl mx-auto min-h-screen flex flex-col justify-between">
      
      {/* --- टूल UI सेक्शन --- */}
      <div className="flex-grow">
        <header className="mb-10 text-center pt-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-600 mb-3 flex items-center justify-center gap-3">
            <FileText className="w-10 h-10 text-pink-500 drop-shadow-md" />
            JPG/PNG to PDF Converter
          </h1>
          <p className="text-lg text-gray-700 font-medium">एक ही PDF फ़ाइल में कई इमेज को तेज़ी से और सुरक्षित रूप से जोड़ें।</p>
          <div className="mt-4 text-sm text-green-700 bg-green-100 p-2 rounded-lg font-semibold border-l-4 border-green-500">
             ✅ डेटा सुरक्षा गारंटी: आपकी फ़ाइलें **आपके ब्राउज़र** में प्रोसेस होती हैं, हमारे सर्वर पर अपलोड नहीं होतीं।
          </div>
        </header>

        <section className="bg-white rounded-xl shadow-2xl p-8 mb-8 border-4 border-purple-300/50">
          <label 
            htmlFor="file-upload" 
            className="block w-full text-center py-6 px-4 border-4 border-dashed border-pink-400 rounded-lg cursor-pointer hover:bg-pink-50 transition duration-300"
          >
            <input 
              id="file-upload"
              type="file" 
              accept="image/jpeg,image/png" 
              multiple
              onChange={handleFileChange} 
              className="hidden" // इनपुट को छिपाना
            />
            <FileText className="w-12 h-12 text-pink-500 mx-auto mb-2" />
            <span className="text-lg font-bold text-gray-800 block">इमेज फ़ाइलें चुनें</span>
            <span className="text-sm text-gray-500">JPG और PNG फॉर्मेट समर्थित हैं। (Select multiple files)</span>
          </label>
          
          {selectedImages && (
            <div className="mt-6 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-purple-700 font-bold">चयनित फाइलें ({selectedImages.length}):</p>
              <ul className="text-sm list-disc list-inside mt-1 max-h-32 overflow-y-auto">
                {Array.from(selectedImages).map((file, index) => (
                  <li key={index} className="truncate">{file.name} ({Math.round(file.size / 1024)} KB)</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <div className="flex justify-center mt-8">
          <button 
            onClick={handleConvertToPdf}
            disabled={isConverting || !selectedImages}
            className={`flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-extrabold shadow-xl transition transform duration-300 hover:scale-[1.03] border-4 border-white ${
              isConverting || !selectedImages 
                ? 'opacity-60 cursor-not-allowed bg-gray-400 hover:scale-100' 
                : 'shadow-purple-400/50'
            }`}
          >
            <Download className="w-6 h-6 animate-pulse" />
            {isConverting ? 'PDF में बदला जा रहा है...' : 'PDF में बदलें (Convert to PDF)'}
          </button>
        </div>
        
        {/* --- Content Article Section --- */}
        <section className="mt-20 prose max-w-none">
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2 text-purple-600">JPG/PNG को PDF में क्यों बदलें? – संपूर्ण मार्गदर्शिका और लाभ</h2>

          <p className="lead text-lg font-medium text-gray-700">
            क्या आप अपनी तस्वीरों या स्कैन की गई इमेज को एक पेशेवर दस्तावेज़ में बदलना चाहते हैं? हमारा **ऑनलाइन JPG to PDF कनवर्टर** आपकी मदद के लिए यहाँ है! यह टूल न केवल **सुरक्षित** है, बल्कि पूरी तरह से **मुफ़्त** भी है और **क्लाइंट-साइड प्रोसेसिंग** के कारण आपकी फ़ाइलों की गोपनीयता सुनिश्चित करता है।
          </p>

          <h3 className="text-2xl font-bold text-gray-800 pt-4 text-pink-500">टूल का उपयोग कैसे करें: 3 आसान स्टेप्स</h3>
          <p>
            हमारे **इमेज टू पीडीएफ** टूल का उपयोग करना बहुत सरल है। आपको किसी सॉफ्टवेयर को डाउनलोड या इंस्टॉल करने की आवश्यकता नहीं है। बस इन तीन चरणों का पालन करें:
          </p>
          <ol>
            <li><strong>फ़ाइलें चुनें:</strong> ऊपर दिए गए "इमेज फ़ाइलें चुनें" बटन पर क्लिक करें। आप अपने कंप्यूटर या मोबाइल डिवाइस से एक या एक से अधिक **JPG** या **PNG** फ़ाइलें चुन सकते हैं। यह टूल मल्टीपल इमेज को एक ही PDF फ़ाइल में जोड़ सकता है।</li>
            <li><strong>कन्वर्ट करें:</strong> अपनी फ़ाइलें चुनने के बाद, "PDF में बदलें" बटन पर क्लिक करें। आपकी फ़ाइलें तुरंत **आपके ब्राउज़र** में प्रोसेस होना शुरू हो जाएँगी (कोई सर्वर अपलोड नहीं)।</li>
            <li><strong>डाउनलोड करें:</strong> कुछ ही सेकंड में, आपकी तैयार **PDF फ़ाइल** डाउनलोड के लिए उपलब्ध हो जाएगी। इसे अपने कंप्यूटर पर सेव करें।</li>
          </ol>

          <h3 className="text-2xl font-bold text-gray-800 pt-4 text-purple-600">यह कनवर्टर क्यों चुनें? (सुरक्षा और क्लाइंट-साइड प्रोसेसिंग)</h3>
          <p>
            बाजार में कई **Image to PDF** कनवर्टर हैं, लेकिन हमारा टूल **डेटा सुरक्षा** के मामले में सबसे अलग है।
          </p>
          <h4>🛡️ डेटा सुरक्षा गारंटी (Client-Side Processing)</h4>
          <p>
            सबसे बड़ी चिंता **फ़ाइल अपलोड** करने की होती है। हम समझते हैं कि आपकी तस्वीरें या दस्तावेज़ गोपनीय हो सकते हैं। इसलिए, हमारे टूल को विशेष रूप से **क्लाइंट-साइड प्रोसेसिंग** के लिए डिज़ाइन किया गया है:
          </p>
          <ul>
            <li>**कोई अपलोड नहीं:** जब आप फ़ाइलें चुनते हैं, तो वे कभी भी हमारे सर्वर पर **अपलोड नहीं** होती हैं। पूरी रूपांतरण प्रक्रिया **आपके वेब ब्राउज़र** (आपके डिवाइस) में ही होती है।</li>
            <li>**गोपनीयता:** चूंकि हम आपकी फ़ाइलों को कभी नहीं देखते या स्टोर नहीं करते हैं, इसलिए आपकी **गोपनीयता** 100% सुरक्षित रहती है।</li>
            <li>**तेज़:** सर्वर पर फ़ाइलें भेजने और वापस प्राप्त करने का समय बचता है, जिससे रूपांतरण बहुत **तेज़** होता है।</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 pt-4 text-pink-500">JPG/PNG को PDF में बदलने के मुख्य लाभ</h3>
          <p>
            इमेज फ़ाइलों को पोर्टेबल डॉक्यूमेंट फॉर्मेट (**PDF**) में बदलने के कई व्यावहारिक कारण हैं:
          </p>
          
          <h4 className="text-xl font-semibold text-gray-700 mt-4">1. पेशेवर दस्तावेज़ीकरण (Professional Documentation)</h4>
          <p>
            स्कैन किए गए दस्तावेज़, रसीदें या प्रमाण पत्र अक्सर JPG या PNG फॉर्मेट में होते हैं। एक एकल **PDF फ़ाइल** उन्हें एक साथ व्यवस्थित करने का सबसे पेशेवर तरीका है, खासकर जब आप उन्हें ईमेल कर रहे हों या किसी को सौंप रहे हों।
          </p>

          <h4 className="text-xl font-semibold text-gray-700 mt-4">2. बेहतर प्रिंटिंग और संगतता (Better Printing and Compatibility)</h4>
          <p>
            PDF फॉर्मेट को प्रिंटिंग के लिए अनुकूलित किया गया है। वे सुनिश्चित करते हैं कि प्रिंटआउट में लेआउट, साइज़ और फ़ॉन्ट बिल्कुल वैसे ही दिखें जैसे आपने उन्हें डिज़ाइन किया था, भले ही प्रिंटर या ऑपरेटिंग सिस्टम कोई भी हो।
          </p>

          <h4 className="text-xl font-semibold text-gray-700 mt-4">3. मल्टी-इमेज संयोजन (Combining Multiple Images)</h4>
          <p>
            अक्सर, आपके पास एक ही प्रोजेक्ट से संबंधित कई तस्वीरें या स्क्रीनशॉट होते हैं। हमारा टूल आपको उन सभी **JPG/PNG** फ़ाइलों को एक ही, आसानी से प्रबंधित होने वाली **PDF दस्तावेज़** में जोड़ने की अनुमति देता है। यह छात्रों, शिक्षकों और व्यवसायों के लिए प्रस्तुतियों और रिपोर्ट बनाने के लिए एकदम सही है।
          </p>

          <h4 className="text-xl font-semibold text-gray-700 mt-4">4. छोटे फ़ाइल साइज़ और शेयरिंग</h4>
          <p>
            PDF फ़ाइलें अक्सर JPG या PNG फ़ाइलों की तुलना में अधिक कुशल तरीके से कंप्रेस होती हैं। इसका मतलब है कि आप बड़ी संख्या में तस्वीरें छोटी **PDF फ़ाइल** में बदल सकते हैं, जिससे उन्हें ईमेल करना या ऑनलाइन शेयर करना आसान हो जाता है।
          </p>

          <h3 className="text-2xl font-bold text-gray-800 pt-4 text-purple-600">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h3>

          <h4 className="text-xl font-semibold text-gray-700 mt-4">Q. क्या यह टूल पूरी तरह से मुफ़्त है?</h4>
          <p>
            A. हाँ, हमारा **JPG to PDF Converter** पूरी तरह से मुफ़्त है। आपको इसकी कार्यक्षमता का उपयोग करने के लिए कोई सदस्यता या शुल्क देने की आवश्यकता नहीं है।
          </p>
          
          <h4 className="text-xl font-semibold text-gray-700 mt-4">Q. मैं एक साथ कितनी इमेज को PDF में कन्वर्ट कर सकता हूँ?</h4>
          <p>
            A. आप एक बार में जितनी चाहें उतनी **JPG** और **PNG** फ़ाइलें चुन सकते हैं। आपका ब्राउज़र उन सभी को एक एकल, मल्टी-पेज **PDF दस्तावेज़** में बदल देगा।
          </p>

          <h4 className="text-xl font-semibold text-gray-700 mt-4">Q. क्या मेरी फ़ाइलें सर्वर पर स्टोर होती हैं?</h4>
          <p>
            A. **बिल्कुल नहीं!** यह हमारे टूल की सबसे बड़ी खासियत है। हम **क्लाइंट-साइड प्रोसेसिंग** का उपयोग करते हैं, जिसका अर्थ है कि आपकी फ़ाइलें आपके डिवाइस को कभी नहीं छोड़ती हैं। इसलिए, आपकी फ़ाइलें और डेटा 100% गोपनीय और सुरक्षित रहते हैं।
          </p>

          <h4 className="text-xl font-semibold text-gray-700 mt-4">Q. क्या यह JPG, JPEG और PNG सभी फॉर्मेट को सपोर्ट करता है?</h4>
          <p>
            A. हाँ, हमारा कनवर्टर **JPG**, **JPEG**, और **PNG** तीनों लोकप्रिय इमेज फॉर्मेट को पूरी तरह सपोर्ट करता है, और उन्हें उच्च-गुणवत्ता वाली **PDF** में एम्बेड करता है।
          </p>

          <h4 className="text-xl font-semibold text-gray-700 mt-4">Q. क्या मैं आउटपुट PDF में इमेज का क्रम बदल सकता हूँ?</h4>
          <p>
            A. वर्तमान में, टूल उसी क्रम का उपयोग करता है जिस क्रम में आप फ़ाइलें चुनते हैं। यदि आपको विशिष्ट क्रम चाहिए, तो फ़ाइल चुनने से पहले उन्हें अपने फ़ोल्डर में उसी क्रम में व्यवस्थित करें।
          </p>
          
          <p className="mt-8 text-xl font-bold text-center text-gray-800">
            आज ही हमारे **मुफ्त, सुरक्षित और तेज़ JPG/PNG to PDF कनवर्टर** का उपयोग करें और अपनी इमेज को पेशेवर PDF दस्तावेज़ों में बदलें!
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
