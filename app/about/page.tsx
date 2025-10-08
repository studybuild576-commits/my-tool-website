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
          <h2 className="text-xl font-bold text-gray-700 mb-4">Our Mission</h2>
          <p>Our goal is to make document and image editing easy and accessible for everyone. We never store your files and respect your privacy.</p>
        </section>
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Contact</h2>
          <p>If you have any questions or feedback, please contact us at <a href="mailto:contact@pdf-text-tools.com" className="text-blue-600 underline">contact@pdf-text-tools.com</a>.</p>
        </section>
        <footer className="text-center text-gray-400 text-sm mt-10">
          &copy; {new Date().getFullYear()} pdf-text-tools. All rights reserved.
        </footer>
      </main>
    </>
  );
}
