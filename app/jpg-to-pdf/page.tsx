// app/jpg-to-pdf/page.tsx
import type { Metadata } from "next";
import JPGToPDFTool from "@/components/JPGToPDFTool";

export const metadata: Metadata = {
  title: "JPG to PDF — Convert Multiple Images to One PDF (Free, Private)",
  description:
    "Convert JPG images to a single PDF in your browser. Set A4/Letter/Legal, portrait/landscape, margins, and quality. Free, fast, and privacy-first.",
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
    title: "JPG → PDF — Free, Private, In-Browser",
    description:
      "Combine multiple JPGs into one PDF with size, orientation, margin, and quality controls.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG → PDF — Free, Private",
    description:
      "Convert JPG images to a single PDF with page size/orientation/margins. In-browser, no uploads.",
    images: ["/og-image.png"],
  },
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
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this JPG to PDF tool completely free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! It’s 100% free to use with no signup or watermark.",
        },
      },
      {
        "@type": "Question",
        name: "Will my images be uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. All conversions happen inside your browser. Your images never leave your device.",
        },
      },
      {
        "@type": "Question",
        name: "Can I merge multiple JPGs into one PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can add multiple JPG or JPEG files and reorder them before conversion.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It runs locally in your browser using client-side JavaScript, ensuring complete privacy.",
        },
      },
      {
        "@type": "Question",
        name: "Does it work on mobile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it’s fully responsive and works on Android, iPhone, tablets, and desktop browsers.",
        },
      },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* ✅ SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ✅ Main Tool */}
      <JPGToPDFTool />

      {/* ✅ Features + FAQ Visible Section */}
      <section className="mt-16 space-y-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
            🔥 Key Features of JPG to PDF Tool
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Convert multiple JPG or JPEG images into a single PDF instantly.</li>
            <li>Supports A4, Letter, and Legal page sizes with portrait or landscape mode.</li>
            <li>Reorder images before generating the final PDF.</li>
            <li>Adjust margins, image compression, and quality for professional output.</li>
            <li>100% private — everything happens in your browser.</li>
            <li>Free, fast, mobile-friendly, and secure to use anytime.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
            ❓ Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold">1. Is this JPG to PDF tool free?</h3>
              <p>✅ Yes! It’s 100% free to use with no signup or watermark.</p>
            </div>
            <div>
              <h3 className="font-semibold">2. Are my images uploaded anywhere?</h3>
              <p>🚫 No. Everything runs locally inside your browser for complete privacy.</p>
            </div>
            <div>
              <h3 className="font-semibold">3. Can I merge multiple JPGs into one PDF?</h3>
              <p>✅ Yes, simply drag and drop multiple images and reorder them as you like.</p>
            </div>
            <div>
              <h3 className="font-semibold">4. What file formats are supported?</h3>
              <p>🖼️ JPG, JPEG, PNG, and WebP are all supported.</p>
            </div>
            <div>
              <h3 className="font-semibold">5. Does it work on mobile devices?</h3>
              <p>📱 Yes, it works seamlessly on Android, iPhone, and tablets.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
