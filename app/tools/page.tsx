import { tools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";

export default function ToolsPage() {
  return (
    <main>
      <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold mb-2">🧰 All Tools</h1>
              <p className="text-slate-600 max-w-2xl">
                Fast, private online utilities for PDFs and text — convert,
                merge, split, compress and more. No sign-up required.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <input
                type="search"
                placeholder="Search tools..."
                className="w-full md:w-64 border rounded-md px-3 py-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.route}
              name={tool.name}
              route={tool.route}
              icon={tool.icon}
              description={tool.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
