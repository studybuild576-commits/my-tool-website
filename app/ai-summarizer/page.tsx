// app/ai-summarizer/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import AISummarizerToolWrapper from "@/components/client/AISummarizerToolWrapper";

export const metadata: Metadata = {
  title: "Free AI Text Summarizer — Fast, Private & No Signup | PDF Maker AI",
  description:
    "Use the best AI Summarizer tool online — summarize long articles, emails, research papers or notes instantly. 100% private, in-browser, and free forever.",
  keywords: [
    "ai summarizer tool","summarize text online","free ai summary generator",
    "private text summarizer","in-browser summarizer","tl;dr generator",
    "research paper summarizer","pdf summarizer","no signup ai tool",
    "summary generator online","instant text summary","free ai tl;dr",
    "key points extractor","document summarizer","note maker ai"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/ai-summarizer" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/ai-summarizer",
    title: "AI Summarizer Tool — Free, Private & Instant",
    description: "Summarize long content into concise key points instantly. 100% privacy — no uploads, no signup.",
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Summarizer — Fast, Private & Free",
    description: "Get instant AI summaries from long text, notes, or documents — right in your browser.",
  },
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Summarizer Tool",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/ai-summarizer",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Summarize long text instantly",
      "No signup required",
      "Private & in-browser processing",
      "Adjustable summary length",
      "Fast AI summary results"
    ],
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kya AI summarizer data ko server par upload karta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nahi, AI summarizer poora browser ke andar hi run karta hai — koi data server par upload nahi hota.",
        },
      },
      {
        "@type": "Question",
        name: "Kya yeh summarizer free aur bina signup ke use ho sakta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, yeh 100% free aur bina kisi account ke use kiya ja sakta hai.",
        },
      },
      {
        "@type": "Question",
        name: "Kya main summary length choose kar sakta hoon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bilkul, aap Short, Medium, ya Long summary length control kar sakte hain.",
        },
      },
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pdfmakerai.shop" },
      { "@type": "ListItem", position: 2, name: "AI Tools", item: "https://pdfmakerai.shop/tools" },
      { "@type": "ListItem", position: 3, name: "AI Summarizer", item: "https://pdfmakerai.shop/ai-summarizer" },
    ],
  };

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Summarizer Tool | PDF Maker AI",
    description: "Free AI Summarizer — summarize articles, PDFs, and notes instantly with privacy-first in-browser processing.",
    url: "https://pdfmakerai.shop/ai-summarizer",
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* ✅ SEO JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([appLd, faqLd, breadcrumbLd, webPageLd]).replace(/</g, "\\u003c"),
        }}
      />

      {/* ✅ Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-sky-500/15 to-cyan-500/15" />
        <div className="relative p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold text-indigo-900">
            AI Summarizer — Free, Fast & Private
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            Summarize long articles, PDFs, or text instantly in your browser — no uploads, no signup, 100% privacy.
          </p>
          <ul className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-700">
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">Private Processing</li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">No Signup</li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">Free Forever</li>
          </ul>
        </div>
      </div>

      {/* ✅ Benefits Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Why choose PDF Maker AI Summarizer?</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          <li>• Browser-based summarization (no uploads)</li>
          <li>• AI-powered summaries within seconds</li>
          <li>• Choose from Short, Medium, Long</li>
          <li>• Ideal for articles, PDFs, and research</li>
        </ul>
      </section>

      {/* ✅ Main Tool */}
      <AISummarizerToolWrapper />

      {/* ✅ Related Tools */}
      <aside className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Related Tools</h2>
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link href="/chat-with-pdf" prefetch={false}>Chat with PDF</Link>
          <Link href="/ai-ocr" prefetch={false}>AI OCR (PDF/Image to Text)</Link>
          <Link href="/pdf-reader" prefetch={false}>PDF Reader</Link>
          <Link href="/compress-pdf" prefetch={false}>Compress PDF</Link>
        </nav>
      </aside>

      {/* ✅ FAQs (Visible + Schema) */}
      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
        <details className="mb-2">
          <summary>Data upload hota hai?</summary>
          <p className="text-gray-600">Nahi, sab kuch browser ke andar hota hai — koi upload nahi hota.</p>
        </details>
        <details className="mb-2">
          <summary>Tool free hai?</summary>
          <p className="text-gray-600">Haan, 100% free aur bina signup ke.</p>
        </details>
        <details className="mb-2">
          <summary>Length control milta hai?</summary>
          <p className="text-gray-600">Haan, Short, Medium, aur Long options available hain.</p>
        </details>
      </section>
    </main>
  );
}
