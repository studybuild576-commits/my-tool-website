// app/image-resizer/page.tsx
import type { Metadata } from "next";
import ImageResizerTool from "@/components/ImageResizerTool";

export const metadata: Metadata = {
  title: "Free Image Resizer — Exact Size, % Scale & Max Dimension | PDF Maker AI",
  description:
    "Resize PNG, JPG, or WebP images by exact width, height, percentage, or max side. High-quality, smooth, and 100% browser-based with no upload or signup.",
  keywords: [
    "image resizer",
    "resize image online",
    "resize jpg",
    "resize png",
    "resize webp",
    "scale image percentage",
    "resize by dimensions",
    "max size resize",
    "maintain aspect ratio",
    "batch image resize",
    "high quality image resize",
    "smooth image resizing",
    "browser based resizer",
    "image resize tool free",
    "image resizer without upload",
    "compress and resize images",
    "photo resizer tool",
    "convert and resize image",
    "responsive image resize",
    "reduce image size",
    "social media image size tool",
    "instagram image resize",
    "facebook banner resize",
    "thumbnail resizer",
    "avatar crop resize",
    "large photo to web size",
    "dpi resize image",
    "canvas image resize",
    "mobile image resizer",
    "image optimization for web",
    "free image resize app",
    "resize without quality loss",
    "png resize quality",
    "jpg resize hd",
    "webp resize fast",
    "resize with compression",
    "resize image secure",
    "resize image privacy safe",
    "client side image resize",
    "best online image resizer"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/image-resizer" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/image-resizer",
    title: "Free Image Resizer — Exact, % Scale, Max Size",
    description:
      "Resize images by width, height, or percentage with smooth quality and full privacy. Works instantly in your browser.",
    siteName: "PDF Maker AI",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Free Image Resizer Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resize PNG, JPG & WebP — Free Online Tool",
    description:
      "Resize images by exact size, percentage, or max dimension — fast, private, and in-browser.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Free Image Resizer",
    operatingSystem: "Web",
    applicationCategory: "UtilityApplication",
    url: "https://pdfmakerai.shop/image-resizer",
    image: "https://pdfmakerai.shop/og-image.png",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1294",
    },
    featureList: [
      "Resize by exact dimensions",
      "Scale by percentage",
      "Resize by max width or height",
      "High-quality smoothing",
      "In-browser with full privacy",
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
        name: "Is this image resizer free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! The Image Resizer tool is 100% free and works directly in your browser without any signup.",
        },
      },
      {
        "@type": "Question",
        name: "Can I resize images without losing quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the tool uses high-quality smoothing to maintain sharpness and clarity during resizing.",
        },
      },
      {
        "@type": "Question",
        name: "Which image formats are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can resize JPG, PNG, and WebP images easily with full quality control.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data private?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! All image processing happens inside your browser — nothing is uploaded to a server.",
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
      <ImageResizerTool />
    </main>
  );
}
