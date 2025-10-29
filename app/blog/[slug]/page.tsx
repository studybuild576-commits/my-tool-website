// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { promises as fs } from "fs";
import path from "path";

// ✅ FIXED: Proper regex escape for leading slash removal
function slugFromRoute(route: string) {
  return route.replace(/^\//, ""); // Correct regex
}

function findToolBySlug(slug: string) {
  return tools.find((t) => slugFromRoute(t.route) === slug);
}

async function getArticleContent(tool: any) {
  if (tool?.blogContent) {
    try {
      const filePath = path.join(process.cwd(), "app/blog/content", tool.blogContent);
      const content = await fs.readFile(filePath, "utf8");
      return content;
    } catch {
      return null;
    }
  }
  return null;
}

function generateArticle(tool: any) {
  const title = `${tool.name}: Ultimate Guide & How-to`;
  const intro = `${tool.longDescription || tool.description} In this guide you'll learn how to use ${tool.name} effectively, best practices, and tips to get the best results.`;
  const features = [
    tool.description,
    "Fast, browser-based processing with no signup required",
    "Privacy-first handling — files are deleted shortly after processing",
  ];
  const steps = [
    `Open the ${tool.name} tool page at ${tool.route}.`,
    `Upload your file(s) or paste your content depending on the tool's input types.`,
    `Choose options such as output format, compression level, or pages to process.`,
    `Click the primary action button and download the result when ready.`,
  ];
  const faqs = [
    { q: "Is this free to use?", a: `Most ${tool.name} features are available for free with reasonable limits. Check the site for any premium options.` },
    { q: "Is my file private?", a: `We process in-browser wherever possible; server jobs delete files shortly after processing. See Privacy Policy for details.` },
  ];
  return { title, intro, features, steps, faqs };
}

export function generateStaticParams() {
  return tools.map((t) => ({ slug: slugFromRoute(t.route) }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = findToolBySlug(params.slug);
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
      publishedTime: new Date().toISOString(),
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const tool = findToolBySlug(params.slug);
  if (!tool) return notFound();

  const canonical = `https://pdfmakerai.shop/blog/${params.slug}`;
  const customContent = await getArticleContent(tool);
  const article = generateArticle(tool);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: tool.longDescription || tool.description,
    author: [{ "@type": "Organization", name: "PDF Maker AI" }],
    datePublished: new Date().toISOString(),
    mainEntityOfPage: canonical,
    publisher: { "@type": "Organization", name: "PDF Maker AI", url: "https://pdfmakerai.shop" },
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* ✅ JSON-LD Schema Safe Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd).replace(/</g, "\\u003c") }}
      />

      <article className="prose prose-slate max-w-none">
        {customContent ? (
          <>
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <time>Published: {new Date().toLocaleDateString()}</time>
                <span>·</span>
                <span>8 min read</span>
              </div>
            </header>
            <MarkdownRenderer content={customContent} />
          </>
        ) : (
          <>
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <time>Published: {new Date().toLocaleDateString()}</time>
                <span>·</span>
                <span>8 min read</span>
              </div>
            </header>

            <section className="mb-8">
              <p className="text-lg leading-relaxed">{article.intro}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {article.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How to Use {tool.name}</h2>
              <ol className="space-y-4">
                {article.steps.map((s, i) => (
                  <li key={i} className="flex">
                    <span className="mr-4 font-bold">{i + 1}.</span>
                    {s}
                  </li>
                ))}
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
              <p>
                For best results, use high-quality source files and choose options that balance size and quality depending on your needs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {article.faqs.map((f, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-lg">
                    <h3 className="font-semibold mb-2">{f.q}</h3>
                    <p className="text-slate-700">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <footer className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Ready to try it yourself?</h3>
          <p className="mb-4">
            Now that you've learned about {tool.name}, put your knowledge into practice.
          </p>
          <a
            href={tool.route}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Try {tool.name} Now <span className="ml-2">→</span>
          </a>
        </footer>
      </article>
    </main>
  );
}
