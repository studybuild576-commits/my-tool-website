"use client";

import { useState } from 'react';
import { FileText, Copy, BookOpen, MessageSquare, List, Hash, XCircle } from 'lucide-react';

export default function WordCounterPage() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  // --- Core Text Analysis Logic ---

  // 1. Word Count (शब्द गणना)
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  const wordCount = words.length;
  
  // 2. Character Count (अक्षर गणना)
  const charCount = text.length;

  // 3. Sentence Count (वाक्य गणना) - Ends with ., !, ? followed by space or end of string
  const sentenceCount = (text.match(/[.!?](\s|$)/g) || []).length;

  // 4. Paragraph Count (पैराग्राफ गणना) - Separated by two or more newlines
  const paragraphs = text.split(/\n{2,}/).filter(p => p.trim().length > 0);
  const paragraphCount = paragraphs.length;

  // 5. Reading Time (अनुमानित पढ़ने का समय) - Assuming 200 Words Per Minute (WPM)
  const readingTime = Math.ceil(wordCount / 200);

  const handleCopy = () => {
    // Check if clipboard API is available and copy the text
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => {
    setText('');
    setCopied(false);
  };

  return (
    <main className="font-sans px-4 py-10 max-w-5xl mx-auto min-h-screen">
      <header className="mb-10 text-center pt-5">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3 flex items-center justify-center gap-3">
          <BookOpen className="w-12 h-12 text-blue-600 drop-shadow-md" />
          Word & Character Counter Online
        </h1>
        <p className="text-xl text-gray-600 font-medium">Count words, characters, sentences, and paragraphs instantly and accurately.</p>
      </header>

      {/* --- Tool Interface --- */}
      <section className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 mb-12 border-4 border-blue-400/50">
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="word-counter-textarea" className="block font-bold text-lg text-blue-800">अपना टेक्स्ट यहाँ दर्ज करें:</label>
          <div className="flex gap-3">
            <button 
              onClick={handleCopy} 
              disabled={text.length === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold transition ${
                text.length > 0 ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button 
              onClick={handleClear} 
              disabled={text.length === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold transition ${
                text.length > 0 ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              <XCircle className="w-4 h-4" />
              Clear
            </button>
          </div>
        </div>
        
        <textarea
          id="word-counter-textarea"
          className="w-full min-h-[300px] p-5 text-base border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 transition bg-gray-50 resize-none shadow-inner"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Typing शुरू करें या अपने content को paste करें..."
          aria-label="Text area for word and character counting"
        ></textarea>
        
        {/* --- Results Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          
          <StatCard title="Words (शब्द)" value={wordCount} color="bg-blue-500" icon={<List className="w-6 h-6" />} />
          <StatCard title="Characters (अक्षर)" value={charCount} color="bg-pink-500" icon={<Hash className="w-6 h-6" />} />
          <StatCard title="Sentences (वाक्य)" value={sentenceCount} color="bg-green-500" icon={<MessageSquare className="w-6 h-6" />} />
          <StatCard title="Paragraphs (पैराग्राफ)" value={paragraphCount} color="bg-orange-500" icon={<FileText className="w-6 h-6" />} />
          <StatCard title="Read Time (मिनट)" value={readingTime} color="bg-purple-500" icon={<BookOpen className="w-6 h-6" />} />
          
        </div>
      </section>

      {/* --- SEO Content Section (Hindi) --- */}
      <section className="mt-20 prose max-w-none">
        <h2 className="text-4xl font-extrabold text-blue-700 border-b-4 border-orange-400 pb-3 mb-6">वर्ड काउंटर: आपके टेक्स्ट एनालिसिस का सबसे तेज़ और सटीक ऑनलाइन टूल</h2>

        <p className="lead text-lg font-medium text-gray-700">
          हमारा **ऑनलाइन वर्ड काउंटर** टूल लेखकों, छात्रों, ब्लॉगर्स और SEO प्रोफेशनल्स के लिए एक अनिवार्य उपकरण है। यह आपको न केवल **शब्द गणना (Word Count)** बताता है, बल्कि **अक्षर गणना (Character Count)**, **वाक्य गणना (Sentence Count)** और **पैराग्राफ गणना (Paragraph Count)** जैसे महत्वपूर्ण मैट्रिक्स भी तुरंत प्रदान करता है। यह टूल उपयोग करने में **100%** मुफ़्त, तेज़ और पूरी तरह से सुरक्षित है, क्योंकि यह आपके ब्राउज़र में काम करता है।
        </p>

        <h3 className="text-3xl font-bold text-orange-600 pt-4">वर्ड काउंटर क्यों ज़रूरी है?</h3>
        <p>
          डिजिटल युग में, **content** की लम्बाई अक्सर एक नियम होती है। चाहे आप एक **Academic Essay** लिख रहे हों, जिसकी वर्ड लिमिट **500** शब्द है, या एक **SEO Optimized Blog Post** बना रहे हों जिसके लिए **1500** शब्दों की आवश्यकता है, सटीक गणना महत्वपूर्ण है।
        </p>

        <h4 className="text-2xl font-semibold text-blue-700 mt-4">1. SEO और Content Marketing के लिए</h4>
        <p>
          सर्च इंजन ऑप्टिमाइज़ेशन (**SEO**) के लिए content की लम्बाई एक प्रमुख रैंकिंग फैक्टर है।
          </p>
          <ul>
            <li>**ब्लॉग पोस्ट (Blog Posts):** गूगल (Google) उन आर्टिकल्स को प्राथमिकता देता है जो किसी विषय को गहराई से कवर करते हैं। अधिकांश उच्च-रैंकिंग वाले ब्लॉग पोस्ट **1000** से **2000** शब्दों के बीच होते हैं। हमारा **वर्ड काउंटर** आपको यह सुनिश्चित करने में मदद करता है कि आपका content आपके **Keyword** की आवश्यकता को पूरा करता है।</li>
            <li>**मेटा डिस्क्रिप्शन (Meta Description) और टाइटल:** कैरेक्टर काउंट यहाँ सबसे महत्वपूर्ण है। गूगल **50-60** अक्षरों के टाइटल और **150-160** अक्षरों के मेटा डिस्क्रिप्शन को ही पूरी तरह दिखाता है। हमारा **कैरेक्टर काउंटर** यह सुनिश्चित करता है कि आपका **SEO Text** सर्च परिणामों में कटेगा नहीं।</li>
          </ul>

        <h4 className="text-2xl font-semibold text-blue-700 mt-4">2. शैक्षणिक और पेशेवर लेखन के लिए</h4>
        <p>
          विद्यार्थियों और प्रोफेशनल्स के लिए, Word Limit का पालन करना अनिवार्य होता है।
          </p>
          <ul>
            <li>**छात्र:** **Assignments**, **dissertations** या **theses** में अक्सर सख्त वर्ड या पेज लिमिट होती है। हमारा टूल छात्रों को तुरंत यह जांचने में मदद करता है कि वे **limit** से कम हैं या अधिक।</li>
            <li>**जर्नलिस्ट और लेखक:** लेखकों को **articles** या **columns** के लिए **strict word count** बनाए रखना होता है। यह टूल उन्हें अपनी रचना को कुशलतापूर्वक संपादित करने में मदद करता है।</li>
          </ul>
        
        <h4 className="text-2xl font-semibold text-blue-700 mt-4">3. सोशल मीडिया और विज्ञापन के लिए</h4>
        <p>
          प्लेटफ़ॉर्म की अपनी **कैरेक्टर सीमाएँ** होती हैं। Twitter (X), Instagram, और Facebook Ads जैसे प्लेटफ़ॉर्म पर संक्षिप्त और प्रभावी संदेश भेजने के लिए **कैरेक्टर काउंट** बहुत महत्वपूर्ण है।
        </p>

        <h3 className="text-3xl font-bold text-orange-600 pt-4">यह टूल कौन-कौन सी गणनाएँ प्रदान करता है? (Key Metrics)</h3>
        
        <h4 className="text-xl font-semibold text-gray-700 mt-4">शब्द गणना (Word Count)</h4>
        <p>
          यह आपके पूरे टेक्स्ट में **गैर-खाली शब्दों (non-empty words)** की संख्या है। यह गणना रिक्त स्थान (spaces) या विराम चिह्नों (punctuations) से अलग होने वाले शब्दों को सटीकता से गिनता है।
        </p>
        
        <h4 className="text-xl font-semibold text-gray-700 mt-4">अक्षर गणना (Character Count)</h4>
        <p>
          यह आपके टेक्स्ट में **कुल अक्षरों** (spaces सहित) की संख्या है। यह सोशल मीडिया पोस्ट और मेटा टैग्स के लिए सबसे अधिक उपयोग किया जाता है।
        </p>

        <h4 className="text-xl font-semibold text-gray-700 mt-4">वाक्य गणना (Sentence Count)</h4>
        <p>
          हमारा टूल **पूर्ण विराम (.), प्रश्न चिह्न (?)**, और **विस्मयादिबोधक चिह्न (!)** के आधार पर वाक्यों की संख्या निर्धारित करता है। यह लेखन की जटिलता (complexities) और पठनीयता (readability) को समझने में सहायक है।
        </p>

        <h4 className="text-xl font-semibold text-gray-700 mt-4">पैराग्राफ गणना (Paragraph Count)</h4>
        <p>
          यह गणना **डबल-लाइन ब्रेक** द्वारा अलग किए गए टेक्स्ट के ब्लॉकों को गिनता है। यह लंबी सामग्री को संगठित करने में और यह जांचने में मदद करता है कि आपका लेखन सुसंगत (cohesive) है या नहीं।
        </p>

        <h4 className="text-xl font-semibold text-gray-700 mt-4">अनुमानित पढ़ने का समय (Estimated Reading Time)</h4>
        <p>
          यह गणना **200** शब्द प्रति मिनट (**WPM**) की औसत पढ़ने की गति पर आधारित है। इससे आप अपने पाठकों को बता सकते हैं कि आपका लेख पढ़ने में कितना समय लेगा, जो **user engagement** के लिए महत्वपूर्ण है।
        </p>

        <h3 className="text-3xl font-bold text-orange-600 pt-4">सुरक्षा और गोपनीयता (Security and Privacy)</h3>
        <p>
          आपकी गोपनीयता हमारी सर्वोच्च प्राथमिकता है। हमारा **वर्ड काउंटर** टूल **100%** **क्लाइंट-साइड प्रोसेसिंग** का उपयोग करता है।
          </p>
          <ul>
            <li>**कोई सर्वर अपलोड नहीं:** आपके द्वारा दर्ज किया गया टेक्स्ट कभी भी हमारे सर्वर पर अपलोड नहीं होता है। गणना की पूरी प्रक्रिया **आपके वेब ब्राउज़र** में होती है।</li>
            <li>**डेटा सुरक्षा:** हम आपका कोई भी डेटा या टेक्स्ट **स्टोर (store)** या **ट्रैक (track)** नहीं करते हैं। आप आत्मविश्वास से संवेदनशील दस्तावेज़ों का भी विश्लेषण कर सकते हैं।</li>
          </ul>

        <h3 className="text-3xl font-bold text-blue-700 pt-4">वर्ड काउंटर का उपयोग कैसे करें? (Simple Steps)</h3>
        <ol>
          <li>**टेक्स्ट दर्ज करें:** ऊपर दिए गए बड़े टेक्स्ट बॉक्स में अपना टेक्स्ट, लेख, निबंध, या कोई भी सामग्री टाइप करें या पेस्ट करें।</li>
          <li>**तुरंत देखें:** जैसे ही आप टाइप करना शुरू करते हैं, सभी गणनाएँ (शब्द, अक्षर, वाक्य, पैराग्राफ) तुरंत और स्वचालित रूप से **Real-Time** में अपडेट हो जाती हैं।</li>
          <li>**कॉपी/क्लियर करें:** आप **"Copy"** बटन का उपयोग करके टेक्स्ट को वापस कॉपी कर सकते हैं, या **"Clear"** बटन से बॉक्स को तुरंत खाली कर सकते हैं।
          </li>
        </ol>

        <h3 className="text-3xl font-bold text-orange-600 pt-4">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h3>

        <h4 className="text-xl font-semibold text-gray-700 mt-4">Q. वर्ड काउंटर क्या केवल अंग्रेजी में काम करता है?</h4>
        <p>
          A. नहीं। हमारा टूल **यूनिकोड (Unicode)** का उपयोग करता है, जिसका अर्थ है कि यह **हिंदी, मराठी, तमिल, बंगाली**, या किसी भी अन्य भाषा में **content** के लिए **शब्द गणना** और **अक्षर गणना** को **accurate** रूप से गिनता है।
        </p>
        
        <h4 className="text-xl font-semibold text-gray-700 mt-4">Q. क्या यह टूल व्हाइटस्पेस (Whitespace) को कैरेक्टर काउंट में गिनता है?</h4>
        <p>
          A. हाँ। **अक्षर गणना (Character Count)** आपके टेक्स्ट में प्रत्येक वर्ण (character) को गिनता है, जिसमें **रिक्त स्थान (spaces)**, **लाइन ब्रेक (line breaks)** और **विराम चिह्न (punctuation)** शामिल हैं। यदि आप बिना व्हाइटस्पेस के अक्षर गिनना चाहते हैं, तो आप टेक्स्ट से सभी रिक्त स्थान हटा सकते हैं।
        </p>

        <h4 className="text-xl font-semibold text-gray-700 mt-4">Q. मैं इस टूल का उपयोग करके अपने लेखन की पठनीयता (Readability) कैसे सुधार सकता हूँ?</h4>
        <p>
          A. **वाक्य गणना** पर ध्यान दें। यदि वाक्यों की संख्या कम है और वर्ड काउंट अधिक है, तो इसका मतलब है कि आपके वाक्य बहुत लंबे और जटिल हैं। लेखन को आसान बनाने के लिए वाक्यों की संख्या बढ़ाएँ और उन्हें छोटा रखें।
        </p>

        <p className="mt-8 text-xl font-bold text-center text-gray-800">
          आज ही हमारे **वर्ड काउंटर** का उपयोग करके अपने लेखन की दक्षता और **SEO Performance** को बढ़ाएँ!
        </p>
      </section>

      <footer className="text-center text-gray-500 text-base mt-16 bg-gray-50 py-4 rounded-t-xl shadow-inner border-t">
        &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
      </footer>
    </main>
  );
}

// Stats Card Component for cleaner code
const StatCard = ({ title, value, color, icon }) => (
    <div className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-md text-white transform hover:scale-[1.02] transition duration-300 ${color} shadow-lg`}>
        <div className="mb-1">{icon}</div>
        <div className="text-3xl font-extrabold">{value}</div>
        <p className="text-sm font-medium opacity-90">{title}</p>
    </div>
);
