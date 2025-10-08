"use client"; // इंटरैक्टिव पेज के लिए यह ज़रूरी है

import { useState } from 'react';
import { Copy } from 'lucide-react';

export default function CaseConverterPage() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  // फंक्शन: टेक्स्ट को UPPERCASE में बदलने के लिए
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  // फंक्शन: टेक्स्ट को lowercase में बदलने के लिए
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  // फंक्शन: टेक्स्ट को Capitalized Case में बदलने के लिए (हर शब्द का पहला अक्षर बड़ा)
  const handleCapitalizedCase = () => {
    const newText = text.toLowerCase().split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    setText(newText);
  };
  
  // फंक्शन: टेक्स्ट को Sentence case में बदलने के लिए (हर वाक्य का पहला अक्षर बड़ा)
  const handleSentenceCase = () => {
    const newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
    setText(newText);
  };

  const buttonStyle = {
    padding: '10px 15px',
    fontSize: '1rem',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0'
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="font-sans px-4 py-10 max-w-2xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-600 mb-2 flex items-center justify-center gap-3">
          <Copy className="w-10 h-10 text-pink-400 drop-shadow" />
          Case Converter
        </h1>
        <p className="text-lg text-gray-700 font-medium">Easily convert text between different letter cases.</p>
      </header>

      <section className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 rounded-xl shadow-lg p-6 mb-8 border border-purple-200">
        <textarea
          className="w-full min-h-[200px] p-4 text-base border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition mb-6 bg-white"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          aria-label="Text area for case conversion"
        ></textarea>
        <div className="flex justify-end">
          <button onClick={handleCopy} className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-pink-400 to-purple-400 text-white font-bold shadow-lg hover:scale-105 transition border-2 border-purple-500">
            <Copy className="w-5 h-5" />
            {copied ? 'Copied!' : 'Copy Text'}
          </button>
        </div>
      </section>

      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <button onClick={handleUpperCase} className="px-5 py-2 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow hover:scale-105 transition">UPPERCASE</button>
        <button onClick={handleLowerCase} className="px-5 py-2 text-base font-semibold rounded-xl bg-gradient-to-r from-green-400 to-blue-400 text-white shadow hover:scale-105 transition">lowercase</button>
        <button onClick={handleCapitalizedCase} className="px-5 py-2 text-base font-semibold rounded-xl bg-gradient-to-r from-pink-400 to-yellow-400 text-white shadow hover:scale-105 transition">Capitalized Case</button>
        <button onClick={handleSentenceCase} className="px-5 py-2 text-base font-semibold rounded-xl bg-gradient-to-r from-yellow-400 to-purple-400 text-white shadow hover:scale-105 transition">Sentence case</button>
      </div>

      <footer className="text-center text-gray-500 text-base mt-10 bg-gradient-to-r from-blue-100 to-pink-100 py-4 rounded-t-xl shadow-inner">
        &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
      </footer>
    </main>
  );
}
