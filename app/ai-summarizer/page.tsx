// app/ai-summarizer/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AISummarizerTool = dynamic(() => import("@/components/AISummarizerTool"), {
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
  title: "AI Summarizer: Summarize Text Online (Private) | PDF Maker AI",
  description:
    "Summarize long text into concise highlights with an in‑browser AI summarizer. Fast, free, privacy‑first—no signup.",
  keywords: [
    "AI summarizer",
    "text summarizer online",
    "summarize text free",
    "in‑browser summarizer",
    "no signup summarizer",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/ai-summarizer" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/ai-summarizer",
    title: "AI Summarizer — PDF Maker AI",
    description: "Create concise summaries from long text. 100% free, in‑browser, privacy‑first.",
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
    keywords: "AI summarizer, summarize text online, free summarizer",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Kya data upload hota hai?", acceptedAnswer: { "@type": "Answer", text: "Nahi, sab kuchh browser ke andar process hota hai." } },
      { "@type": "Question", name: "Kya tool free hai?", acceptedAnswer: { "@type": "Answer", text: "Haan, 100% free aur bina account ke." } },
      { "@type": "Question", name: "Length control milta hai?", acceptedAnswer: { "@type": "Answer", text: "Short, Medium, Long options uplabdh hain." } },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />

      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">📝 AI Summarizer</h1>
        <h2 className="text-lg text-slate-700">Summarize long text using AI—fast, private, and free.</h2>
      </header>

      <AISummarizerTool />

      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <details className="mb-2"><summary>Data upload hota hai?</summary><p className="text-gray-600">Nahi, processing browser me hi hoti hai.</p></details>
        <details className="mb-2"><summary>Tool free hai?</summary><p className="text-gray-600">Haan, 100% free.</p></details>
        <details className="mb-2"><summary>Length controls?</summary><p className="text-gray-600">Short, Medium, Long.</p></details>
      </section>
    </main>
  );
}
