import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-semibold">
              ⚙️
            </div>
            <span className="text-lg font-semibold text-slate-800">My Tools</span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/tools"
            className="text-sm text-slate-700 hover:text-blue-600 transition"
          >
            All Tools
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
