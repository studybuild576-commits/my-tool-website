// app/batch-processing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import BatchProcessingToolWrapper from "@/components/client/BatchProcessingToolWrapper";

export const metadata: Metadata = {
  title: "Batch PDF Processing Tool: Convert, Compress, Watermark Multiple Files (Free) | PDF Maker AI",
  description:
    "Batch process PDFs in-browser: convert, compress, merge, split, watermark multiple files at once—fast, free, privacy-first, and no signup required.",
  keywords: [
    "batch pdf processing","batch pdf converter","bulk pdf operations","multiple pdf processing","batch compress pdf",
    "batch merge pdf","batch split pdf","batch watermark pdf","bulk convert pdf","bulk ocr pdf",
    "batch rename pdf files","mass pdf processing","automated pdf workflow","repetitive pdf tasks","pdf bulk tools",
    "process many pdfs","free batch pdf tool","no signup batch processing","in-browser batch pdf","privacy first bulk pdf",
    "batch pdf to jpg","batch pdf to word","batch pdf compression tool","efficient pdf workflow","time-saving pdf tool",
    "enterprise pdf batch","large document sets processing","parallel pdf processing","queue pdf jobs","bulk pdf organizer",
    "batch pdf security","password protect batch","batch watermark documents","batch page numbering pdf","batch header footer pdf",
    "batch rotate pdf","batch crop pdf pages","batch extract pdf pages","batch optimize pdfs","batch delete pdf pages",
    "batch image to pdf","batch text to pdf","batch reorder pdf pages","batch sign pdf","multi-file pdf operations"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/batch-processing" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/batch-processing",
    title: "Batch PDF Processing — Free, Private, In‑Browser",
    description: "Process multiple PDFs at once: convert, compress, merge, split, watermark—no signup, fully in‑browser.",
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "Batch PDF Processing Tool — Free & Private",
    description: "Bulk PDF operations in your browser—no uploads, no signup."
  }
};

export default function BatchProcessingPage() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Batch PDF Processing Tool",
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "DocumentManagement",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/batch-processing",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Batch convert PDFs",
      "Batch compress PDFs",
      "Batch merge/split PDFs",
      "Batch watermark",
      "In‑browser processing",
      "No signup",
      "Privacy‑first"
    ],
    keywords: "batch pdf processing, bulk pdf operations, batch compress pdf, batch merge pdf, free batch pdf tool, in-browser batch pdf",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Kya batch processing server par upload karta hai?",
        acceptedAnswer: { "@type": "Answer", text: "Nahi, sab kuchh browser me process hota hai; koi file server par nahi jati." } },
      { "@type": "Question", name: "Kitne files ek sath process kar sakte hain?",
        acceptedAnswer: { "@type": "Answer", text: "Browser memory par depend karta hai; typically 10–50 PDFs smoothly chal sakti hain." } },
      { "@type": "Question", name: "Kya tool free hai?",
        acceptedAnswer: { "@type": "Answer", text: "Haan, 100% free aur bina account ke." } }
    ]
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g,"\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g,"\\u003c") }} />

      {/* Inline SVG hero (no external images) */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/15 via-teal-500/15 to-cyan-500/15" />
        <div aria-hidden className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-teal-400/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Batch PDF processing tool handling multiple files at once">
          <defs>
            <pattern id="grid-batch" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" /></pattern>
            <linearGradient id="stroke-batch" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#14b8a6" stopOpacity="0.6" /><stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" /></linearGradient>
            <linearGradient id="fill-batch" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#5eead4" stopOpacity="0.18" /><stop offset="100%" stopColor="#67e8f9" stopOpacity="0.18" /></linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-batch)" className="text-teal-400/20" />
          <path d="M130,230 C190,170 310,160 390,200 C470,240 630,260 690,210 C730,180 710,130 660,110 C600,85 530,115 470,135 C410,155 350,165 270,155 C200,145 150,165 120,195 C100,215 110,230 130,230 Z" fill="url(#fill-batch)" stroke="url(#stroke-batch)" strokeWidth="2" />
        </svg>
        <div className="relative p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold text-emerald-900">⚡ Batch PDF Processing — Free & In‑Browser</h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700">Process multiple PDFs at once: convert, compress, merge, split, watermark—fast, private, no signup.</p>
          <ul className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-700">
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">Multi-file</li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">Privacy-first</li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">Fast queue</li>
          </ul>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Why use batch processing?</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          <li>• Time-saving: process 10s/100s of files in one go</li>
          <li>• Consistent settings applied to all files</li>
          <li>• In-browser: no uploads, privacy protected</li>
          <li>• Free and no signup required</li>
        </ul>
      </section>

      <BatchProcessingToolWrapper />

      <aside className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Related tools</h2>
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link prefetch={false} href="/compress-pdf">Compress PDF</Link>
          <Link prefetch={false} href="/merge-pdf">Merge PDF</Link>
          <Link prefetch={false} href="/split-pdf">Split PDF</Link>
          <Link prefetch={false} href="/pdf-to-jpg">PDF to JPG</Link>
          <Link prefetch={false} href="/ai-ocr">AI OCR</Link>
        </nav>
      </aside>

      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <details className="mb-2"><summary>Data upload hota hai?</summary><p className="text-gray-600">Nahi, browser me hi sab process hota hai.</p></details>
        <details className="mb-2"><summary>Kitne files ek sath?</summary><p className="text-gray-600">Typically 10–50 smoothly; browser RAM par depend karta hai.</p></details>
        <details className="mb-2"><summary>Free hai?</summary><p className="text-gray-600">Haan, 100% free.</p></details>
      </section>
    </main>
  );
}
