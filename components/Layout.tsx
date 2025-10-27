import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] antialiased">
      {/* SEO client component injects head tags (title/meta/og) */}
      <SEO />
      <Navbar />

      {/* lightweight global search strip (non-blocking) */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <div className="w-full bg-white rounded-xl shadow-sm p-3 flex items-center gap-3 border border-slate-100">
          <svg className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7 7 0 1010 17a7 7 0 006.65-4.35z" />
          </svg>
          <input
            aria-label="Search tools"
            className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
            placeholder="Search tools, e.g. 'merge', 'ocr', 'compress'"
          />
          <button className="text-sm px-3 py-1 rounded-md bg-primary-500 text-white hover:bg-primary-600 transition">Search</button>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        {children}
      </main>

      <Footer />
    </div>
  );
}
