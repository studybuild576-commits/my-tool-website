// app/pdf-rotate/page.tsx
import type { Metadata } from "next";
import PDFRotateTool from "@/components/PDFRotateTool";

export const metadata: Metadata = {
  title:
    "Rotate PDF — 90°/180°/270° में Pages घुमाएं (Free, Private, Online Tool)",
  description:
    "Rotate PDF pages easily at 90°, 180°, or 270° angles. No upload required — fast, private, and browser-based PDF rotation tool by PDF Maker AI.",
  keywords: [
    "rotate pdf",
    "rotate pdf pages",
    "pdf rotation 90",
    "pdf rotation 180",
    "pdf rotation 270",
    "rotate scanned pdf",
    "fix orientation pdf",
    "pdf rotate online",
    "pdf rotate tool",
    "rotate pdf without upload",
    "rotate pdf free",
    "pdf rotate private",
    "client side pdf rotate",
    "browser pdf maker",
    "pdfmakerai pdf rotate",
    "seo optimized pdf rotate",
    "fast pdf rotation",
    "rotate pdf file online",
    "rotate single page pdf",
    "rotate all pages pdf",
    "secure pdf rotation",
    "no upload pdf rotation",
    "mobile friendly pdf tool",
    "rotate pdf for free",
    "rotate pdf on browser",
    "pdf editing tool",
    "best pdf rotate app",
    "fast secure pdf rotate",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-rotate" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/pdf-rotate",
    title: "Rotate PDF — Free Online Tool (Secure & Private)",
    description:
      "Easily rotate PDF pages 90°, 180°, or 270° without uploading. 100% secure & private browser tool.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotate PDF — Free & Private Tool",
    description:
      "Rotate PDF pages 90°, 180°, or 270° securely in your browser. No upload needed.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Rotate PDF",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-rotate",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Rotate pages 90°, 180°, 270°",
      "Client-side processing (No upload)",
      "Private & Secure rotation",
      "Fast & Free browser tool",
    ],
  };

  const faqsLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I rotate a PDF file online for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Just upload your PDF to PDF Maker AI Rotate Tool, choose the rotation angle (90°, 180°, 270°), and download your rotated file instantly — no sign-up or upload to servers.",
        },
      },
      {
        "@type": "Question",
        name: "Is my PDF safe while rotating?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All processing is done inside your browser. Your files never leave your device, ensuring 100% privacy and security.",
        },
      },
      {
        "@type": "Question",
        name: "Can I rotate only specific pages in a PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can rotate all pages or select specific ones before downloading the rotated PDF.",
        },
      },
      {
        "@type": "Question",
        name: "Does PDF Maker AI work on mobile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the tool works smoothly on Android and iOS browsers, optimized for mobile performance.",
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
      <PDFRotateTool />
    </main>
  );
}
