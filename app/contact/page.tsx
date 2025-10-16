import type { Metadata } from 'next';
import { Mail, MessageCircle, Send, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: "हमसे संपर्क करें | Contact Us",
  description: "Have a question, feedback, or business inquiry? Please reach out to us.",
};

export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 flex items-center justify-center gap-3">
            <MessageCircle className="w-10 h-10 text-blue-600" />
            हमसे संपर्क करें (<span className="text-blue-600">Contact Us</span>)
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            कोई सवाल है, सुझाव देना है, या व्यवसायिक पूछताछ (business inquiry) करनी है? हमें आपसे सुनना अच्छा लगेगा!
          </p>
        </header>

        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 text-gray-700">
          
          <div className="space-y-6">
            <form
              // FormSubmit URL, इसमें आपका ईमेल सही जगह पर है
              action="https://formsubmit.co/rajputr51903@gmail.com"
              method="POST"
              className="space-y-5"
            >
              {/* Hidden fields for extra protection and redirection */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                // Success पेज का URL यहाँ डालें। मैंने एक सामान्य URL उपयोग किया है।
                value="https://pdfmakerai.shop/contact-success" 
              />
              <input type="hidden" name="_subject" value="New Contact Message from Tool Website" />


              <div>
                <label className="block text-gray-700 mb-2 font-semibold">आपका नाम (Your Name)</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                  placeholder="कृपया अपना पूरा नाम दर्ज करें"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-semibold">आपका ईमेल (Your Email)</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                  placeholder="उदाहरण: yourname@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-semibold">संदेश (Message)</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200 resize-none"
                  placeholder="आपकी प्रतिक्रिया, बग रिपोर्ट या सुझाव यहाँ लिखें..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold text-lg py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5"/> संदेश भेजें (Send Message)
              </button>
            </form>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-600 space-y-3">
            <p className="font-semibold text-gray-800">
                आप हमें सीधे इन माध्यमों से भी संपर्क कर सकते हैं:
            </p>
            <p className="flex items-center justify-center gap-2 text-lg">
                <Mail className="w-5 h-5 text-orange-500"/>
                <strong>ईमेल (Email):</strong> <a href="mailto:rajputr51903@gmail.com" className="text-orange-600 hover:underline font-mono">rajputr51903@gmail.com</a>
            </p>
            <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
                हमारा प्रयास रहता है कि हम 24 से 48 घंटों के भीतर सभी प्रश्नों का उत्तर दें।
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
