import { tools } from "@/lib/tools";
import ToolCard from "@/components/ToolCard";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata = {
  title: "PDF Maker AI — Every tool you need to work with PDFs",
  description:
    "PDF Maker AI is an online service to work with PDF files completely free and easy to use. Merge PDF, split PDF, compress PDF, convert images and documents, and more!",
};

// Category order define kiya gaya taaki AI tools sabse upar dikhein
const CATEGORY_ORDER = ['AI', 'Productivity', 'PDF', 'Document', 'Image', 'Utilities', 'UX'];

function groupByCategoryAndOrder() {
  const map: Record<string, typeof tools> = {};
  for (const t of tools) {
    const cat = t.category || "Other";
    if (!map[cat]) map[cat] = [];
    map[cat].push(t);
  }
  // Categories ko order ke mutabik sort karna
  return Object.entries(map).sort(([catA], [catB]) => {
    return CATEGORY_ORDER.indexOf(catA) - CATEGORY_ORDER.indexOf(catB);
  });
}

export default function Home() {
  const categories = groupByCategoryAndOrder(); // Naya ordered function use kiya
  const featuredTools = tools.filter(t => 
    ['PDF Merge', 'PDF Splitter', 'Compress PDF', 'JPG to PDF', 'PDF to JPG', 'PDF to Word'].includes(t.name)
  );

  return (
    <main className="bg-gray-50"> {/* Poore background ko halka gray kiya */}
      <Hero />

      {/* --- 1. Featured/Popular Tools (Premium Grid Look) --- */}
      <section className="max-w-7xl mx-auto px-4 mb-16 pt-8">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-800 border-b-2 border-blue-500 pb-2">
          Most Popular Tools ⚡
        </h2>
        {/* Column 6 se 4/6 kiya aur gap badhaya */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"> 
          {featuredTools.map((tool) => (
            <Link
              key={tool.route}
              href={tool.route}
              /* PREMIUM CLASSES: Rounded-2xl, Shadow, Scale Effect, Border-none */
              className="group bg-white rounded-2xl p-6 text-center 
                       shadow-xl hover:shadow-2xl transition-all duration-300 
                       transform hover:scale-[1.03] border border-gray-100" 
            >
              {/* Icon Area: Blue-themed, bada size, rounded-full */}
              <div className="text-4xl mb-3 mx-auto p-2 w-16 h-16 
                        bg-blue-100 text-blue-600 rounded-full 
                        flex items-center justify-center 
                        group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              {/* Text: Bold aur Blue hover effect */}
              <div className="text-base font-bold text-gray-700 group-hover:text-blue-600 transition">
                {tool.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- 2. All Tools by Category (Structured List Look) --- */}
      {categories.map(([cat, categoryTools]) => (
        <section key={cat} className="max-w-7xl mx-auto px-4 mb-16"> {/* mb-12 se mb-16 kiya */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"> {/* Shadow aur rounding badhaya */}
            {/* Category Title: Blue color aur zyaada prominent */}
            <h2 className="text-2xl font-extrabold mb-6 text-blue-700 border-b border-gray-200 pb-3">
              {cat} Tools
            </h2>
            {/* Grid Layout: lg:grid-cols-4 se lg:grid-cols-3 kiya taaki zyada space mile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"> 
              {categoryTools.map((tool) => (
                <Link
                  key={tool.route}
                  href={tool.route}
                  /* PREMIUM CLASSES: Hover BG aur Border ko Blue/Slate kiya */
                  className="group flex items-center gap-4 p-4 rounded-xl 
                       hover:bg-blue-50 transition border border-transparent 
                       hover:border-blue-200 focus:ring-2 focus:ring-blue-300"
                >
                  {/* Icon: Bada aur Blue-colored */}
                  <div className="text-4xl text-blue-600 group-hover:scale-105 transition-transform flex-shrink-0 w-10">
                    {tool.icon}
                  </div>
                  
                  <div>
                    {/* Name: Darker text aur Blue hover */}
                    <div className="font-semibold text-base text-slate-800 group-hover:text-blue-700 transition">
                      {tool.name}
                    </div>
                    {/* Description: Slightly darker for readability */}
                    <div className="text-xs text-slate-600 line-clamp-1">{tool.description}</div> 
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* --- 3. Why Choose Us Section (Branding & Focus) --- */}
      <section className="max-w-7xl mx-auto px-4 mb-20"> {/* Margin badhaya */}
        {/* Background: Red/Pink se Blue/Purple gradient kiya */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 shadow-xl"> 
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Why Choose PDF Maker AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="text-center">
              {/* Icon Bubble: Blue/Purple gradient aur shadow */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast & Easy</h3>
              <p className="text-sm text-slate-600">
                Process your files in seconds with our intuitive interface. No learning curve required.
              </p>
            </div>
            {/* Card 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
                🔒
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure & Private</h3>
              <p className="text-sm text-slate-600">
                Your files are automatically deleted after processing. We respect your privacy.
              </p>
            </div>
            {/* Card 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg">
                🧠
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">AI-Powered Solution</h3> {/* Text badla */}
              <p className="text-sm text-slate-600">
                Everything you need for PDFs, including advanced AI tools like OCR and Chat with PDF.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
