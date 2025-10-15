"use client";

import { useState, useRef, useEffect } from 'react';
import { Download, Ruler, X, Image as ImageIcon } from 'lucide-react';

// --- Custom Message Component (Alert replacement) ---
interface MessageProps {
    message: string;
    onClose: () => void;
    type?: 'error' | 'success';
}

const Message: React.FC<MessageProps> = ({ message, onClose, type = 'error' }) => (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className={`bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full border-t-4 ${
      type === 'error' ? 'border-red-500' : 'border-green-500'
    }`}>
      <div className="flex justify-between items-start">
        <p className="text-gray-800 font-semibold">{message}</p>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

// --- SEO Content Component (1500-शब्दों का लक्ष्य पूरा करने के लिए) ---
const SeoContent = () => (
    <section className="mt-16 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
        <div className="prose lg:prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-extrabold text-blue-600 mb-4">
                Online Image Resizer: आपकी इमेज को परफेक्ट साइज़ में
            </h2>
            <p className="text-lg">
                हमारा **Online Image Resizer** टूल आपको अपनी डिजिटल इमेज की चौड़ाई और ऊँचाई (Dimensions) को आसानी से और सटीकता से बदलने की सुविधा देता है। चाहे आपको सोशल मीडिया के लिए एक विशिष्ट **पिक्सल** साइज़ चाहिए, या वेबसाइट के लिए फ़ाइल साइज़ कम करना हो, यह टूल आपके काम को **तेज़, सुरक्षित और 100% मुफ़्त** बनाता है। यह टूल **क्लाइंट-साइड** काम करता है, जिसका अर्थ है कि आपकी इमेज फ़ाइलें कभी भी हमारे सर्वर पर अपलोड नहीं होती हैं, जिससे आपकी **गोपनीयता** सुरक्षित रहती है।
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8">
                इमेज को रीसाइज़ करना क्यों ज़रूरी है?
            </h3>
            <p>
                गलत साइज़ की इमेज कई समस्याएँ पैदा कर सकती है। सही साइज़ के फायदे यहाँ दिए गए हैं:
            </p>

            <ul className="list-disc ml-6 space-y-3">
                <li>
                    <strong>वेबसाइट परफॉर्मेंस और SEO:</strong> बड़ी, बिना रीसाइज़ की हुई इमेजेस वेबसाइट को **धीरे लोड** करती हैं। धीमी लोडिंग स्पीड **SEO** रैंकिंग और यूज़र अनुभव को बुरी तरह प्रभावित करती है। रीसाइज़ करके आप फ़ाइल साइज़ को कम करते हैं, जिससे पेज तेज़ी से लोड होता है।
                </li>
                <li>
                    <strong>सोशल मीडिया मानक:</strong> Instagram, Facebook, LinkedIn, और Twitter जैसे प्लेटफॉर्म्स के लिए **कवर फोटो** और **प्रोफ़ाइल पिक्चर** के लिए विशिष्ट पिक्सेल डाइमेंशन की आवश्यकता होती है। हमारा टूल यह सुनिश्चित करता है कि आपकी इमेज अपलोड नियमों का पालन करे।
                </li>
                <li>
                    <strong>ईमेल और अटैचमेंट:</strong> बड़े ईमेल अटैचमेंट को अक्सर ब्लॉक कर दिया जाता है। इमेज को एक छोटे और प्रबंधनीय (manageable) साइज़ में रीसाइज़ करके, आप आसानी से उन्हें भेज सकते हैं।
                </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-8">
                रीसाइज़िंग के तरीके: पिक्सेल बनाम प्रतिशत
            </h3>
            
            <ol className="list-decimal ml-6 space-y-3">
                <li>
                    <strong>पिक्सल (Pixels):</strong> यह सबसे सटीक तरीका है। यदि आपको ठीक-ठीक पता है कि आपको 1920x1080 या 800x600 जैसे डाइमेंशन की आवश्यकता है, तो पिक्सल इनपुट का उपयोग करें। यह वेब ग्राफिक्स और प्रिंटिंग के लिए आदर्श है।
                </li>
                <li>
                    <strong>प्रतिशत (Percentage):</strong> यदि आप इमेज को उसके मूल साइज़ के सापेक्ष (relative) छोटा या बड़ा करना चाहते हैं (उदाहरण के लिए, मूल साइज़ का 50% या 200%), तो प्रतिशत रीसाइज़िंग उपयोगी है।
                </li>
            </ol>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-8">
                हमारा टूल क्यों चुनें? (Features)
            </h3>
            <p>
                बाज़ार में कई रीसाइज़र हैं, लेकिन हमारा टूल निम्नलिखित कारणों से अलग है:
            </p>
            <ul className="list-disc ml-6 space-y-2">
                <li>**तत्काल पूर्वावलोकन (Instant Preview):** रीसाइज़ करने के बाद आप तुरंत देख सकते हैं कि आपकी इमेज कैसी दिखेगी।</li>
                <li>**विभिन्न फॉर्मेट समर्थन:** यह **JPG, PNG, WEBP,** और अन्य प्रमुख फॉर्मेट को सपोर्ट करता है।</li>
                <li>**उच्च गुणवत्ता बनाए रखना:** रीसाइज़िंग के दौरान हम सर्वोत्तम संभव इमेज क्वालिटी (90% क्वालिटी पर JPG आउटपुट) बनाए रखते हैं।</li>
                <li>**क्लाइंट-साइड प्रोसेसिंग:** **100% गोपनीयता** और तेज़ प्रोसेसिंग स्पीड।</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-8">
                अक्सर पूछे जाने वाले प्रश्न (FAQs)
            </h3>
            
            <ul className="list-disc ml-6 space-y-3">
                <li>
                    <strong>इमेज रीसाइज़िंग से क्या क्वालिटी कम हो जाती है?</strong> हाँ, इमेज को छोटा करने पर (Downscaling) क्वालिटी अक्सर अपरिवर्तित रहती है, लेकिन इसे बड़ा करने पर (Upscaling) पिक्सल स्ट्रेच हो जाते हैं जिससे क्वालिटी में गिरावट आ सकती है।
                </li>
                <li>
                    <strong>क्या मैं इमेज को क्रॉप (Crop) भी कर सकता हूँ?</strong> यह टूल केवल डाइमेंशन बदलता है (स्केल)। यदि आपको इमेज के कुछ हिस्से को काटना है, तो हमारे समर्पित **Image Cropper** टूल का उपयोग करें।
                </li>
                <li>
                    <strong>क्या मुझे रीसाइज़ करने के लिए साइन अप करना होगा?</strong> बिल्कुल नहीं। हमारा टूल उपयोग करने के लिए पूरी तरह से मुफ़्त है और इसके लिए किसी भी तरह के पंजीकरण (Registration) की आवश्यकता नहीं है।
                </li>
            </ul>
            
            <p className="mt-8">
                **निष्कर्ष:** अपनी वेबसाइट, सोशल मीडिया या दस्तावेज़ों के लिए सही साइज़ की इमेज प्राप्त करने के लिए, हमारा Image Resizer आपका सबसे तेज़ और सबसे सुरक्षित समाधान है। अभी अपलोड करें और अपनी इमेज को मनचाहे साइज़ में बदलें!
            </p>
        </div>
    </section>
);


// --- मुख्य कंपोनेंट ---
export default function ImageResizerPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [resizedImage, setResizedImage] = useState<string | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [originalWidth, setOriginalWidth] = useState<number>(0);
  const [originalHeight, setOriginalHeight] = useState<number>(0);
  const [message, setMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const originalFileRef = useRef<File | null>(null);

  // Message Handler
  const showAlert = (msg: string) => setMessage(msg);
  const closeAlert = () => setMessage(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        showAlert("Please upload a valid image file.");
        return;
      }
      originalFileRef.current = file;
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          // Set original dimensions
          setOriginalWidth(img.width);
          setOriginalHeight(img.height);
          // Set initial resize dimensions to original dimensions
          setWidth(img.width);
          setHeight(img.height);
        };
        img.src = reader.result as string;
        setOriginalImage(reader.result as string);
        setResizedImage(null);
        closeAlert();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResize = () => {
    if (!originalImage) {
      showAlert("पहले एक इमेज अपलोड करें। (Please upload an image first.)");
      return;
    }
    
    const newWidth = parseInt(width.toString(), 10);
    const newHeight = parseInt(height.toString(), 10);

    if (isNaN(newWidth) || isNaN(newHeight) || newWidth <= 0 || newHeight <= 0) {
      showAlert("कृपया चौड़ाई और ऊँचाई के लिए मान्य और धनात्मक (positive) संख्याएँ डालें।");
      return;
    }
    
    setIsProcessing(true);

    const img = new Image();
    img.src = originalImage;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = newWidth;
      canvas.height = newHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Draw image onto canvas with new dimensions
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        
        // Determine output file type and download filename
        const fileType = originalFileRef.current?.type || 'image/jpeg';
        const fileNameWithoutExt = originalFileRef.current?.name.split('.').slice(0, -1).join('.') || 'resized-image';
        const extension = fileType.split('/')[1] === 'jpeg' ? 'jpg' : fileType.split('/')[1] || 'jpg';
        
        // Quality set to 0.9 for standard optimization
        const resizedDataUrl = canvas.toDataURL(fileType, 0.9); 
        setResizedImage(resizedDataUrl);
        
        // Initiate download
        const link = document.createElement('a');
        link.href = resizedDataUrl;
        link.download = `${fileNameWithoutExt}_resized.${extension}`;
        link.click();
        
        showAlert("इमेज सफलतापूर्वक रीसाइज़ और डाउनलोड हो गई है! (Image successfully resized and downloaded!)");
        setIsProcessing(false);
      } else {
         showAlert("ब्राउज़र एरर: कैनवास कॉन्टेक्स्ट नहीं बन पाया। (Browser error: Could not create canvas context.)");
         setIsProcessing(false);
      }
    };
    img.onerror = () => {
        showAlert("इमेज लोड नहीं हो पाई। (Image could not be loaded.)");
        setIsProcessing(false);
    };
  };

  return (
    <main className="font-sans px-4 py-10 max-w-4xl mx-auto">
      {message && <Message message={message} onClose={closeAlert} type={message.includes('सफलतापूर्वक') ? 'success' : 'error'} />}

      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 flex items-center justify-center gap-3">
          <Ruler className="w-10 h-10 text-pink-500 drop-shadow" />
          Online Image Resizer Tool
        </h1>
        <p className="text-lg text-gray-700 font-medium">Resize your images to any **pixel** dimension quickly and easily.</p>
      </header>

      <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-2xl shadow-2xl p-6 mb-10 border-4 border-blue-300/50">
        
        {/* 1. Upload Section */}
        <div className="mb-6">
          <label className="block font-bold mb-2 text-blue-700 text-xl">1. Upload Your Image</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            className="block w-full text-base border-2 border-blue-400 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-pink-400/50 bg-white cursor-pointer shadow-inner" 
            aria-label="Upload image file"
          />
        </div>

        {originalImage && (
          <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-purple-300/50">
            {/* 2. Dimensions Setting */}
            <div>
              <h2 className="text-xl font-bold text-pink-600 mb-4 flex items-center gap-2">
                <Ruler className="w-5 h-5"/> 2. Set New Dimensions (in Pixels):
              </h2>
              
              <p className="text-sm text-gray-600 mb-4 font-medium">Original Size: **{originalWidth} x {originalHeight}** pixels</p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-xl shadow border border-pink-200">
                <div className="flex items-center gap-2">
                  <label className="text-purple-600 font-semibold w-16">Width:</label>
                  <input 
                    type="number" 
                    value={width} 
                    onChange={(e) => setWidth(parseInt(e.target.value, 10) || 0)} 
                    className="w-28 p-3 border-2 border-purple-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-purple-400 font-mono" 
                    min="1"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <label className="text-purple-600 font-semibold w-16">Height:</label>
                  <input 
                    type="number" 
                    value={height} 
                    onChange={(e) => setHeight(parseInt(e.target.value, 10) || 0)} 
                    className="w-28 p-3 border-2 border-purple-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-purple-400 font-mono"
                    min="1"
                  />
                </div>
              </div>
              
              <button 
                onClick={handleResize} 
                disabled={isProcessing}
                className={`mt-6 w-full px-5 py-3 text-lg font-extrabold rounded-xl text-white shadow-xl transition transform duration-300 ${
                  isProcessing 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-pink-500 to-blue-500 hover:scale-[1.02] hover:shadow-blue-400/50'
                }`}
              >
                {isProcessing ? 'Processing...' : 'Resize & Download Image'}
              </button>
            </div>

            {/* 3. Preview Section */}
            <div className="flex flex-col items-center justify-center border-l md:border-l-2 border-purple-300/50 pl-6">
                <h2 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5"/> Image Preview:
                </h2>
                <img 
                    src={resizedImage || originalImage} 
                    alt="Current Image Preview" 
                    className="max-w-full max-h-[300px] w-auto h-auto rounded-xl border-4 border-white shadow-lg object-contain transition-all duration-300"
                    style={{ 
                        // Show the original size preview if not resized yet, otherwise show resized dimensions on the image element
                        width: resizedImage ? `${width}px` : 'auto', 
                        height: resizedImage ? `${height}px` : 'auto',
                        // Ensure it fits the container
                        maxWidth: '100%',
                        maxHeight: '300px' 
                    }}
                />
                {resizedImage && (
                    <p className="mt-2 text-sm text-green-600 font-semibold">Resized to: {width} x {height} px</p>
                )}
            </div>
          </div>
        )}
      </section>
      
      {/* SEO Optimized Content Section */}
      <SeoContent />

      <footer className="text-center text-gray-500 text-sm mt-12 bg-gray-50 py-4 rounded-xl shadow-inner border border-gray-200">
        &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
      </footer>
    </main>
  );
}
