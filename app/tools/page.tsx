import type { Metadata } from "next";
import ToolCard from "@/components/ToolCard";

const keywords = [
  "pdf tools", "all pdf tools", "merge pdf", "split pdf", "compress pdf", "ocr pdf",
  "pdf to jpg", "jpg to pdf", "html to pdf", "read pdf online", "pdf editor",
  "free pdf", "private pdf", "client side", "no upload", "fast tools",
  "browser tools", "web tools", "nextjs", "typescript", "seo",
  "a11y", "core web vitals", "lighthouse", "privacy first", "pwa ready",
  "productivity", "online utility", "toolkit", "pdf maker ai", "pdfmakerai.shop",
  "watermark pdf", "unlock pdf", "protect pdf", "sign pdf", "text to pdf",
  "word to pdf", "pdf to word", "batch tools", "instant convert", "secure"
].slice(0, 50);

export const metadata: Metadata = {
  title: "All Tools — PDF Maker AI",
  description:
    "Browse all PDF Maker AI tools: merge, split, compress, OCR, convert, watermark, unlock, and more — fast, private, and free.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/tools" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/tools",
    title: "All Tools — PDF Maker AI",
    description:
      "All PDF tools in one place — fast, private, and free. Convert, merge, split, compress, edit, and more.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Tools — PDF Maker AI",
    description:
      "All PDF tools in one place — fast, private, and free. Convert, merge, split, compress, edit, and more.",
    images: ["/og-image.png"],
  },
};

export default function ToolsPage() {
  const siteUrl = "https://pdfmakerai.shop";

  // JSON-LD structured data (WebPage + FAQ + Breadcrumb)
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/tools`,
        url: `${siteUrl}/tools`,
        name: "All Tools — PDF Maker AI",
        description:
          "Explore all free online PDF tools: merge, split, compress, convert, OCR, unlock, protect and more — no signup, no upload delays.",
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "All Tools",
            item: `${siteUrl}/tools`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What tools does PDF Maker AI offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "PDF Maker AI provides a wide range of tools such as PDF Merge, Split, Compress, OCR, Convert, Watermark, and Unlock PDF — all free and privacy-focused.",
            },
          },
          {
            "@type": "Question",
            name: "Is PDF Maker AI free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, all PDF Maker AI tools are 100% free to use with no sign-up required.",
            },
          },
          {
            "@type": "Question",
            name: "Is my data safe when using PDF Maker AI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, your data is safe — all processing happens directly in your browser, and no files are stored on our servers.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      {/* Hero Section */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
              🧰 All Tools
            </h1>
            <p className="text-slate-600 max-w-2xl">
              Fast, private online utilities for PDFs and text — convert, merge,
              split, compress, edit and more. No sign-up required.
            </p>
          </div>

          <div className="w-full md:w-72">
            <input
              type="search"
              placeholder="Search tools..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              aria-label="Search tools"
            />
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.route}
              name={tool.name}
              route={tool.route}
              icon={tool.icon}
              description={tool.description}
              category={tool.category}
            />
          ))}
        </div>
      </section>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
    </main>
  );
}
