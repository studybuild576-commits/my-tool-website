"use client"; // इंटरैक्टिव पेज के लिए यह ज़रूरी है

import { useState } from 'react';

export default function CaseConverterPage() {
  const [text, setText] = useState('');

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

  return (
    <main className="font-sans px-4 py-10 max-w-2xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">Case Converter</h1>
        <p className="text-gray-600 text-lg">Easily convert text between different letter cases.</p>
      </header>

      <textarea
        className="w-full min-h-[200px] mt-8 p-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-6"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        aria-label="Text area for case conversion"
      ></textarea>

      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <button onClick={handleUpperCase} className="px-5 py-2 text-base font-semibold rounded bg-blue-600 text-white hover:bg-blue-700 transition">UPPERCASE</button>
        <button onClick={handleLowerCase} className="px-5 py-2 text-base font-semibold rounded bg-green-600 text-white hover:bg-green-700 transition">lowercase</button>
        <button onClick={handleCapitalizedCase} className="px-5 py-2 text-base font-semibold rounded bg-purple-600 text-white hover:bg-purple-700 transition">Capitalized Case</button>
        <button onClick={handleSentenceCase} className="px-5 py-2 text-base font-semibold rounded bg-yellow-500 text-white hover:bg-yellow-600 transition">Sentence case</button>
      </div>

      <footer className="text-center text-gray-400 text-sm mt-10">
        &copy; {new Date().getFullYear()} pdf-text-tools. All rights reserved.
      </footer>
    </main>
  );
}
