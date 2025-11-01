// app/pdf-to-word/page.tsx
import type { Metadata } from "next";
import PDFToWordTool from "@/components/PDFToWordTool";

const keywords: string[] = [
  "pdf to word","convert pdf to word","pdf to docx","export pdf as word",
  "pdf text to word","pdf image to word","online pdf converter","free pdf converter",
  "private converter","client side pdf","no upload pdf","fast pdf conversion",
  "docx generator","word document","text extraction","image extraction","pdfjs",
  "docx library","browser pdf","web pdf","nextjs pdf","typescript","seo",
  "a11y","core web vitals","lighthouse","privacy first","no tracking","mobile friendly",
  "pwa ready","high quality docx","document tools","workflow","productivity",
  "online utility","toolkit","pdf maker ai","pdfmakerai.shop","ocr optional",
  "preserve layout","keep images","page by page","multi page pdf","batch convert",
  "file utilities","secure pdf","no signup","download docx","convert locally"
].slice(0, 50);

export const metadata: Metadata = {
  title: "PDF to Word (DOCX) — Free, Private Converter",
  description:
    "Convert PDF files into editable Word (DOCX) documents right in your browser. Preserve formatting, text, and images — 100% private and free.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/pdf-to-word" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/pdf-to-word",
    title: "PDF to Word (DOCX) — Free & Private",
    description:
      "Convert PDF to editable DOCX files locally in your browser. Fast and privacy-focused.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to Word (DOCX) — Free & Private",
    description: "Convert PDF to editable DOCX locally in your browser.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  // ✅ JSON-LD: Web App / Software Schema
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF to Word Converter",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-to-word",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    description:
      "Convert PDF to editable Word (DOCX) documents directly in your browser. Free, fast, and privacy-safe — no uploads.",
    creator: {
      "@type": "Organization",
      name: "PDF Maker AI",
      url: "https://pdfmakerai.shop"
    }
  };

  // ✅ JSON-LD: FAQ Schema for Google Rich Results
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this PDF to Word converter secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All conversions happen in your browser — no files are uploaded or stored on any server, ensuring complete privacy."
        }
      },
      {
        "@type": "Question",
        "name": "Will the layout and images be preserved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The tool preserves your PDF's text formatting and embedded images when converting to Word (DOCX)."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to install anything to use this tool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No installation required. You can use it directly from your browser — works on both desktop and mobile devices."
        }
      }
    ]
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* ✅ Inject JSON-LD SEO Schemas */}
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
      {/* ✅ Main Component */}
      <PDFToWordTool />
    </main>
  );
}
