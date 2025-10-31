// app/image-converter/page.tsx
import type { Metadata } from "next";
import ImageConverterTool from "@/components/ImageConverterTool";

export const metadata: Metadata = {
  title: "Free Image Converter — PNG ↔ JPG ↔ WebP | High-Quality Online Tool",
  description:
    "Convert PNG, JPG, and WebP images instantly with adjustable quality, size, and compression. 100% free, private, and runs directly in your browser.",
  keywords: [
    "image converter",
    "png to jpg converter",
    "jpg to png converter",
    "webp to jpg converter",
    "jpg to webp",
    "png to webp",
    "convert image online",
    "free image converter",
    "no signup converter",
    "browser image converter",
    "image format change tool",
    "image optimizer",
    "convert pictures",
    "photo converter online",
    "compress and convert image",
    "convert image without losing quality",
    "offline image converter",
    "jpeg converter",
    "png converter",
    "webp converter",
    "image conversion software",
    "AI image converter",
    "photo format converter",
    "image quality tool",
    "image resizer and converter",
    "convert png to high quality jpg",
    "convert jpg to transparent png",
    "free online image convert app",
    "best image converter for web",
    "convert image for upload",
    "convert for website speed",
    "convert for SEO",
    "image converter fast",
    "photo converter HD",
    "convert image with metadata",
    "privacy image converter",
    "client side image converter"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/image-converter" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/image-converter",
    title: "Image Converter — PNG ↔ JPG ↔ WebP (Free, Private)",
    description:
      "Quickly convert PNG, JPG, and WebP images with custom quality & resizing. Fast, free & privacy-focused — all in your browser.",
    siteName: "PDF Maker AI",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Free Image Converter Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert PNG ↔ JPG ↔ WebP — Free Online Tool",
    description:
      "Fast, high-quality image converter supporting PNG, JPG, and WebP — no signup required.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Free Image Converter",
    operatingSystem: "Web",
    applicationCategory: "UtilityApplication",
    url: "https://pdfmakerai.shop/image-converter",
    image: "https://pdfmakerai.shop/og-image.png",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1320",
    },
    featureList: [
      "Convert PNG ↔ JPG ↔ WebP",
      "Adjust image quality",
      "Set width and height",
      "Instant in-browser conversion",
      "No data uploaded to server",
    ],
    publisher: {
      "@type": "Organization",
      name: "PDF Maker AI",
      url: "https://pdfmakerai.shop",
      sameAs: [
        "https://twitter.com/pdfmakerai",
        "https://facebook.com/pdfmakerai",
        "https://www.linkedin.com/company/pdfmakerai",
      ],
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this image converter free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! The image converter is completely free to use and runs 100% in your browser without uploading files to any server.",
        },
      },
      {
        "@type": "Question",
        name: "Which image formats are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can convert between PNG, JPG (JPEG), and WebP formats easily with high-quality results.",
        },
      },
      {
        "@type": "Question",
        name: "Does it reduce image quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you can control the quality level manually to preserve or reduce image size as you prefer.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, this converter runs fully in your browser, meaning no image is uploaded or stored online.",
        },
      },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([appLd, faqLd]).replace(/</g, "\\u003c"),
        }}
      />
      <ImageConverterTool />
    </main>
  );
}
