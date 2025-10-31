// app/e-signature/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ESignatureToolWrapper from "@/components/client/ESignatureToolWrapper";

export const metadata: Metadata = {
  title:
    "Free E-Signature Tool — Sign, Request & Verify PDFs Instantly | PDF Maker AI",
  description:
    "Sign PDF documents online, request e-signatures, and verify signed PDFs instantly. 100% free, secure, and privacy-first. Draw, type, or upload signatures without signup.",
  keywords: [
    "e-signature",
    "sign pdf online",
    "digital signature",
    "verify signed pdf",
    "request signature pdf",
    "electronic signature",
    "draw signature",
    "type signature",
    "upload signature image",
    "multiple signers",
    "signature fields",
    "sign pdf free",
    "esign pdf",
    "pdf signing workflow",
    "signature verification",
    "online pdf signer",
    "sign documents online",
    "pdf sign tool",
    "pdf signature maker",
    "sign form pdf",
    "add signature pdf",
    "free e-sign tool",
    "browser based signing",
    "privacy first e-signature",
    "digital document signing",
    "secure signature app",
    "verify digital signatures",
    "hash verification",
    "signature metadata",
    "audit log signature",
    "pdf signature verification",
    "document integrity check",
    "in-browser signature tool",
    "drag and drop signing",
    "touch screen signature",
    "signature color control",
    "signature thickness adjust",
    "download signed pdf",
    "no signup pdf sign",
    "mobile signature",
    "multi-party signing",
    "electronic document signer",
    "signature approval flow",
    "pdf signer verification",
    "signing history pdf",
    "secure esign",
    "fast pdf signing",
    "pdf maker ai signature",
    "ai e-signature tool",
    "smart signing assistant",
    "verify authenticity pdf",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/e-signature" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/e-signature",
    title: "E-Signature — Free PDF Sign, Request & Verify Tool",
    description:
      "Sign, request, and verify PDF documents in seconds. Draw or upload your signature securely — no signup required.",
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Signature — Free & Private PDF Signing",
    description:
      "Add, request, and verify digital signatures on PDF files securely. Free & privacy-first with in-browser signing.",
  },
};

export default function ESignaturePage() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "E-Signature Tool — PDF Maker AI",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/e-signature",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Draw, type, or upload a signature",
      "Sign PDFs instantly",
      "Request e-signatures from others",
      "Verify signed PDF documents",
      "In-browser processing with privacy-first design",
      "No signup required",
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
        name: "Are my PDFs uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, all signing operations happen in your browser. Your files never leave your device.",
        },
      },
      {
        "@type": "Question",
        name: "How can I add a signature to my PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can draw, type, or upload your signature, then drag and place it anywhere on your PDF document before downloading.",
        },
      },
      {
        "@type": "Question",
        name: "How does verification work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our tool embeds metadata and cryptographic hash data into signed PDFs. The verification tool checks the integrity and authenticity of the document instantly.",
        },
      },
      {
        "@type": "Question",
        name: "Is the tool free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, PDF Maker AI’s E-Signature tool is 100% free to use, with no account or subscription required.",
        },
      },
    ],
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
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

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 via-purple-500/15 to-pink-500/15" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 400"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="E-Signature: sign, request, and verify PDFs"
        >
          <defs>
            <pattern
              id="dots-esign"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
            <linearGradient
              id="stroke-esign"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="fill-esign" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#dots-esign)"
            className="text-indigo-400/20"
          />
        </svg>
        <div className="relative p-8 sm:p-10">
          <h1 className="text-3xl font-extrabold text-indigo-900">
            ✍️ E-Signature — Sign, Request & Verify PDFs
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700">
            Sign PDF files online for free — draw, type, or upload your
            signature instantly. Request and verify e-signatures securely with
            no signup or data upload.
          </p>
        </div>
      </div>

      {/* Main Tool */}
      <ESignatureToolWrapper />

      {/* Related Tools */}
      <aside className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Related Tools</h2>
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link prefetch={false} href="/pdf-reader">
            PDF Reader
          </Link>
          <Link prefetch={false} href="/ai-ocr">
            AI OCR
          </Link>
          <Link prefetch={false} href="/organize-pdf">
            Organize PDF
          </Link>
          <Link prefetch={false} href="/batch-processing">
            Batch Processing
          </Link>
        </nav>
      </aside>

      {/* FAQs */}
      <section className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
        <details className="mb-2">
          <summary>Are my files uploaded to a server?</summary>
          <p className="text-gray-600">
            No, everything runs securely in your browser. Your files stay local.
          </p>
        </details>
        <details className="mb-2">
          <summary>How can I sign a PDF?</summary>
          <p className="text-gray-600">
            Draw, type, or upload your signature and drag it into place. Then
            click “Apply & Download”.
          </p>
        </details>
        <details className="mb-2">
          <summary>How do I verify a signed PDF?</summary>
          <p className="text-gray-600">
            Use the verify option to confirm embedded signature data and
            document authenticity instantly.
          </p>
        </details>
      </section>
    </main>
  );
}
