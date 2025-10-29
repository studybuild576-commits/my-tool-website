import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — PDF Maker AI",
  description:
    "Support, feedback, partnerships? Email support@pdfmakerai.shop or business@pdfmakerai.shop.",
  alternates: { canonical: "https://pdfmakerai.shop/contact" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Us — PDF Maker AI",
    description:
      "Support, feedback, partnerships, or API—email support@pdfmakerai.shop or business@pdfmakerai.shop.",
    url: "https://pdfmakerai.shop/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PDF Maker AI",
    description:
      "Email support@pdfmakerai.shop or business@pdfmakerai.shop for quick help.",
    images: ["/og-image.png"]
  }
};

export default function ContactPage() {
  // Plain, percent-encoded single-line mailto bodies (no template literal multiline)
  const supportBody =
    "Hi%20PDF%20Maker%20AI%20team,%0A%0ADescribe%20your%20issue%20or%20question%20here.%0A%0ASteps%20to%20reproduce%20(if%20applicable):%0A1.%0A2.%0A3.%0A%0AAttachments:%20(please%20attach%20screenshots/files)%0A%0AThanks,%0A";
  const bizBody =
    "Hi%20PDF%20Maker%20AI%20team,%0A%0ACompany:%0AUse%20case:%0AExpected%20volume:%0ATimeline:%0AOther%20notes:%0A%0AThanks,%0A";
  const personalBody =
    "Hi,%0A%0AI%E2%80%99d%20like%20to%20discuss:%0A%0AThanks,%0A";

  const supportMail = `mailto:support@pdfmakerai.shop?subject=Support%3A%20Issue%2FQuestion&body=${supportBody}`;
  const bizMail = `mailto:business@pdfmakerai.shop?subject=Business%3A%20Partnership%2FAPI%2FEnterprise&body=${bizBody}`;
  const personalMail = `mailto:rajputr51903@gmail.com?subject=Contact%20from%20PDF%20Maker%20AI&body=${personalBody}`;

  return (
    <main className="max-w-4xl mx-auto p-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Get in Touch</h1>
        <p className="text-slate-600">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-bold mb-3">Email Support</h2>
          <p className="text-slate-600 mb-4">
            For technical support, bug reports, or general inquiries.
          </p>
          <div className="flex flex-col gap-2">
            <a href={supportMail} className="text-indigo-600 font-semibold hover:underline">
              support@pdfmakerai.shop →
            </a>
            <a href={personalMail} className="text-indigo-600 font-semibold hover:underline">
              rajputr51903@gmail.com →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-bold mb-3">Business Inquiries</h2>
          <p className="text-slate-600 mb-4">
            Partnerships, API access, or enterprise solutions.
          </p>
          <a href={bizMail} className="text-purple-600 font-semibold hover:underline">
            business@pdfmakerai.shop →
          </a>
        </div>
      </div>

      <section className="mt-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Send us a Message</h2>
        <form className="max-w-2xl mx-auto space-y-4" method="POST" action="/api/contact">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200"
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200"
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Tell us more about your inquiry..."
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
