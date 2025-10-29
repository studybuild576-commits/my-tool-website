import type { Metadata } from "next";
import PDFCompressTool from "@/components/PDFCompressTool";

export const metadata: Metadata = {
  title: "PDF Compressor — Size Kam Karein (Free, Private, In‑Browser)",
  description:
    "Apne PDF ki file size ko asaani se kam karein. In‑browser compression, metadata cleanup aur smart options — bina upload, bilkul safe.",
  keywords: [
    "pdf compress","compress pdf online","reduce pdf size","pdf size kam karo","pdf optimization",
    "metadata remove pdf","image compression pdf","font cleanup pdf","client side pdf compress",
    "in browser pdf tool","free pdf compressor","fast pdf compression","pdf-lib compress",
    "small pdf size","email friendly pdf","shareable pdf","optimize images pdf","strip metadata pdf",
    "object streams pdf","deflate compression pdf","lzw compression pdf","lossy compression pdf",
    "high medium low quality","offline pdf compress","no signup pdf compress","privacy first pdf",
    "pdf analyzer","pages count pdf","images count pdf","fonts count pdf","download compressed pdf",
    "pdf tools online","pdfmakerai pdf compress","a11y friendly","seo metadata","json-ld software app",
    "core web vitals","lighthouse friendly","drag drop upload pdf","browser pdf maker"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-compress" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/pdf-compress",
    title: "PDF Compressor — Free, Private",
    description: "File size kam karein: metadata cleanup, smart re‑save (client‑side).",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Compressor — Free, Private",
    description: "In‑browser compression with smart options. No uploads.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Compressor",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-compress",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Client‑side PDF compression",
      "Metadata cleanup",
      "Smart page re‑save"
    ]
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }}
      />
      <PDFCompressTool />
    </main>
  );
}
