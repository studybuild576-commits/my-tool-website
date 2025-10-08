"use client"; // यह लाइन ज़रूरी है क्योंकि यह एक इंटरैक्टिव पेज है

import { useState } from 'react';
import Head from 'next/head';

// इस पेज का अपना अलग SEO टाइटल और डिस्क्रिप्शन होगा
// export const metadata = {
//   title: "Word and Character Counter - Free Online Tool",
//   description: "Count words, characters, sentences, and paragraphs in your text instantly. A free and easy-to-use online text analysis tool.",
// };
// नोट: "use client" के साथ metadata ऐसे काम नहीं करता, हम इसे बाद में ठीक करेंगे।

export default function WordCounterPage() {
  const [text, setText] = useState('');

  const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;
  const charCount = text.length;

  return (
    <>
      <Head>
        <title>Word & Character Counter Online | Free Text Analysis Tool</title>
        <meta name="description" content="Count words, characters, sentences, and paragraphs in your text instantly. Free online word counter and text analysis tool for writers, students, and professionals." />
        <meta name="keywords" content="word counter, character counter, text analysis, online word count, free word counter, SEO tools, writing tools, content analysis, sentence counter, paragraph counter" />
      </Head>
      <main className="font-sans px-4 py-10 max-w-2xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">Online Word and Character Counter</h1>
          <p className="text-gray-600 text-lg">Count words, characters, sentences, and paragraphs in your text instantly.</p>
        </header>

        <label htmlFor="word-counter-textarea" className="block font-semibold mb-2 text-gray-700">Enter your text below:</label>
        <textarea
          id="word-counter-textarea"
          className="w-full min-h-[200px] p-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-6"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          aria-label="Text area for word and character counting"
        ></textarea>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-6">
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-blue-600">{wordCount}</h2>
            <p className="text-gray-500 mt-2">Words</p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow p-6 text-center">
            <h2 className="text-2xl font-bold text-green-600">{charCount}</h2>
            <p className="text-gray-500 mt-2">Characters</p>
          </div>
        </div>

        <footer className="text-center text-gray-400 text-sm mt-10">
          &copy; {new Date().getFullYear()} pdf-text-tools. All rights reserved.
        </footer>
      </main>
    </>
  );
}
