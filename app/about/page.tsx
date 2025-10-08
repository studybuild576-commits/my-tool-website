uekffkfkdkskssod
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our mission to provide free and easy-to-use online tools for everyone.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-8">
          About Us
        </h1>
        <div className="prose lg:prose-xl text-gray-700 space-y-6">
          <p>
            Welcome to our website! We are passionate about providing simple, free, and accessible online tools for everyone. Our goal is to make everyday digital tasks easier, whether you're a student, a professional, or just someone looking to quickly edit a document or an image.
          </p>
          <p>
            This project started with a simple idea: to create a single place where users can find reliable tools for their PDF, image, and text-related needs without having to download any software or pay any fees. We believe that powerful utilities shouldn't be complicated or expensive.
          </p>
          <h2 className="text-2xl font-bold text-gray-800">Our Tools</h2>
          <p>
            We offer a growing collection of tools, including:
          </p>
          <ul>
            <li>PDF Tools (like JPG to PDF, PDF Splitter, and PDF Password Remover)</li>
            <li>Image Tools (like Image Resizer and Format Converter)</li>
            <li>Text Tools (like Word Counter and Case Converter)</li>
          </ul>
          <p>
            All our tools work directly in your browser, which means your files are secure and private. We don't upload your files to our servers to process them.
          </p>
          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          <p>
            If you have any questions, suggestions, or feedback, please feel free to reach out to us. We would love to hear from you!
          </p>
          <p>
            <strong>Email:</strong> [rajputr51903@gmail.com]
          </p>
        </div>
      </div>
    </main>
  );
}
