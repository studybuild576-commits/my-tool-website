// app/pdf-to-jpg/page.tsx
import type { Metadata } from "next";
import PDFToJPGTool from "@/components/PDFToJPGTool";

const keywords: string[] = [
  "pdf to jpg","convert pdf to jpg","export pdf as image","pdf to image",
  "pdf page to jpg","online pdf converter","free pdf converter","private converter",
  "client side pdf","no upload pdf","fast pdf conversion","lightweight",
  "pdf tools","image tools","browser pdf","web pdf","nextjs pdf",
  "typescript","seo","a11y","core web vitals","lighthouse",
  "privacy first","no tracking","mobile friendly","pwa ready","image download",
  "jpeg export","optimize image","batch convert","multi page pdf","page rendering",
  "pdfjs","canvas render","high quality jpeg","lossy compression","quality 85",
  "document tools","workflow","productivity","online utility","toolkit",
  "pdf maker ai","pdfmakerai.shop","jpg converter","image extractor","pdf rendering"
].slice(0, 50);

export const metadata: Metadata = {
  title: "PDF to JPG — Free, Private Converter",
  description:
    "Convert PDF pages to high-quality JPG images directly in your browser. Fast, private, and free—no uploads required.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/pdf-to-jpg" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/pdf-to-jpg",
    title: "PDF to JPG — Free & Private",
    description: "Convert PDF pages to JPG locally in your browser.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF to JPG — Free & Private",
    description: "Convert PDF pages to JPG locally in your browser.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  // ✅ JSON-LD for Web App Schema
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF to JPG Converter",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-to-jpg",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    description:
      "Convert PDF pages into JPG images directly in your browser. Free, fast, and private—no uploads required.",
    creator: {
      "@type": "Organization",
      name: "PDF Maker AI",
      url: "https://pdfmakerai.shop"
    }
  };

  // ✅ JSON-LD for FAQ Rich Snippets
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this PDF to JPG converter safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all conversions happen in your browser. No files are uploaded to any server, ensuring privacy and data security."
        }
      },
      {
        "@type": "Question",
        "name": "Can I convert multiple PDF pages at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, each page in your PDF will be automatically converted into a separate high-quality JPG image."
        }
      },
      {
        "@type": "Question",
        "name": "Does this tool work on mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, PDF Maker AI tools are optimized for both desktop and mobile browsers — no installation required."
        }
      }
    ]
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* ✅ Inject SEO Schemas */}
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
      {/* ✅ Main Tool Component */}
      <PDFToJPGTool />
    </main>
  );
}
