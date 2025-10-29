// app/jpg-to-pdf/page.tsx
import type { Metadata } from "next";
import JPGToPDFTool from "@/components/JPGToPDFTool";

export const metadata: Metadata = {
  title: "JPG to PDF — Convert Multiple Images to One PDF (Free, Private)",
  description:
    "Convert JPG images to a single PDF in your browser. Set A4/Letter/Legal, portrait/landscape, margins, and quality. Free, fast, and privacy‑first.",
  keywords: [
    "jpg to pdf","jpeg to pdf","convert jpg to pdf","image to pdf","photos to pdf","multiple jpg to pdf",
    "merge images to pdf","jpg to a4 pdf","letter pdf from jpg","legal size pdf","portrait landscape pdf",
    "set margins pdf","pdf quality control","drag reorder images","private in browser converter",
    "no upload jpg to pdf","free jpg to pdf","fast jpg to pdf","client side pdf","pdf-lib converter",
    "create pdf from images","download pdf","high quality pdf","optimize pdf images","batch image to pdf",
    "scan to pdf","photo album pdf","portfolio pdf","receipt to pdf","invoice images to pdf",
    "compress image in pdf","opacity image draw","set page size pdf","set orientation pdf","local conversion",
    "safe pdf generator","browser pdf maker","pdf tools online","pdfmakerai jpg to pdf","seo jpg pdf",
    "og twitter metadata","json-ld software app","lighthouse seo ready","core web vitals","a11y friendly ui",
    "drag and drop reorder","preview images grid","lazy previews","download link pdf","free pdf tool"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/jpg-to-pdf" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/jpg-to-pdf",
    title: "JPG → PDF — Free, Private, In‑Browser",
    description:
      "Combine multiple JPGs into one PDF with size, orientation, margin, and quality controls.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI"
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG → PDF — Free, Private",
    description:
      "Convert JPG images to a single PDF with page size/orientation/margins. In‑browser, no uploads.",
    images: ["/og-image.png"]
  }
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "JPG to PDF Converter",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/jpg-to-pdf",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Multiple JPGs to one PDF",
      "A4/Letter/Legal + Fit",
      "Portrait/Landscape",
      "Margins and quality",
      "Drag-and-drop reorder"
    ],
    keywords:
      "jpg to pdf, multiple images to pdf, a4 letter legal, portrait landscape, margins, quality, reorder",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" }
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/</g, "\\u003c") }} />
      <JPGToPDFTool />
    </main>
  );
}
