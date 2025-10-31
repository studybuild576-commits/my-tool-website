// app/pdf-organize/page.tsx
import type { Metadata } from "next";
import PDFOrganizeTool from "@/components/PDFOrganizeTool";

export const metadata: Metadata = {
  title: "Organize PDF Pages — Reorder, Select Ranges (Free, Private)",
  description:
    "PDF pages ko reorder karein ya custom ranges choose karein (jaise 1,3,2 ya 1-3,5,7-9). Browser ke andar hi process hota hai — koi upload nahi, bilkul safe aur private.",
  keywords: [
    "organize pdf","reorder pdf pages","select pdf pages","page ranges pdf",
    "custom order pdf","pdf arrange pages","pdf page order","pdf-lib organize",
    "client side pdf","in browser pdf tools","free pdf organize","download organized pdf",
    "privacy first pdf","no upload","drag drop reorder","a11y friendly","seo metadata",
    "json-ld software app","core web vitals","lighthouse friendly","pdf organize hindi",
    "pdf pages change order","pdf reorder online","pdf organize free"
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-organize" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/pdf-organize",
    title: "Organize PDF Pages — Reorder & Ranges (Free, Private)",
    description:
      "Custom page order aur range selection ke saath PDF organize karein — 100% browser based, fast aur secure.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organize PDF — Free & Private",
    description:
      "Reorder aur custom range selection ke saath PDF organize karein — in-browser, private, no uploads.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  // ✅ SoftwareApplication Schema
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Organize",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-organize",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Reorder PDF pages",
      "Select custom page ranges",
      "In-browser, private processing",
    ],
    publisher: {
      "@type": "Organization",
      name: "PDF Maker AI",
      url: "https://pdfmakerai.shop",
    },
  };

  // ✅ FAQ Schema (for SEO Rich Results)
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Kya me PDF ke pages reorder kar sakta hu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan! Aap drag-and-drop ke zariye PDF pages ko apne hisaab se reorder kar sakte hain aur custom ranges bhi de sakte hain jaise 1,3,5-8.",
        },
      },
      {
        "@type": "Question",
        name: "Kya ye tool online safe hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bilkul. Ye poora process aapke browser me hota hai — koi upload ya data share nahi hota, 100% private aur secure.",
        },
      },
      {
        "@type": "Question",
        name: "Kya ye mobile aur desktop dono me kaam karega?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, PDF Organize tool sabhi devices aur browsers par seamlessly kaam karta hai — mobile, tablet, ya PC.",
        },
      },
    ],
  };

  // ✅ Final Render
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* JSON-LD Schema Scripts */}
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
      <PDFOrganizeTool />

      {/* FAQ Section (Visible UI for UX + SEO) */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4 bg-white shadow-sm">
            <summary className="font-medium cursor-pointer">
              Kya me PDF ke pages reorder kar sakta hu?
            </summary>
            <p className="mt-2 text-gray-700">
              Haan! Aap drag-and-drop ke zariye PDF pages ko apne hisaab se
              reorder kar sakte hain aur custom ranges bhi de sakte hain jaise
              1,3,5-8.
            </p>
          </details>

          <details className="border rounded-lg p-4 bg-white shadow-sm">
            <summary className="font-medium cursor-pointer">
              Kya ye tool online safe hai?
            </summary>
            <p className="mt-2 text-gray-700">
              Bilkul. Ye poora process aapke browser me hota hai — koi upload ya
              data share nahi hota, 100% private aur secure.
            </p>
          </details>

          <details className="border rounded-lg p-4 bg-white shadow-sm">
            <summary className="font-medium cursor-pointer">
              Kya ye mobile aur desktop dono me kaam karega?
            </summary>
            <p className="mt-2 text-gray-700">
              Haan, PDF Organize tool sabhi devices aur browsers par seamlessly
              kaam karta hai — mobile, tablet, ya PC.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
