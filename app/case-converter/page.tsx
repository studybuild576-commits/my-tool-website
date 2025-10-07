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
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Case Converter</h1>
        <p style={{ marginTop: '0.5rem', color: '#555' }}>Easily convert text between different letter cases.</p>
      </div>
      
      <textarea
        style={{ 
          width: '100%', 
          minHeight: '250px', 
          marginTop: '2rem', 
          padding: '1rem', 
          fontSize: '1.1rem', 
          border: '1px solid #ccc', 
          borderRadius: '8px',
          boxSizing: 'border-box'
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
      ></textarea>

      <div style={{ 
        marginTop: '1.5rem', 
        display: 'flex', 
        gap: '1rem', 
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button onClick={handleUpperCase} style={buttonStyle}>UPPERCASE</button>
        <button onClick={handleLowerCase} style={buttonStyle}>lowercase</button>
        <button onClick={handleCapitalizedCase} style={buttonStyle}>Capitalized Case</button>
        <button onClick={handleSentenceCase} style={buttonStyle}>Sentence case</button>
      </div>
    </main>
  );
}
