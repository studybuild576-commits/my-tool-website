// app/batch-processing/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import BatchProcessingToolWrapper from "@/components/client/BatchProcessingToolWrapper";

export const metadata: Metadata = {
  title:
    "Batch PDF Processing | Free Bulk PDF Converter, Compressor & Watermark Tool – PDF Maker AI",
  description:
    "Free online batch PDF processing tool: convert, compress, merge, split, watermark, and optimize multiple PDFs in one click — 100% private, browser-based, and signup-free.",
  keywords: [
    "batch pdf processing",
    "bulk pdf converter",
    "batch compress pdf",
    "batch merge pdf",
    "batch split pdf",
    "batch watermark pdf",
    "batch pdf to word",
    "batch pdf to jpg",
    "bulk pdf tools",
    "in browser pdf converter",
    "free pdf processor",
    "pdf batch automation",
    "privacy safe pdf tool",
    "ai pdf tool",
    "no signup pdf editor",
    "online pdf optimizer",
    "document batch tool",
    "mass pdf processing",
    "batch file converter",
    "fast pdf workflow",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/batch-processing" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/batch-processing",
    title: "Batch PDF Processing — Free, Private & Fast",
    description:
      "Convert, compress, split, merge, and watermark multiple PDF files — directly in your browser, 100% private & free.",
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Batch PDF Processing Tool | PDF Maker AI",
    description:
      "Process multiple PDFs at once — convert, compress, watermark, merge & split in your browser. No signup. No uploads.",
  },
};

export default function BatchProcessingPage() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Batch PDF Processing Tool",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/batch-processing",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Batch convert PDFs",
      "Batch compress PDFs",
      "Batch merge/split PDFs",
      "Batch watermark PDFs",
      "Browser-based PDF processing",
      "No signup required",
      "Privacy-first and secure",
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
        name: "Does this batch PDF tool upload files to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, all PDF processing happens securely in your browser. Your files never leave your device.",
        },
      },
      {
        "@type": "Question",
        name: "How many PDFs can I process at once?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can process between 10–50 PDFs at once, depending on your browser memory and file size.",
        },
      },
      {
        "@type": "Question",
        name: "Is the batch PDF tool completely free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! PDF Maker AI's batch processing tool is 100% free, with no signup or hidden charges.",
        },
      },
    ],
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* ✅ SEO Schema Scripts */}
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

      {/* ✅ Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-8 bg-gradient-to-br from-emerald-50 via-cyan-50 to-white">
        <div className="relative p-8 sm:p-10 text-center">
          <h1 className="text-3xl font-extrabold text-emerald-800">
            ⚡ Batch PDF Processing — Free & Private
          </h1>
          <p className="mt-3 text-base text-slate-700 max-w-2xl mx-auto">
            Convert, compress, merge, split, or watermark multiple PDF files
            simultaneously — all within your browser. No uploads, no signup, no
            ads.
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-slate-700">
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">
              Multi-file Processing
            </li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">
              100% Private
            </li>
            <li className="bg-white/70 backdrop-blur px-3 py-1 rounded-md border border-slate-200">
              Free Forever
            </li>
          </ul>
        </div>
      </div>

      {/* ✅ Why Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          Why Choose Batch Processing?
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          <li>✅ Save time by handling multiple PDFs at once</li>
          <li>✅ Apply consistent settings to all files</li>
          <li>✅ 100% browser-based for full privacy</li>
          <li>✅ No signup, no uploads — just instant results</li>
        </ul>
      </section>

      {/* ✅ Tool Component */}
      <BatchProcessingToolWrapper />

      {/* ✅ Internal Linking */}
      <aside className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Try Related PDF Tools</h2>
        <nav className="flex flex-wrap gap-3 text-sm text-indigo-700">
          <Link href="/compress-pdf">Compress PDF</Link>
          <Link href="/merge-pdf">Merge PDF</Link>
          <Link href="/split-pdf">Split PDF</Link>
          <Link href="/pdf-to-jpg">PDF to JPG</Link>
          <Link href="/ai-ocr">AI OCR</Link>
        </nav>
      </aside>

      {/* ✅ FAQ Section */}
      <section className="mt-10">
        <h3 className="text-lg font-semibold mb-3">Frequently Asked Questions</h3>
        <details className="mb-2">
          <summary>Does it upload my files?</summary>
          <p className="text-gray-600">
            No, all operations are done locally in your browser. Nothing is
            uploaded.
          </p>
        </details>
        <details className="mb-2">
          <summary>How many files can I process together?</summary>
          <p className="text-gray-600">
            Usually 10–50 PDFs depending on your browser performance.
          </p>
        </details>
        <details className="mb-2">
          <summary>Is it really free?</summary>
          <p className="text-gray-600">
            Yes, PDF Maker AI tools are completely free and privacy-focused.
          </p>
        </details>
      </section>

      {/* ✅ Content Boost Section */}
      <section className="mt-10 text-slate-700 text-sm leading-relaxed">
        <h2 className="text-xl font-bold mb-3">
          Best Free Batch PDF Tool Online
        </h2>
        <p>
          PDF Maker AI offers a fast, private, and efficient way to process
          multiple PDF files in one go. Whether you need to compress, merge, or
          watermark documents, this in-browser tool helps you automate your
          workflow without compromising privacy. No signups, no tracking — just
          pure efficiency.
        </p>
      </section>
    </main>
  );
}
