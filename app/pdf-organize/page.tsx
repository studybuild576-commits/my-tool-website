// app/pdf-organize/page.tsx
import type { Metadata } from "next";
import PDFOrganizeTool from "@/components/PDFOrganizeTool";

export const metadata: Metadata = {
  title: "Organize PDF Pages — Reorder, Select Ranges (Free, Private)",
  description:
    "PDF pages ko reorder karein ya custom ranges choose karein (e.g., 1,3,2 ya 1-3,5,7-9). In‑browser processing, bina upload.",
  keywords: [
    "organize pdf","reorder pdf pages","select pdf pages","page ranges pdf",
    "custom order pdf","pdf arrange pages","pdf page order","pdf-lib organize",
    "client side pdf","in browser pdf tools","free pdf organize","download organized pdf",
    "privacy first pdf","no upload","drag drop alt","a11y friendly","seo metadata",
    "json-ld software app","core web vitals","lighthouse friendly"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-organize" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/pdf-organize",
    title: "Organize PDF — Reorder Pages",
    description: "Custom order aur ranges ke saath PDF organize karein. Browser me hi, private.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "Organize PDF Pages — Reorder & Ranges",
    description: "In‑browser, private, free. Custom page order and range selection.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Organize PDF",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-organize",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }}
      />
      <PDFOrganizeTool />
    </main>
  );
}
