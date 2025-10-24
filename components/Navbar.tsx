import Link from "next/link";
import { tools } from "@/lib/tools";

function groupByCategory() {
  const map: Record<string, typeof tools> = {};
  for (const t of tools) {
    const cat = t.category || "Other";
    if (!map[cat]) map[cat] = [];
    map[cat].push(t);
  }
  return map;
}

export default function Navbar() {
  const categories = groupByCategory();
  
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">📄</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              PDF Maker AI
            </span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* All PDF Tools Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-slate-700 hover:text-red-600 transition py-2 flex items-center gap-1">
                All PDF tools
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mega Dropdown */}
              <div className="absolute left-0 top-full mt-2 w-screen max-w-4xl bg-white shadow-xl rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6">
                <div className="grid grid-cols-3 gap-6">
                  {Object.entries(categories).map(([cat, tools]) => (
                    <div key={cat}>
                      <div className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">{cat}</div>
                      <ul className="space-y-2">
                        {tools.slice(0, 5).map((tool) => (
                          <li key={tool.route}>
                            <Link 
                              href={tool.route}
                              className="flex items-center gap-2 text-sm text-slate-700 hover:text-red-600 transition"
                            >
                              <span className="text-lg">{tool.icon}</span>
                              <span>{tool.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Link href="/tools" className="text-sm text-red-600 hover:text-red-700 font-medium">
                    View all tools →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/blog" className="text-sm font-medium text-slate-700 hover:text-red-600 transition">
              Blog
            </Link>
            
            <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-red-600 transition">
              About
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/tools"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-pink-700 transition text-sm font-medium"
            >
              Get Started
            </Link>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-slate-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
