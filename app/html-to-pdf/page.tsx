// app/html-to-pdf/page.tsx
import type { Metadata } from "next";
import HTMLToPDFToolWrapper from "@/components/client/HTMLToPDFToolWrapper";

export const metadata: Metadata = {
  title: "HTML to PDF Converter (A4, High‑Quality, Free) | PDF Maker AI",
  description:
    "Convert HTML to PDF in your browser with crisp A4 output, margins, and images/CSS support. Free, private, and no signup.",
  keywords: [
    "html to pdf converter","convert html to pdf","a4 pdf from html","high quality html2pdf","html to pdf online",
    "no signup html pdf","private html to pdf","in browser pdf","client side html to pdf","html2canvas pdf-lib",
    "css to pdf","images to pdf","multi page html to pdf","large html to pdf","page margins pdf",
    "letter size pdf","export html to pdf","print html to pdf","responsive html to pdf","download pdf from html",
    "invoice html to pdf","resume html to pdf","report html to pdf","blog post to pdf","documentation to pdf",
    "unicode font pdf","webfonts in pdf","vector quality pdf","fast html to pdf","secure html to pdf",
    "js html pdf","typescript html pdf","dpi scaling pdf","retina html pdf","emojis in pdf","rtl html pdf",
    "html table to pdf","html chart to pdf","html form to pdf","download a4 pdf","client only converter"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/html-to-pdf" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/html-to-pdf",
    title: "HTML to PDF Converter — Free & Private",
    description: "Convert HTML into crisp A4 PDFs in your browser—no signup, no server uploads.",
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary",
    title: "Free HTML → PDF (A4, High‑Quality)",
    description: "Browser‑based HTML to PDF converter with margins, pagination, and images/CSS."
  }
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HTML to PDF Converter",
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "DocumentConversion",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/html-to-pdf",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency": "USD" },
    featureList: [
      "A4/Letter sizes",
      "High‑DPI rendering",
      "Margins and pagination",
      "Images & CSS support",
      "In‑browser, no signup"
    ],
    keywords:
      "html to pdf, a4 pdf from html, client side html2pdf, margins, pagination, images, css",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }} />
      {/* Decorative hero (inline SVG) */}
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-sky-500/15 to-cyan-500/15" />
        <div aria-hidden className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-sky-400/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Convert HTML to PDF with high quality">
          <defs>
            <pattern id="dots-htmlpdf" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" /></pattern>
            <linearGradient id="stroke-htmlpdf" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" /><stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" /></linearGradient>
            <linearGradient id="fill-htmlpdf" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#93c5fd" stopOpacity="0.18" /><stop offset="100%" stopColor="#67e8f9" stopOpacity="0.18" /></linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-htmlpdf)" className="text-indigo-400/20" />
          <path d="M110,250 C170,180 300,170 380,210 C450,245 520,260 600,230 C650,210 690,170 670,130 C640,80 560,80 500,110 C430,145 360,160 280,150 C210,140 160,160 130,190 C110,210 100,230 110,250 Z" fill="url(#fill-htmlpdf)" stroke="url(#stroke-htmlpdf)" strokeWidth="2" />
        </svg>
        <div className="relative p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold text-indigo-900">HTML → PDF — A4, High‑Quality</h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700">Convert HTML to crisp PDFs with margins, pagination, and images—fast, private, in‑browser.</p>
        </div>
      </div>

      <HTMLToPDFToolWrapper />
    </main>
  );
}
