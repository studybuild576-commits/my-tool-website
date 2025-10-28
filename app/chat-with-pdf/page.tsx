// app/chat-with-pdf/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ChatWithPDFFormWrapper from "@/components/client/ChatWithPDFFormWrapper";

export const metadata: Metadata = {
  title: "Chat with PDF AI Tool: Ask Questions & Get Summaries (Private, Free) | PDF Maker AI",
  description:
    "Chat with your PDF using AI: ask questions, get instant summaries, and extract answers—private, free, and fully in‑browser with no signup.",
  keywords: [
    "chat with pdf ai tool","chat with pdf online","ask questions to pdf","pdf qna","pdf summarizer online",
    "summarize pdf with ai","private pdf chat","in‑browser pdf chat","ai pdf reader","pdf analysis tool",
    "document question answering","semantic search pdf","local pdf processing","no signup pdf tool","free pdf summarizer",
    "extract info from pdf","pdf insights ai","ai document chat","qna over pdf","instant pdf summary",
    "secure pdf chat","fast pdf summarization","rag over pdf","pdf assistant ai","contextual pdf answers",
    "offline pdf ai","privacy first pdf qna","ai chatbot for pdf","parse pdf with ai","search pdf with ai",
    "vector search pdf","flexsearch pdf","similarity search pdf","long pdf summarizer","multi page pdf summary",
    "keyword search pdf","legal pdf analyzer","research paper summarizer","invoice pdf qna","contract pdf chat",
    "ebook question answering","education pdf tutor","technical pdf assistant","report summarizer ai",
    "meeting minutes from pdf","policy document qna","handbook qna ai","datasheet analyzer ai","pdf faq generator ai"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/chat-with-pdf" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/chat-with-pdf",
    title: "Chat with PDF AI Tool — Ask Questions & Get Summaries (Private, Free)",
    description:
      "Upload a PDF and chat with it—get instant answers and summaries with a private, in‑browser AI tool.",
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chat with PDF AI Tool — Private, Free, In‑Browser",
    description: "Ask questions and get summaries from your PDFs in‑browser—no signup, no upload."
  }
};

export default function ChatWithPDFPage() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Chat with PDF AI Tool",
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "DocumentAnalysis",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/chat-with-pdf",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Ask questions to PDF",
      "Instant AI summaries",
      "In‑browser processing",
      "No signup",
      "Privacy‑first",
      "Fast answers"
    ],
    keywords:
      "chat with pdf ai tool, ask questions to pdf, pdf summarizer online, private pdf chat, in‑browser pdf chat, ai pdf reader, question answering from pdf, secure pdf chat",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kya data server par upload hota hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nahi, saari processing browser ke andar hoti hai; koi file server par upload nahi hoti."
        }
      },
      {
        "@type": "Question",
        name: "Kya yeh tool bilkul free aur bina signup ke hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, 100% free aur bina account ke use kiya ja sakta hai."
        }
      },
      {
        "@type": "Question",
        name: "Yeh kaise kaam karta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tool PDF se text extract karke local full‑text search aur similarity matching se relevant passages dikhata hai."
        }
      },
      {
        "@type": "Question",
        name: "Kya bade documents par bhi fast chalega?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, text ko chhote chunks me index kiya jata hai taaki relevant hissa jaldi mil sake."
        }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      {/* JSON‑LD (XSS‑safe) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }}
      />

      {/* Decorative hero (inline SVG only, no image) */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 via-pink-500/15 to-rose-500/15" />
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-rose-400 blur-3xl opacity-20" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-purple-400 blur-3xl opacity-20" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Chat with PDF AI tool providing answers and summaries from documents"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
            <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#fb7185" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" className="text-purple-400/20" />
          <path
            d="M100,260 C180,180 320,160 400,220 C500,300 660,300 700,240 C740,180 680,120 600,110 C520,100 480,130 420,150 C360,170 300,170 240,150 C180,130 120,160 90,200 C70,230 80,260 100,260 Z"
            fill="url(#fill)"
            stroke="url(#stroke)"
            strokeWidth="2"
          />
        </svg>
        <div className="relative p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold text-purple-900">
            Chat with PDF — Private, Free & In‑Browser
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            Ask questions and get instant summaries from your PDF using a local AI workflow—no uploads, no signup.
          </p>
          <ul className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-700">
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">No signup</li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">In‑browser processing</li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">Fast answers</li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">Free forever</li>
          </ul>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Why use this tool?</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          <li>• Private, in‑browser processing (no uploads)</li>
          <li>• Instant AI summaries and answers</li>
          <li>• Free and no signup required</li>
          <li>• Works with long PDFs</li>
        </ul>
      </section>

      <ChatWithPDFFormWrapper />

      <aside className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Related tools</h2>
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link prefetch={false} href="/ai-ocr">AI OCR (PDF/Image to Text)</Link>
          <Link prefetch={false} href="/pdf-reader">PDF Reader (extract text)</Link>
          <Link prefetch={false} href="/merge-pdf">Merge PDF</Link>
          <Link prefetch={false} href="/split-pdf">Split PDF</Link>
          <Link prefetch={false} href="/compress-pdf">Compress PDF</Link>
        </nav>
      </aside>

      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <details className="mb-2"><summary>Data server par upload hota hai?</summary><p className="text-gray-600">Nahi, sab kuchh browser ke andar process hota hai—privacy safe.</p></details>
        <details className="mb-2"><summary>Tool free aur bina signup?</summary><p className="text-gray-600">Haan, 100% free aur bina account ke.</p></details>
        <details className="mb-2"><summary>Kaise kaam karta hai?</summary><p className="text-gray-600">Local indexing + similarity ke through relevant passages milte hain.</p></details>
        <details className="mb-2"><summary>Lambe PDFs par speed?</summary><p className="text-gray-600">Chunks aur index ki wajah se fast response aata hai.</p></details>
      </section>
    </main>
  );
}
