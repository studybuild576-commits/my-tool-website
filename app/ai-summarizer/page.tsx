"use client";

import React, { useState } from 'react';

// --- Icon for the App ---
const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 20.25c0 .412.338.75.75.75h1.5a.75.75 0 0 0 .75-.75V19a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 0 .75-.75V7.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 0 .75-.75V4.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 0 .75-.75V1.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 0 .75-.75V0a.5.5 0 0 0-1 0v.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 1-.75.75H10V20.25Z" transform="translate(-1.5 -1)"/></svg>
);

const MAX_RETRIES = 3;

const AISummarizerPage: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState<number>(50); // Default summary length

  // Function to handle the API call with exponential backoff
  const callGeminiAPI = async (prompt: string, retries = 0): Promise<string> => {
    const apiKey = ""; // Canvas will provide the actual key here
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const systemPrompt = `You are a professional summarization tool. Summarize the following text concisely. The summary should be approximately ${wordCount} words long, maintaining the core meaning and tone of the original text. Do not add any introductory phrases like 'Here is the summary' or 'The text summarizes'. Just provide the summary.`;

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`API response error: ${response.statusText}`);
      }

      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!text) {
        throw new Error("API se koi valid response nahi mila.");
      }
      return text;

    } catch (e) {
      if (retries < MAX_RETRIES) {
        const delay = Math.pow(2, retries) * 1000 + Math.random() * 1000; // 1s, 2s, 4s...
        await new Promise(resolve => setTimeout(resolve, delay));
        return callGeminiAPI(prompt, retries + 1);
      }
      throw new Error("API call karne mein vifal. Kripya thodi der baad dobara prayas karein.");
    }
  };

  // Main Handler for Summarization
  const handleSummarize = async () => {
    if (inputText.trim().length < 50) {
      setError('Saransh nikalne ke liye kripya kam se kam 50 aksharon ka text daalein.');
      setSummary('');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setSummary('');

    try {
      const result = await callGeminiAPI(inputText);
      setSummary(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to copy text to clipboard
  const copyToClipboard = () => {
    if (summary) {
      navigator.clipboard.writeText(summary).then(() => {
        setError('Saransh (Summary) clipboard mein copy ho gaya hai!');
      }, (err) => {
        setError('Copy karne mein error: ' + err);
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-10">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; background-color: #f4f7fa; }
      `}</style>
      <main className="max-w-4xl mx-auto">
        <header className="mb-10 text-center pt-5">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center justify-center gap-3">
                <SparklesIcon className="w-8 h-8 text-indigo-600"/>
                AI Text Summarizer (AI Saransh Nirmaata)
            </h1>
            <p className="text-lg text-gray-600 font-medium">Lambi documents ko turant chhota (summarize) karein.</p>
        </header>

        {/* Word Count Control */}
        <div className="flex items-center justify-center mb-6 p-4 bg-white rounded-xl shadow-md">
            <label htmlFor="wordCount" className="text-gray-700 font-medium mr-4">Summary kitne shabdon (words) ka ho:</label>
            <input
                id="wordCount"
                type="number"
                min="10"
                max="300"
                value={wordCount}
                onChange={(e) => setWordCount(parseInt(e.target.value) || 10)}
                className="w-20 p-2 border border-gray-300 rounded-lg text-center focus:ring-indigo-500 focus:border-indigo-500"
                disabled={isLoading}
            />
        </div>

        {/* Input and Output Area */}
        <div className="grid md:grid-cols-2 gap-6">
            
            {/* Input Text Area */}
            <div className="bg-white rounded-xl shadow-2xl p-6 border-t-4 border-indigo-500">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Apna Text Daalein (Input Text)</h2>
                <textarea
                    className="w-full min-h-80 p-3 text-base border-2 border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition resize-none"
                    placeholder="Yahan text paste karein (Paste your text here)..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    disabled={isLoading}
                />
                <button
                    onClick={handleSummarize}
                    disabled={isLoading || inputText.trim().length < 50}
                    className="w-full mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold shadow-lg hover:bg-indigo-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isLoading ? (
                         <>
                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                           Saransh Nikal Raha Hai...
                         </>
                    ) : (
                        <>
                           <SparklesIcon className="w-5 h-5 mr-2" />
                           AI Saransh Banao
                        </>
                    )}
                </button>
            </div>

            {/* Output Summary Area */}
            <div className="bg-white rounded-xl shadow-2xl p-6 border-t-4 border-green-500">
                <h2 className="text-xl font-bold text-gray-800 mb-3">AI Saransh (AI Summary)</h2>
                <div className="relative w-full min-h-80 p-3 text-base border-2 border-gray-300 rounded-lg bg-gray-50 whitespace-pre-wrap">
                    {summary || (
                         <div className="text-gray-500 italic">
                             {isLoading ? "AI aapke text ka saransh bana raha hai..." : "Saransh yahan dikhega jab aap button dabayenge."}
                         </div>
                    )}
                </div>
                <button
                    onClick={copyToClipboard}
                    disabled={!summary}
                    className="w-full mt-4 px-6 py-3 bg-green-600 text-white rounded-lg font-bold shadow-lg hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-copy mr-2"><rect width="8" height="4" x="8" y="2"/><path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3"/><path d="M15 12l-3-3-3 3"/><path d="M12 9v12"/></svg>
                    Copy Saransh
                </button>
            </div>
        </div>

        {/* Error/Info Message */}
        {error && (
            <div className={`mt-6 p-4 border-l-4 rounded-lg ${error.includes('copy') ? 'bg-indigo-100 border-indigo-500 text-indigo-700' : 'bg-red-100 border-red-500 text-red-700'} flex items-center gap-3`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle w-5 h-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/></svg>
                <p className="font-medium">{error}</p>
            </div>
        )}
        
      </main>
    </div>
  );
};

export default AISummarizerPage;
