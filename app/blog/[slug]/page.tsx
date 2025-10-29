// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/components/MarkdownRenderer";

type PageProps = { params: { slug: string } };

function slugFromRoute(route: string) {
  return route.replace(/^//, ""); // FIX: escape forward-slash
}

export function generateStaticParams() {
  return tools.map((t) => ({ slug: slugFromRoute(t.route) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const tool = tools.find((t) => slugFromRoute(t.route) === params.slug);
  if (!tool) return { title: "Not found" };
  const title = `${tool.name} Guide & Tutorial | PDF Maker AI Blog`;
  const description = tool.longDescription || tool.description || `Learn how to use ${tool.name} effectively.`;
  const canonical = `https://pdfmakerai.shop/blog/${params.slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${tool.name} — Complete Guide & Tutorial`,
      description,
      type: "article",
      url: canonical,
      siteName: "PDF Maker AI",
      authors: ["PDF Maker AI Team"],
      publishedTime: new Date().toISOString()
    },
    twitter: { card: "summary", title, description }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const tool = tools.find((t) => slugFromRoute(t.route) === params.slug);
  if (!tool) return notFound();

  // Keep rendering simple to pass build; replace with your real content later
  return (
    <main className="max-w-4xl mx-auto p-6">
      <article className="prose prose-slate max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{tool.name}: Ultimate Guide & How‑to</h1>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <time>Published: {new Date().toLocaleDateString()}</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>
        <p className="text-lg leading-relaxed">
          Learn how to use {tool.name} effectively with steps and best practices.
        </p>
      </article>
    </main>
  );
}
