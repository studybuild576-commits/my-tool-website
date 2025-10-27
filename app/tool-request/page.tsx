"use client";
import { useState } from "react";

export default function ToolRequestPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tool, setTool] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/tool-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, tool, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setTool("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Request a Tool</h1>
      <p className="text-sm text-slate-600 mb-6">Suggest a new tool and we'll consider adding it to PDF Maker AI.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Your name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Tool idea</label>
          <input value={tool} onChange={(e) => setTool(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="e.g. PDF Redactor" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Why is it useful?</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border rounded px-3 py-2" rows={4} />
        </div>

        <div>
          <button type="submit" className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600">
            {status === "sending" ? "Sending..." : "Submit request"}
          </button>
        </div>

        {status === "success" && <div className="text-green-600">Thanks! Your request was sent.</div>}
        {status === "error" && <div className="text-red-600">Something went wrong. Try again later.</div>}
      </form>
    </main>
  );
}
