import React from 'react';
import { tools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";

export const metadata = {
  title: "All Tools — PDF Maker AI",
  description: "All PDF Maker AI tools: merge, split, compress, OCR, convert and more.",
  alternates: { canonical: "https://pdfmakerai.shop/tools" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "All Tools — PDF Maker AI",
    description: "All PDF Maker AI tools: merge, split, compress, OCR, convert and more.",
    url: "https://pdfmakerai.shop/tools",
    images: ["/og-image.png"],
  },
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      {/* Header Section */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
              🧰 All Tools
            </h1>
            <p className="text-slate-600 max-w-2xl">
              Fast, private online utilities for PDFs and text — convert, merge,
              split, compress and more. No sign-up required.
            </p>
          </div>

          <div className="w-full md:w-72">
            <input
              type="search"
              placeholder="Search tools..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool) => {
            // pass the icon name (string) down to the ToolCard so it resolves
            // the lucide icon on the rendering side (avoids passing functions)
            return (
              <ToolCard
                key={tool.route}
                name={tool.name}
                route={tool.route}
                icon={tool.icon}
                description={tool.description}
                category={tool.category}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
