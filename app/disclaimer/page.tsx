import type { Metadata } from 'next';
import { AlertTriangle, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: "अस्वीकरण | Disclaimer",
  description: "हमारी वेबसाइट, PDF Maker AI, का उपयोग करने से पहले कानूनी अस्वीकरण पढ़ें।",
};

export default function Disclaimer() {
  // कानूनी ईमेल और वेबसाइट URL यहाँ परिभाषित करें
  const CONTACT_EMAIL = "rajputr51903@gmail.com";
  const WEBSITE_URL = "https://pdfmakerai.shop"; // कृपया इसे अपनी लाइव वेबसाइट URL से बदलें

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 flex items-center justify-center gap-3">
            <AlertTriangle className="w-10 h-10 text-red-600" />
            अस्वीकरण (<span className="text-red-600">Disclaimer</span>)
          </h1>
          <p className="text-lg text-gray-600 mt-2">हमारी सेवाओं का उपयोग करने से पहले महत्वपूर्ण कानूनी सूचना।</p>
        </header>

        {/* कंटेंट को एक पेशेवर कार्ड में रखा गया है */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 prose lg:prose-lg max-w-none text-gray-700 space-y-6">
          
          <p className="text-lg leading-relaxed border-b pb-4 mb-4">
            <strong>PDF Maker AI</strong> (वेबसाइट) पर आपका स्वागत है। इस वेबसाइट का उपयोग करके, आप नीचे दिए गए नियमों और शर्तों से सहमत होते हैं। यदि आप इन शर्तों से असहमत हैं, तो कृपया हमारी वेबसाइट का उपयोग न करें।
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-red-600">1. सामान्य सूचना और सटीकता</h2>
            <p className="leading-relaxed">
              इस वेबसाइट पर मौजूद सभी सामग्री केवल सामान्य सूचना और **शैक्षणिक उद्देश्यों (educational purposes)** के लिए है। हालाँकि हम जानकारी को अद्यतन (up-to-date) और सही रखने का प्रयास करते हैं, हम इसकी पूर्णता, सटीकता, विश्वसनीयता या उपलब्धता के बारे में किसी भी प्रकार का प्रतिनिधित्व या वारंटी नहीं देते हैं।
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-red-600">2. टूल उपयोग और डेटा सुरक्षा</h2>
            <p className="leading-relaxed">
                हमारे टूल (जैसे इमेज कन्वर्टर, केस कन्वर्टर, आदि) का उपयोग करते समय, कृपया ध्यान दें:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li><strong>क्लाइंट-साइड प्रोसेसिंग:</strong> आपके द्वारा अपलोड की गई फ़ाइलें या दर्ज किया गया टेक्स्ट **हमारे सर्वर पर अपलोड नहीं** होता है। प्रोसेसिंग सीधे **आपके ब्राउज़र** में होती है।</li>
                <li>हम किसी भी प्रकार के डेटा के नुकसान या किसी भी तरह के अप्रत्याशित आउटपुट के लिए ज़िम्मेदार नहीं हैं जो हमारे टूल के उपयोग से उत्पन्न हो सकता है।</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-red-600">3. बाहरी लिंक अस्वीकरण</h2>
            <p className="leading-relaxed">
              हमारी वेबसाइट में बाहरी वेबसाइटों के लिंक हो सकते हैं जो हमारे द्वारा प्रदान या बनाए नहीं जाते हैं। हम उन बाहरी साइटों की सटीकता, प्रासंगिकता, समयबद्धता या पूर्णता की गारंटी नहीं देते हैं। किसी भी बाहरी लिंक पर क्लिक करने से पहले कृपया उनकी <strong>Privacy Policy</strong> और <strong>Disclaimer</strong> पढ़ें।
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-red-600">4. सहमति (Consent)</h2>
            <p className="leading-relaxed">
              हमारी वेबसाइट का उपयोग करके, आप हमारे अस्वीकरण से सहमति देते हैं और इसके नियमों से सहमत होते हैं।
            </p>
          </section>

          <section className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-blue-600">संपर्क करें (Contact Us)</h2>
            <p className="leading-relaxed">
              यदि आपके पास इस अस्वीकरण से संबंधित कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें:
            </p>
            <p className="mt-3 flex items-center gap-2 font-mono text-lg font-semibold">
              <Mail className="w-5 h-5 text-blue-600"/>
              ईमेल: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{CONTACT_EMAIL}</a>
            </p>
          </section>

          <footer className="mt-10 pt-5 border-t border-gray-200 text-center text-gray-500 text-sm">
            © 2025 PDF Maker AI. सर्वाधिकार सुरक्षित। (All Rights Reserved)
            <br />
            वेबसाइट: <a href={WEBSITE_URL} className="text-blue-500 hover:underline">{WEBSITE_URL}</a>
          </footer>
        </div>
      </div>
    </main>
  );
}
