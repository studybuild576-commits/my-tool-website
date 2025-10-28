// app/ai-ocr/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import AIOCRFormWrapper from "@/components/client/AIOCRFormWrapper";

export const metadata: Metadata = {
  title: "Free AI OCR Online: PDF/Image to Text (Private, In‑Browser) | PDF Maker AI",
  description:
    "Use a free AI OCR online tool to convert scanned PDFs and images to editable text in your browser. No signup, privacy‑first, fast and accurate.",
  keywords: [
    "free ai ocr online",
    "ocr pdf to text",
    "image to text converter",
    "in‑browser ocr",
    "no signup ocr",
    "private ocr",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/ai-ocr" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/ai-ocr",
    title: "Free AI OCR Online: PDF/Image to Text (Private, In‑Browser)",
    description:
      "Convert PDFs and images to text with an AI OCR that runs fully in your browser—free, private, and accurate.",
    siteName: "PDF Maker AI",
    images: [
      {
        url: "/og/ai-ocr-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Free AI OCR Online converting PDF to text in browser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI OCR Online — PDF/Image to Text (Private)",
    description:
      "Extract text from scanned PDFs and images with an in‑browser AI OCR—no signup, fast, and private.",
  },
};

export default function AIOCRPage() {
  // SoftwareApplication + FAQPage JSON‑LD (sanitized)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Free AI OCR Online — PDF/Image to Text",
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "DocumentConversion",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/ai-ocr",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "OCR PDF to text",
      "Image to text",
      "In‑browser processing",
      "No signup",
      "Privacy‑first",
      "Fast and accurate",
    ],
    keywords:
      "free ai ocr online, ocr pdf to text, image to text converter, in‑browser ocr, no signup ocr, private ocr",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" },
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
          text: "Haan, processing aapke browser mein hoti hai; files server par upload nahi hoti.",
        },
      },
      {
        "@type": "Question",
        name: "Kya yeh tool bilkul free hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, 100% free aur bina account ke use kar sakte hain.",
        },
      },
      {
        "@type": "Question",
        name: "Kaunse formats supported hain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PDF, JPG, PNG jaise formats commonly supported hain.",
        },
      },
      {
        "@type": "Question",
        name: "Accuracy kaisi rahegi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI‑based OCR high accuracy deta hai; clear scans par best results milte hain.",
        },
      },
    ],
  };

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }}
      />

      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          🧠 Free AI OCR Online: PDF/Image to Text (Private, In‑Browser)
        </h1>
        <p className="text-gray-600">
          Convert scanned PDFs and images to editable text—no signup, no upload, 100% free.
        </p>
        {/* Example hero image with keyword‑rich alt */}
        <img
          src="/images/ai-ocr-hero.png"
          alt="AI OCR online tool converting scanned PDF and images to text in browser"
          width={960}
          height={480}
          loading="eager"
          decoding="async"
          className="mx-auto mt-4 rounded-lg shadow"
        />
      </header>

      <h2 className="text-xl font-semibold mb-3">Why use this OCR?</h2>
      <ul className="grid sm:grid-cols-2 gap-3 mb-8 text-sm">
        <li>• In‑browser processing (privacy‑first)</li>
        <li>• No signup, no watermark</li>
        <li>• PDF, JPG, PNG support</li>
        <li>• Fast and accurate AI OCR</li>
      </ul>

      <AIOCRFormWrapper />

      <aside className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Related tools</h2>
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link prefetch={false} href="/pdf-reader">PDF Reader (extract text)</Link>
          <Link prefetch={false} href="/pdf-to-jpg">PDF to JPG converter</Link>
          <Link prefetch={false} href="/compress-pdf">Compress PDF online</Link>
          <Link prefetch={false} href="/merge-pdf">Merge PDF files</Link>
          <Link prefetch={false} href="/split-pdf">Split PDF pages</Link>
        </nav>
      </aside>

      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <details className="mb-2">
          <summary>Browser mein hi processing hoti hai?</summary>
          <p className="text-gray-600">
            Haan, sab kuchh local browser environment mein hota hai—privacy safe.
          </p>
        </details>
        <details className="mb-2">
          <summary>Tool free hai?</summary>
          <p className="text-gray-600">Haan, 100% free aur bina account ke.</p>
        </details>
        <details className="mb-2">
          <summary>Kaunse formats support hain?</summary>
          <p className="text-gray-600">PDF, JPG, PNG commonly supported.</p>
        </details>
        <details className="mb-2">
          <summary>Accuracy kaisi rahegi?</summary>
          <p className="text-gray-600">Clear scans par best results milte hain; blur se bachien.</p>
        </details>
      </section>
    </section>
  );
}
