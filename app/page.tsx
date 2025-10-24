import { tools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata = {
  title: "PDF Maker AI — Every tool you need to work with PDFs",
  description:
    "PDF Maker AI is an online service to work with PDF files completely free and easy to use. Merge PDF, split PDF, compress PDF, convert images and documents, and more!",
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
  const featuredTools = tools.filter(t => 
    ['PDF Merge', 'PDF Splitter', 'PDF Compress', 'JPG to PDF', 'PDF to JPG', 'PDF to Word'].includes(t.name)
  );

  return (
    <main>
      <Hero />

      {/* Featured/Popular Tools */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold mb-6">Most Popular Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredTools.map((tool) => (
            <Link
              key={tool.route}
              href={tool.route}
              className="group bg-white rounded-lg p-6 text-center hover:shadow-lg transition border border-slate-200"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">{tool.icon}</div>
              <div className="text-sm font-medium text-slate-700 group-hover:text-red-600">{tool.name}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* All Tools by Category */}
      {Object.entries(categories).map(([cat, categoryTools]) => (
        <section key={cat} className="max-w-7xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">{cat} Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categoryTools.map((tool) => (
                <Link
                  key={tool.route}
                  href={tool.route}
                  className="group flex items-center gap-3 p-4 rounded-lg hover:bg-slate-50 transition border border-transparent hover:border-red-200"
                >
                  <div className="text-3xl group-hover:scale-110 transition">{tool.icon}</div>
                  <div>
                    <div className="font-medium text-slate-800 group-hover:text-red-600 transition text-sm">
                      {tool.name}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-1">{tool.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose PDF Maker AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast & Easy</h3>
              <p className="text-sm text-slate-600">
                Process your files in seconds with our intuitive interface. No learning curve required.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🔒
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
              <p className="text-sm text-slate-600">
                Your files are automatically deleted after processing. We respect your privacy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-lg font-semibold mb-2">All-in-One Solution</h3>
              <p className="text-sm text-slate-600">
                Everything you need for PDFs in one place. Merge, split, compress, convert and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
