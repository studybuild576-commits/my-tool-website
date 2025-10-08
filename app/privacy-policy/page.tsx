import Head from 'next/head';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | PDF & Text Tools</title>
        <meta name="description" content="Read our privacy policy. We do not store your files. Your data is safe and secure with our free online tools." />
        <meta name="keywords" content="privacy policy, data protection, secure online tools, file privacy, user privacy" />
      </Head>
      <main className="font-sans px-4 py-10 max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 text-lg">Your privacy is important to us. We do not store, share, or sell your files or personal data.</p>
        </header>
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">What We Collect</h2>
          <p>We do not collect or store any files you upload. All processing happens in your browser or is deleted immediately after use.</p>
        </section>
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Cookies & Analytics</h2>
          <p>We may use cookies for analytics and improving user experience. No personal data is tracked or shared with third parties.</p>
        </section>
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Contact</h2>
          <p>If you have privacy concerns, contact us at <a href="mailto:privacy@pdf-text-tools.com" className="text-blue-600 underline">privacy@pdf-text-tools.com</a>.</p>
        </section>
        <footer className="text-center text-gray-400 text-sm mt-10">
          &copy; {new Date().getFullYear()} pdf-text-tools. All rights reserved.
        </footer>
      </main>
    </>
  );
}
