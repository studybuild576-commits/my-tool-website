"use client"; // यह लाइन ज़रूरी है क्योंकि यह एक इंटरैक्टिव पेज है

import { useState } from 'react';
import Head from 'next/head';
import { Copy } from 'lucide-react';

// इस पेज का अपना अलग SEO टाइटल और डिस्क्रिप्शन होगा
// export const metadata = {
//   title: "Word and Character Counter - Free Online Tool",
//   description: "Count words, characters, sentences, and paragraphs in your text instantly. A free and easy-to-use online text analysis tool.",
// };
// नोट: "use client" के साथ metadata ऐसे काम नहीं करता, हम इसे बाद में ठीक करेंगे।

export default function WordCounterPage() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;
  const charCount = text.length;

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <Head>
        <title>Word & Character Counter Online | Free Text Analysis Tool</title>
        <meta name="description" content="Count words, characters, sentences, and paragraphs in your text instantly. Free online word counter and text analysis tool for writers, students, and professionals." />
        <meta name="keywords" content="word counter, character counter, text analysis, online word count, free word counter, SEO tools, writing tools, content analysis, sentence counter, paragraph counter" />
      </Head>
      <main className="font-sans px-4 py-10 max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 flex items-center justify-center gap-3">
            <Copy className="w-10 h-10 text-pink-400 drop-shadow" />
            Word & Character Counter
          </h1>
          <p className="text-lg text-gray-700 font-medium">Count words, characters, sentences, and paragraphs in your text instantly.</p>
        </header>

        <section className="bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 rounded-xl shadow-lg p-6 mb-8 border border-blue-200">
          <label htmlFor="word-counter-textarea" className="block font-semibold mb-2 text-blue-700">Enter your text below:</label>
          <textarea
            id="word-counter-textarea"
            className="w-full min-h-[200px] p-4 text-base border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition mb-6 bg-white"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            aria-label="Text area for word and character counting"
          ></textarea>
          <div className="flex justify-end">
            <button onClick={handleCopy} className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-pink-400 to-blue-400 text-white font-bold shadow-lg hover:scale-105 transition border-2 border-pink-500">
              <Copy className="w-5 h-5" />
              {copied ? 'Copied!' : 'Copy Text'}
            </button>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
          <div className="flex-1 bg-white rounded-xl shadow-lg p-6 text-center border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-blue-600">{wordCount}</h2>
            <p className="text-gray-500 mt-2">Words</p>
          </div>
          <div className="flex-1 bg-white rounded-xl shadow-lg p-6 text-center border-2 border-pink-200">
            <h2 className="text-2xl font-bold text-pink-600">{charCount}</h2>
            <p className="text-gray-500 mt-2">Characters</p>
          </div>
        </div>

        <footer className="text-center text-gray-500 text-base mt-10 bg-gradient-to-r from-blue-100 to-pink-100 py-4 rounded-t-xl shadow-inner">
          &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
        </footer>
      </main>
    </>
  );
}
