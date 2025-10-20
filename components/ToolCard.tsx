import Link from "next/link";

interface ToolCardProps {
  name: string;
  route: string;
  icon: string;
  description: string;
}

export default function ToolCard({ name, route, icon, description }: ToolCardProps) {
  return (
    <Link href={route}>
      <div className="bg-white border rounded-lg p-4 shadow hover:shadow-md hover:border-blue-500 transition">
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
