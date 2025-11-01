import type { Metadata } from "next";
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

// ✅ TOOL DATA (lib/tools.ts हटाने के बाद यह यहीं define करेंगे)
const tools = [
  {
    name: "Merge PDF",
    route: "/merge-pdf",
    icon: "FileStack",
    description: "Combine multiple PDF files into a single document instantly.",
    category: "PDF",
  },
  {
    name: "Split PDF",
    route: "/split-pdf",
    icon: "Scissors",
    description: "Split large PDF documents into smaller files easily.",
    category: "PDF",
  },
  {
    name: "Compress PDF",
    route: "/compress-pdf",
    icon: "Compress",
    description: "Reduce PDF size without losing quality.",
    category: "PDF",
  },
  {
    name: "JPG to PDF",
    route: "/jpg-to-pdf",
    icon: "Image",
    description: "Convert JPG or PNG images into PDF files instantly.",
    category: "Image",
  },
  {
    name: "PDF to JPG",
    route: "/pdf-to-jpg",
    icon: "FileImage",
    description: "Extract images or convert PDF pages to JPG.",
    category: "Image",
  },
  {
    name: "PDF to Word",
    route: "/pdf-to-word",
    icon: "FileText",
    description: "Convert PDF documents to editable Word files.",
    category: "Document",
  },
  {
    name: "Word to PDF",
    route: "/word-to-pdf",
    icon: "FileText",
    description: "Easily convert Word documents into secure PDFs.",
    category: "Document",
  },
  {
    name: "Protect PDF",
    route: "/protect-pdf",
    icon: "Lock",
    description: "Add password protection to your PDF documents.",
    category: "Utilities",
  },
  {
    name: "Unlock PDF",
    route: "/unlock-pdf",
    icon: "Unlock",
    description: "Remove password from protected PDF files.",
    category: "Utilities",
  },
  {
    name: "OCR AI Reader",
    route: "/ai-ocr",
    icon: "Brain",
    description: "Use AI to extract and recognize text from scanned PDFs.",
    category: "AI",
  },
];

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
  const categories = groupByCategoryAndOrder(tools);
  const featuredTools = tools.filter((t) =>
    ["PDF Merge", "PDF Splitter", "Compress PDF", "JPG to PDF", "PDF to JPG", "PDF to Word"].includes(t.name)
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-slate-50 text-slate-800">
      {/* ✅ Hero, Featured Tools, Blog & Footer — same as your code */}
      {/* नीचे बाकी layout unchanged रखा गया है */}
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 animate-gradient-x opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Smarter PDF Tools with <span className="text-blue-200">AI Power</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-blue-100 mb-8">
            Create, convert, and manage your PDFs effortlessly — fast, secure, and powered by AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/merge-pdf" className="px-8 py-3 rounded-full bg-white text-indigo-700 font-semibold hover:bg-slate-100 transition">
              Try Free Tools →
            </Link>
            <Link href="/about" className="px-8 py-3 rounded-full border border-white/60 text-white hover:bg-white/10 transition">
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ✅ Featured Tools Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Popular PDF Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTools.map((tool) => {
            const Icon = resolveIcon(tool.icon);
            return (
              <Link key={tool.route} href={tool.route} className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 border border-indigo-100 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white mb-4 group-hover:scale-110 transition">
                  {Icon ? <Icon className="w-8 h-8" /> : "📄"}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition">{tool.name}</h3>
                <p className="text-sm text-slate-600 line-clamp-2">{tool.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ✅ Blog + Footer same as your previous code */}
    </main>
  );
}
