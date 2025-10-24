import Link from "next/link";
// LucideIcon type और ComponentProps को import करें
import { type LucideIcon } from 'lucide-react'; 
import React from 'react';

// FIX: icon prop को केवल LucideIcon प्रकार का बनाया गया है, जो एक कंपोनेंट है
// LucideIcon एक 'ForwardRef' कंपोनेंट है, इसलिए यह सबसे सटीक प्रकार है।
interface ToolCardProps {
  name: string;
  route: string;
  // FIX: icon को केवल LucideIcon प्रकार का रखें।
  icon: LucideIcon; 
  description: string;
  category?: string;
}

export default function ToolCard({ name, route, icon: Icon, description, category }: ToolCardProps) {
  return (
    <Link href={route} legacyBehavior>
      {/* 1. Shadows और Hover को बदला गया: More prominent shadow और scale effect */}
      <article className="bg-white border-b-4 border-transparent hover:border-blue-500 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer">
        
        <div className="flex items-start gap-5">
          {/* 2. Icon Area: Size बढ़ाया और background दिया */}
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg text-4xl flex-shrink-0">
            {/* Icon को component की तरह render करें */}
            <Icon className="w-8 h-8"/> 
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              {/* 3. Title Style */}
              <h3 className="text-xl font-bold text-gray-800">{name}</h3>
              
              {/* Category Tag: Ab AI theme ya Techy tag use karein */}
              {category && (
                <span className="text-xs bg-purple-100 text-purple-700 font-medium px-2.5 py-1 rounded-full whitespace-nowrap">
                  {category}
                </span>
              )}
            </div>

            {/* Description: Text color और spacing theek kiya */}
            <p className="mt-2 text-sm text-gray-500 line-clamp-3">{description}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
