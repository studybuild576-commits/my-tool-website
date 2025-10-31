// app/html-to-pdf/page.tsx
import type { Metadata } from "next";
import HTMLToPDFToolWrapper from "@/components/client/HTMLToPDFToolWrapper";

export const metadata: Metadata = {
  title:
    "Free HTML to PDF Converter (A4, High Quality, Private) | PDF Maker AI",
  description:
    "Convert any HTML to a professional, print-ready A4 PDF instantly — supports CSS, images, and Unicode text. 100% free, secure, and works entirely in your browser.",
  keywords: [
    "html to pdf converter",
    "convert html to pdf",
    "a4 pdf from html",
    "high quality html2pdf",
    "html to pdf online",
    "no signup html pdf",
    "private html to pdf",
    "browser based pdf converter",
    "client side html to pdf",
    "html2canvas pdf-lib",
    "css to pdf",
    "images to pdf",
    "multi page html to pdf",
    "page margins pdf",
    "export html to pdf",
    "print html to pdf",
    "responsive html to pdf",
    "download pdf from html",
    "invoice html to pdf",
    "resume html to pdf",
    "report html to pdf",
    "unicode font pdf",
    "webfonts in pdf",
    "vector quality pdf",
    "secure html to pdf",
    "js html pdf",
    "typescript html pdf",
    "html table to pdf",
    "html chart to pdf",
    "html form to pdf",
    "retina html pdf",
    "a4 print pdf",
    "letter size pdf",
    "convert webpage to pdf",
    "save webpage as pdf",
    "fast html pdf tool",
    "free html pdf generator",
    "pdf maker ai html converter",
    "ai powered html to pdf",
    "smart html converter",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/html-to-pdf" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/html-to-pdf",
    title: "Free HTML to PDF Converter — A4, High Quality & Private",
    description:
      "Generate A4 or Letter PDFs directly from HTML in your browser. Fast, accurate, and secure — no uploads, no signup.",
    siteName: "PDF Maker AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Convert HTML to PDF Online — PDF Maker AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free HTML → PDF Converter (A4, High Quality)",
    description:
      "Convert HTML files to professional A4 PDFs with full CSS and image support. Works 100% in your browser.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  // Structured Data (App + FAQ)
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HTML to PDF Converter — PDF Maker AI",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/html-to-pdf",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Convert HTML to high-quality A4/Letter PDFs",
      "Full CSS and image support",
      "Client-side conversion (no uploads)",
      "Private and secure — works in browser",
      "Fast rendering and accurate layouts",
    ],
    publisher: {
      "@type": "Organization",
      name: "PDF Maker AI",
      url: "https://pdfmakerai.shop",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is my HTML uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, the conversion happens entirely in your browser. Your HTML, CSS, and images never leave your device.",
        },
      },
      {
        "@type": "Question",
        name: "Does it support CSS and images?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our converter fully supports inline and external CSS, background images, and embedded media.",
        },
      },
      {
        "@type": "Question",
        name: "Can I create multi-page PDFs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The tool automatically paginates long HTML documents into multiple A4 PDF pages.",
        },
      },
      {
        "@type": "Question",
        name: "Is it free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the HTML to PDF converter by PDF Maker AI is completely free — no account or signup needed.",
        },
      },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-sky-500/15 to-cyan-500/15" />
        <div
          aria-hidden
          className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl"
        />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Convert HTML to PDF with high quality"
        >
          <defs>
            <pattern
              id="dots-htmlpdf"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
            <linearGradient
              id="stroke-htmlpdf"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="fill-htmlpdf" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#dots-htmlpdf)"
            className="text-indigo-400/20"
          />
          <path
            d="M110,250 C170,180 300,170 380,210 C450,245 520,260 600,230 C650,210 690,170 670,130 C640,80 560,80 500,110 C430,145 360,160 280,150 C210,140 160,160 130,190 C110,210 100,230 110,250 Z"
            fill="url(#fill-htmlpdf)"
            stroke="url(#stroke-htmlpdf)"
            strokeWidth="2"
          />
        </svg>
        <div className="relative p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold text-indigo-900">
            HTML → PDF — Free, A4 & High-Quality
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            Convert HTML to pixel-perfect, print-ready PDFs with margins, CSS,
            and image support — directly in your browser, for free.
          </p>
        </div>
      </div>

      {/* Main Tool */}
      <HTMLToPDFToolWrapper />

      {/* FAQs */}
      <section className="mt-8 border-t pt-6">
        <h2 className="text-lg font-semibold mb-3">
          Frequently Asked Questions
        </h2>
        <details className="mb-2">
          <summary>Does this tool upload my files?</summary>
          <p className="text-gray-600">
            No. Everything runs securely in your browser. No uploads, no data
            storage.
          </p>
        </details>
        <details className="mb-2">
          <summary>Can I use custom CSS and images?</summary>
          <p className="text-gray-600">
            Yes. You can include full CSS styles and image assets — the output
            PDF keeps your layout exactly.
          </p>
        </details>
        <details className="mb-2">
          <summary>Is the HTML to PDF converter free?</summary>
          <p className="text-gray-600">
            100% free and privacy-friendly. Works offline in your browser.
          </p>
        </details>
      </section>
    </main>
  );
}
