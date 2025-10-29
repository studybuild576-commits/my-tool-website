// app/pdf-merge/page.tsx
import type { Metadata } from "next";
import PDFMergeTool from "@/components/PDFMergeTool";

export const metadata: Metadata = {
  title: "Merge PDF — Multiple PDFs ko ek PDF me jodo (Free, Private)",
  description:
    "Multiple PDF files ko order ke saath ek single PDF me merge karein — fast, in‑browser, bina upload, bilkul private.",
  keywords: [
    "merge pdf","combine pdf","pdf merge online","multiple pdf to single pdf",
    "join pdf","append pdf pages","reorder pdf pages","client side pdf merge",
    "in browser pdf tool","free pdf merge","fast pdf merge","pdf-lib merge",
    "download merged pdf","privacy first pdf","no upload pdf merge","drag drop pdf",
    "pdf tools online","pdfmakerai pdf merge","seo metadata","json-ld software app",
    "core web vitals","lighthouse friendly","a11y friendly","order preservation",
    "memory safe blob","object url cleanup"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-merge" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/pdf-merge",
    title: "Merge PDF — Free, Private",
    description:
      "Multiple PDFs ko ek hi PDF me jodo — reorder, merge, download. Saari processing browser me.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge PDF — Free, Private",
    description: "In‑browser PDF merge with order control. No uploads.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Merge",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-merge",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Merge multiple PDFs",
      "Keep page order",
      "In‑browser, private"
    ]
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }}
      />
      <PDFMergeTool />
    </main>
  );
}
