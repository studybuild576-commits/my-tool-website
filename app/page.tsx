import { tools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";
import Hero from "@/components/Hero";

export const metadata = {
  title: "PDFMakerAI — Fast online PDF & image utilities",
  description:
    "PDFMakerAI provides fast, privacy-first tools to convert, edit and optimize PDFs, images and text directly in your browser.",
};

function groupByCategory() {
  const map: Record<string, typeof tools> = {};
  for (const t of tools) {
    const cat = t.category || "Other";
    if (!map[cat]) map[cat] = [];
    map[cat].push(t);
  }
  return map;
}

export default function Home() {
  const categories = groupByCategory();

  return (
    <main>
      <Hero />

      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-2">All tools</h2>
            <p className="text-slate-600 mb-4">Browse our most popular utilities or search to find the right tool.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {tools.slice(0, 9).map((tool) => (
                <ToolCard
                  key={tool.route}
                  name={tool.name}
                  route={tool.route}
                  icon={tool.icon}
                  description={tool.description}
                  category={tool.category}
                />
              ))}
            </div>
          </div>

          <aside className="hidden md:block">
            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-semibold mb-2">Categories</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                {Object.keys(categories).map((cat) => (
                  <li key={cat}>
                    <a href={`/tools?category=${encodeURIComponent(cat)}`} className="text-blue-600 hover:underline">
                      {cat} ({categories[cat].length})
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Full category sections */}
        {Object.keys(categories).map((cat) => (
          <div key={cat} className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{cat}</h3>
              <a href={`/tools?category=${encodeURIComponent(cat)}`} className="text-sm text-blue-600">
                View all
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categories[cat].slice(0, 6).map((tool) => (
                <ToolCard
                  key={tool.route}
                  name={tool.name}
                  route={tool.route}
                  icon={tool.icon}
                  description={tool.description}
                  category={tool.category}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
