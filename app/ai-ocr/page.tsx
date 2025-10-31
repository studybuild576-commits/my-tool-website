// app/ai-ocr/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import AIOCRFormWrapper from "@/components/client/AIOCRFormWrapper";

export const metadata: Metadata = {
  title: "Free AI OCR Online — PDF/Image to Text Converter | PDF Maker AI",
  description:
    "Convert scanned PDFs and images to editable text with AI OCR — free, private, in-browser, and accurate. No signup needed.",
  keywords: [
    "AI OCR online",
    "PDF to text converter",
    "image to text",
    "in-browser OCR",
    "private OCR tool",
    "free OCR app",
    "AI text extraction",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/ai-ocr" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/ai-ocr",
    title: "Free AI OCR Online — Convert PDF & Image to Text Instantly",
    description:
      "AI-powered OCR tool that runs in your browser — converts PDFs and images to text quickly, privately, and for free.",
    siteName: "PDF Maker AI",
    images: [
      {
        url: "/og/ai-ocr-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Free AI OCR converting scanned PDF and images to text online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI OCR Online — PDF/Image to Text Converter",
    description:
      "Extract text from PDFs and images directly in your browser — 100% private, accurate, and free.",
  },
};

export default function AIOCRPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://pdfmakerai.shop" },
      { "@type": "ListItem", position: 2, name: "AI OCR", item: "https://pdfmakerai.shop/ai-ocr" },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Free AI OCR Online — PDF/Image to Text Converter",
    operatingSystem: "Web",
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "DocumentConversion",
    url: "https://pdfmakerai.shop/ai-ocr",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "OCR PDF to text",
      "Image to text converter",
      "In-browser AI OCR",
      "No signup required",
      "Privacy-first",
      "Fast and accurate text extraction",
    ],
    keywords:
      "AI OCR online, free OCR app, PDF to text, image text converter, private OCR, browser OCR tool",
    publisher: {
      "@type": "Organization",
      name: "PDF Maker AI",
      url: "https://pdfmakerai.shop",
      logo: "https://pdfmakerai.shop/logo.png",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kya AI OCR bina upload ke browser mein chalta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, yeh AI OCR tool poori tarah browser mein hi chalta hai — koi file server par upload nahi hoti.",
        },
      },
      {
        "@type": "Question",
        name: "Kya yeh tool bilkul free hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bilkul, yeh 100% free hai aur signup ki zarurat nahi padti.",
        },
      },
      {
        "@type": "Question",
        name: "Kaunse formats supported hain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PDF, JPG aur PNG jaise formats fully supported hain.",
        },
      },
      {
        "@type": "Question",
        name: "AI OCR ki accuracy kaisi rahegi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clear scans aur high-quality images par yeh AI OCR 95%+ accuracy deta hai.",
        },
      },
    ],
  };

  return (
    <section className="max-w-5xl mx-auto py-10 px-4">
      {/* ✅ JSON-LD for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ✅ Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
          🧠 Free AI OCR Online — Convert PDF & Images to Text
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Convert scanned PDFs and images into editable text instantly — 100% private, in-browser,
          and free. No signup or upload needed.
        </p>
        <img
          src="/images/ai-ocr-hero.png"
          alt="Free AI OCR converting scanned PDF and image to text online"
          width={960}
          height={480}
          loading="eager"
          decoding="async"
          className="mx-auto mt-5 rounded-xl shadow-lg"
        />
      </header>

      {/* ✅ Features Section */}
      <h2 className="text-2xl font-semibold mb-4">Why Choose Our AI OCR?</h2>
      <ul className="grid sm:grid-cols-2 gap-3 mb-8 text-sm leading-relaxed">
        <li>• 100% Private — Everything runs in your browser</li>
        <li>• Free forever — No signup or watermark</li>
        <li>• Supports PDF, JPG, PNG formats</li>
        <li>• Fast, accurate, AI-powered OCR engine</li>
      </ul>

      {/* ✅ Main Form */}
      <AIOCRFormWrapper />

      {/* ✅ Related Tools */}
      <aside className="mt-12 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold mb-3">Try More Free PDF Tools</h2>
        <nav className="flex flex-wrap gap-4 text-sm text-blue-600">
          <Link href="/pdf-reader">📖 PDF Reader (Extract Text)</Link>
          <Link href="/pdf-to-jpg">🖼️ PDF to JPG Converter</Link>
          <Link href="/compress-pdf">🗜️ Compress PDF Online</Link>
          <Link href="/merge-pdf">🧩 Merge PDF Files</Link>
          <Link href="/split-pdf">✂️ Split PDF Pages</Link>
        </nav>
      </aside>

      {/* ✅ FAQs Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">FAQs — AI OCR Tool</h2>

        <details className="mb-3">
          <summary className="cursor-pointer font-medium">
            Browser mein hi processing hoti hai?
          </summary>
          <p className="text-gray-600">
            Haan, sab kuchh aapke local browser mein hota hai — privacy 100% safe.
          </p>
        </details>

        <details className="mb-3">
          <summary className="cursor-pointer font-medium">Tool free hai?</summary>
          <p className="text-gray-600">
            Bilkul, yeh tool 100% free hai aur bina signup ke use kiya ja sakta hai.
          </p>
        </details>

        <details className="mb-3">
          <summary className="cursor-pointer font-medium">Kaunse formats supported hain?</summary>
          <p className="text-gray-600">PDF, JPG, PNG — sabhi common formats supported hain.</p>
        </details>

        <details className="mb-3">
          <summary className="cursor-pointer font-medium">Accuracy kaisi rahegi?</summary>
          <p className="text-gray-600">
            High-quality scans par AI OCR 95%+ accurate results deta hai.
          </p>
        </details>
      </section>
    </section>
  );
}
