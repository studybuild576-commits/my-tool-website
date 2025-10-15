"use client";

import { useState } from 'react';
import { Copy, Maximize2, Minimize2, Type, Sigma } from 'lucide-react'; 

// --- SEO Content Component (1500-शब्दों का लक्ष्य पूरा करने के लिए) ---
const SeoContent = () => (
    <section className="mt-16 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
        <div className="prose lg:prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-extrabold text-purple-600 mb-4">
                Case Converter क्या है और इसका उपयोग क्यों करें?
            </h2>
            <p className="text-lg">
                Case Converter एक आवश्यक ऑनलाइन टूल है जो आपको टेक्स्ट को विभिन्न लेटर केस (Letter Cases) में तुरंत बदलने की अनुमति देता है। चाहे आप किसी डॉक्यूमेंट में सुधार कर रहे हों, <strong>SEO</strong> टाइटल तैयार कर रहे हों, या कोड लिख रहे हों, यह टूल आपके समय और मेहनत को बचाता है। यह टूल **100% मुफ्त** है और <strong className="text-blue-500">आपके ब्राउज़र में ही काम करता है,</strong> जिससे आपके टेक्स्ट की <strong className="text-blue-500">गोपनीयता</strong> सुनिश्चित होती है।
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mt-8">
                विभिन्न केस फॉर्मेट को समझना
            </h3>
            <p>
                टेक्स्ट केसिंग में महारत हासिल करना किसी भी लेखक, ब्लॉगर या कोडर के लिए ज़रूरी है। हमारा टूल चार सबसे लोकप्रिय फॉर्मेट को सपोर्ट करता है:
            </p>

            <ul className="list-disc ml-6 space-y-3">
                <li>
                    <strong>UPPERCASE (कैपिटल लेटर्स):</strong> हर अक्षर को बड़ा कर देता है। <span className="font-mono text-sm bg-gray-100 p-1 rounded">उदाहरण: THIS IS UPPERCASE.</span> यह अक्सर <strong className="text-red-500">ज़रूरी घोषणाओं</strong> या हेडलाइंस के लिए इस्तेमाल होता है।
                </li>
                <li>
                    <strong>lowercase (छोटे अक्षर):</strong> हर अक्षर को छोटा कर देता है। <span className="font-mono text-sm bg-gray-100 p-1 rounded">उदाहरण: this is lowercase.</span> यह कोड लिखते समय या अनौपचारिक टेक्स्ट में उपयोगी है।
                </li>
                <li>
                    <strong>Capitalized Case / Title Case:</strong> हर **महत्वपूर्ण** शब्द का पहला अक्षर बड़ा होता है। <span className="font-mono text-sm bg-gray-100 p-1 rounded">उदाहरण: This Is Capitalized Case.</span> यह किताबों के <strong className="text-green-500">शीर्षकों</strong>, ब्लॉग पोस्ट हेडलाइंस और लेखों के नामों के लिए सर्वोत्तम है।
                </li>
                <li>
                    <strong>Sentence case (वाक्य केस):</strong> यह सामान्य व्याकरण के नियमों का पालन करता है—हर वाक्य का पहला अक्षर बड़ा और बाकी सब छोटे। <span className="font-mono text-sm bg-gray-100 p-1 rounded">उदाहरण: This is sentence case.</span> यह सबसे आम <strong className="text-blue-500">पैराग्राफ फॉर्मेट</strong> है।
                </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-8">
                Case Converter का उपयोग कहाँ करें? (Use Cases)
            </h3>
            <p>
                आपके <strong>SEO</strong> और सामग्री की गुणवत्ता को बढ़ाने के लिए Case Converter कई तरह से मदद करता है:
            </p>
            
            <ol className="list-decimal ml-6 space-y-3">
                <li>
                    <strong>SEO Title Optimization:</strong> Google या अन्य सर्च इंजनों के लिए <strong className="text-purple-500">मेटा टाइटल्स</strong> लिखते समय <strong className="text-purple-500">Title Case</strong> का उपयोग करना अक्सर क्लिक-थ्रू रेट (CTR) को बढ़ाता है, क्योंकि यह अधिक पेशेवर और पढ़ने में आसान लगता है।
                </li>
                <li>
                    <strong>Presentation Clarity:</strong> यदि आप किसी डॉक्यूमेंट या प्रेजेंटेशन से टेक्स्ट कॉपी कर रहे हैं और केसिंग गड़बड़ है, तो यह टूल आपको एक क्लिक में इसे ठीक करने देता है, जिससे आपका काम साफ़-सुथरा दिखता है।
                </li>
                <li>
                    <strong>Coding and Development:</strong> कई प्रोग्रामिंग भाषाएँ (जैसे Python या JavaScript) में वेरिएबल्स के लिए विशेष केसिंग नियम होते हैं (जैसे <code>camelCase</code> या <code>snake_case</code>)। यह टूल कोड स्निपेट्स को जल्दी से मानकीकृत (Standardize) करने में मदद करता है।
                </li>
                <li>
                    <strong>Social Media and Email Marketing:</strong> सोशल मीडिया कैप्शन या ईमेल सब्जेक्ट लाइन को <strong>UPPERCASE</strong> का उपयोग करके **ध्यान खींचने** के लिए, या <strong>Sentence case</strong> का उपयोग करके उन्हें अधिक औपचारिक बनाने के लिए इसका उपयोग करें।
                </li>
            </ol>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-8">
                गोपनीयता और डेटा सुरक्षा (Privacy & Security)
            </h3>
            <p>
                <strong className="text-red-500">सुरक्षा हमारे लिए सर्वोच्च प्राथमिकता है।</strong> हमारे Case Converter टूल की मुख्य विशेषता यह है कि यह <strong className="text-blue-500">पूरी तरह से क्लाइंट-साइड (Client-Side)</strong> चलता है। जब आप टेक्स्ट इनपुट करते हैं और केस बदलते हैं, तो प्रोसेसिंग आपके <strong className="text-blue-500">अपने ब्राउज़र</strong> के अंदर ही होती है। इसका मतलब है कि:
            </p>
            <ul className="list-disc ml-6 space-y-2">
                <li>आपका कोई भी टेक्स्ट <strong className="text-red-500">हमारे सर्वर पर अपलोड नहीं होता है।</strong></li>
                <li>हम किसी भी इनपुट डेटा को <strong className="text-red-500">संग्रहीत (Store) नहीं करते हैं।</strong></li>
                <li>आपकी जानकारी हमेशा <strong className="text-green-500">100% निजी</strong> रहती है।</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-800 mt-8">
                अक्सर पूछे जाने वाले प्रश्न (FAQs)
            </h3>
            <p>आपके कुछ सामान्य प्रश्नों के उत्तर:</p>
            
            <ul className="list-disc ml-6 space-y-3">
                <li>
                    <strong>क्या यह Case Converter टूल पूरी तरह से मुफ्त है?</strong> हाँ, यह टूल पूरी तरह से मुफ्त है और रहेगा। हम उच्च गुणवत्ता वाले डिजिटल टूल को बिना किसी शुल्क के प्रदान करने के लिए प्रतिबद्ध हैं।
                </li>
                <li>
                    <strong>क्या टूल में वर्ड काउंट फीचर है?</strong> वर्तमान में, यह केवल केस बदलने पर केंद्रित है, लेकिन आप हमारे समर्पित **Word & Character Counter** टूल का उपयोग करके अपने टेक्स्ट के शब्दों और अक्षरों को गिन सकते हैं।
                </li>
                <li>
                    <strong>"Title Case" और "Capitalized Case" में क्या अंतर है?</strong> तकनीकी रूप से, वे अक्सर एक दूसरे के स्थान पर उपयोग किए जाते हैं, लेकिन Title Case में आमतौर पर छोटे शब्द (जैसे 'a', 'an', 'the', 'of') को छोटा रखा जाता है। हमारे टूल में, हम सभी शब्दों को बड़ा करते हैं ताकि अधिकतम दृश्यता मिले।
                </li>
            </ul>
            
            <p className="mt-8">
                <strong>निष्कर्ष:</strong> Case Converter एक साधारण टूल से कहीं ज़्यादा है—यह आपकी लेखन प्रक्रिया को सुव्यवस्थित (Streamline) करने, आपके <strong>SEO</strong> प्रयासों को बढ़ाने, और आपके कंटेंट को पेशेवर बनाने का एक महत्वपूर्ण हिस्सा है। इसे आज़माएं और अपने टेक्स्ट को तुरंत बदलें!
            </p>
        </div>
    </section>
);


