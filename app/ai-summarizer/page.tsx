// app/ai-summarizer/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import AISummarizerToolWrapper from "@/components/client/AISummarizerToolWrapper";

export const metadata: Metadata = {
  title: "AI Summarizer Tool: Summarize Text Online (Private, Free) | PDF Maker AI",
  description:
    "Summarize long text into concise highlights using an in‑browser AI summarizer—fast, private, free, and no signup required.",
  keywords: [
    "ai summarizer tool","summarize text online","free text summarizer","in‑browser summarizer","no signup summarizer",
    "instant text summary","extractive summarizer","privacy first summarizer","local text processing","document summarization ai",
    "article summarizer online","research paper summarizer","email summarizer","meeting notes summarizer","blog post summarizer",
    "long text to short summary","key points extractor","auto summary generator","tl;dr generator","ai tl;dr tool",
    "semantic summarizer","keyword based summarization","summarize paragraphs","summary generator free","offline summarizer",
    "context aware summarizer","fast summarization ai","education summarizer tool","study notes generator","report summarizer ai",
    "policy document summarizer","handbook summary tool","legal summary generator","pdf text summarizer","markdown summarizer",
    "web page summarizer","chrome summarizer alternative","local ai summarizer","safe summarization tool","private summary ai",
    "no login summarizer","text condensation ai","topic highlights extractor","headline generator ai","bullet point summarizer",
    "concise summary maker","english text summarizer","ai content compressor","note maker from text","overview generator ai"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/ai-summarizer" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/ai-summarizer",
    title: "AI Summarizer Tool — Private, Free, In‑Browser",
    description: "Create concise summaries from long text with a fast, private, in‑browser AI summarizer.",
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Summarizer Online — Private & Free",
    description: "Summarize long text quickly in your browser—no signup, privacy‑first."
  }
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Summarizer Tool",
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "ContentSummarization",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/ai-summarizer",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Summarize long text",
      "Adjustable summary length",
      "In‑browser processing",
      "No signup",
      "Privacy‑first",
      "Fast summaries"
    ],
    keywords:
      "ai summarizer tool, summarize text online, free text summarizer, in‑browser summarizer, no signup summarizer, instant text summary",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Kya summarizer data ko server par upload karta hai?",
        acceptedAnswer: { "@type": "Answer", text: "Nahi, processing browser ke andar hoti hai; koi data upload nahi hota." } },
      { "@type": "Question", name: "Kya yeh tool free aur bina signup hai?",
        acceptedAnswer: { "@type": "Answer", text: "Haan, 100% free aur bina account ke use kiya ja sakta hai." } },
      { "@type": "Question", name: "Summary length control milta hai?",
        acceptedAnswer: { "@type": "Answer", text: "Haan, Short, Medium, aur Long options uplabdh hain." } }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />

      {/* Decorative hero (inline SVG, no images) */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-sky-500/15 to-cyan-500/15" />
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-sky-400 blur-3xl opacity-20" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-400 blur-3xl opacity-20" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI summarizer tool generating concise summaries from long text">
          <defs>
            <pattern id="dots-sum" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" /></pattern>
            <linearGradient id="stroke-sum" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" /><stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" /></linearGradient>
            <linearGradient id="fill-sum" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#93c5fd" stopOpacity="0.18" /><stop offset="100%" stopColor="#67e8f9" stopOpacity="0.18" /></linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-sum)" className="text-indigo-400/20" />
          <path d="M110,250 C170,180 300,170 380,210 C450,245 520,260 600,230 C650,210 690,170 670,130 C640,80 560,80 500,110 C430,145 360,160 280,150 C210,140 160,160 130,190 C110,210 100,230 110,250 Z" fill="url(#fill-sum)" stroke="url(#stroke-sum)" strokeWidth="2" />
        </svg>
        <div className="relative p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold text-indigo-900">AI Summarizer — Private, Free & In‑Browser</h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700">Summarize long text into concise highlights locally—no uploads, no signup.</p>
          <ul className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-700">
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">No signup</li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">Privacy‑first</li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">Fast summaries</li>
          </ul>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Why use this summarizer?</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          <li>• Private, in‑browser processing (no uploads)</li>
          <li>• Adjustable length: Short, Medium, Long</li>
          <li>• Free and no signup required</li>
          <li>• Works with long content</li>
        </ul>
      </section>

      <AISummarizerToolWrapper />

      <aside className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Related tools</h2>
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link prefetch={false} href="/chat-with-pdf">Chat with PDF (Q&A + summaries)</Link>
          <Link prefetch={false} href="/ai-ocr">AI OCR (PDF/Image to Text)</Link>
          <Link prefetch={false} href="/pdf-reader">PDF Reader</Link>
          <Link prefetch={false} href="/compress-pdf">Compress PDF</Link>
        </nav>
      </aside>

      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <details className="mb-2"><summary>Data upload hota hai?</summary><p className="text-gray-600">Nahi, processing browser me hi hoti hai.</p></details>
        <details className="mb-2"><summary>Tool free hai?</summary><p className="text-gray-600">Haan, 100% free.</p></details>
        <details className="mb-2"><summary>Length controls?</summary><p className="text-gray-600">Short, Medium, Long.</p></details>
      </section>
    </main>
  );
}
