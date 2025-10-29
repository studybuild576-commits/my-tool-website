// app/pdf-reader/page.tsx
import type { Metadata } from "next";
import PDFReaderPageClient from "@/components/client/PDFReaderPageClient";

export const metadata: Metadata = {
  title: "PDF Reader — Read, Search, Extract Text (Free, Private)",
  description:
    "Browser me hi PDF padhien, pages navigate karein, zoom karein aur text search/extract karein. Saari processing client‑side.",
  keywords: [
    "pdf reader","read pdf online","search pdf","extract text pdf","pdf viewer",
    "pdf zoom","navigate pdf pages","client side pdf","pdfjs dist","in browser pdf tool",
    "free pdf reader","private pdf reader","no upload pdf","text content pdf",
    "find in pdf","pdf search results","pdf canvas render","pdf viewer nextjs",
    "seo metadata","json-ld software app","lighthouse friendly","core web vitals",
    "accessible viewer","keyboard navigation","sr labels","lazy canvas"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-reader" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/pdf-reader",
    title: "PDF Reader — Free, Private",
    description: "Read/search PDFs in your browser. No uploads.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Reader — Free, Private",
    description: "Read, search, and extract text from PDFs in‑browser.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Reader",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-reader",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }}
      />
      <PDFReaderPageClient />
    </main>
  );
}
