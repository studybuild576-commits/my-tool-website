import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          ⚙️ My Tools
        </Link>
        <Link href="/tools" className="text-sm text-gray-700 hover:text-blue-600">
          All Tools
        </Link>
      </nav>
    </header>
  );
}
