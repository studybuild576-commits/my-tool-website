"use client";
import { useState } from "react";

export default function ToolRequestPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tool, setTool] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // ✅ Simple front-end validation
    if (!name || !email || !tool || !message) {
      setStatus("error");
      return;
    }

    // ✅ Simulate form submission success
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setTool("");
      setMessage("");
    }, 1000);
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Request a Tool</h1>
      <p className="text-sm text-slate-600 mb-6">
        Suggest a new tool and we’ll consider adding it to PDF Maker AI.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Your Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            Tool Idea
          </label>
          <input
            value={tool}
            onChange={(e) => setTool(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="e.g. PDF Compressor"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            Why is it useful?
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded px-3 py-2"
            rows={4}
            placeholder="Explain how this tool can help users"
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
          >
            {status === "sending" ? "Sending..." : "Submit request"}
          </button>
        </div>

        {status === "success" && (
          <div className="text-green-600">✅ Thanks! Your request was noted.</div>
        )}
        {status === "error" && (
          <div className="text-red-600">
            ⚠️ Please fill in all fields before submitting.
          </div>
        )}
      </form>
    </main>
  );
}
