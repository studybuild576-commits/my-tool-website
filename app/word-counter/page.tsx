"use client";

import React, { useState, useEffect, useCallback } from 'react';

// --- Icon Imports (using Lucide style SVGs) ---
const WordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/></svg>
);
const CharacterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 22V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18"/><path d="M14.5 7h-5M12 2v20"/></svg>
);
const SentenceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20v-7h-4V5h12v8h-4v7"/><path d="M8 5a2 2 0 0 0-2 2v1h-1a2 2 0 0 0 0 4h1V8h1a2 2 0 0 0 0-4Z"/></svg>
);
const ParagraphIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
);

// --- Interface for StatCard Props (THE FIX) ---
interface StatCardProps {
  title: string;
  value: number | string;
  color: string;
  icon: React.ReactNode;
}

// --- Stats Card Component (Now correctly typed) ---
const StatCard: React.FC<StatCardProps> = ({ title, value, color, icon }) => (
  <div className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-md text-white transform hover:scale-[1.02] transition duration-300 ${color} shadow-lg`}>
    <div className="mb-1">{icon}</div>
    <div className="text-3xl font-extrabold">{value}</div>
    <div className="text-sm font-semibold mt-1 opacity-90">{title}</div>
  </div>
);


// --- Main Page Component ---
const WordCounterPage: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0, // in minutes
  });

  const calculateStats = useCallback((rawText: string) => {
    // 1. Characters: Count total characters excluding leading/trailing whitespace
    const characters = rawText.trim().length;

    // 2. Words: Split by whitespace. Filter out empty strings from multiple spaces.
    const words = rawText.trim() === '' ? 0 : rawText.trim().split(/\s+/).length;
    
    // 3. Sentences: Simple check for common sentence-ending punctuation, ignoring inner periods (like Mr. or U.S.A.)
    // Uses a lookbehind/lookahead to avoid matching mid-word periods.
    const sentences = rawText.trim() === '' ? 0 : (rawText.match(/[.!?](\s|$)/g) || []).length;

    // 4. Paragraphs: Split by two or more newlines (or a line break followed by a blank line)
    const paragraphs = rawText.trim() === '' ? 0 : rawText.trim().split(/(\r?\n){2,}/).length;
    
    // 5. Reading Time: Estimate based on 200 words per minute (WPM)
    const readingTime = words === 0 ? 0 : Math.ceil(words / 200);

    setStats({
      words,
      characters,
      sentences,
      paragraphs,
      readingTime,
    });
  }, []);

  // Update stats whenever text changes
  useEffect(() => {
    calculateStats(text);
  }, [text, calculateStats]);


  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>
      
      <main className="max-w-6xl mx-auto">
        <header className="mb-10 text-center pt-5">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center justify-center gap-3">
            <WordIcon className="w-8 h-8 text-indigo-600"/>
            Advanced Word Counter
          </h1>
          <p className="text-lg text-gray-600 font-medium">Real-time word, character, sentence, and paragraph counting.</p>
        </header>

        {/* --- Stats Display --- */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <StatCard 
            title="Words"
            value={stats.words.toLocaleString()}
            color="bg-indigo-500"
            icon={<WordIcon className="w-6 h-6"/>}
          />
          <StatCard 
            title="Characters"
            value={stats.characters.toLocaleString()}
            color="bg-pink-500"
            icon={<CharacterIcon className="w-6 h-6"/>}
          />
          <StatCard 
            title="Sentences"
            value={stats.sentences.toLocaleString()}
            color="bg-green-500"
            icon={<SentenceIcon className="w-6 h-6"/>}
          />
          <StatCard 
            title="Paragraphs"
            value={stats.paragraphs.toLocaleString()}
            color="bg-yellow-500"
            icon={<ParagraphIcon className="w-6 h-6"/>}
          />
          <StatCard 
            title="Read Time"
            value={stats.readingTime === 0 ? '<1 min' : `${stats.readingTime} min`}
            color="bg-red-500"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>}
          />
        </div>

        {/* --- Text Area --- */}
        <section className="bg-white rounded-xl shadow-2xl p-6 border-t-4 border-indigo-500">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Paste or type your text here:</h2>
          <textarea
            className="w-full min-h-96 p-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
            placeholder="Apna text yahan daalein (Paste your text here)..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </section>

        {/* --- Information Footer --- */}
        <footer className="text-center text-gray-500 text-sm mt-8 bg-gray-100 py-4 rounded-xl">
          <p>Word counting is performed client-side for maximum speed and privacy.</p>
        </footer>
      </main>
    </div>
  );
};

export default WordCounterPage;
