
// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — PDF Maker AI: Free, Private PDF Tools",
  description:
    "Learn about PDF Maker AI’s mission, transparency, and privacy-first approach. Meet the team, read our values, and see how we keep core PDF tools free forever.",
  keywords: [
    "about pdf maker ai","who we are","our mission","privacy first pdf tools","free pdf tools",
    "contact pdf maker ai","ownership transparency","adsense friendly about page","legal information",
    "content policy","data privacy","gdpr ccpa friendly","no signup tools","in-browser processing",
    "support contact","open communication","trust and safety","brand values","accessibility commitment",
    "security practices","cookie and privacy policy","terms of use","monetization transparency",
    "user feedback","roadmap","press and media","compliance","copyright",
    "intellectual property","responsible AI","ethical AI","ai features disclosure","community",
    "faq pdf maker ai","help and support","report an issue","partnerships","collaboration",
    "student friendly tools","small business tools","global users","availability","performance",
    "site navigation","important pages","adsense approval","about us page best practices","transparency page"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/about" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About Us — PDF Maker AI",
    description: "Mission, values, privacy, and transparency behind our free, private PDF tools.",
    url: "https://pdfmakerai.shop/about",
    siteName: "PDF Maker AI",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "About PDF Maker AI — Mission & Privacy",
    description: "Who we are, how we work, and why our PDF tools are free and privacy‑first."
  }
};

export default function AboutPage() {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PDF Maker AI",
    url: "https://pdfmakerai.shop",
    logo: "https://pdfmakerai.shop/favicon.ico",
    sameAs: [
      // Add if available: "https://x.com/yourhandle","https://www.linkedin.com/company/yourpage"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "support@pdfmakerai.shop",
        url: "https://pdfmakerai.shop/contact",
        availableLanguage: ["en", "hi"]
      }
    ]
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Organization JSON-LD (XSS-safe) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd).replace(/</g, "\\u003c") }}
      />

      {/* Decorative hero (inline SVG only, no external images) */}
      <section className="text-center mb-16 relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-purple-500/15 to-pink-500/15" />
        <div aria-hidden className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="About PDF Maker AI — mission, values and privacy"
        >
          <defs>
            <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
            <linearGradient id="about-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="about-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-indigo-400/20" />
          <path
            d="M120,240 C200,160 320,160 400,220 C480,280 640,300 700,240 C740,200 720,140 660,120 C600,100 520,120 460,140 C400,160 340,170 260,160 C200,150 140,170 110,200 C90,220 100,240 120,240 Z"
            fill="url(#about-fill)"
            stroke="url(#about-stroke)"
            strokeWidth="2"
          />
        </svg>
        <div className="relative py-10 px-4">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl mx-auto">
              <span className="text-white text-4xl" aria-hidden>📄</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              About PDF Maker AI
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
            Empowering everyone with free, intelligent PDF tools that respect your privacy.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Our Mission</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Powerful document tools shouldn’t come with a price tag or compromise your privacy. Our mission is to democratize
          PDF workflows with professional‑grade, free tools powered by modern AI—easy to use, fast, and private by design.
        </p>
        <p className="text-slate-600 leading-relaxed">
          We help students, professionals, and small businesses get work done—without accounts, trackers, or lock‑ins.
        </p>
      </section>

      {/* Story */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Our Story</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          PDF Maker AI started as a simple PDF merger to remove paywalls and complexity. It has grown into a suite of 25+ tools,
          with AI OCR and on‑device analysis that keep your files on your machine.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Today, users worldwide trust us to merge, split, compress, convert, and analyze documents quickly and safely.
        </p>
      </section>

      {/* Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard emoji="🔒" title="Privacy First" text="In‑browser processing keeps your files local. No storage, no tracking, no compromises." />
          <ValueCard emoji="⚡" title="Speed & Simplicity" text="Clean UX and fast tools help you finish tasks in seconds—not minutes." />
          <ValueCard emoji="🤝" title="Accessibility" text="Core features remain free forever, with an inclusive and accessible experience." />
        </div>
      </section>

      {/* Technology */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Powered by AI</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          We use modern AI safely and transparently to deliver:
        </p>
        <ul className="space-y-2 text-slate-700">
          <li>→ AI OCR for accurate text extraction</li>
          <li>→ Smart compression to shrink files without visible loss</li>
          <li>→ Intelligent splitting with section detection</li>
          <li>→ Chat with PDF for natural‑language answers</li>
        </ul>
      </section>

      {/* Transparency & Compliance (AdSense-friendly) */}
      <section className="bg-slate-50 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Transparency & Compliance</h2>
        <ul className="list-disc pl-6 text-slate-700 space-y-2">
          <li>Ownership & Contact: Operated by PDF Maker AI. Reach us at <a className="text-indigo-700 underline" href="/contact">/contact</a> or support@pdfmakerai.shop.</li>
          <li>Privacy & Cookies: See our <Link href="/privacy" className="text-indigo-700 underline">Privacy Policy</Link> for data use, cookies, opt‑out and consent details.</li>
          <li>Terms of Use: Usage guidelines and acceptable use are in <Link href="/terms" className="text-indigo-700 underline">Terms</Link>.</li>
          <li>Monetization: Some pages may display ads; content is original and independent. Ads never influence tool behavior.</li>
          <li>Accessibility: We follow accessible color contrast, focus states, and keyboard navigation where possible.</li>
        </ul>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-2xl p-8 mb-8 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">By the Numbers</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Stat label="PDF Tools" value="25+" />
          <Stat label="Free Forever" value="100%" />
          <Stat label="Signup Required" value="0" />
          <Stat label="Available" value="24/7" />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center bg-white rounded-2xl p-8 border border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Get in Touch</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Have questions, suggestions, or partnership inquiries? We’d love to hear from you.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
        >
          Contact Us <span aria-hidden>→</span>
        </a>
      </section>
    </main>
  );
}

function ValueCard({ emoji, title, text }: { emoji: string; title: string; text: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition">
      <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center mb-4">
        <span className="text-2xl" aria-hidden>{emoji}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold mb-2">{value}</div>
      <div className="text-indigo-100">{label}</div>
    </div>
  );
}
