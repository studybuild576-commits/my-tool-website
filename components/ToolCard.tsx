import Link from "next/link";
import * as LucideIcons from "lucide-react";
import React from "react";

interface ToolCardProps {
  name: string;
  route: string;
  // icon can be a lucide icon name (string) or an emoji/component fallback
  icon: string | React.ReactNode;
  description: string;
  category?: string;
}

export default function ToolCard({
  name,
  route,
  icon: Icon,
  description,
  category,
}: ToolCardProps) {

  // resolve icon: if a string name is provided, map to lucide icon
  let IconNode: React.ReactNode = null;
  if (typeof Icon === "string") {
    const K = (LucideIcons as any)[Icon];
    if (typeof K === "function") IconNode = <K className="w-5 h-5" />;
    else IconNode = <span className="text-2xl">{Icon}</span>;
  } else {
    IconNode = Icon;
  }

  return (
    <Link href={route} className="block">
  <article className="bg-white/70 backdrop-blur-sm border border-transparent hover:border-primary-200 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-primary-200 cursor-pointer">
        <div className="flex items-start gap-5">
          {/* Icon Area */}
          <div className="p-3 bg-primary-50 text-primary-600 rounded-lg text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center">
            {IconNode}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

              {/* Category Tag */}
              {category && (
                <span className="text-xs bg-purple-100 text-purple-700 font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                  {category}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-500 line-clamp-3">{description}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
