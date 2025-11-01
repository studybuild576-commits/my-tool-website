import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import Hero from "@/components/Hero";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "PDF Maker AI — All-in-One AI PDF Tools, Blog & Resources",
  description:
    "Experience the ultimate online PDF suite — merge, split, compress, convert, and chat with PDFs using advanced AI tools. 100% free, secure, and lightning-fast.",
  alternates: { canonical: "https://pdfmakerai.shop/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "PDF Maker AI — All-in-One PDF & AI Tools",
    description:
      "Work smarter with AI PDF tools: merge, split, compress, convert and analyze documents easily.",
    url: "https://pdfmakerai.shop/",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Maker AI — Smart PDF Suite",
    description: "AI-powered tools to handle PDFs effortlessly.",
    images: ["/og-image.png"],
  },
};

const CATEGORY_ORDER = ["AI", "Productivity", "PDF", "Document", "Image", "Utilities", "UX"] as const;

type ToolItem = {
  name: string;
  description: string;
  category: string;
  route: string;
  icon: string | LucideIcon;
};

// ✅ Safe Lucide resolver
function resolveIcon(icon: string | LucideIcon): LucideIcon | null {
  if (typeof icon === "string") {
    const Comp = (LucideIcons as any)[icon] as LucideIcon | undefined;
    return Comp || null;
  }
  return icon || null;
}

// ✅ Group + ordered categories
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
      {/* 🔹 HERO */}
      <Hero />

      {/* 🔹 Featured Tools */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 pt-8"
        aria-labelledby="popular-tools"
      >
        <div className="text-center mb-12">
          <h2
            id="popular-tools"
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4"
          >
            Most Popular Tools
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Explore our top PDF tools used by millions worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {featuredTools.slice(0, 6).map((tool) => {
            const Icon = resolveIcon(tool.icon);
            return (
              <Link
                key={tool.route}
                href={tool.route}
                className="group relative bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-indigo-200/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-indigo-50/10 to-white/10 opacity-90" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 text-white group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10">
                    {Icon ? <Icon className="w-8 h-8" /> : "📄"}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2">{tool.description}</p>
                  <div className="mt-4 flex items-center text-indigo-600 text-sm font-medium">
                    Try Now →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 🔹 Tools by Category */}
      {categories.map(([cat, categoryTools]) => (
        <section key={cat} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-white/80 rounded-3xl shadow-xl border border-indigo-50 p-8 sm:p-12 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                {cat} Tools
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryTools.map((tool) => {
                const Icon = resolveIcon(tool.icon);
                return (
                  <Link
                    key={tool.route}
                    href={tool.route}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 border hover:border-slate-200"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      {Icon ? <Icon className="w-6 h-6" /> : "📄"}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1 line-clamp-2">{tool.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* 🔹 Blog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Latest from Our Blog
          </h2>
          <p className="text-slate-600 mt-3">Tips, guides & insights on working smarter with PDFs</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Top 5 AI PDF Tools in 2025", slug: "/blog/ai-pdf-tools-2025", img: "/blog1.jpg" },
            { title: "How to Compress PDFs Without Losing Quality", slug: "/blog/compress-guide", img: "/blog2.jpg" },
            { title: "Why AI OCR is the Future of Document Management", slug: "/blog/ai-ocr-future", img: "/blog3.jpg" },
          ].map((post) => (
            <Link key={post.slug} href={post.slug} className="group block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600">Read More →</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            View All Articles
          </Link>
        </div>
      </section>

      {/* 🔹 About / CTA */}
      <section className="max-w-6xl mx-auto px-4 text-center mb-20">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">About PDF Maker AI</h2>
        <p className="text-slate-600 max-w-3xl mx-auto">
          PDF Maker AI is a modern, secure, and AI-powered online suite to handle all your PDF tasks.  
          We’re trusted by 1M+ users globally to simplify document workflows with AI precision.
        </p>
        <div className="mt-8">
          <Link href="/about" className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            Learn More →
          </Link>
        </div>
      </section>

      {/* 🔹 Footer Links */}
      <footer className="bg-slate-900 text-slate-300 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/merge-pdf">Merge PDF</Link></li>
              <li><Link href="/split-pdf">Split PDF</Link></li>
              <li><Link href="/compress-pdf">Compress PDF</Link></li>
              <li><Link href="/pdf-to-word">PDF to Word</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm mt-8 border-t border-slate-700 pt-6">
          © {new Date().getFullYear()} PDF Maker AI — All rights reserved.
        </div>
      </footer>
    </main>
  );
}
