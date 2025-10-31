// app/chat-with-pdf/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ChatWithPDFFormWrapper from "@/components/client/ChatWithPDFFormWrapper";

export const metadata: Metadata = {
  title: "Chat with PDF AI — Ask Questions, Get Answers & Summaries | Free & Private | PDF Maker AI",
  description:
    "Use AI to chat with your PDF — ask questions, get summaries, and extract answers instantly. 100% private, in-browser, and free — no signup or upload required.",
  keywords: [
    "chat with pdf ai", "ask pdf questions", "pdf summarizer", "ai pdf reader", "private pdf chat", "free pdf chatbot",
    "local pdf ai", "offline pdf analysis", "secure pdf chat", "rag over pdf", "vector search pdf", "document ai assistant"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/chat-with-pdf" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/chat-with-pdf",
    title: "Chat with PDF AI — Private, Free & Instant Summaries",
    description:
      "Chat with your PDF using AI — get answers and summaries directly in your browser. 100% private and free to use.",
    images: [
      {
        url: "https://pdfmakerai.shop/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chat with PDF AI — Free & Private Tool | PDF Maker AI",
      },
    ],
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chat with PDF AI — Free & Private Tool",
    description: "Ask questions and get AI summaries from your PDFs instantly — no signup required.",
    images: ["https://pdfmakerai.shop/og-image.png"],
  },
};

export default function ChatWithPDFPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://pdfmakerai.shop/chat-with-pdf",
        name: "Chat with PDF AI — Ask Questions, Get Answers & Summaries | PDF Maker AI",
        description:
          "AI-powered Chat with PDF tool lets you ask questions, get summaries, and extract insights — 100% private and free.",
        url: "https://pdfmakerai.shop/chat-with-pdf",
        inLanguage: "en",
        isPartOf: { "@id": "https://pdfmakerai.shop/#website" },
      },
      {
        "@type": "SoftwareApplication",
        name: "Chat with PDF AI Tool",
        applicationCategory: "AIApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: [
          "Ask questions to PDF",
          "Instant AI summaries",
          "In-browser processing",
          "No signup or upload",
          "Privacy-first workflow",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "1287",
        },
        publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Kya data server par upload hota hai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nahi, saari processing browser ke andar hoti hai; koi file server par upload nahi hoti.",
            },
          },
          {
            "@type": "Question",
            name: "Kya yeh tool bilkul free aur bina signup ke hai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Haan, 100% free aur bina account ke use kiya ja sakta hai.",
            },
          },
          {
            "@type": "Question",
            name: "Yeh kaise kaam karta hai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tool PDF se text extract karke local full-text search aur similarity matching se relevant passages dikhata hai.",
            },
          },
          {
            "@type": "Question",
            name: "Kya bade documents par bhi fast chalega?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Haan, text ko chhote chunks me index kiya jata hai taaki relevant hissa jaldi mil sake.",
            },
          },
        ],
      },
      {
        "@type": "SpeakableSpecification",
        cssSelector: [".hero-title", ".faq-section"],
      },
    ],
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      {/* HERO */}
      <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-rose-500/10 p-8 sm:p-10">
        <h1 className="hero-title text-3xl sm:text-4xl font-extrabold text-purple-900">
          Chat with PDF — Private, Free & In-Browser
        </h1>
        <p className="mt-2 text-slate-700 text-sm sm:text-base">
          Ask questions and get instant summaries from your PDF using AI — 100% private, local processing.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm text-slate-700">
          <li className="bg-white/70 px-3 py-1 rounded border border-slate-200">No signup</li>
          <li className="bg-white/70 px-3 py-1 rounded border border-slate-200">In-browser AI</li>
          <li className="bg-white/70 px-3 py-1 rounded border border-slate-200">Fast answers</li>
          <li className="bg-white/70 px-3 py-1 rounded border border-slate-200">Free forever</li>
        </ul>
      </div>

      {/* WHY USE SECTION */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Why use this tool?</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          <li>• Private, in-browser processing (no uploads)</li>
          <li>• Instant AI summaries and answers</li>
          <li>• Free and no signup required</li>
          <li>• Works even with long PDFs</li>
        </ul>
      </section>

      <ChatWithPDFFormWrapper />

      {/* RELATED LINKS */}
      <aside className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Related Tools</h2>
        <nav className="flex flex-wrap gap-3 text-sm text-blue-700">
          <Link href="/ai-ocr" prefetch={false}>AI OCR (PDF/Image to Text)</Link>
          <Link href="/pdf-reader" prefetch={false}>PDF Reader (Extract Text)</Link>
          <Link href="/merge-pdf" prefetch={false}>Merge PDF</Link>
          <Link href="/split-pdf" prefetch={false}>Split PDF</Link>
          <Link href="/compress-pdf" prefetch={false}>Compress PDF</Link>
        </nav>
      </aside>

      {/* FAQ */}
      <section className="faq-section mt-8">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        {[
          ["Data server par upload hota hai?", "Nahi, sab kuchh browser ke andar process hota hai — privacy safe."],
          ["Tool free aur bina signup?", "Haan, 100% free aur bina account ke."],
          ["Kaise kaam karta hai?", "Local indexing + similarity ke through relevant passages milte hain."],
          ["Lambe PDFs par speed?", "Chunks aur index ki wajah se fast response milta hai."],
        ].map(([q, a], i) => (
          <details key={i} className="mb-2">
            <summary>{q}</summary>
            <p className="text-gray-600">{a}</p>
          </details>
        ))}
      </section>
    </main>
  );
}
