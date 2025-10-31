// app/pdf-splitter/page.tsx
import type { Metadata } from "next";
import PDFSplitterTool from "@/components/PDFSplitterTool";

export const metadata: Metadata = {
  title:
    "PDF Splitter — Split, Extract, or Separate PDF Pages (Free & Private)",
  description:
    "Split PDF into individual pages, extract selected pages, or divide large PDFs instantly — all in your browser. No uploads, no tracking, 100% private and free.",
  keywords: [
    "pdf splitter",
    "split pdf online",
    "extract pdf pages",
    "separate pdf file",
    "split pdf free",
    "split pdf tool",
    "pdf page extractor",
    "split specific pages",
    "pdf splitter free online",
    "divide pdf document",
    "split pdf offline",
    "split pdf without upload",
    "split pdf browser",
    "pdf split by page range",
    "no upload pdf splitter",
    "private pdf splitter",
    "secure pdf splitter",
    "fast pdf splitter",
    "client side pdf splitter",
    "free pdf tools",
    "pdf maker ai pdf splitter",
    "pdf tools online",
    "merge pdf",
    "compress pdf",
    "convert pdf",
    "browser pdf utilities",
    "lighthouse friendly",
    "seo optimized pdf tools",
    "core web vitals friendly",
    "mobile pdf splitter",
    "accessibility friendly",
    "privacy first pdf",
    "pwa pdf splitter",
    "pdfmakerai.shop",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-splitter" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/pdf-splitter",
    title: "PDF Splitter — Free, Fast & Private",
    description:
      "Split or extract PDF pages instantly — no upload required. 100% secure, browser-based, and free.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Splitter — Free, Fast & Private",
    description:
      "Split and extract pages from your PDF files safely in your browser. No uploads.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  // ✅ JSON-LD Schema for Software & FAQ
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Splitter",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-splitter",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Split PDF pages instantly in browser",
      "No uploads — client-side only",
      "Extract specific page ranges",
      "Private, fast, and free",
      "Works on mobile & desktop",
    ],
  };

  const faqsLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I split a PDF for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit PDF Maker AI’s PDF Splitter tool, upload your PDF, choose the page range or split all pages, and download your separated files — all free and instant.",
        },
      },
      {
        "@type": "Question",
        name: "Is my PDF file safe while splitting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all PDF splitting happens locally inside your browser. No data or files are uploaded to any external server.",
        },
      },
      {
        "@type": "Question",
        name: "Can I extract only specific pages from a PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can easily choose a custom page range like 3–7 or 10–12 and extract only those pages from your PDF.",
        },
      },
      {
        "@type": "Question",
        name: "Does PDF Maker AI Splitter work on mobile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. The tool works seamlessly on Android and iOS browsers, allowing you to split PDFs on the go.",
        },
      },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* ✅ JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([appLd, faqsLd]).replace(/</g, "\\u003c"),
        }}
      />
      <PDFSplitterTool />
    </main>
  );
}
