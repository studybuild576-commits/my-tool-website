// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — PDF Maker AI",
  description:
    "Get in touch with PDF Maker AI for support, feedback, partnerships, or any questions. Email support@pdfmakerai.shop or business@pdfmakerai.shop.",
  keywords: [
    "contact pdf maker ai","support pdf tools","email support pdf","technical support pdf",
    "bug report pdf tool","feature request pdf","business inquiries pdf","enterprise pdf api",
    "partnerships pdf","api access pdf","contact page","get in touch","customer support",
    "help center","response time support","24 hour response","contact form online","secure contact form",
    "privacy first contact","gdpr friendly contact","email us","support email","business email",
    "feedback pdf tools","report an issue","request a feature","press inquiries pdf","media contact",
    "sales contact pdf","billing support","account help","integration help","api keys request",
    "sla inquiry","uptime status contact","trusted support","fast response support","team contact",
    "collaboration opportunities","hiring contact","contributors contact","open source contact",
    "contact information","company contact details","reach us","talk to us","write to us"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/contact" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Us — PDF Maker AI",
    description:
      "Support, feedback, partnerships, or API—email support@pdfmakerai.shop or business@pdfmakerai.shop. Usually responds within 24 hours.",
    url: "https://pdfmakerai.shop/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PDF Maker AI",
    description:
      "Support, feedback, partnerships, or API—email support@pdfmakerai.shop or business@pdfmakerai.shop.",
    images: ["/og-image.png"]
  }
};

export default function ContactPage() {
  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: "https://pdfmakerai.shop/contact",
    name: "Contact PDF Maker AI",
    description:
      "Support, feedback, partnerships, and API inquiries for PDF Maker AI.",
    mainEntity: {
      "@type": "Organization",
      name: "PDF Maker AI",
      url: "https://pdfmakerai.shop",
      email: "support@pdfmakerai.shop",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@pdfmakerai.shop",
          availableLanguage: ["en"],
          areaServed: "Worldwide",
          description: "Response within 24 hours on business days."
        },
        {
          "@type": "ContactPoint",
          contactType: "business",
          email: "business@pdfmakerai.shop",
          availableLanguage: ["en"],
          areaServed: "Worldwide",
          description: "Partnerships, API access, enterprise."
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
        name: "How quickly will I receive a response?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We aim to respond to all inquiries within 24 hours during business days. Urgent technical issues are prioritized and usually handled in a few hours."
        }
      },
      {
        "@type": "Question",
        name: "Do you offer enterprise or API solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, we offer custom API access and enterprise plans. Email business@pdfmakerai.shop to discuss your requirements."
        }
      },
      {
        "@type": "Question",
        name: "Can I report a bug or request a feature?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Absolutely. Please email support@pdfmakerai.shop with details, steps to reproduce, and attachments if possible."
        }
      },
      {
        "@type": "Question",
        name: "Are you hiring or accepting contributors?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We welcome talented contributors. Send your portfolio or resume to business@pdfmakerai.shop."
        }
      }
    ]
  };

  // Prefilled mailto helpers (FIX: multiline text via 
)
  const supportMail = `mailto:support@pdfmakerai.shop?subject=${encodeURIComponent(
    "Support: Issue/Question"
  )}&body=${encodeURIComponent(
    "Hi PDF Maker AI team,

Describe your issue or question here:

Steps to reproduce (if applicable):
1.
2.
3.

Attachments: (please attach screenshots/files)

Thanks,
"
  )}`;

  const bizMail = `mailto:business@pdfmakerai.shop?subject=${encodeURIComponent(
    "Business: Partnership/API/Enterprise"
  )}&body=${encodeURIComponent(
    "Hi PDF Maker AI team,

Company:
Use case:
Expected volume:
Timeline:
Other notes:

Thanks,
"
  )}`;

  const personalMail = `mailto:rajputr51903@gmail.com?subject=${encodeURIComponent(
    "Contact from PDF Maker AI"
  )}&body=${encodeURIComponent(
    "Hi,

I’d like to discuss:

Thanks,
"
  )}`;

  return (
    <main className="max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="text-xl text-slate-600">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </section>

      {/* Contact Methods */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Email Support */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-3 text-slate-800">Email Support</h2>
          <p className="text-slate-600 mb-4">
            For technical support, bug reports, or general inquiries, reach out to our support team.
          </p>
          <div className="flex flex-col gap-2">
            <a href={supportMail} className="inline-flex items-center gap-2 text-indigo-600 hover:text-purple-600 font-semibold">
              support@pdfmakerai.shop <span aria-hidden="true">→</span>
            </a>
            <a href={personalMail} className="inline-flex items-center gap-2 text-indigo-600 hover:text-purple-600 font-semibold">
              rajputr51903@gmail.com <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-500">⏱️ Response time: Usually within 24 hours</p>
          </div>
        </div>

        {/* Business Inquiries */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-lg transition">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-3 text-slate-800">Business Inquiries</h2>
          <p className="text-slate-600 mb-4">
            Interested in partnerships, API access, or enterprise solutions? Let's talk.
          </p>
          <a href={bizMail} className="inline-flex items-center gap-2 text-purple-600 hover:text-pink-600 font-semibold">
            business@pdfmakerai.shop <span aria-hidden="true">→</span>
          </a>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-500">💼 We're open to collaboration</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Send us a Message</h2>
        <form className="max-w-2xl mx-auto space-y-6" method="POST" action="/api/contact">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
              <input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" placeholder="john@example.com" />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
            <input id="subject" name="subject" type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition" placeholder="How can we help you?" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
            <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition resize-none" placeholder="Tell us more about your inquiry..." />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all">
            Send Message
          </button>
        </form>
      </section>

      {/* FAQs */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-slate-800 mb-2">How quickly will I receive a response?</h3>
            <p className="text-slate-600">We aim to respond to all inquiries within 24 hours during business days. For urgent technical issues, we prioritize support tickets and typically respond within a few hours.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-slate-800 mb-2">Do you offer enterprise or API solutions?</h3>
            <p className="text-slate-600">Yes! We provide custom API access and enterprise plans for businesses with high-volume needs. Contact us at business@pdfmakerai.shop to discuss your requirements.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-slate-800 mb-2">Can I report a bug or request a feature?</h3>
            <p className="text-slate-600">Absolutely! We welcome bug reports and feature suggestions. Please email support@pdfmakerai.shop with detailed information, and we'll review your feedback carefully.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-slate-800 mb-2">Are you hiring or accepting contributors?</h3>
            <p className="text-slate-600">We're always interested in talented developers and designers who share our passion for creating great tools. Send your portfolio or resume to business@pdfmakerai.shop.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
