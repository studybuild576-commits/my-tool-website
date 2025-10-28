// components/Layout.tsx (if used as a wrapper component)
// Note: Prefer Next.js App Router layout.tsx at app/layout.tsx for global shells.
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  // All SEO/meta should come from app/**/page.tsx (metadata or generateMetadata).
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] antialiased">
      <Navbar />

      {/* Global Search (accessible, non-blocking) */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <form
          role="search"
          aria-label="Site tools search"
          className="w-full bg-white rounded-xl shadow-sm p-3 flex items-center gap-3 border border-slate-100"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const q = String(fd.get("q") || "").trim();
            if (!q) return;
            // Do a light client-side redirect to a search route or tools filter
            window.location.href = `/tools?query=${encodeURIComponent(q)}`;
          }}
        >
          <svg
            className="w-5 h-5 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7 7 0 1010 17a7 7 0 006.65-4.35z" />
          </svg>
          <input
            name="q"
            aria-label="Search tools"
            className="flex-1 bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
            placeholder="Search tools, e.g. 'merge', 'ocr', 'compress'"
            autoComplete="off"
            inputMode="search"
          />
          <button
            type="submit"
            className="text-sm px-3 py-1 rounded-md bg-primary-500 text-white hover:bg-primary-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
          >
            Search
          </button>
        </form>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-10 md:py-12">{children}</main>

      <Footer />
    </div>
  );
}
