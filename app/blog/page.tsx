import { tools } from "@/lib/tools";
import BlogCard from "@/components/BlogCard";

export const metadata = {
  title: "PDF Tools Blog - Tutorials & Guides | PDFMakerAI",
  description: "Expert guides, tutorials and in-depth articles about PDF manipulation, document conversion, and AI-powered tools. Learn how to work smarter with PDFs.",
};

export default function BlogIndexPage() {
  const categories = Array.from(new Set(tools.map(t => t.category)));
  const featuredTools = tools.filter(t => t.category === 'AI' || t.category === 'PDF').slice(0, 3);
  
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-16 text-white mb-16">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Master Your PDF Workflows
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8">
            In-depth guides, expert tutorials, and best practices for working with PDFs.
            From basic tasks to advanced automation — everything you need to know.
          </p>
          <form className="flex max-w-md gap-4">
            <input
              type="search"
              placeholder="Search articles..."
              className="flex-1 rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder:text-blue-200 focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition">
              Search
            </button>
          </form>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 transform opacity-20">
          <div className="h-96 w-96 rounded-full bg-white blur-3xl"></div>
        </div>
      </header>

      {/* Featured Articles */}
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
                date="October 24, 2025"
                readingTime="8 min read"
              />
            );
          })}
        </div>
      </section>

      {/* Category Sections */}
      {categories.map((category) => {
        const categoryTools = tools.filter(t => t.category === category);
        if (categoryTools.length === 0) return null;
        
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
                    date="October 24, 2025"
                    readingTime="8 min read"
                  />
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Newsletter Section */}
      <section className="rounded-2xl bg-slate-900 p-8 sm:p-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold text-white mb-3">Stay Updated</h2>
            <p className="text-slate-300">Get the latest PDF tools guides and tutorials delivered to your inbox.</p>
          </div>
          <form className="flex w-full max-w-md gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border-0 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400"
            />
            <button type="submit" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
