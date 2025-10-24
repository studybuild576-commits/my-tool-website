export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
        <div className="md:flex md:items-start md:justify-between md:gap-6">
          <div className="mb-4 md:mb-0 text-left">
            <div className="mb-2">© {new Date().getFullYear()} PDFMakerAI</div>
            <div className="text-xs text-slate-500">Built with privacy in mind.</div>
          </div>

          <div className="grid grid-cols-2 gap-4 justify-items-center md:justify-items-end">
            <div className="text-left">
              <a href="/about" className="underline mr-3 block">About</a>
              <a href="/privacy" className="underline mr-3 block">Privacy</a>
            </div>

            <div className="text-left">
              <a href="/terms" className="underline mr-3 block">Terms</a>
              <a href="/contact" className="underline block">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
