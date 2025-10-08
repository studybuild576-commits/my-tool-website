import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">Free Online Tools for Your Documents</h1>
          <p className="mt-4 text-lg text-gray-600">
            Your one-stop solution for all PDF, Image, and Text manipulation needs. Fast, free, and secure.
          </p>
          <p className="mt-2 font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 border-4 border-yellow-400 rounded-xl p-4 shadow-lg">यह लाइन डिज़ाइन टेस्ट के लिए जोड़ी गई है - अगर यह रंगीन बॉक्स में दिखे तो Tailwind CSS live है।</p>
        </header>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-2 mb-8 text-gray-700">
            Our Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <ToolCard href="/image-resizer" title="Image Resizer" description="Resize the dimensions of your images (JPG, PNG) quickly." />
            <ToolCard href="/image-converter" title="Image Format Converter" description="Convert images to different formats like PNG, JPG, or WEBP." />
            <ToolCard href="/jpg-to-pdf" title="JPG/PNG to PDF Converter" description="Combine multiple images into a single PDF file." />
            <ToolCard href="/pdf-splitter" title="PDF Splitter" description="Extract specific pages from a PDF file into a new PDF." />
            <ToolCard href="/pdf-unlocker" title="PDF Password Remover" description="Remove the password from a PDF file if you know the password." />
            <ToolCard href="/word-counter" title="Word & Character Counter" description="Count words, characters, and sentences in your text instantly." />
            <ToolCard href="/case-converter" title="Case Converter" description="Change text to UPPERCASE, lowercase, Capitalized Case, and more." />

          </div>
        </section>
      </main>
      <footer className="text-center py-6 mt-8">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} pdf-text-tools. All rights reserved.</p>
      </footer>
    </div>
  );
}

// एक सहायक कंपोनेंट ताकि कोड साफ़ रहे
function ToolCard({ href, title, description }: { href: string; title: string; description: string; }) {
  return (
    <Link href={href} className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </Link>
  );
}
