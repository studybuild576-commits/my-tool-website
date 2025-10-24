"use client";
import { useState } from "react";

export default function AIOCRForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setResult(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    
    const fileInput = form.elements.namedItem("file") as HTMLInputElement;
    if (!fileInput?.files?.[0]) {
      setError("Please select a file");
      return;
    }
    
    setLoading(true);
    try {
      const res = await fetch("/api/ocr", { method: "POST", body: data });
      const json = await res.json();
      
      if (res.ok && json.text) {
        setResult(json.text);
      } else {
        setError(json.error || "Failed to extract text from file");
      }
    } catch (err: any) {
      setError("Network error: " + (err.message || String(err)));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-indigo-400 transition">
        <input 
          type="file" 
          name="file" 
          accept="application/pdf,image/*" 
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
        />
        <p className="mt-2 text-xs text-slate-500">
          Upload a PDF or image file (JPG, PNG) to extract text using AI OCR
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            Processing...
          </span>
        ) : "🤖 Run AI OCR"}
      </button>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="text-red-500 text-xl">⚠️</span>
            <div>
              <p className="font-semibold text-red-800">Error</p>
              <p className="text-sm text-red-600">{error}</p>
            </div>
          </div>
        </div>
      )}

      {result && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-green-800 flex items-center gap-2">
              <span>✅</span>
              Extracted Text
            </h3>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(result)}
              className="text-sm bg-white px-3 py-1 rounded-lg border border-green-300 hover:bg-green-50 transition"
            >
              📋 Copy
            </button>
          </div>
          <div className="bg-white rounded-lg p-4 max-h-96 overflow-y-auto">
            <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono">{result}</pre>
          </div>
        </div>
      )}
    </form>
  );
}
