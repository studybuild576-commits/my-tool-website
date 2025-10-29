// app/pdf-rotate/page.tsx
import type { Metadata } from "next";
import PDFRotateTool from "@/components/PDFRotateTool";

export const metadata: Metadata = {
  title: "Rotate PDF — 90°/180°/270° me pages ghumayein (Free, Private)",
  description:
    "PDF pages ko 90°, 180°, ya 270° rotate karein. In‑browser processing, bina upload, private aur fast download.",
  keywords: [
    "rotate pdf","rotate pdf pages","pdf rotation 90","pdf rotation 180","pdf rotation 270",
    "clockwise rotate pdf","counter clockwise pdf","fix orientation pdf","rotate scanned pdf",
    "pdf-lib rotate","setRotation degrees","client side pdf","in browser pdf tool","free pdf rotate",
    "no upload pdf","privacy first pdf","download rotated pdf","lighthouse friendly","core web vitals",
    "seo metadata","json-ld software app","a11y friendly","mobile friendly","blob url cleanup",
    "order preserve","batch rotate","all pages rotate","single page rotate","browser pdf maker",
    "fast rotate pdf","pdf tools online","pdfmakerai rotate pdf","og twitter metadata","canonical",
    "index follow robots","best nextjs seo","app router metadata","opengraph image","twitter card"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-rotate" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/pdf-rotate",
    title: "Rotate PDF — Free, Private",
    description:
      "90°/180°/270° rotation with in‑browser processing. Quick and private.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotate PDF — Free, Private",
    description: "Rotate pages 90°/180°/270° directly in your browser.",
    images: ["/og-image.png"]
  }
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
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }}
      />
      <PDFRotateTool />
    </main>
  );
}
