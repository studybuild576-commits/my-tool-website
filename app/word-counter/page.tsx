"use client";

import { useState } from 'react';
import { FileText, Copy, BookOpen, MessageSquare, List, Hash, XCircle } from 'lucide-react';

export default function WordCounterPage() {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  // --- Core Text Analysis Logic ---
  const words = text.split(/\s+/).filter((word) => word.length > 0);
  const wordCount = words.length;
  const charCount = text.length;
  const sentenceCount = (text.match(/[.!?](\s|$)/g) || []).length;
  const paragraphs = text.split(/\n{2,}/).filter(p => p.trim().length > 0);
  const paragraphCount = paragraphs.length;
  const readingTime = Math.ceil(wordCount / 200);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClear = () => {
    setText('');
    setCopied(false);
  };

  return (
    <main className="font-sans px-4 py-10 max-w-5xl mx-auto min-h-screen">
      <header className="mb-10 text-center pt-5">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3 flex items-center justify-center gap-3">
          <BookOpen className="w-12 h-12 text-blue-600 drop-shadow-md" />
          Word & Character Counter Online
        </h1>
        <p className="text-xl text-gray-600 font-medium">Count words, characters, sentences, and paragraphs instantly and accurately.</p>
      </header>

      {/* --- Tool Interface --- */}
      <section className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 mb-12 border-4 border-blue-400/50">
        <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
          <label htmlFor="word-counter-textarea" className="block font-bold text-lg text-blue-800">अपना टेक्स्ट यहाँ दर्ज करें:</label>
          <div className="flex gap-3 flex-wrap">
            <button 
              onClick={handleCopy} 
              disabled={text.length === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold transition ${
                text.length > 0 ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button 
              onClick={handleClear} 
              disabled={text.length === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold transition ${
                text.length > 0 ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              <XCircle className="w-4 h-4" />
              Clear
            </button>
          </div>
        </div>
        
        <textarea
          id="word-counter-textarea"
          className="w-full min-h-[300px] p-5 text-base border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 transition bg-gray-50 resize-none shadow-inner"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Typing शुरू करें या अपने content को paste करें..."
          aria-label="Text area for word and character counting"
        ></textarea>
        
        {/* --- Results Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          <StatCard title="Words (शब्द)" value={wordCount} color="bg-blue-500" icon={<List className="w-6 h-6" />} />
          <StatCard title="Characters (अक्षर)" value={charCount} color="bg-pink-500" icon={<Hash className="w-6 h-6" />} />
          <StatCard title="Sentences (वाक्य)" value={sentenceCount} color="bg-green-500" icon={<MessageSquare className="w-6 h-6" />} />
          <StatCard title="Paragraphs (पैराग्राफ)" value={paragraphCount} color="bg-orange-500" icon={<FileText className="w-6 h-6" />} />
          <StatCard title="Read Time (मिनट)" value={readingTime} color="bg-purple-500" icon={<BookOpen className="w-6 h-6" />} />
        </div>
      </section>

      {/* --- SEO Content Section (Hindi) --- */}
      <section className="mt-20 prose max-w-none">
        {/* ... aapka poora Hindi SEO content same rahega ... */}
      </section>

      <footer className="text-center text-gray-500 text-base mt-16 bg-gray-50 py-4 rounded-t-xl shadow-inner border-t">
        &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
      </footer>
    </main>
  );
}

// Stats Card Component
const StatCard = ({ title, value, color, icon }) => (
  <div className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-md text-white transform hover:scale-[1.02] transition duration-300 ${color} shadow-lg`}>
    <div className="mb-1">{icon}</div>
    <div className="text-3xl font-extrabold">{value}</div>
    <p className="text-sm font-medium opacity-90">{title}</p>
  </div>
);
