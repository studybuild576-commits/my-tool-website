// app/pdf-merge/page.tsx
import type { Metadata } from "next";
import PDFMergeTool from "@/components/PDFMergeTool";

export const metadata: Metadata = {
  title: "Merge PDF — Multiple PDFs ko ek PDF me jodo (Free, Private)",
  description:
    "Multiple PDF files ko order ke saath ek single PDF me merge karein — fast, in-browser, bina upload, bilkul private.",
  keywords: [
    "merge pdf","combine pdf","pdf merge online","multiple pdf to single pdf",
    "join pdf","append pdf pages","reorder pdf pages","client side pdf merge",
    "in browser pdf tool","free pdf merge","fast pdf merge","pdf-lib merge",
    "download merged pdf","privacy first pdf","no upload pdf merge","drag drop pdf",
    "pdf tools online","pdfmakerai pdf merge","seo metadata","json-ld software app",
    "core web vitals","lighthouse friendly","a11y friendly","order preservation",
    "memory safe blob","object url cleanup","merge pdf free tool",
    "merge pdf hindi","pdf joiner online","merge pdf secure"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-merge" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/pdf-merge",
    title: "Merge PDF — Free, Private",
    description:
      "Multiple PDFs ko ek hi PDF me jodo — reorder, merge, download. Saari processing browser me.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge PDF — Free, Private",
    description: "In-browser PDF merge with order control. No uploads.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  // ✅ SoftwareApplication Schema
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Merge",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-merge",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Merge multiple PDFs",
      "Keep page order",
      "In-browser, private",
    ],
    publisher: {
      "@type": "Organization",
      name: "PDF Maker AI",
      url: "https://pdfmakerai.shop",
    },
  };

  // ✅ FAQ Schema (Google Rich Snippet Ready)
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this PDF merge tool safe and private?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, saara merging process aapke browser me hota hai. Koi upload server pe nahi hoti — 100% private aur secure.",
        },
      },
      {
        "@type": "Question",
        name: "Kya me multiple PDFs ko ek file me merge kar sakta hu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bilkul! Aap chahe jitni bhi PDF files ho, unhe order ke saath ek hi PDF me merge kar sakte hain.",
        },
      },
      {
        "@type": "Question",
        name: "Kya ye tool mobile aur desktop dono par kaam karta hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, ye tool sabhi modern browsers (mobile aur desktop) me smoothly kaam karta hai.",
        },
      },
    ],
  };

  // ✅ Render Page
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* JSON-LD Scripts */}
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

      {/* Tool Component */}
      <PDFMergeTool />

      {/* FAQ Section UI */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4 bg-white shadow-sm">
            <summary className="font-medium cursor-pointer">
              Is this PDF merge tool safe and private?
            </summary>
            <p className="mt-2 text-gray-700">
              Yes, saara merging process aapke browser me hota hai. Koi upload
              server pe nahi hoti — 100% private aur secure.
            </p>
          </details>

          <details className="border rounded-lg p-4 bg-white shadow-sm">
            <summary className="font-medium cursor-pointer">
              Kya me multiple PDFs ko ek file me merge kar sakta hu?
            </summary>
            <p className="mt-2 text-gray-700">
              Bilkul! Aap chahe jitni bhi PDF files ho, unhe order ke saath ek
              hi PDF me merge kar sakte hain.
            </p>
          </details>

          <details className="border rounded-lg p-4 bg-white shadow-sm">
            <summary className="font-medium cursor-pointer">
              Kya ye tool mobile aur desktop dono par kaam karta hai?
            </summary>
            <p className="mt-2 text-gray-700">
              Haan, ye tool sabhi modern browsers (mobile aur desktop) me
              smoothly kaam karta hai.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
