import Head from 'next/head';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | PDF & Text Tools</title>
        <meta name="description" content="Read our terms and conditions for using free online PDF, image, and text tools. User agreement and legal information." />
        <meta name="keywords" content="terms and conditions, user agreement, legal, pdf tools, image tools, text tools" />
      </Head>
      <main className="font-sans px-4 py-10 max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">Terms & Conditions</h1>
          <p className="text-gray-600 text-lg">Please read our terms and conditions before using our free online tools.</p>
        </header>
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">User Agreement</h2>
          <p>By using our website, you agree to our terms and conditions. You are responsible for the content you upload and process.</p>
        </section>
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Legal Disclaimer</h2>
          <p>We do not store your files. All tools are provided as-is, without warranty. Use at your own risk.</p>
        </section>
        <footer className="text-center text-gray-400 text-sm mt-10">
          &copy; {new Date().getFullYear()} pdf-text-tools. All rights reserved.
        </footer>
      </main>
    </>
  );
}
