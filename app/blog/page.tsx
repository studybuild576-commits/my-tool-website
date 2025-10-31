// app/blog/page.tsx
"use client";
import React from "react";
import { LucideIcon, FileText, LayoutDashboard, Zap, Settings, BookOpen } from "lucide-react";
import Head from "next/head";

// --- Tool Data ---
interface Tool {
  name: string;
  description: string;
  longDescription: string;
  category: "AI" | "PDF" | "Guide" | "Management";
  icon: LucideIcon;
  route: string;
}

const tools: Tool[] = [
  { name: "PDF Merger Guide", description: "Combine PDFs", longDescription: "The ultimate guide to merging your PDF files without quality loss.", category: "PDF", icon: FileText, route: "/merger-guide" },
  { name: "AI Summary Feature", description: "Use AI to summarize", longDescription: "Deep dive into using our new AI feature for document summaries.", category: "AI", icon: Zap, route: "/ai-summary" },
  { name: "Dashboard Setup", description: "Manage your account", longDescription: "Step-by-step tutorial for setting up your dashboard.", category: "Management", icon: LayoutDashboard, route: "/dashboard-setup" },
  { name: "PDF Converter Basics", description: "Convert formats", longDescription: "Everything about converting PDFs to Word or Excel.", category: "PDF", icon: BookOpen, route: "/converter-basics" },
  { name: "Advanced Settings", description: "Configure tools", longDescription: "Guide to advanced options for power users.", category: "Guide", icon: Settings, route: "/advanced-settings" },
];

// --- Blog Card Component ---
interface BlogCardProps {
  title: string;
  excerpt: string;
  href: string;
  icon: LucideIcon;
  category: string;
  date: string;
  readingTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, href, icon: Icon, category, date, readingTime }) => (
  <a
    href={href}
    className="block group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white border border-gray-100"
  >
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 rounded-full bg-indigo-50 text-indigo-600">
          <Icon className="w-6 h-6" aria-hidden="true" />
        </div>
        <span className="text-sm font-medium text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">{category}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
        {title}
      </h3>
      <p className="mt-2 text-gray-500 line-clamp-3">{excerpt}</p>
      <div className="mt-4 text-xs text-gray-400">
        <span>{date}</span> • <span>{readingTime}</span>
      </div>
    </div>
  </a>
);

// --- Blog Index Page ---
export default function BlogIndexPage() {
  const categories = Array.from(new Set(tools.map((t) => t.category)));
  const featuredTools = tools.filter((t) => t.category === "AI" || t.category === "PDF").slice(0, 3);

  const siteUrl = "https://pdfmakerai.shop";

  return (
    <>
      <Head>
        {/* 🔹 Basic Meta */}
        <title>PDF Tools Blog — Tutorials, Guides & AI Features | PDFMakerAI</title>
        <meta
          name="description"
          content="Learn everything about PDFs, AI tools, and document automation. Expert tutorials, step-by-step guides, and productivity hacks for PDF users."
        />
        <meta name="keywords" content="PDF blog, PDF tools, AI PDF, merge pdf, convert pdf, pdf tips, pdfmakerai" />
        <link rel="canonical" href={`${siteUrl}/blog`} />

        {/* 🔹 Open Graph */}
        <meta property="og:title" content="PDF Tools Blog — Tutorials, Guides & AI Features" />
        <meta
          property="og:description"
          content="Expert PDF and AI tutorials. Learn to merge, convert, and automate PDF workflows easily."
        />
        <meta property="og:url" content={`${siteUrl}/blog`} />
        <meta property="og:site_name" content="PDFMakerAI" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PDF Tools Blog — Tutorials, Guides & AI Features" />
        <meta
          name="twitter:description"
          content="Explore the latest PDF and AI tools tutorials from PDFMakerAI."
        />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />

        {/* 🔹 JSON-LD Schema (Website + BlogPosting + FAQ) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PDFMakerAI Blog",
              url: `${siteUrl}/blog`,
              description:
                "PDFMakerAI Blog shares tutorials, guides, and updates about PDF and AI tools for document automation.",
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-16 text-white mb-16">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Master Your PDF Workflows
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8">
              Step-by-step tutorials, AI-powered automation tips, and advanced PDF handling guides.
            </p>
          </div>
        </header>

        {/* Featured Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Guides</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredTools.map((tool) => {
              const slug = tool.route.replace(/^\//, "");
              const href = `/blog/${slug}`;
              return (
                <BlogCard
                  key={tool.name}
                  title={tool.name}
                  excerpt={tool.longDescription || tool.description}
                  href={href}
                  icon={tool.icon}
                  category={tool.category}
                  date="October 30, 2025"
                  readingTime="8 min read"
                />
              );
            })}
          </div>
        </section>

        {/* Categories */}
        {categories.map((category) => {
          const categoryTools = tools.filter((t) => t.category === category);
          return (
            <section key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">{category} Guides</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {categoryTools.map((tool) => {
                  const slug = tool.route.replace(/^\//, "");
                  const href = `/blog/${slug}`;
                  return (
                    <BlogCard
                      key={tool.name}
                      title={tool.name}
                      excerpt={tool.longDescription || tool.description}
                      href={href}
                      icon={tool.icon}
                      category={tool.category}
                      date="October 30, 2025"
                      readingTime="8 min read"
                    />
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
