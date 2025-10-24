// ✅ Import the tools data and ToolCard component
import { tools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";

// ✅ Import all icons here (optional: only those used in tools)
import * as LucideIcons from "lucide-react";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      {/* Header Section */}
      <section className="bg-white rounded-lg shadow-sm p-8 mb-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
              🧰 All Tools
            </h1>
            <p className="text-slate-600 max-w-2xl">
              Fast, private online utilities for PDFs and text — convert, merge,
              split, compress and more. No sign-up required.
            </p>
          </div>

          <div className="w-full md:w-72">
            <input
              type="search"
              placeholder="Search tools..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tools.map((tool) => {
            // ✅ If icon is string (like "FileIcon"), convert it to actual component
            const Icon =
              typeof tool.icon === "string"
                ? LucideIcons[tool.icon as keyof typeof LucideIcons]
                : tool.icon;

            return (
              <ToolCard
                key={tool.route}
                name={tool.name}
                route={tool.route}
                icon={Icon}
                description={tool.description}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
