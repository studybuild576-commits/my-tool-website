import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">📄</span>
              </div>
              <span className="text-lg font-bold">PDF Maker AI</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Every tool you need to work with PDFs in one place. 100% free and easy to use.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Popular Tools</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/pdf-merge" className="hover:text-white transition">Merge PDF</Link></li>
              <li><Link href="/pdf-splitter" className="hover:text-white transition">Split PDF</Link></li>
              <li><Link href="/pdf-compress" className="hover:text-white transition">Compress PDF</Link></li>
              <li><Link href="/jpg-to-pdf" className="hover:text-white transition">JPG to PDF</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/ai-ocr" className="hover:text-white transition">AI OCR</Link></li>
              <li><Link href="/chat-with-pdf" className="hover:text-white transition">Chat with PDF</Link></li>
              <li><Link href="/tools" className="hover:text-white transition">All Tools</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} PDF Maker AI. All rights reserved.
          </div>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>Made with ❤️ for PDF lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