// --- मुख्य कंपोनेंट ---
export default function CaseConverterPage() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  // फंक्शन: टेक्स्ट को UPPERCASE में बदलने के लिए
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  // फंक्शन: टेक्स्ट को lowercase में बदलने के लिए
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  // फंक्शन: टेक्स्ट को Capitalized Case में बदलने के लिए (हर शब्द का पहला अक्षर बड़ा)
  const handleCapitalizedCase = () => {
    // यह फ़ंक्शन Title Case के लिए इस्तेमाल होता है
    const newText = text.toLowerCase().split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    setText(newText);
  };
  
  // फंक्शन: टेक्स्ट को Sentence case में बदलने के लिए (हर वाक्य का पहला अक्षर बड़ा)
  const handleSentenceCase = () => {
    // यह फ़ंक्शन वाक्य के पहले अक्षर और विराम चिन्हों के बाद के पहले अक्षर को बड़ा करता है।
    const newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
    setText(newText);
  };
  
  // Clean-up function (नई फंक्शनैलिटी)
  const handleClearText = () => {
    setText('');
  };


  const handleCopy = () => {
    // Clipboard API का उपयोग
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="font-sans px-4 py-10 max-w-4xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-600 mb-2 flex items-center justify-center gap-3">
          <Type className="w-10 h-10 text-pink-400 drop-shadow" />
          Online Case Converter Tool
        </h1>
        <p className="text-lg text-gray-700 font-medium">Instantly convert text between **UPPERCASE**, **lowercase**, **Title Case**, and **Sentence Case**.</p>
      </header>

      <section className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-2xl shadow-2xl p-6 mb-10 border-4 border-purple-300/50">
        <textarea
          className="w-full min-h-[250px] p-5 text-lg font-medium border border-purple-400 rounded-xl focus:outline-none focus:ring-4 focus:ring-pink-500/50 transition mb-6 bg-white shadow-inner resize-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="यहाँ अपना टेक्स्ट टाइप करें या पेस्ट करें..."
          aria-label="Text area for case conversion"
        ></textarea>
        
        {/* बटन्स और एक्शन एरिया */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <button 
            onClick={handleUpperCase} 
            className="flex items-center gap-2 px-5 py-2 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition transform duration-200"
            aria-label="Convert to UPPERCASE"
          >
            <Maximize2 className="w-4 h-4" /> UPPERCASE
          </button>
          
          <button 
            onClick={handleLowerCase} 
            className="flex items-center gap-2 px-5 py-2 text-base font-semibold rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition transform duration-200"
            aria-label="Convert to lowercase"
          >
            <Minimize2 className="w-4 h-4" /> lowercase
          </button>
          
          <button 
            onClick={handleCapitalizedCase} 
            className="flex items-center gap-2 px-5 py-2 text-base font-semibold rounded-xl bg-gradient-to-r from-pink-500 to-yellow-500 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition transform duration-200"
            aria-label="Convert to Capitalized Case"
          >
            <Type className="w-4 h-4" /> Title Case
          </button>
          
          <button 
            onClick={handleSentenceCase} 
            className="flex items-center gap-2 px-5 py-2 text-base font-semibold rounded-xl bg-gradient-to-r from-yellow-500 to-purple-500 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition transform duration-200"
            aria-label="Convert to Sentence case"
          >
            <Sigma className="w-4 h-4" /> Sentence case
          </button>
          
          <button 
            onClick={handleClearText} 
            className="flex items-center gap-2 px-5 py-2 text-base font-semibold rounded-xl bg-gray-300 text-gray-700 shadow-md hover:bg-gray-400 hover:scale-[1.02] transition transform duration-200"
            aria-label="Clear all text"
          >
            Clear
          </button>
        </div>
        
        <div className="flex justify-end pt-4 border-t border-purple-300/50">
          <button 
            onClick={handleCopy} 
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-extrabold shadow-xl transition-all duration-300 ease-in-out ${
              copied 
                ? 'bg-green-500 text-white scale-100' 
                : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-pink-400/50 hover:scale-[1.03]'
            }`}
            aria-label="Copy converted text to clipboard"
          >
            <Copy className="w-5 h-5" />
            {copied ? 'Text Copied!' : 'Copy Converted Text'}
          </button>
        </div>
      </section>

      {/* SEO Optimized Content Section */}
      <SeoContent />

      <footer className="text-center text-gray-500 text-sm mt-12 bg-gray-50 py-4 rounded-xl shadow-inner border border-gray-200">
        &copy; {new Date().getFullYear()} PDF Maker AI. All rights reserved.
      </footer>
    </main>
  );
}
