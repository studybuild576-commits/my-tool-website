import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-white via-sky-50 to-white rounded-lg p-8 mb-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Fast, private PDF & image tools — built for productivity
          </h1>
          <p className="text-lg text-slate-600 mb-6 max-w-xl">
            Convert, edit and optimize PDFs, images and text in your browser.
            No signup, minimal UI, and privacy-first processing.
          </p>

          <div className="flex gap-3">
            <Link
              href="/tools"
              className="inline-block bg-blue-600 text-white px-5 py-3 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Try tools now
            </Link>

            <a
              href="/about"
              className="inline-block text-slate-700 px-4 py-3 rounded-md border border-slate-200 hover:bg-slate-50 transition"
            >
              Learn more
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          {/* Placeholder illustration */}
          <div className="w-64 h-40 bg-gradient-to-br from-sky-100 to-white rounded-lg shadow-md flex items-center justify-center text-2xl text-slate-500">
            🔧 Tools
          </div>
        </div>
      </div>
    </section>
  );
}
