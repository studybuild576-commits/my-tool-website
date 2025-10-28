// app/chat-with-pdf/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ChatWithPDFForm = dynamic(() => import("@/components/ChatWithPDFForm"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse space-y-3">
      <div className="h-8 w-56 bg-gray-200 rounded" />
      <div className="h-24 w-full bg-gray-200 rounded" />
      <div className="h-40 w-full bg-gray-200 rounded" />
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Chat with PDF — Ask Questions, Get Summaries (Private) | PDF Maker AI",
  description:
    "Upload a PDF and ask questions or request summaries. Instantly extract key points—fast, free, and privacy‑first in your browser.",
  alternates: { canonical: "https://pdfmakerai.shop/chat-with-pdf" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/chat-with-pdf",
    title: "Chat with PDF — PDF Maker AI",
    description:
      "Interact with PDF documents: ask questions and get summaries using AI. 100% in‑browser.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chat with PDF — PDF Maker AI",
    description:
      "Ask questions and get summaries from your PDFs in‑browser—no signup.",
  },
};

export default function ChatWithPDFPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Chat with PDF",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/chat-with-pdf",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Upload PDF and ask questions",
      "Instant summaries",
      "In‑browser processing",
      "No signup",
      "Privacy‑first",
    ],
    keywords: "chat with pdf, pdf qna, pdf summarizer, privacy first pdf chat",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Kya data server par upload hota hai?", acceptedAnswer: { "@type": "Answer", text: "Nahi, saari processing browser ke andar hoti hai." } },
      { "@type": "Question", name: "Kya yeh bilkul free hai?", acceptedAnswer: { "@type": "Answer", text: "Haan, 100% free aur bina account ke." } },
      { "@type": "Question", name: "Kaise kaam karta hai?", acceptedAnswer: { "@type": "Answer", text: "Tool text extract karke local search aur similarity se answers deta hai." } },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />

      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">Chat with PDF</h1>
          <h2 className="text-lg text-slate-700 mb-4">Upload a PDF and ask questions or request summaries.</h2>
          <ChatWithPDFForm />
        </div>
      </section>
    </main>
  );
}
