// app/case-converter/page.tsx
import type { Metadata } from "next";
import CaseConverterToolWrapper from "@/components/client/CaseConverterToolWrapper";

export const metadata: Metadata = {
  title: "Free Case Converter: Uppercase, Lowercase, Capitalize (In-Browser) | PDF Maker AI",
  description:
    "Convert text to UPPERCASE, lowercase, Capitalized, Title Case, Sentence case—fast, free, and private. Runs entirely in your browser. No signup needed.",
  keywords: [
    "case converter",
    "uppercase converter",
    "lowercase converter",
    "capitalize text",
    "title case",
    "sentence case",
    "online case converter",
    "free text tools",
    "in-browser case conversion",
    "no signup case converter",
    "private text converter",
    "toggle case",
    "camel case",
    "kebab case",
    "snake case",
    "pascal case",
    "copy text online",
    "text utilities",
    "word counter",
    "character counter",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/case-converter" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/case-converter",
    title: "Free Case Converter — Uppercase, Lowercase, Capitalize",
    description:
      "UPPERCASE, lowercase, Capitalized, Title Case, Sentence case—convert text instantly, privately, and for free.",
    siteName: "PDF Maker AI",
    images: [
      { url: "https://pdfmakerai.shop/logo.png", width: 512, height: 512, alt: "PDF Maker AI logo" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Converter Online — Free & Private",
    description: "Convert text case in your browser—no signup, 100% free.",
    images: ["https://pdfmakerai.shop/logo.png"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Case Converter",
        applicationCategory: "UtilityApplication",
        operatingSystem: "Web",
        url: "https://pdfmakerai.shop/case-converter",
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "UPPERCASE, lowercase, Capitalized",
          "Title Case, Sentence case",
          "Toggle, snake/kebab/camel/pascal",
          "In-browser, no signup",
        ],
        publisher: {
          "@type": "Organization",
          name: "PDF Maker AI",
          url: "https://pdfmakerai.shop",
          logo: "https://pdfmakerai.shop/logo.png",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "क्या डेटा अपलोड होता है?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "नहीं, सारा प्रोसेस आपके ब्राउज़र में ही होता है। कोई डेटा सर्वर पर नहीं जाता।",
            },
          },
          {
            "@type": "Question",
            name: "क्या यह टूल 100% फ्री है?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "हाँ, यह पूरी तरह से फ्री है और किसी लॉगिन या साइनअप की ज़रूरत नहीं है।",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* ✅ SEO Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Decorative Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-sky-500/15 to-cyan-500/15" />
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl"
        />

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Convert text case online"
        >
          <defs>
            <pattern id="dots-case" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
            <linearGradient id="stroke-case" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="fill-case" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.18" />
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#dots-case)" className="text-indigo-400/20" />
          <path
            d="M110,250 C170,180 300,170 380,210 C450,245 520,260 600,230 C650,210 690,170 670,130 C640,80 560,80 500,110 C430,145 360,160 280,150 C210,140 160,160 130,190 C110,210 100,230 110,250 Z"
            fill="url(#fill-case)"
            stroke="url(#stroke-case)"
            strokeWidth="2"
          />
        </svg>

        <div className="relative p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold text-indigo-900">
            🔠 Case Converter — Free & Private
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            Convert text to UPPERCASE, lowercase, Capitalized, Title Case, and more — no signup,
            processed entirely in your browser.
          </p>
        </div>
      </div>

      {/* Tool Component */}
      <CaseConverterToolWrapper />

      {/* FAQ Section */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">FAQs</h2>
        <details className="mb-2">
          <summary>क्या डेटा अपलोड होता है?</summary>
          <p className="text-gray-600">नहीं, सब कुछ आपके ब्राउज़र में ही प्रोसेस होता है।</p>
        </details>
        <details className="mb-2">
          <summary>क्या यह टूल 100% फ्री है?</summary>
          <p className="text-gray-600">हाँ, यह पूरी तरह से फ्री और बिना अकाउंट के है।</p>
        </details>
      </section>
    </main>
  );
}
