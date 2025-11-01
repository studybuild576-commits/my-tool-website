import { LucideIcon, Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  href: string;
  icon: LucideIcon;
  category: string;
  date: string;
  readingTime: string;
}

export default function BlogCard({
  title,
  excerpt,
  href,
  icon: Icon,
  category,
  date,
  readingTime,
}: BlogCardProps) {
  return (
    <a
      href={href}
      className="block group rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all bg-white hover:-translate-y-1 duration-300"
    >
      <div className="p-6 sm:p-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition">
              <Icon className="w-6 h-6" aria-hidden="true" />
            </div>
            <span className="text-sm font-semibold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all" />
        </div>

        {/* Title & Excerpt */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mt-3 text-gray-500 line-clamp-3">{excerpt}</p>

        {/* Footer */}
        <div className="mt-5 flex items-center text-sm text-gray-400 space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{readingTime}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
