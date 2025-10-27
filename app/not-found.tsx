export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
      <div className="max-w-2xl text-center p-8">
        <h1 className="text-6xl font-extrabold text-slate-900">404</h1>
        <p className="mt-4 text-xl text-slate-700">Page not found — we couldn't locate that page.</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/" className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">Home</a>
          <a href="/tools" className="px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50">All Tools</a>
        </div>
      </div>
    </main>
  );
}
