import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="PDFMakerAI" className="w-28 h-auto" />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <form action="/tools" className="hidden md:block">
            <label htmlFor="search" className="sr-only">Search tools</label>
            <input
              id="search"
              name="q"
              placeholder="Search tools..."
              className="w-52 border rounded-md px-3 py-2 text-sm"
            />
          </form>

          <Link
            href="/tools"
            className="text-sm text-slate-700 hover:text-blue-600 transition"
          >
            All Tools
          </Link>
          <Link href="/about" className="text-sm text-slate-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="text-sm text-slate-700 hover:text-blue-600 transition">
            Contact
          </Link>

          <a
            href="/tools"
            className="text-sm bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Try Tools
          </a>
        </div>
      </nav>
    </header>
  );
}
