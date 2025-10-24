import React from 'react';
import * as LucideIcons from "lucide-react";
// LucideIcon type और डिफ़ॉल्ट आइकॉन को import करें
import { LucideIcon, FileText, Zap, Split, Combine } from "lucide-react"; 

// 🚫 NOTE: Unresolvable imports हटाए गए हैं।
// tools data और ToolCard component को यहीं परिभाषित किया जा रहा है ताकि कोड compile हो सके।

// --- MOCK DEFINITIONS (संकलन सुनिश्चित करने के लिए) ---

// Tool Interface
interface Tool {
  name: string;
  description: string;
  category: string;
  icon: string | LucideIcon; 
  route: string;
}

// Mock tools data
const tools: Tool[] = [
    { name: "Merge PDF", description: "Combine multiple PDF files into one.", category: 'PDF', icon: Combine, route: '/merge' },
    { name: "Split PDF", description: "Divide a single PDF into multiple documents.", category: 'PDF', icon: 'Split', route: '/split' },
    { name: "AI Summarizer", description: "Use AI to summarize long text or documents.", category: 'AI', icon: Zap, route: '/ai-summarize' },
    { name: "Convert to PDF", description: "Convert any format to PDF securely.", category: 'PDF', icon: 'FileText', route: '/convert' },
];

// ToolCard Props Interface
interface ToolCardProps {
    name: string;
    description: string;
    route: string;
    icon: LucideIcon; 
}

// Mock ToolCard Component
const ToolCard: React.FC<ToolCardProps> = ({ name, description, route, icon: Icon }) => {
    return (
        <a href={route} className="block p-6 rounded-xl shadow-md bg-white hover:bg-blue-50 transition-all duration-200 border border-gray-200 hover:border-blue-400 group">
            <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {name}
                </h2>
            </div>
            <p className="mt-4 text-gray-600 text-sm">{description}</p>
        </a>
    );
};

// --- TOOLSPAGE COMPONENT ---

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
            // If icon is string (like "FileIcon"), convert it to actual component
            const Icon =
              typeof tool.icon === "string"
                ? LucideIcons[tool.icon as keyof typeof LucideIcons]
                : tool.icon;

            // Safety check: यदि Icon resolve नहीं होता है या string रह जाता है, तो FileText का उपयोग करें।
            const FinalIcon = (!Icon || typeof Icon === 'string') ? FileText : Icon;


            return (
              <ToolCard
                key={tool.route}
                name={tool.name}
                route={tool.route}
                // Type Fix: FinalIcon को LucideIcon के रूप में टाइपकास्ट करें।
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
