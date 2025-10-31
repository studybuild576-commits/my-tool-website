// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — PDF Maker AI | Support, Business & Feedback",
  description:
    "Need help or partnership? Contact PDF Maker AI for support, feedback, or business inquiries at support@pdfmakerai.shop or business@pdfmakerai.shop — quick replies guaranteed!",
  keywords: [
    "contact pdf maker ai",
    "pdf maker ai support",
    "pdf maker ai business email",
    "pdf maker ai help",
    "pdf tools support",
    "contact pdf tools",
    "report bug pdf maker ai",
    "api access pdf maker ai",
    "feedback pdf maker ai",
    "pdf maker ai partnerships",
    "email pdf maker ai",
    "customer support pdf ai",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/contact" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact PDF Maker AI — Support & Partnerships",
    description:
      "Get quick support, share feedback, or discuss partnerships. Email support@pdfmakerai.shop or business@pdfmakerai.shop.",
    url: "https://pdfmakerai.shop/contact",
    type: "website",
    siteName: "PDF Maker AI",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PDF Maker AI Contact Page" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PDF Maker AI",
    description:
      "Support, feedback, or business inquiries? Email support@pdfmakerai.shop or business@pdfmakerai.shop.",
    images: ["/og-image.png"]
  }
};

export default function ContactPage() {
  const supportBody =
    "Hi%20PDF%20Maker%20AI%20Team,%0A%0ADescribe%20your%20issue%20or%20question%20here.%0A%0AThanks,%0A";
  const bizBody =
    "Hi%20PDF%20Maker%20AI%20Team,%0A%0ACompany:%0AUse%20Case:%0ATimeline:%0A%0AThanks,%0A";

  const supportMail = `mailto:support@pdfmakerai.shop?subject=Support%20Request&body=${supportBody}`;
  const bizMail = `mailto:business@pdfmakerai.shop?subject=Business%20Inquiry&body=${bizBody}`;

  // ✅ JSON-LD Schema for Google (Organization + ContactPage + FAQ)
  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "PDF Maker AI",
      url: "https://pdfmakerai.shop",
      email: "support@pdfmakerai.shop",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-0000000000",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"]
        },
        {
          "@type": "ContactPoint",
          email: "business@pdfmakerai.shop",
          contactType: "business inquiries"
        }
      ]
    }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I contact PDF Maker AI support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can email support@pdfmakerai.shop for help, or use the contact form for faster responses."
        }
      },
      {
        "@type": "Question",
        name: "Do you offer API or business partnerships?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, email business@pdfmakerai.shop to discuss API access or enterprise-level solutions."
        }
      },
      {
        "@type": "Question",
        name: "Is there any response time guarantee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We reply within 24 hours for all support and business queries."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }}
      />

      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-2 text-slate-900">
          📬 Contact PDF Maker AI
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          For help, feedback, or partnerships — reach out anytime. We usually reply within 24 hours.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Support Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-bold mb-3 text-indigo-700">Customer Support</h2>
          <p className="text-slate-600 mb-4">
            For technical help, bug reports, or general queries.
          </p>
          <a href={supportMail} className="text-indigo-600 font-semibold hover:underline">
            support@pdfmakerai.shop →
          </a>
        </div>

        {/* Business Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          <h2 className="text-2xl font-bold mb-3 text-purple-700">Business Inquiries</h2>
          <p className="text-slate-600 mb-4">
            For partnerships, API access, or enterprise use cases.
          </p>
          <a href={bizMail} className="text-purple-600 font-semibold hover:underline">
            business@pdfmakerai.shop →
          </a>
        </div>
      </div>

      {/* Contact Form */}
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

      {/* FAQs Section */}
      <section className="mt-10">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <details className="mb-2">
          <summary>How soon do I get a response?</summary>
          <p className="text-gray-600">We reply within 24 hours for all emails.</p>
        </details>
        <details className="mb-2">
          <summary>Do you have an official support email?</summary>
          <p className="text-gray-600">Yes, support@pdfmakerai.shop is our verified contact.</p>
        </details>
      </section>
    </main>
  );
}
