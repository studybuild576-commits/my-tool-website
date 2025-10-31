// app/pdf-compress/page.tsx
import type { Metadata } from "next";
import PDFCompressTool from "@/components/PDFCompressTool";

export const metadata: Metadata = {
  title: "PDF Compressor — Size Kam Karein (Free, Private, In-Browser)",
  description:
    "Compress PDF file size easily and securely in your browser. Smart optimization, metadata cleanup, and image compression — no upload, fully private.",
  keywords: [
    "pdf compressor","compress pdf online","reduce pdf size","pdf size kam karo","pdf optimization",
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
    title: "PDF Compressor — Free, Private, In-Browser",
    description: "Compress and optimize PDF files without upload — safe, fast, and private.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Compressor — Free, Private",
    description: "In-browser compression with smart optimization and image quality control.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  // ✅ App Schema (SoftwareApplication)
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
      "Client-side PDF compression",
      "Metadata cleanup",
      "Smart image optimization",
      "No upload, privacy-first",
      "Free and fast",
    ],
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" },
  };

  // ✅ FAQ Schema (Rich Snippet for Google)
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this PDF compressor tool free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the PDF Compressor is completely free and private to use — no registration required.",
        },
      },
      {
        "@type": "Question",
        name: "Are my PDFs uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. All compression happens locally inside your browser. Your files never leave your device.",
        },
      },
      {
        "@type": "Question",
        name: "Does it reduce image quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can choose between high, medium, or low image quality to control the final PDF size.",
        },
      },
      {
        "@type": "Question",
        name: "Is it safe for confidential documents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, since everything runs on your device, your private or confidential documents are 100% safe.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use it on mobile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the PDF Compressor works perfectly on Android, iPhone, tablets, and desktops.",
        },
      },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* ✅ Structured Data Scripts */}
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

      {/* ✅ Main Compression Tool */}
      <PDFCompressTool />

      {/* ✅ Visible SEO Content */}
      <section className="mt-16 space-y-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
            ⚙️ Key Features of PDF Compressor
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Compress PDF file size instantly in your browser — no upload needed.</li>
            <li>Smart optimization removes unnecessary data and compresses images efficiently.</li>
            <li>Choose between High, Medium, or Low quality for image-based PDFs.</li>
            <li>Remove metadata, embedded fonts, and hidden objects for smaller output.</li>
            <li>Completely private: processing happens locally on your device.</li>
            <li>Free, fast, and secure — works offline in modern browsers.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
            ❓ Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold">1. Is this tool free?</h3>
              <p>✅ Yes, it’s completely free to use with no signup or watermark.</p>
            </div>
            <div>
              <h3 className="font-semibold">2. Will my files be uploaded?</h3>
              <p>🚫 No. Everything runs inside your browser for complete privacy.</p>
            </div>
            <div>
              <h3 className="font-semibold">3. Can I adjust compression quality?</h3>
              <p>🎚️ Yes, you can choose between high, medium, or low compression levels.</p>
            </div>
            <div>
              <h3 className="font-semibold">4. Does it work on mobile?</h3>
              <p>📱 Yes, it’s optimized for mobile and desktop browsers.</p>
            </div>
            <div>
              <h3 className="font-semibold">5. Is it safe for private PDFs?</h3>
              <p>🔒 Absolutely. Files never leave your device — 100% secure and offline.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
