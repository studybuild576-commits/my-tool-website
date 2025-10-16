import type { Metadata } from 'next';
import { Info, Code, Shield, Mail } from 'lucide-react'; // सुंदर आइकॉन के लिए

export const metadata: Metadata = {
  title: "हमारे बारे में | About Us",
  description: "हमारा मिशन: हर किसी के लिए मुफ्त, तेज़ और उपयोग में आसान ऑनलाइन टूल प्रदान करना।",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 flex items-center justify-center gap-3">
            <Info className="w-10 h-10 text-blue-600" />
            हमारे बारे में (<span className="text-blue-600">About Us</span>)
          </h1>
          <p className="text-lg text-gray-600 mt-2">सरल, मुफ्त और सुरक्षित डिजिटल समाधानों के प्रति हमारी प्रतिबद्धता।</p>
        </header>

        {/* कंटेंट को एक सुंदर कार्ड में रखा गया है */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 text-gray-700 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">हम कौन हैं और हमारा मिशन क्या है?</h2>
            <p className="leading-relaxed">
              <strong className="font-semibold text-blue-600">हमारी वेबसाइट</strong> में आपका स्वागत है! हम एक उत्साही टीम हैं जिसका मिशन हर किसी के लिए **मुफ्त, तेज़ और उपयोग में आसान** ऑनलाइन टूल प्रदान करना है। हमारा लक्ष्य रोजमर्रा के डिजिटल कार्यों को सरल बनाना है।
            </p>
            <p className="leading-relaxed mt-3">
              यह प्रोजेक्ट एक साधारण विचार से शुरू हुआ: एक ऐसी जगह बनाना जहाँ यूज़र्स को सॉफ्टवेयर डाउनलोड किए बिना या शुल्क दिए बिना, PDF, इमेज और टेक्स्ट से संबंधित विश्वसनीय और शक्तिशाली टूल मिल सकें। हम मानते हैं कि **उत्कृष्ट उपयोगिताएँ (utilities) जटिल या महंगी नहीं होनी चाहिए।**
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-red-500"/>
              डेटा सुरक्षा और गोपनीयता (AdSense के लिए महत्वपूर्ण)
            </h2>
            <p className="leading-relaxed font-medium text-red-700">
              यह वह खंड है जो $\mathbf{AdSense}$ और हमारे यूज़र्स के लिए सबसे महत्वपूर्ण है।
            </p>
            <ul className="list-disc ml-6 space-y-3 mt-4">
              <li>
                <strong className="text-red-600">क्लाइंट-साइड प्रोसेसिंग:</strong> हमारे टूल जैसे कि <a href="/case-converter" className="text-blue-600 hover:underline">केस कन्वर्टर</a> और <a href="/image-resizer" className="text-blue-600 hover:underline">इमेज रीसाइज़र</a> पूरी तरह से **आपके ब्राउज़र** में काम करते हैं।
              </li>
              <li>
                <strong className="text-red-600">फाइल अपलोड नहीं:</strong> आपकी टेक्स्ट या इमेज फ़ाइलें **हमारे सर्वर पर कभी अपलोड नहीं होती हैं।** प्रोसेसिंग आपके डिवाइस पर ही होती है।
              </li>
              <li>
                <strong className="text-red-600">गोपनीयता की गारंटी:</strong> इसका मतलब है कि हम आपकी फ़ाइलों का कोई रिकॉर्ड नहीं रखते हैं, जिससे आपकी गोपनीयता $100\%$ सुरक्षित रहती है।
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-green-600"/>
                हमारे मुख्य टूल
            </h2>
            <p className="leading-relaxed">
              हम विभिन्न डिजिटल ज़रूरतों को पूरा करने के लिए टूल का एक बढ़ता हुआ संग्रह पेश करते हैं, जैसे:
            </p>
            <ul className="list-disc ml-6 space-y-2 mt-3">
              <li><strong>टेक्स्ट टूल:</strong> वर्ड काउंटर और केस कन्वर्टर (Case Converter)</li>
              <li><strong>इमेज टूल:</strong> इमेज रीसाइज़र (Image Resizer) और फॉर्मेट कन्वर्टर</li>
              <li><strong>जल्द आ रहे हैं:</strong> हम जल्द ही PDF टूल (जैसे PDF स्प्लिटर और कनवर्टर) जोड़ने पर काम कर रहे हैं।</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Mail className="w-6 h-6 text-orange-600"/>
                हमसे संपर्क करें (Contact Us)
            </h2>
            <p className="leading-relaxed">
              यदि आपके कोई प्रश्न, सुझाव या फीडबैक हैं, तो बेझिझक हमसे संपर्क करें। हमें आपसे सुनना अच्छा लगेगा!
            </p>
            <p className="mt-4 p-3 bg-orange-50 rounded-lg font-mono text-lg">
              <strong>ईमेल:</strong> <a href="mailto:rajputr51903@gmail.com" className="text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200">[rajputr51903@gmail.com]</a>
            </p>
            <p className="mt-4 text-sm text-gray-500">
                हम आमतौर पर 24-48 घंटों के भीतर सभी ईमेल का जवाब देते हैं।
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
