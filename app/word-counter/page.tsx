"use client"; // यह लाइन ज़रूरी है क्योंकि यह एक इंटरैक्टिव पेज है

import { useState } from 'react';

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
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>Online Word and Character Counter</h1>

      <textarea
        style={{ width: '100%', height: '250px', marginTop: '2rem', padding: '1rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
      ></textarea>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem' }}>{wordCount}</h2>
          <p style={{ color: '#555' }}>Words</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem' }}>{charCount}</h2>
          <p style={{ color: '#555' }}>Characters</p>
        </div>
      </div>
    </main>
  );
}
