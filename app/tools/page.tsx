// app/tools/page.tsx
import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";

const keywords = [
  "pdf tools","all pdf tools","merge pdf","split pdf","compress pdf","ocr pdf",
  "pdf to jpg","jpg to pdf","html to pdf","read pdf online","pdf editor",
  "free pdf","private pdf","client side","no upload","fast tools",
  "browser tools","web tools","nextjs","typescript","seo",
  "a11y","core web vitals","lighthouse","privacy first","pwa ready",
  "productivity","online utility","toolkit","pdf maker ai","pdfmakerai.shop",
  "watermark pdf","unlock pdf","protect pdf","sign pdf","text to pdf",
  "word to pdf","pdf to word","batch tools","instant convert","secure"
].slice(0, 50);

export const metadata: Metadata = {
  title: "All Tools — PDF Maker AI",
  description: "Browse all PDF Maker AI tools: merge, split, compress, OCR, convert, watermark, unlock, and more — free and private.",
  keywords,
  alternates: { canonical: "https://pdfmakerai.shop/tools" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PDF Maker AI",
    url: "https://pdfmakerai.shop/tools",
    title: "All Tools — PDF Maker AI",
    description: "All PDF tools in one place — fast, private, and free.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "All Tools — PDF Maker AI",
    description: "All PDF tools in one place — fast, private, and free.",
    images: ["/og-image.png"]
  }
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <section className="bg-white rounded-lg shadow-sm p-8 mb-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
              🧰 All Tools
            </h1>
            <p className="text-slate-600 max-w-2xl">
              Fast, private online utilities for PDFs and text — convert, merge, split, compress and more. No sign‑up required.
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
    </main>
  );
}
