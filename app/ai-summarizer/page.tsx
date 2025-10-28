// app/ai-summarizer/page.tsx
import type { Metadata } from "next";
import AISummarizerToolWrapper from "@/components/client/AISummarizerToolWrapper";

export const metadata: Metadata = {
  title: "AI Summarizer: Summarize Text Online (Private) | PDF Maker AI",
  description:
    "Summarize long text into concise highlights with an in‑browser AI summarizer. Fast, free, privacy‑first—no signup.",
  alternates: { canonical: "https://pdfmakerai.shop/ai-summarizer" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/ai-summarizer",
    title: "AI Summarizer — PDF Maker AI",
    description: "Create concise summaries from long text. 100% free, in‑browser, privacy‑first.",
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Summarizer Online",
    description: "Summarize long text quickly in your browser—no signup.",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Summarizer",
    applicationCategory: "UtilityApplication",
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
    ],
    keywords:
      "AI summarizer, text summarizer online, summarize text free, in‑browser summarizer, no signup summarizer",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kya summarizer data ko server par upload karta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nahi, processing browser ke andar hoti hai; koi data upload nahi hota.",
        },
      },
      {
        "@type": "Question",
        name: "Kya yeh tool free hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, 100% free aur bina account ke.",
        },
      },
      {
        "@type": "Question",
        name: "Summary length control milta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, Short, Medium, aur Long options uplabdh hain.",
        },
      },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }}
      />

      {/* H1/H2 headings */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">📝 AI Summarizer</h1>
        <h2 className="text-lg text-slate-700">
          Summarize long text using AI—fast, private, and free.
        </h2>
      </header>

      {/* Client tool (lazy via wrapper) */}
      <AISummarizerToolWrapper />

      {/* On-page FAQs mapped to JSON-LD */}
      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <details className="mb-2">
          <summary>Data upload hota hai?</summary>
          <p className="text-gray-600">
            Nahi, processing browser me hi hoti hai.
          </p>
        </details>
        <details className="mb-2">
          <summary>Tool free hai?</summary>
          <p className="text-gray-600">Haan, 100% free.</p>
        </details>
        <details className="mb-2">
          <summary>Length controls?</summary>
          <p className="text-gray-600">Short, Medium, Long.</p>
        </details>
      </section>
    </main>
  );
}
