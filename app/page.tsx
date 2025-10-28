// app/page.tsx
import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import Hero from "@/components/Hero";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "PDF Maker AI — Every tool you need to work with PDFs",
  description:
    "PDF Maker AI is an online service to work with PDF files completely free and easy to use. Merge PDF, split PDF, compress PDF, convert images and documents, and more!",
  alternates: { canonical: "https://pdfmakerai.shop/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "PDF Maker AI — Every tool you need to work with PDFs",
    description:
      "Fast, privacy-first AI-powered PDF tools: merge, split, compress, convert and more.",
    url: "https://pdfmakerai.shop/",
    images: ["/og-image.png"],
    type: "website",
    siteName: "PDF Maker AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Maker AI — Every tool you need to work with PDFs",
    description:
      "Fast, privacy-first AI-powered PDF tools: merge, split, compress, convert and more.",
    images: ["/og-image.png"],
  },
};

// Category order
const CATEGORY_ORDER = ["AI", "Productivity", "PDF", "Document", "Image", "Utilities", "UX"] as const;

type ToolItem = {
  name: string;
  description: string;
  category: string;
  route: string;
  icon: string | LucideIcon;
};

// Safe Lucide resolver: accepts string name or component
function resolveIcon(icon: string | LucideIcon): LucideIcon | null {
  if (typeof icon === "string") {
    const Comp = (LucideIcons as any)[icon] as LucideIcon | undefined;
    return Comp || null;
  }
  return icon || null;
}

// Group + ordered categories
function groupByCategoryAndOrder(items: ToolItem[]) {
  const map: Record<string, ToolItem[]> = {};
  for (const t of items) (map[t.category || "Other"] ||= []).push(t);
  return Object.entries(map).sort(([a], [b]) => {
    const ia = CATEGORY_ORDER.indexOf(a as any);
    const ib = CATEGORY_ORDER.indexOf(b as any);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
}

export default function Home() {
  const categories = groupByCategoryAndOrder(tools as unknown as ToolItem[]);
  const featuredTools = (tools as unknown as ToolItem[]).filter((t) =>
    ["PDF Merge", "PDF Splitter", "Compress PDF", "JPG to PDF", "PDF to JPG", "PDF to Word"].includes(t.name)
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />

      {/* Featured Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 pt-8" aria-labelledby="popular-tools">
        <div className="text-center mb-12">
          <h2
            id="popular-tools"
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4"
          >
            Most Popular Tools
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Our most-used tools to help you work with PDFs efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {featuredTools.slice(0, 6).map((tool) => {
            const Icon = resolveIcon(tool.icon);
            return (
              <Link
                key={tool.route}
                href={tool.route}
                className="group relative bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-indigo-200/30 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                aria-label={`${tool.name} — ${tool.description}`}
              >
                {/* subtle prismatic sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-indigo-50/20 to-white/10 opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute -left-16 -top-16 w-48 h-48 bg-gradient-to-tr from-indigo-200/10 to-indigo-400/10 rounded-full filter blur-3xl opacity-70 pointer-events-none" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 text-white group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10">
                    {Icon ? <Icon className="w-8 h-8" aria-hidden="true" /> : <span className="text-2xl" aria-hidden="true">📄</span>}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2">{tool.description}</p>
                  <div className="mt-4 flex items-center text-indigo-600 text-sm font-medium">
                    Try Now
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Tools by Category */}
      {categories.map(([cat, categoryTools]) => (
        <section key={cat} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20" aria-labelledby={`cat-${cat}`}>
          <div className="bg-gradient-to-br from-white/90 to-white/75 rounded-3xl shadow-2xl border border-indigo-50 p-8 sm:p-12 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/5 via-white/30 to-white/10 opacity-60" aria-hidden="true" />
            <div className="absolute -right-24 -top-24 w-64 h-64 bg-gradient-to-tr from-indigo-200/10 to-violet-200/10 rounded-full blur-3xl opacity-60 pointer-events-none" aria-hidden="true" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <h2 id={`cat-${cat}`} className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  {cat} Tools
                </h2>
                <div className="h-1 w-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryTools.map((tool) => {
                  const Icon = resolveIcon(tool.icon);
                  return (
                    <Link
                      key={tool.route}
                      href={tool.route}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 border border-transparent hover:border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                      aria-label={`${tool.name} — ${tool.description}`}
                    >
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform"
                        aria-hidden="true"
                      >
                        {Icon ? <Icon className="w-6 h-6" /> : <span className="text-xl">📄</span>}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{tool.name}</h3>
                        <p className="text-sm text-slate-600 mt-1 line-clamp-2">{tool.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20" aria-labelledby="why-choose">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 mix-blend-multiply" aria-hidden="true" />
          </div>

          <div className="relative px-8 py-16 sm:px-12 sm:py-20">
            <div className="text-center mb-16">
              <h2 id="why-choose" className="text-4xl font-bold text-white mb-4">
                Why Choose PDF Maker AI?
              </h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">Experience the perfect blend of power and simplicity</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              {[
                { emoji: "⚡", title: "Lightning Fast", desc: "Process your files instantly with our optimized cloud infrastructure" },
                { emoji: "🔒", title: "Bank-Level Security", desc: "Your files are encrypted and automatically deleted after processing" },
                { emoji: "🧠", title: "AI-Powered Magic", desc: "Advanced AI tools for OCR, summarization, and document analysis" },
              ].map((f) => (
                <div key={f.title} className="relative group">
                  <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" aria-hidden="true" />
                  <div className="relative text-center px-6 py-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center text-2xl backdrop-blur-sm group-hover:scale-110 transition-transform" aria-hidden="true">
                      {f.emoji}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                    <p className="text-blue-100">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20" aria-labelledby="stats">
        <h2 id="stats" className="sr-only">Site stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { val: "1M+", label: "Files Processed" },
            { val: "50K+", label: "Daily Users" },
            { val: "99.9%", label: "Uptime" },
            { val: "24/7", label: "Support" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{s.val}</div>
              <div className="text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
