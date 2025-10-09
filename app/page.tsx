import Link from 'next/link';
import Image from 'next/image';
import { 
  FileText, 
  Image as ImageIcon, 
  SplitSquareHorizontal, 
  Unlock, 
  Type, 
  ArrowUpAZ, 
  Palette,
  Info,
  Newspaper,
  GraduationCap,
  Briefcase,
  Star 
} from 'lucide-react';

// ब्लॉग पोस्ट की लिस्ट
const posts = [
  {
    slug: 'seo-tips',
    title: 'SEO Tips for PDF & Image Tools Websites',
    description: 'Improve your website\'s visibility and get more users with these proven SEO strategies.',
    date: 'October 9, 2025',
  },
];

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Image
              src="/logo.png"
              alt="PDF & Text Tools Logo"
              width={50}
              height={50}
              className="drop-shadow-md"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">PDF & Text Tools</h1>
          </div>
          <p className="mt-2 text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Free online tools for PDF, images, and text. Fast, secure, and easy to use.
          </p>
        </header>

        <section id="tools">
          <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-2 mb-8 text-gray-700 flex items-center gap-2">
            <Palette className="w-7 h-7 text-pink-500" />
            Our Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ToolCard href="/image-resizer" title="Image Resizer" description="Resize the dimensions of your images." icon={<ImageIcon className="w-8 h-8 text-pink-500" />} />
            <ToolCard href="/image-converter" title="Image Format Converter" description="Convert images to different formats." icon={<ImageIcon className="w-8 h-8 text-blue-500" />} />
            <ToolCard href="/jpg-to-pdf" title="JPG/PNG to PDF Converter" description="Combine multiple images into one PDF." icon={<FileText className="w-8 h-8 text-purple-500" />} />
            <ToolCard href="/pdf-splitter" title="PDF Splitter" description="Extract specific pages from a PDF file." icon={<SplitSquareHorizontal className="w-8 h-8 text-yellow-500" />} />
            <ToolCard href="/pdf-unlocker" title="PDF Password Remover" description="Remove a PDF password if you know it." icon={<Unlock className="w-8 h-8 text-green-500" />} />
            <ToolCard href="/word-counter" title="Word & Character Counter" description="Count words and characters in text." icon={<Type className="w-8 h-8 text-blue-400" />} />
            <ToolCard href="/case-converter" title="Case Converter" description="Change text to different letter cases." icon={<ArrowUpAZ className="w-8 h-8 text-pink-400" />} />
          </div>
        </section>

        <section id="reviews" className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReviewCard
              name="Priya S."
              role="Student"
              review="This website is a lifesaver! The JPG to PDF tool saved me so much time on my assignment. So easy to use."
              icon={<GraduationCap className="w-10 h-10 text-white bg-blue-500 p-2 rounded-full" />}
            />
            <ReviewCard
              name="Amit K."
              role="Blogger"
              review="I use the Word Counter and Case Converter daily. These tools are fast, free, and work perfectly every time. Highly recommended!"
              icon={<Briefcase className="w-10 h-10 text-white bg-green-500 p-2 rounded-full" />}
            />
            <ReviewCard
              name="Rohan V."
              role="Office Worker"
              review="The PDF Splitter is amazing. I needed to extract just one page from a large report, and it was done in seconds. Thank you!"
              icon={<Briefcase className="w-10 h-10 text-white bg-purple-500 p-2 rounded-full" />}
            />
          </div>
        </section>

        <section id="about" className="mt-16 text-center bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Info className="w-7 h-7 text-purple-500" />
            About Our Mission
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            We believe that powerful digital utilities shouldn't be complicated or expensive. Our mission is to provide simple, free, and accessible online tools for everyone.
          </p>
          <Link href="/about" className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-800">
            Learn more about us →
          </Link>
        </section>
        
        <section id="blog" className="mt-16">
           <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-2 mb-8 text-gray-700 flex items-center gap-2">
            <Newspaper className="w-7 h-7 text-green-500" />
            From Our Blog
          </h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <article className="block bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900">{post.title}</h2>
                  <p className="mt-3 text-gray-600">{post.description}</p>
                  <div className="mt-4 font-semibold text-blue-600 hover:text-blue-800">
                    Read more →
                  </div>
                </article>
              </Link>
            ))}
          </div>
           <div className="text-center mt-8">
             <Link href="/blog" className="font-semibold text-blue-600 hover:text-blue-800 text-lg">
                View All Posts →
             </Link>
           </div>
        </section>
      </main>
    </div>
  );
}

// सहायक कंपोनेंट्स
function ToolCard({ href, title, description, icon }: { href: string; title: string; description: string; icon: React.ReactNode; }) {
  return (
    <Link href={href} className="block p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-100 h-full">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
    </Link>
  );
}

function ReviewCard({ name, role, review, icon }: { name: string; role: string; review: string; icon: React.ReactNode; }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col h-full">
      <div className="flex items-center mb-4">
        {icon}
        <div className="ml-4">
          <p className="font-bold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic flex-grow">"{review}"</p>
      <div className="flex mt-4 text-yellow-400">
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
        <Star className="w-5 h-5 fill-current" />
      </div>
    </div>
  );
}
