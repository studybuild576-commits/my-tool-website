import React from 'react';
// FIX 1: अब हम मानते हैं कि ये imports resolve हो जाएंगे क्योंकि आपकी ToolCard ठीक है
import { tools } from "@/lib/tools"; 
import ToolCard from "@/components/ToolCard"; 

// FIX 2: LucideIcon type और सभी icons को import करें
import * as LucideIcons from "lucide-react";
import { type LucideIcon, FileText } from "lucide-react";


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
            const ResolvedIcon =
              typeof tool.icon === "string"
                ? LucideIcons[tool.icon as keyof typeof LucideIcons]
                : tool.icon;
            
            // Safety check और Type Assertion
            // यह सुनिश्चित करता है कि यह एक React Component है, string नहीं, 
            // और यदि यह undefined है तो FileText पर वापस आ जाता है।
            const FinalIcon = (!ResolvedIcon || typeof ResolvedIcon === 'string') 
                ? FileText 
                : ResolvedIcon;

            return (
              <ToolCard
                key={tool.route}
                name={tool.name}
                route={tool.route}
                // FIX 3: LucideIcon type पर स्पष्ट रूप से Typecast करें।
                icon={FinalIcon as LucideIcon}
                description={tool.description}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
