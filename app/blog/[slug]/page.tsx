// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/components/MarkdownRenderer";

type PageProps = {
  params: { slug: string };
};

// ✅ Route से slug निकालने का helper
function slugFromRoute(route: string) {
  return route.replace(/^\//, ""); // remove leading slash
}

// ✅ Static params generate करने वाला फंक्शन
export function generateStaticParams() {
  return tools.map((t) => ({ slug: slugFromRoute(t.route) }));
}

// ✅ SEO Metadata Generator
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = params;
  const tool = tools.find((t) => slugFromRoute(t.route) === slug);

  if (!tool) return { title: "Not found | PDF Maker AI" };

  const title = `${tool.name} Guide & Tutorial | PDF Maker AI Blog`;
  const description =
    tool.longDescription ||
    tool.description ||
    `Learn how to use ${tool.name} effectively.`;
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
      publishedTime: new Date().toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

// ✅ Main Blog Article Page
export default function BlogPostPage({ params }: PageProps) {
  const { slug } = params;
  const tool = tools.find((t) => slugFromRoute(t.route) === slug);

  if (!tool) return notFound();

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
          <MarkdownRenderer
            content={`### Overview\n\n${tool.longDescription || tool.description || ""}\n\n### Step-by-Step Guide\n\n1. Upload your file\n2. Adjust settings if needed\n3. Click Convert to generate your PDF instantly`}
          />
        </section>
      </article>
    </main>
  );
}
