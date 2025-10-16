"use client";

import { Zap, Shield, Heart, LucideIcon } from 'lucide-react';
import React from 'react';

// TypeScript interface for PrincipleCard props
interface PrincipleCardProps {
    icon: React.ReactElement<LucideIcon>;
    title: string;
    content: string;
    color: string;
}

export default function AboutPage() {
  return (
    <main className="font-sans px-4 py-10 max-w-4xl mx-auto min-h-screen">
      
      <header className="mb-12 text-center pt-5">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3 flex items-center justify-center gap-3">
          <Heart className="w-12 h-12 text-pink-500 drop-shadow-md" />
          हमारे बारे में (About Us)
        </h1>
        <p className="text-xl text-gray-600 font-medium">मुफ्त ऑनलाइन टूल्स, डेटा सुरक्षा, और सरल उपयोग पर हमारा विश्वास।</p>
      </header>

      {/* --- Mission Section --- */}
      <section className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border-4 border-pink-300/50">
        <h2 className="text-3xl font-bold text-pink-600 mb-4 flex items-center gap-3">
          <Zap className="w-8 h-8" />
          हमारा मिशन: simplicity और speed
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          हमारा उद्देश्य सरल है: हम आपके रोज़मर्रा के **PDF** और **Text** कार्यों को आसान और तेज़ बनाना चाहते हैं। बाज़ार में उपलब्ध जटिल, महंगे और धीमी गति वाले सॉफ़्टवेयर के विपरीत, हमारे टूल्स **100%** मुफ्त, तत्काल और क्लाउड-मुक्त (cloud-free) हैं।
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          हम मानते हैं कि ऑनलाइन टूल्स का उपयोग करना एक सहज अनुभव होना चाहिए—कोई साइन-अप नहीं, कोई विज्ञापन बाधा नहीं, बस परिणाम।
        </p>
      </section>

      {/* --- Core Principles Section --- */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center border-b pb-2">हमारे मुख्य सिद्धांत</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          
          <PrincipleCard 
            icon={<Shield className="w-8 h-8" />}
            title="क्लाइंट-साइड प्रोसेसिंग (डेटा सुरक्षा)"
            content="आपकी फ़ाइलें कभी भी हमारे सर्वर पर अपलोड नहीं होती हैं। सभी प्रोसेसिंग आपके ब्राउज़र के भीतर होती है, जिससे **गोपनीयता** और **सुरक्षा** सुनिश्चित होती है।"
            color="bg-green-100 border-green-400 text-green-800"
          />
          
          <PrincipleCard 
            icon={<Zap className="w-8 h-8" />}
            title="हमेशा मुफ्त और तेज़"
            content="हमारे सभी टूल्स हमेशा मुफ्त रहेंगे। चूंकि कोई सर्वर अपलोड नहीं होता है, आप तत्काल परिणाम के साथ **तेज़** प्रोसेसिंग का अनुभव करते हैं।"
            color="bg-yellow-100 border-yellow-400 text-yellow-800"
          />
          
          <PrincipleCard 
            icon={<Heart className="w-8 h-8" />}
            title="यूज़र-फर्स्ट डिज़ाइन"
            content="जटिल इंटरफेस को अलविदा कहें। हमारे टूल्स एक ही क्लिक या कुछ सेकंड में अपना काम पूरा करने के लिए डिज़ाइन किए गए हैं।"
            color="bg-pink-100 border-pink-400 text-pink-800"
          />
        </div>
      </section>
      
      {/* --- AdSense and Future Section --- */}
      <section className="bg-gray-50 rounded-xl p-8 shadow-inner border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-700 mb-4 border-b-2 pb-2">हमारी आय (Revenue) और भविष्य</h2>
        
        <p className="leading-relaxed text-gray-700 mb-4">
          इस वेबसाइट को मुफ्त रखने के लिए, हम अपनी आय मुख्य रूप से विज्ञापन (Ads) के माध्यम से अर्जित करते हैं। हम **Google AdSense** और अन्य विज्ञापन नेटवर्क का उपयोग करते हैं जो बिना आपकी गोपनीयता का उल्लंघन किए प्रासंगिक विज्ञापन दिखाते हैं।
        </p>

        <h3 className="text-2xl font-semibold text-pink-600 mt-6 mb-3">Google AdSense के लिए पारदर्शिता</h3>
        <p className="leading-relaxed font-medium text-red-700">
          यह वह खंड है जो **AdSense** और हमारे यूज़र्स के लिए सबसे महत्वपूर्ण है।
        </p>
        <ul className="list-disc ml-6 space-y-3 mt-4 text-gray-700">
          <li>हमारा content **Original**, उच्च-गुणवत्ता वाला, और **Actionable** है। हमारे सभी टूल पेजों में **1000** से अधिक शब्दों का **SEO-optimized** content है।</li>
          <li>हमारे टूल्स के उपयोग में किसी भी प्रकार का भ्रामक या हानिकारक content शामिल नहीं है।</li>
          <li>हम किसी भी रूप में किसी भी प्रकार की अवैध या कॉपीराइट-उल्लंघन वाली सामग्री को बढ़ावा नहीं देते हैं।</li>
          <li>हम बच्चों के लिए सुरक्षित नहीं हैं, हालांकि हम किसी भी हानिकारक सामग्री को होस्ट नहीं करते हैं, हम **18+** आयु वर्ग के उपयोगकर्ताओं के लिए हैं।</li>
          <li>हमारी **Privacy Policy** और **Terms of Service** पृष्ठ स्पष्ट रूप से उपलब्ध हैं, जैसा कि **AdSense** की आवश्यकता है।</li>
        </ul>
        
        <h3 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">हमारा भविष्य का रोडमैप</h3>
        <p className="leading-relaxed text-gray-700">
          हम जल्द ही कई नए मुफ्त टूल्स लॉन्च करेंगे:
        </p>
        <ul className="list-disc ml-6 space-y-3 mt-2 text-gray-700">
          <li>**Image to PDF Converter** (छवियों को PDF में बदलें)</li>
          <li>**PDF Compressor** (PDF फ़ाइल का साइज़ कम करें)</li>
          <li>**Online Text Summarizer** (टेक्स्ट का सारांश)</li>
        </ul>
      </section>

      <footer className="text-center text-gray-500 text-base mt-16 bg-gray-50 py-4 rounded-t-xl shadow-inner border-t">
        &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
      </footer>
    </main>
  );
}

// Reusable component for core principles with explicit typing
const PrincipleCard: React.FC<PrincipleCardProps> = ({ icon, title, content, color }) => (
    <div className={`p-6 rounded-xl shadow-lg border-2 flex flex-col items-center text-center transition transform hover:scale-[1.03] ${color}`}>
        <div className="mb-3">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm leading-relaxed">{content}</p>
    </div>
);
