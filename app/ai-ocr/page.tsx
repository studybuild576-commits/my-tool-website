// app/ai-ocr/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import AIOCRFormWrapper from "@/components/client/AIOCRFormWrapper";

export const metadata: Metadata = {
  title: "AI OCR: PDF/Image to Text (Private, In‑Browser) | PDF Maker AI",
  description:
    "Extract text from PDFs and images with AI OCR—fast, accurate, and privacy‑first. Runs in your browser. No signup needed, 100% free.",
  alternates: { canonical: "https://pdfmakerai.shop/ai-ocr" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/ai-ocr",
    title: "AI OCR: PDF/Image to Text (Private, In‑Browser)",
    description:
      "Fast, accurate OCR for PDFs and images. 100% free, runs in your browser—no upload, no signup.",
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI OCR: PDF/Image to Text (Private, In‑Browser)",
    description:
      "Extract text from scanned PDFs/images with AI. Free, secure, and in‑browser.",
  },
};

export default function AIOCRPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI OCR — PDF/Image to Text",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/ai-ocr",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "PDF to text OCR",
      "Image to text OCR",
      "AI accuracy",
      "In‑browser processing",
      "No signup",
      "Privacy‑first"
    ],
    keywords:
      "AI OCR, OCR online free, PDF to text, extract text from PDF, image to text, in‑browser OCR",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Kya AI OCR bina upload ke browser mein chalta hai?", acceptedAnswer: { "@type": "Answer", text: "Haan, processing aapke browser mein hoti hai; files server par upload nahi hoti." } },
      { "@type": "Question", name: "Kya yeh tool bilkul free hai?", acceptedAnswer: { "@type": "Answer", text: "Haan, 100% free aur bina account ke use kar sakte hain." } },
      { "@type": "Question", name: "Kaunse formats supported hain?", acceptedAnswer: { "@type": "Answer", text: "PDF, JPG, PNG jaise aam formats supported hain." } },
      { "@type": "Question", name: "Accuracy kaisi rahegi?", acceptedAnswer: { "@type": "Answer", text: "AI-based OCR high accuracy deta hai; clear scans par best results milte hain." } }
    ]
  };

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />

      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">🧠 AI OCR: PDF/Image to Text (Private, In‑Browser)</h1>
        <p className="text-gray-600">Convert scanned PDFs and images to editable text—no signup, no upload, 100% free.</p>
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
          <Link prefetch={false} href="/pdf-reader">PDF Reader</Link>
          <Link prefetch={false} href="/pdf-to-jpg">PDF to JPG</Link>
          <Link prefetch={false} href="/compress-pdf">Compress PDF</Link>
          <Link prefetch={false} href="/organize-pdf">Organize PDF</Link>
        </nav>
      </aside>

      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <details className="mb-2"><summary>Browser mein hi processing hoti hai?</summary><p className="text-gray-600">Haan, sab kuchh local browser environment mein hota hai—privacy safe.</p></details>
        <details className="mb-2"><summary>Tool free hai?</summary><p className="text-gray-600">Haan, 100% free aur bina account ke.</p></details>
        <details className="mb-2"><summary>Kaunse formats support hain?</summary><p className="text-gray-600">PDF, JPG, PNG commonly supported.</p></details>
        <details className="mb-2"><summary>Accuracy kaisi rahegi?</summary><p className="text-gray-600">Clear scans par best results milte hain; blur se bachien.</p></details>
      </section>
    </section>
  );
}
