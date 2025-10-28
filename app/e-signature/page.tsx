// app/e-signature/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ESignatureToolWrapper from "@/components/client/ESignatureToolWrapper";

export const metadata: Metadata = {
  title: "E‑Signature: Sign PDFs, Request Signatures, Verify (Free, Private) | PDF Maker AI",
  description:
    "Sign PDF documents, request signatures, and verify signed PDFs—fast, free, and privacy‑first. Draw, type, or upload signatures. In‑browser processing, no signup.",
  keywords: [
    "e-signature","sign pdf online","request signature pdf","verify signed pdf","draw signature",
    "type signature","upload signature image","signature placement","multiple signers","signature fields",
    "digital signature","electronic signature","sign documents online","sign form pdf","free e-sign tool",
    "in-browser signature","no signup e-sign","privacy first esign","pdf signing workflow","signature date field",
    "initials field","signature color","signature thickness","save signature","reusable signature",
    "esign request link","multi-party signing","signature audit log","signature verification","hash verification",
    "signature metadata","download signed pdf","print signed pdf","pdf viewer signature","signature stamp",
    "draw/type/upload signature","signature position lock","signature erase","signature undo","pdf page navigation",
    "mobile signature","touch support signature","keyboard accessible","watermark signature","flatten pdf"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/e-signature" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/e-signature",
    title: "E‑Signature — Sign, Request, Verify PDFs",
    description:
      "Add signatures to PDFs, request signatures, and verify signed documents—free, private, in‑browser.",
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "E‑Signature — Free & Private",
    description: "Sign and request signatures on PDF documents securely in your browser."
  }
};

export default function ESignaturePage() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "E‑Signature — PDF signing",
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "ElectronicSignature",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/e-signature",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Draw, type, or upload signature",
      "Place signature on PDF pages",
      "Request signatures from others",
      "Verify signed PDFs",
      "In‑browser, privacy‑first",
      "No signup"
    ],
    keywords:
      "e-signature, sign pdf online, draw signature, type signature, upload signature, verify signed pdf, privacy first esign",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" }
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Kya files server par upload hoti hain?",
        acceptedAnswer: { "@type": "Answer", text: "Nahi, signing workflow browser ke andar hota hai; PDFs local hi rehte hain." } },
      { "@type": "Question", name: "Signatures kaise add karen?",
        acceptedAnswer: { "@type": "Answer", text: "Signature draw/type/upload kar sakte hain aur PDF par drag‑drop se position set kar sakte hain." } },
      { "@type": "Question", name: "Verify kaise hoga?",
        acceptedAnswer: { "@type": "Answer", text: "Tool visible metadata aur content hash embed karta hai jisse verify pane me match check hota hai." } }
    ]
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g,"\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g,"\\u003c") }} />

      {/* Inline SVG hero (no external images) */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-purple-500/15 to-pink-500/15" />
        <div aria-hidden className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="E‑Signature: sign, request, and verify PDFs">
          <defs>
            <pattern id="dots-esign" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" /></pattern>
            <linearGradient id="stroke-esign" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" /><stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" /></linearGradient>
            <linearGradient id="fill-esign" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.18" /><stop offset="100%" stopColor="#f9a8d4" stopOpacity="0.18" /></linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-esign)" className="text-indigo-400/20" />
          <path d="M120,240 C200,160 320,160 400,220 C480,280 640,300 700,240 C740,200 720,140 660,120 C600,100 520,120 460,140 C400,160 340,170 260,160 C200,150 140,170 110,200 C90,220 100,240 120,240 Z" fill="url(#fill-esign)" stroke="url(#stroke-esign)" strokeWidth="2" />
        </svg>
        <div className="relative p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold text-indigo-900">✍️ E‑Signature — Sign, Request, Verify</h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700">Draw, type, or upload a signature and place it on PDFs. Request signatures and verify signed documents—free & private.</p>
        </div>
      </div>

      <ESignatureToolWrapper />

      <aside className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Related tools</h2>
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link prefetch={false} href="/pdf-reader">PDF Reader</Link>
          <Link prefetch={false} href="/ai-ocr">AI OCR</Link>
          <Link prefetch={false} href="/organize-pdf">Organize PDF</Link>
          <Link prefetch={false} href="/batch-processing">Batch Processing</Link>
        </nav>
      </aside>

      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">FAQs</h3>
        <details className="mb-2"><summary>Data upload hota hai?</summary><p className="text-gray-600">Nahi, sab kuchh local browser environment me process hota hai.</p></details>
        <details className="mb-2"><summary>Kaise sign karen?</summary><p className="text-gray-600">Signature draw/type/upload karke page par drag‑drop placement karein, phir “Apply & Download”.</p></details>
        <details className="mb-2"><summary>Verify kaise hoga?</summary><p className="text-gray-600">Verify pane me embedded metadata/hash ko match karke quick checks kiye jate hain.</p></details>
      </section>
    </main>
  );
}
