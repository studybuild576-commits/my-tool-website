"use client";

import { useMemo, useState } from "react";

export default function WordCounterTool() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/s+/).filter(Boolean).length : 0;
    const chars = text.length;
    const charsNoSpaces = text.replace(/s+/g, "").length;
    const lines = text ? text.split(/
|
|
/).length : 0;
    const paragraphs = trimmed ? trimmed.split(/
{2,}/).length : 0;
    const wpm = 200; // typical reading speed
    const readingMinutes = words ? Math.max(1, Math.round(words / wpm)) : 0;

    return { words, chars, charsNoSpaces, lines, paragraphs, readingMinutes };
  }, [text]);

  return (
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">🔢 Word Counter</h2>

      <textarea
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your text here..."
        className="w-full border rounded px-3 py-2 mb-4 font-mono text-sm"
        aria-label="Text input to count words and characters"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
        <div className="bg-slate-50 rounded p-3">
          <p className="text-slate-500">Words</p>
          <p className="text-lg font-semibold">{stats.words}</p>
        </div>
        <div className="bg-slate-50 rounded p-3">
          <p className="text-slate-500">Characters</p>
          <p className="text-lg font-semibold">{stats.chars}</p>
        </div>
        <div className="bg-slate-50 rounded p-3">
          <p className="text-slate-500">Chars (no spaces)</p>
          <p className="text-lg font-semibold">{stats.charsNoSpaces}</p>
        </div>
        <div className="bg-slate-50 rounded p-3">
          <p className="text-slate-500">Lines</p>
          <p className="text-lg font-semibold">{stats.lines}</p>
        </div>
        <div className="bg-slate-50 rounded p-3">
          <p className="text-slate-500">Paragraphs</p>
          <p className="text-lg font-semibold">{stats.paragraphs}</p>
        </div>
        <div className="bg-slate-50 rounded p-3">
          <p className="text-slate-500">Reading time</p>
          <p className="text-lg font-semibold">
            {stats.readingMinutes ? `${stats.readingMinutes} min` : "—"}
          </p>
        </div>
      </div>
    </section>
  );
}
