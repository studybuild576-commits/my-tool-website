import Link from "next/link";

interface ToolCardProps {
  name: string;
  route: string;
  icon: string;
  description: string;
  category?: string;
}

export default function ToolCard({ name, route, icon, description, category }: ToolCardProps) {
  return (
    <Link href={route}>
      <article className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition focus:outline-none focus:ring-2 focus:ring-blue-200">
        <div className="flex items-start gap-4">
          <div className="text-3xl">{icon}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{name}</h3>
              {category && (
                <span className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md">
                  {category}
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-slate-600 line-clamp-3">{description}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
