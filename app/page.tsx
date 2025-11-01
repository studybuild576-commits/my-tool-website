import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "PDF Maker AI — Smart PDF Suite with AI Tools",
  description:
    "Transform your PDFs with AI — merge, split, compress, convert, and analyze documents securely and instantly.",
  alternates: { canonical: "https://pdfmakerai.shop/" },
  robots: { index: true, follow: true },
};

const CATEGORY_ORDER = ["AI", "Productivity", "PDF", "Document", "Image", "Utilities", "UX"] as const;

type ToolItem = {
  name: string;
  description: string;
  category: string;
  route: string;
  icon: string | LucideIcon;
};

// ✅ Safe icon resolver
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
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-slate-50 text-slate-800">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 animate-gradient-x opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center text-white">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <svg
              width="70"
              height="70"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              <path
                d="M12 2L20 6V18L12 22L4 18V6L12 2Z"
                stroke="white"
                strokeWidth="1.5"
                fill="url(#grad1)"
              />
              <defs>
                <linearGradient id="grad1" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Smarter PDF Tools with <span className="text-blue-200">AI Power</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-blue-100 mb-8">
            Create, convert, and manage your PDFs effortlessly — fast, secure, and powered by artificial intelligence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/merge-pdf"
              className="px-8 py-3 rounded-full bg-white text-indigo-700 font-semibold hover:bg-slate-100 transition"
            >
              Try Free Tools →
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 rounded-full border border-white/60 text-white hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ================= FEATURED TOOLS ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Popular PDF Tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTools.slice(0, 6).map((tool) => {
            const Icon = resolveIcon(tool.icon);
            return (
              <Link
                key={tool.route}
                href={tool.route}
                className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 border border-indigo-100 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white mb-4 group-hover:scale-110 transition">
                  {Icon ? <Icon className="w-8 h-8" /> : "📄"}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition">
                  {tool.name}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">{tool.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ================= BLOG SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Latest from Our Blog
          </h2>
          <p className="text-slate-600 mt-3">Guides, tips & insights for smarter PDF workflows</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Top 5 AI PDF Tools in 2025", slug: "/blog/ai-pdf-tools-2025", img: "/blog1.jpg" },
            { title: "How to Compress PDFs Without Losing Quality", slug: "/blog/compress-guide", img: "/blog2.jpg" },
            { title: "Why AI OCR is the Future of Document Management", slug: "/blog/ai-ocr-future", img: "/blog3.jpg" },
          ].map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              className="group block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.img}
                alt={post.title}
                loading="lazy"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600">Read More →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM LOGO ================= */}
      <section className="text-center py-16 bg-gradient-to-t from-indigo-50 to-white">
        <div className="flex justify-center mb-6">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="url(#grad2)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad2" x1="0" y1="0" x2="24" y2="24">
                <stop stopColor="#6366F1" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
            </defs>
            <path d="M12 2L20 6V18L12 22L4 18V6L12 2Z" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-slate-800">
          Trusted by <span className="text-indigo-600">1 Million+</span> users worldwide
        </h3>
      </section>

      {/* ================= FOOTER ================= */}
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
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
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
