import { tools } from "@/lib/tools";
import { notFound } from "next/navigation";

type Params = { params: { slug: string } };

function slugFromRoute(route: string) {
  return route.replace(/^\//, "");
}

function generateArticle(tool: any) {
  const title = `${tool.name}: Ultimate Guide & How-to`;
  const intro = `${tool.longDescription || tool.description} In this guide you'll learn how to use ${tool.name} effectively, best practices, and tips to get the best results.`;

  const features = [
    tool.description,
    `Fast, browser-based processing with no signup required`,
    `Privacy-first handling — files are deleted shortly after processing`,
  ];

  const steps = [
    `Open the ${tool.name} tool page at ${tool.route}.`,
    `Upload your file(s) or paste your content depending on the tool's input types.`,
    `Choose options such as output format, compression level, or pages to process.`,
    `Click the primary action button and download the result when ready.`,
  ];

  const faqs = [
    {
      q: "Is this free to use?",
      a: `Most ${tool.name} features are available for free with reasonable limits. Check the site for any premium options.`,
    },
    {
      q: "Is my file private?",
      a: `We delete files from our servers shortly after processing. See the Privacy page for details on retention and data handling.`,
    },
  ];

  return { title, intro, features, steps, faqs };
}

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: slugFromRoute(t.route) }));
}

export async function generateMetadata({ params }: Params) {
  const tool = tools.find((t) => slugFromRoute(t.route) === params.slug);
  if (!tool) return { title: "Not found" };
  return {
    title: `${tool.name} — Blog | PDFMakerAI`,
    description: tool.description,
  };
}

export default function BlogPostPage({ params }: Params) {
  const tool = tools.find((t) => slugFromRoute(t.route) === params.slug);
  if (!tool) return notFound();

  const article = generateArticle(tool);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <article className="prose prose-slate dark:prose-invert">
        <header>
          <h1>{article.title}</h1>
          <p className="text-sm text-slate-600">Published: {new Date().toLocaleDateString()}</p>
        </header>

        <section>
          <p>{article.intro}</p>
        </section>

        <section>
          <h2>Key features</h2>
          <ul>
            {article.features.map((f: string, i: number) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>How to use {tool.name}</h2>
          <ol>
            {article.steps.map((s: string, i: number) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2>Best practices</h2>
          <p>For best results, use high-quality source files, and choose options that balance size & quality depending on your needs.</p>
        </section>

        <section>
          <h2>FAQs</h2>
          {article.faqs.map((f: any, i: number) => (
            <div key={i}>
              <strong>{f.q}</strong>
              <p>{f.a}</p>
            </div>
          ))}
        </section>

        <footer>
          <p>If this guide helped, try the tool now: <a href={tool.route} className="text-blue-600">Open {tool.name}</a></p>
        </footer>
      </article>
    </main>
  );
}
