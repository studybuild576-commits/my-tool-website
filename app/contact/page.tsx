export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-blue-600 text-center">
        Contact Us
      </h1>

      <p className="text-center text-gray-600 mb-6">
        Have a question, feedback, or business inquiry?  
        We’d love to hear from you! Please reach out through the form below or email us directly.
      </p>

      <div className="space-y-4">
        <form
          action="https://formsubmit.co/rajputr51903@gmail.com"
          method="POST"
          className="space-y-4"
        >
          {/* Hidden fields for extra protection */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://pdfmakerai.shop/contact-success"
          />

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p>📧 Email: <a href="mailto:rajputr51903@gmail.com" className="text-blue-600 hover:underline">rajputr51903@gmail.com</a></p>
        <p>🌐 Website: <a href="https://pdfmakerai.shop" className="text-blue-600 hover:underline">pdfmakerai.shop</a></p>
      </div>
    </div>
  );
}
