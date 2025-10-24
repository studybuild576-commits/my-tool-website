import Link from "next/link";
import { tools } from "@/lib/tools";
// FIX 1: LucideIcon type को Navbar में भी import करें
import { type LucideIcon } from 'lucide-react'; 

// FIX 2: टूल डेटा के लिए अपेक्षित इंटरफ़ेस को Mock करें (चूंकि tools "@/lib/tools" से आता है)
interface Tool {
    name: string;
    description: string;
    category: string;
    route: string;
    // icon: string | LucideIcon के बजाय अब केवल LucideIcon कंपोनेंट होना चाहिए 
    // क्योंकि हमने ToolsPage में इसे हल किया है।
    icon: string | LucideIcon; 
}

// type ToolArray = Tool[];

function groupByCategory() {
  const map: Record<string, Tool[]> = {}; // map type को भी ठीक किया
  for (const t of tools as Tool[]) { // tools को Tool[] के रूप में टाइपकास्ट किया
    const cat = t.category || "Other";
    if (!map[cat]) map[cat] = [];
    map[cat].push(t);
  }
  return map;
}

export default function Navbar() {
  const categories = groupByCategory();
  
  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" legacyBehavior>
            <a className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform">
                  <span className="text-white text-2xl font-bold">📄</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    PDF Maker AI
                  </span>
                  <span className="text-[10px] text-slate-500 -mt-1">Smart PDF Solutions</span>
                </div>
            </a>
          </Link>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* All PDF Tools Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition py-2 flex items-center gap-1">
                All PDF tools
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mega Dropdown */}
              <div className="absolute left-0 top-full mt-2 w-screen max-w-4xl bg-white shadow-2xl rounded-2xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-8">
                <div className="grid grid-cols-3 gap-8">
                  {Object.entries(categories).map(([cat, tools]) => (
                    <div key={cat}>
                      <div className="text-xs font-bold text-indigo-600 mb-4 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-8 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                        {cat}
                      </div>
                      <ul className="space-y-3">
                        {tools.slice(0, 5).map((tool) => {
                                // Icon कंपोनेंट को एक वेरिएबल में रखें
                                // यह मानकर कि tool.icon एक LucideIcon कंपोनेंट है
                                const Icon = tool.icon as LucideIcon; 

                                return (
                              <li key={tool.route}>
                                <Link 
                                  href={tool.route}
                                  className="flex items-center gap-3 text-sm text-slate-700 hover:text-indigo-600 transition group/item"
                                     legacyBehavior
                                >
                                  {/* FIX APPLIED HERE: tool.icon को <Icon /> के रूप में रेंडर करें */}
                                  <span className="text-xl group-hover/item:scale-110 transition">
                                        {/* LucideIcons को <span> के अंदर child के रूप में रेंडर करने के बजाय 
                                            उन्हें JSX टैग के रूप में रेंडर किया जाता है। */}
                                        {typeof Icon !== 'string' ? <Icon className="w-5 h-5" /> : null}
                                  </span>
                                  <span>{tool.name}</span>
                                </Link>
                              </li>
                                );
                            })}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <Link href="/tools" className="text-sm text-indigo-600 hover:text-purple-600 font-semibold inline-flex items-center gap-2" legacyBehavior>
                    <a>
                        View all {tools.length}+ tools
                    <span>→</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/blog" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition" legacyBehavior>
              <a>Blog</a>
            </Link>
            
            <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition" legacyBehavior>
              <a>About</a>
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/tools"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all text-sm font-semibold"
                legacyBehavior
            >
              <a>Get Started Free</a>
            </Link>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition">
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
