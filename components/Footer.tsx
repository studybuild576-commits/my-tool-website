export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
        <div className="mb-2">© {new Date().getFullYear()} My Tools. Built by Rahul.</div>
        <div>
          <a href="/privacy" className="underline mr-3">
            Privacy
          </a>
          <a href="/terms" className="underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
