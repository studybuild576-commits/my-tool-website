import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | PDF & Text Tools</title>
        <meta name="description" content="Learn more about our free online PDF, image, and text tools. Fast, secure, and privacy-focused solutions for everyone." />
        <meta name="keywords" content="about pdf tools, about text tools, free online tools, privacy, secure tools" />
      </Head>
      <main className="font-sans px-4 py-10 max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">About Us</h1>
          <p className="text-gray-600 text-lg">We provide free, fast, and secure online tools for PDF, image, and text editing. Your privacy is our priority.</p>
        </header>
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">About PDF & Text Tools</h1>
            <p className="text-lg text-gray-700 font-medium">Learn more about our mission and team.</p>
          </header>

          <section className="bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 rounded-xl shadow-lg p-6 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">We provide free, fast, and secure online tools for PDF, image, and text manipulation. Our goal is to make document editing and conversion easy for everyone, everywhere.</p>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Meet the Team</h2>
            <p className="text-gray-700 mb-4">Our team consists of passionate developers, designers, and writers dedicated to building useful tools for the web. We believe in open access, privacy, and user-friendly experiences.</p>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Us</h2>
            <p className="text-gray-700">For support, feedback, or partnership inquiries, email us at <a href="mailto:contact@pdf-text-tools.com" className="text-blue-500 underline">contact@pdf-text-tools.com</a>.</p>
          </section>

          <h2 className="text-xl font-bold text-gray-700 mb-4">Contact</h2>
            &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
        </section>
        <footer className="text-center text-gray-400 text-sm mt-10">
          &copy; {new Date().getFullYear()} pdf-text-tools. All rights reserved.
        </footer>
      </main>
    </>
  );
}
