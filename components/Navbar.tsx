"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { tools as allTools } from "@/lib/tools";

interface Tool {
  name: string;
  description: string;
  category: string;
  route: string;
  icon: string | LucideIcon;
}

function useGroupedCategories(tools: Tool[]) {
  return useMemo(() => {
    const map: Record<string, Tool[]> = {};
    for (const t of tools) {
      const cat = t.category || "Other";
      (map[cat] ||= []).push(t);
    }
    for (const k of Object.keys(map)) map[k].sort((a, b) => a.name.localeCompare(b.name));
    return map;
  }, [tools]);
}

function resolveIcon(icon: string | LucideIcon): LucideIcon | null {
  if (typeof icon === "string") {
    const Comp = (LucideIcons as any)[icon] as LucideIcon | undefined;
    return Comp || null;
  }
  return icon || null;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const categories = useGroupedCategories(allTools as Tool[]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setMegaOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50" role="banner">
      <nav className="max-w-7xl mx-auto px-4 py-3" aria-label="Primary">
        <div className="flex justify-between items-center">
          {/* Logo (inline SVG) */}
          <Link href="/" aria-label="PDF Maker AI — Home" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl shadow-lg bg-white">
              <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <rect x="2" y="3" width="20" height="18" rx="3" fill="url(#g)" />
                <path d="M6 8h8M6 12h5M6 16h6" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                PDF Maker AI
              </span>
              <span className="text-[10px] text-slate-500 -mt-1">Smart PDF Solutions</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition py-2 flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 rounded-md px-2"
                aria-haspopup="true"
                aria-expanded={megaOpen}
                aria-controls="mega-menu"
                onClick={() => setMegaOpen((v) => !v)}
              >
                All PDF tools
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                id="mega-menu"
                className={`absolute left-0 top-full mt-2 w-screen max-w-4xl bg-white shadow-2xl rounded-2xl border border-slate-200 transition-opacity duration-150 ${
                  megaOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                role="menu"
                aria-label="All PDF tools menu"
              >
                <div className="p-8 grid grid-cols-3 gap-8">
                  {Object.entries(categories).map(([cat, tools]) => (
                    <div key={cat}>
                      <div className="text-xs font-bold text-indigo-600 mb-4 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-8 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" aria-hidden="true" />
                        {cat}
                      </div>
                      <ul className="space-y-3">
                        {tools.slice(0, 5).map((tool) => {
                          const Icon = resolveIcon(tool.icon);
                          return (
                            <li key={tool.route}>
                              <Link
                                href={tool.route}
                                className="flex items-center gap-3 text-sm text-slate-700 hover:text-indigo-600 transition group"
                                role="menuitem"
                              >
                                <span className="text-xl group-hover:scale-110 transition inline-flex w-5 h-5 items-center justify-center">
                                  {Icon ? <Icon className="w-5 h-5" aria-hidden="true" /> : <span aria-hidden="true">📄</span>}
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
                <div className="px-8 pb-8">
                  <Link
                    href="/tools"
                    className="text-sm text-indigo-600 hover:text-purple-600 font-semibold inline-flex items-center gap-2"
                    role="menuitem"
                  >
                    View all {allTools.length}+ tools <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/blog" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition">
              About
            </Link>
          </div>

          {/* CTA + mobile toggler */}
          <div className="flex items-center gap-4">
            <Link
              href="/tools"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Get Started Free
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              {!open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`lg:hidden fixed inset-0 z-40 transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        {/* Backdrop as button for accessibility */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className={`absolute inset-0 bg-black/40 ${open ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity`}
        />
        <aside
          ref={drawerRef}
          className="absolute right-0 top-0 h-full w-[320px] bg-white shadow-2xl p-6 overflow-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Home">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl shadow bg-white">
                <svg viewBox="0 0 24 24" className="w-8 h-8" aria-hidden="true">
                  <defs>
                    <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="3" width="20" height="18" rx="3" fill="url(#g2)" />
                  <path d="M6 8h8M6 12h5M6 16h6" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <div className="font-bold text-sm">PDF Maker AI</div>
                <div className="text-xs text-slate-500">Smart PDF Solutions</div>
              </div>
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-4" aria-label="Mobile">
            <Link
              href="/tools"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-slate-50 font-medium bg-gradient-to-r from-indigo-600 to-pink-500 text-white"
            >
              <span aria-hidden="true">🧰</span>
              Tools
            </Link>

            <Link href="/blog" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-slate-50">
              <span aria-hidden="true">📰</span>
              Blog
            </Link>

            <Link href="/about" onClick={() => setOpen(false)} className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-slate-50">
              <span aria-hidden="true">ℹ️</span>
              About
            </Link>

            <div className="pt-4 border-t border-slate-200">
              <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Popular tools</div>
              <ul className="space-y-2">
                {(allTools as Tool[]).slice(0, 8).map((t) => {
                  const Icon = resolveIcon(t.icon);
                  return (
                    <li key={t.route}>
                      <Link
                        href={t.route}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-slate-50"
                      >
                        <span className="w-6 h-6 flex items-center justify-center text-lg">
                          {Icon ? <Icon className="w-5 h-5 text-slate-600" aria-hidden="true" /> : <span aria-hidden="true">📄</span>}
                        </span>
                        <span className="text-sm font-medium text-slate-700">{t.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
