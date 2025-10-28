// app/image-converter/page.tsx
import type { Metadata } from "next";
import ImageConverterTool from "@/components/ImageConverterTool";

export const metadata: Metadata = {
  title: "Free Image Converter: PNG ↔ JPEG ↔ WebP (In‑Browser)",
  description:
    "Convert images between PNG, JPEG, and WebP with adjustable quality and size—fast, free, and private in your browser.",
  alternates: { canonical: "https://pdfmakerai.shop/image-converter" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/image-converter",
    title: "Free Image Converter — PNG/JPEG/WebP",
    description:
      "Convert images in your browser with quality and resize controls—no signup.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Converter — PNG/JPEG/WebP",
    description: "Adjust quality, resize, and convert—fully private, in‑browser.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Image Converter",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/image-converter",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "PNG ↔ JPEG ↔ WebP",
      "Adjustable quality",
      "Max width/height",
      "In‑browser conversion",
    ],
    keywords:
      "image converter, png to jpg, jpg to png, webp converter, in-browser image convert, free image converter",
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" },
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd).replace(/<|>/g, (m)=> m === "<" ? "\\u003c" : "\\u003e") }}
      />
      <ImageConverterTool />
    </main>
  );
}
