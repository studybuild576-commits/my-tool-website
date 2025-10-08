import Link from 'next/link';
import { FileText, Image, SplitSquareHorizontal, Unlock, Type, ArrowUpAZ, Palette } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Palette className="w-12 h-12 text-pink-500 drop-shadow" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">PDF & Text Tools</h1>
          </div>
          <p className="mt-2 text-lg text-gray-600 font-medium">
            Free online tools for PDF, images, and text. Fast, secure, and easy to use.
          </p>
          <p className="mt-4 font-bold text-white bg-gradient-to-r from-pink-400 to-blue-500 border-4 border-yellow-400 rounded-xl p-4 shadow-lg inline-block">यह लाइन डिज़ाइन टेस्ट के लिए जोड़ी गई है - अगर यह रंगीन बॉक्स में दिखे तो Tailwind CSS live है।</p>
        </header>

        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-8 text-gray-700 flex items-center gap-2">
            <FileText className="w-7 h-7 text-blue-400" />
            Our Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ToolCard href="/image-resizer" title="Image Resizer" description="Resize the dimensions of your images (JPG, PNG) quickly." icon={<Image className="w-8 h-8 text-pink-500" />} />
            <ToolCard href="/image-converter" title="Image Format Converter" description="Convert images to different formats like PNG, JPG, or WEBP." icon={<Image className="w-8 h-8 text-blue-500" />} />
            <ToolCard href="/jpg-to-pdf" title="JPG/PNG to PDF Converter" description="Combine multiple images into a single PDF file." icon={<FileText className="w-8 h-8 text-purple-500" />} />
            <ToolCard href="/pdf-splitter" title="PDF Splitter" description="Extract specific pages from a PDF file into a new PDF." icon={<SplitSquareHorizontal className="w-8 h-8 text-yellow-500" />} />
            <ToolCard href="/pdf-unlocker" title="PDF Password Remover" description="Remove the password from a PDF file if you know the password." icon={<Unlock className="w-8 h-8 text-green-500" />} />
            <ToolCard href="/word-counter" title="Word & Character Counter" description="Count words, characters, and sentences in your text instantly." icon={<Type className="w-8 h-8 text-blue-400" />} />
            <ToolCard href="/case-converter" title="Case Converter" description="Change text to UPPERCASE, lowercase, Capitalized Case, and more." icon={<ArrowUpAZ className="w-8 h-8 text-pink-400" />} />
          </div>
        </section>
      </main>
      <footer className="text-center py-8 mt-12 bg-gradient-to-r from-blue-100 to-pink-100 rounded-t-xl shadow-inner">
        <p className="text-gray-600 font-medium">&copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.</p>
      </footer>
    </div>
  );
}

// एक सहायक कंपोनेंट ताकि कोड साफ़ रहे
function ToolCard({ href, title, description, icon }: { href: string; title: string; description: string; icon: React.ReactNode; }) {
  return (
    <Link href={href} className="block p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-100">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
    </Link>
  );
}
