import { tools } from "@/lib/tools";
import BlogCard from "@/components/BlogCard";

export const metadata = {
  title: "Blog — PDFMakerAI",
  description: "Practical guides, tutorials and how-tos for every PDFMakerAI tool — tips to speed up your PDF workflows.",
};

export default function BlogIndexPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold">PDFMakerAI Blog</h1>
        <p className="text-slate-700 mt-2">Guides and tutorials for each tool — optimized for clarity and SEO so your users find exactly what they need.</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const slug = tool.route.replace(/^\//, "");
          const href = `/blog/${slug}`;
          const excerpt = tool.longDescription || tool.description || "Learn how to use this tool to speed up your PDF tasks.";
          return (
            <BlogCard key={tool.name} title={tool.name} excerpt={excerpt} href={href} />
          );
        })}
      </section>
    </main>
  );
}
