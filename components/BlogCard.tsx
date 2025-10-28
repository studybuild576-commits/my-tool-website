import { LucideIcon } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  href: string;
  icon: LucideIcon; // component type
  category: string;
  date: string;
  readingTime: string;
}

export default function BlogCard({ title, excerpt, href, icon: Icon, category, date, readingTime }: BlogCardProps) {
  return (
    <a href={href} className="block group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white border border-gray-100">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100">
            <Icon className="w-6 h-6" aria-hidden="true" />
          </div>
          <span className="text-sm font-medium text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">{category}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">{title}</h3>
        <p className="mt-2 text-gray-500 line-clamp-3">{excerpt}</p>
        <div className="mt-4 text-xs text-gray-400">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readingTime}</span>
        </div>
      </div>
    </a>
  );
}
