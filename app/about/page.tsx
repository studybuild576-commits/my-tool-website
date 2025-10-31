// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — PDF Maker AI: Free, Private & Ad-Free PDF Tools",
  description:
    "Learn about PDF Maker AI — our mission, values, and how we make privacy-first, ad-friendly, and free PDF tools accessible worldwide. No signup, no data tracking, just tools you can trust.",
  keywords: [
    "about pdf maker ai","pdf maker ai mission","privacy first pdf tools",
    "team pdf maker ai","adsense friendly about page","free pdf software",
    "who we are pdf maker ai","company info","contact pdf maker ai",
    "legal compliance","privacy policy","terms and conditions",
    "trusted ai pdf tools","gdpr ccpa compliant","transparency statement",
    "user data protection","safe online pdf tools","open communication",
    "our story pdf maker ai","brand mission","responsible ai","ethical tools",
    "student friendly pdf tools","business pdf utilities","web app transparency"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/about" },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  openGraph: {
    title: "About PDF Maker AI — Privacy-First PDF Tools",
    description: "Know the story, mission, and commitment behind PDF Maker AI. 100% private, transparent, and AdSense-approved platform.",
    url: "https://pdfmakerai.shop/about",
    siteName: "PDF Maker AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About PDF Maker AI — Mission & Transparency",
    description: "Free, secure, and privacy-friendly PDF tools — made for everyone, with zero tracking.",
  },
};

export default function AboutPage() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PDF Maker AI",
    url: "https://pdfmakerai.shop",
    logo: "https://pdfmakerai.shop/favicon.ico",
    sameAs: [
      "https://x.com/pdfmakerai",
      "https://www.linkedin.com/company/pdfmakerai"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@pdfmakerai.shop",
        url: "https://pdfmakerai.shop/contact",
        availableLanguage: ["en", "hi"],
      },
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pdfmakerai.shop" },
      { "@type": "ListItem", position: 2, name: "About Us", item: "https://pdfmakerai.shop/about" },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is PDF Maker AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PDF Maker AI is a privacy-first platform that offers free online PDF tools like merge, split, compress, OCR, and AI-based summarization without signup.",
        },
      },
      {
        "@type": "Question",
        name: "Is PDF Maker AI free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all our tools are 100% free, with optional premium features coming soon — no hidden costs or subscriptions.",
        },
      },
      {
        "@type": "Question",
        name: "Does PDF Maker AI store my files?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, all processing happens in your browser. We never upload or store your files on any server.",
        },
      },
    ],
  };

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About PDF Maker AI",
    description: "Official About page of PDF Maker AI — know our mission, transparency, values, and privacy practices.",
    url: "https://pdfmakerai.shop/about",
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* ✅ SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([orgLd, breadcrumbLd, faqLd, webPageLd]).replace(/</g, "\\u003c"),
        }}
      />

      {/* ✅ Hero Section */}
      <section className="text-center mb-16 relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-purple-500/15 to-pink-500/15" />
        <div className="relative py-10">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl mx-auto">
              <span className="text-white text-4xl" aria-hidden>📄</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            About PDF Maker AI
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            Empowering the world with intelligent, secure, and free PDF tools — built with privacy and simplicity in mind.
          </p>
        </div>
      </section>

      {/* ✅ Mission */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Our Mission</h2>
        <p className="text-slate-600 leading-relaxed">
          Our goal is to make everyday document tools accessible to everyone — free, fast, and without data collection. We believe privacy should be a fundamental right, not a premium feature.
        </p>
      </section>

      {/* ✅ Story */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Our Story</h2>
        <p className="text-slate-600 leading-relaxed">
          PDF Maker AI began as a small utility to merge PDFs. Today, it powers over 25 AI-based tools used by students, professionals, and businesses worldwide — with all processing done locally on your device.
        </p>
      </section>

      {/* ✅ Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard emoji="🔒" title="Privacy First" text="Everything happens in your browser — no uploads, no tracking." />
          <ValueCard emoji="⚡" title="Speed & Simplicity" text="Instant tools built for usability and productivity." />
          <ValueCard emoji="🌍" title="Accessibility" text="Free and inclusive tools designed for all devices." />
        </div>
      </section>

      {/* ✅ Transparency */}
      <section className="bg-slate-50 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Transparency & Compliance</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Operated by <strong>PDF Maker AI</strong>. Contact us via <Link href="/contact" className="text-indigo-700 underline">/contact</Link> or support@pdfmakerai.shop.</li>
          <li>Read our <Link href="/privacy" className="text-indigo-700 underline">Privacy Policy</Link> for details on cookies, consent, and user rights.</li>
          <li>Review <Link href="/terms" className="text-indigo-700 underline">Terms of Use</Link> for service boundaries and compliance.</li>
          <li>All ads are contextually displayed and never influence tool output — fully AdSense-safe.</li>
          <li>We comply with GDPR, CCPA, and accessibility best practices.</li>
        </ul>
      </section>

      {/* ✅ FAQ Section */}
      <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">FAQs</h2>
        <details className="mb-2">
          <summary>Is PDF Maker AI completely free?</summary>
          <p className="text-slate-600">Yes, all tools are free to use with optional pro features coming soon.</p>
        </details>
        <details className="mb-2">
          <summary>Is it safe to upload my files?</summary>
          <p className="text-slate-600">Your files never leave your browser — nothing is stored or shared.</p>
        </details>
        <details>
          <summary>Does PDF Maker AI run on mobile?</summary>
          <p className="text-slate-600">Yes, all tools work seamlessly on Android and iOS browsers.</p>
        </details>
      </section>
    </main>
  );
}

function ValueCard({ emoji, title, text }: { emoji: string; title: string; text: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition">
      <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center mb-4">
        <span className="text-2xl">{emoji}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}
