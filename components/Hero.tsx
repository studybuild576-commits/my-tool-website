import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-red-50 via-pink-50 to-white rounded-2xl p-12 mb-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
          Every tool you need to work with PDFs in one place
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! 
          Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link
            href="/pdf-merge"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-red-700 hover:to-pink-700 transition shadow-lg"
          >
            <span className="text-xl">🔗</span>
            Merge PDF
          </Link>
          
          <Link
            href="/pdf-splitter"
            className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-lg font-medium border-2 hover:bg-slate-50 transition"
          >
            <span className="text-xl">✂️</span>
            Split PDF
          </Link>
          
          <Link
            href="/pdf-compress"
            className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-lg font-medium border-2 hover:bg-slate-50 transition"
          >
            <span className="text-xl">🗜️</span>
            Compress PDF
          </Link>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap gap-6 justify-center text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>100% Free</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>No signup required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Privacy first</span>
          </div>
        </div>
      </div>
    </section>
  );
}
