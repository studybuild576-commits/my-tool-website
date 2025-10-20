import { tools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";

export default function ToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">🧰 All Tools</h1>
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
    </main>
  );
}
