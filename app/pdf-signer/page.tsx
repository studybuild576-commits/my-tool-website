// app/pdf-signer/page.tsx
import type { Metadata } from "next";
import PDFSignerTool from "@/components/PDFSignerTool";

export const metadata: Metadata = {
  title:
    "PDF Signer — Draw Signature aur PDF par lagayein (Free, Private, Secure)",
  description:
    "Browser me hi apni signature draw karke PDF par lagayein. Bina upload, bilkul private aur fast tool — works on mobile & desktop. Secure your documents easily with PDF Maker AI.",
  keywords: [
    "pdf signer",
    "sign pdf online",
    "draw signature pdf",
    "add signature pdf",
    "digital signature pdf",
    "insert signature pdf",
    "sign pdf without upload",
    "sign pdf free",
    "pdf signature tool",
    "pdf signature online free",
    "client side pdf sign",
    "no upload pdf signer",
    "secure pdf signature",
    "browser pdf maker",
    "pdfmakerai pdf signer",
    "touch support signature",
    "mobile pdf signature",
    "handwritten signature pdf",
    "digital sign pdf tool",
    "sign pdf app",
    "sign pdf on phone",
    "sign pdf on laptop",
    "sign and download pdf",
    "best pdf signer",
    "fast pdf signing",
    "safe pdf signing tool",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-signer" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/pdf-signer",
    title: "PDF Signer — Free, Private & Secure",
    description:
      "Draw and place your signature on PDFs directly in your browser — 100% private, no upload, free, and mobile-friendly.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Signer — Free, Private & Secure",
    description:
      "Sign PDFs with your drawn signature securely in your browser. No uploads or data sharing.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Signer",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-signer",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Draw and add signature to PDF",
      "Works offline — client-side only",
      "Fast, secure, and free",
      "No file uploads — privacy first",
      "Touch-friendly signature pad",
    ],
  };

  const faqsLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I sign a PDF for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Go to PDF Maker AI’s PDF Signer, upload your document, draw your signature, place it anywhere, and download the signed PDF instantly — all for free.",
        },
      },
      {
        "@type": "Question",
        name: "Is my PDF file secure while signing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All signing happens directly inside your browser. No data or files are uploaded to any server, ensuring total privacy.",
        },
      },
      {
        "@type": "Question",
        name: "Can I sign PDFs on my mobile phone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. PDF Maker AI’s PDF Signer is fully mobile-friendly and supports touch-based signature drawing on Android and iOS devices.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use an image signature instead of drawing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can upload your digital signature image (PNG/JPG) and place it anywhere on your PDF before downloading.",
        },
      },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* ✅ JSON-LD for SEO (Software + FAQ Schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([appLd, faqsLd]).replace(/</g, "\\u003c"),
        }}
      />
      <PDFSignerTool />
    </main>
  );
}
