// app/pdf-reader/page.tsx
import type { Metadata } from "next";
import PDFReaderPageClient from "@/components/client/PDFReaderPageClient";

export const metadata: Metadata = {
  title: "PDF Reader — Read, Search, Extract Text (Free, Private)",
  description:
    "Browser me hi PDF padhien, pages navigate karein, zoom karein aur text search/extract karein. Saari processing client-side hoti hai, bina upload ke — fast aur private.",
  keywords: [
    "pdf reader",
    "read pdf online",
    "search pdf",
    "extract text pdf",
    "pdf viewer",
    "pdf zoom",
    "navigate pdf pages",
    "client side pdf",
    "pdfjs viewer",
    "in browser pdf tool",
    "free pdf reader",
    "private pdf reader",
    "no upload pdf",
    "text content pdf",
    "find in pdf",
    "pdf search results",
    "pdf viewer nextjs",
    "seo metadata",
    "json-ld software app",
    "core web vitals",
    "accessible pdf viewer",
    "keyboard navigation pdf",
    "mobile pdf reader",
    "sr labels pdf",
    "lighthouse friendly",
  ],
  alternates: { canonical: "https://pdfmakerai.shop/pdf-reader" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://pdfmakerai.shop/pdf-reader",
    title: "PDF Reader — Free, Private",
    description: "Read, zoom, and search PDFs in your browser. 100% private, no uploads.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Reader — Free, Private",
    description: "Read and search PDFs directly in-browser. No uploads, fully private.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PDF Reader",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    url: "https://pdfmakerai.shop/pdf-reader",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Read PDF online",
      "Search and extract text",
      "In-browser, private",
    ],
  };

  // ✅ FAQ JSON-LD Schema
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "PDF online kaise padhein?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bas apni PDF file upload karein aur PDF Maker AI ka reader usse instantly browser me open karega. Zoom, scroll, aur search sab available hai.",
        },
      },
      {
        "@type": "Question",
        name: "Kya ye PDF Reader secure hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, saari processing browser ke andar hoti hai. Koi bhi file server par upload nahi hoti, isliye ye 100% private aur safe hai.",
        },
      },
      {
        "@type": "Question",
        name: "Kya main mobile se bhi PDF read kar sakta hoon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bilkul! Ye tool mobile friendly hai. Aap Android ya iPhone par easily PDFs open aur search kar sakte hain.",
        },
      },
      {
        "@type": "Question",
        name: "Kya main PDF me text search kar sakta hoon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Haan, aapko sirf search box me keyword type karna hai. Tool turant matching text highlight kar deta hai.",
        },
      },
    ],
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* ✅ Structured Data for SEO */}
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

      {/* Main Component */}
      <PDFReaderPageClient />

      {/* ✅ Extra SEO + UX Content */}
      <section className="mt-12 space-y-6 text-gray-700">
        <h2 className="text-2xl font-semibold">Why Use PDF Reader Tool?</h2>
        <p>
          PDF Maker AI ka PDF Reader ek modern, fast aur private tool hai jisme
          aap apni PDF file ko bina upload kiye read, zoom aur search kar
          sakte hain. Ye aapke browser ke andar hi kaam karta hai, isliye data
          100% safe rehta hai.
        </p>

        <h3 className="text-xl font-semibold mt-6">Key Features</h3>
        <ul className="list-disc ml-6">
          <li>Instant PDF loading (no upload required)</li>
          <li>Text search aur highlight feature</li>
          <li>Zoom in/out aur page navigation controls</li>
          <li>Works offline after load (PWA-ready)</li>
          <li>Accessible controls for keyboard & screen readers</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">How to Use PDF Reader</h3>
        <ol className="list-decimal ml-6">
          <li>“Open PDF” par click karke apni file select karein</li>
          <li>Pages scroll karke content padhein</li>
          <li>Search bar me text likhkar result dekhein</li>
          <li>Zoom controls se font size adjust karein</li>
        </ol>

        <h3 className="text-xl font-semibold mt-6">Related Tools</h3>
        <ul className="list-disc ml-6">
          <li>
            <a href="/pdf-merge" className="text-blue-600 hover:underline">
              Merge PDF Files
            </a>
          </li>
          <li>
            <a href="/pdf-split" className="text-blue-600 hover:underline">
              Split PDF Pages
            </a>
          </li>
          <li>
            <a href="/pdf-organize" className="text-blue-600 hover:underline">
              Organize PDF Order
            </a>
          </li>
          <li>
            <a href="/pdf-protect" className="text-blue-600 hover:underline">
              Protect PDF (Password Lock)
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
