// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-tr from-primary-900 to-primary-700 text-white mt-20" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Inline SVG logo (no external image) */}
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl shadow-lg bg-white">
                <svg viewBox="0 0 24 24" className="w-8 h-8" aria-label="PDF Maker AI logo">
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
              <div>
                <div className="text-lg font-bold">PDF Maker AI</div>
                <div className="text-xs text-slate-300 -mt-1">Smart PDF Solutions</div>
              </div>
            </div>
            <p className="text-sm text-slate-200/80 mb-4 leading-relaxed">
              Free, fast, privacy‑first PDF tools that run in your browser—no signup required.
            </p>
            <div className="flex gap-3" aria-label="Social links">
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Follow on X"
                 className="w-8 h-8 bg-primary-800 hover:bg-primary-700 rounded-lg flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-white/60">
                <span className="text-sm">𝕏</span>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="Follow on LinkedIn"
                 className="w-8 h-8 bg-primary-800 hover:bg-primary-700 rounded-lg flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-white/60">
                <span className="text-sm">in</span>
              </a>
            </div>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Popular Tools</h3>
            <ul className="space-y-2.5 text-sm text-slate-100/90">
              <li><Link href="/merge-pdf" className="hover:text-indigo-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">Merge PDF</Link></li>
              <li><Link href="/split-pdf" className="hover:text-indigo-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">Split PDF</Link></li>
              <li><Link href="/compress-pdf" className="hover:text-indigo-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">Compress PDF</Link></li>
              <li><Link href="/jpg-to-pdf" className="hover:text-indigo-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">JPG to PDF</Link></li>
              <li><Link href="/pdf-to-word" className="hover:text-indigo-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">PDF to Word</Link></li>
            </ul>
          </div>

          {/* AI Solutions */}
          <div>
            <h3 className="font-semibold mb-4 text-white">AI Solutions</h3>
            <ul className="space-y-2.5 text-sm text-slate-100/90">
              <li><Link href="/ai-ocr" className="hover:text-primary-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">AI OCR</Link></li>
              <li><Link href="/chat-with-pdf" className="hover:text-primary-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">Chat with PDF</Link></li>
              <li><Link href="/ai-summarizer" className="hover:text-primary-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">AI Summarizer</Link></li>
              <li><Link href="/tools" className="hover:text-primary-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">All Tools</Link></li>
              <li><Link href="/blog" className="hover:text-primary-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2.5 text-sm text-slate-100/90">
              <li><Link href="/about" className="hover:text-primary-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">Contact</Link></li>
              <li><Link href="/tool-request" className="hover:text-primary-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">Request a Tool</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-200 transition focus:outline-none focus:ring-2 focus:ring-white/60">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-200/80">
              © {year} PDF Maker AI. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-200/80">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                <span>All systems operational</span>
              </span>
              <span aria-hidden="true">•</span>
              <span>Made with <span aria-hidden="true">💜</span> for PDF lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
