import type { Metadata } from 'next';
import Link from 'next/link';
import { Newspaper } from 'lucide-react';

// ✅ Page SEO Metadata
export const metadata: Metadata = {
  title: "Our Blog | Free Online Tools",
  description:
    "Explore our latest blog posts about SEO, image optimization, title case tips, and social media image sizes for your website.",
};

// ✅ Blog post list
const posts = [
  {
    slug: 'seo-tips',
    title: 'SEO Tips for PDF & Image Tools Websites',
    description:
      'Improve your website visibility and attract more users with these proven SEO techniques.',
    date: 'October 8, 2025',
  },
  {
    slug: 'social-media-image-sizes',
    title: 'Best Social Media Image Sizes for 2025',
    description:
      'Learn the ideal image dimensions for Instagram, Facebook, Twitter, and more to boost engagement.',
    date: 'October 9, 2025',
  },
  {
    slug: 'title-case-for-seo',
    title: 'How Title Case Improves SEO & Readability',
    description:
      'Understand how using title case can enhance your content readability and SEO ranking.',
    date: 'October 10, 2025',
  },
  {
    slug: 'webp-vs-jpg',
    title: 'WebP vs JPG — Which Image Format is Best?',
    description:
      'Compare WebP and JPG formats to optimize your website’s image quality and loading speed.',
    date: 'October 11, 2025',
  },
];

export default function BlogIndexPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 flex items-center justify-center gap-3">
            <Newspaper className="w-10 h-10 text-green-500" />
            Our Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Articles, tips, and tutorials from our team.
          </p>
        </header>

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
      </div>
    </main>
  );
}
