// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/components/MarkdownRenderer";

/**
 * Note:
 * We intentionally type params as `any` in the exported functions/components
 * to avoid mismatches with Next.js generated PageProps types during build.
 * This is a safe and common pattern for dynamic routes when you rely on
 * your own runtime checks (as we do below).
 */

// helper: "/jpg-to-pdf" => "jpg-to-pdf"
function slugFromRoute(route: string) {
  return route.replace(/^\/|\/$/g, "");
}

// generate static params for SSG
export function generateStaticParams() {
  return tools.map((t) => ({ slug: slugFromRoute(t.route) }));
}

// generate SEO metadata for each blog article
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug: string = params?.slug;
  const tool = tools.find((t) => slugFromRoute(t.route) === slug);

  if (!tool) {
    return {
      title: "Not found | PDF Maker AI",
      description: "The page you’re looking for doesn’t exist.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${tool.name} Guide & Tutorial | PDF Maker AI Blog`;
  const description =
    tool.longDescription || tool.description || `Guide: how to use ${tool.name}`;
  const canonical = `https://pdfmakerai.shop/blog/${slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      siteName: "PDF Maker AI",
      images: ["/og-image.svg", "/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg"],
    },
    robots: { index: true, follow: true },
  };
}

// Main blog page component
export default function BlogPostPage({ params }: any) {
  const slug: string = params?.slug;
  const tool = tools.find((t) => slugFromRoute(t.route) === slug);

  if (!tool) return notFound();

  // Simple markdown content fallback (you can replace with tool.blogContent file read)
  const mdContent = `### Overview

${tool.longDescription || tool.description || ""}

### Step-by-step Guide

1. Upload your file.
2. Adjust settings if needed.
3. Click **Convert** / **Apply** to process the file.

### Tips

- Use high-quality inputs for best results.
- Files processed are private and removed after use.
`;

  return (
    <main className="max-w-4xl mx-auto p-6 sm:p-4">
      <article className="prose prose-slate max-w-none">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {tool.name}: Ultimate Guide & How-to
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <time>{new Date().toLocaleDateString()}</time>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </header>

        <section className="text-lg leading-relaxed">
          <p>
            Learn how to use <strong>{tool.name}</strong> effectively with
            step-by-step instructions, examples, and best practices.
          </p>

          <MarkdownRenderer content={mdContent} />
        </section>
      </article>
    </main>
  );
}
