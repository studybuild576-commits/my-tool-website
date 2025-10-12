"use client";

import { useEffect } from "react";

export default function AutoIndexer() {
  useEffect(() => {
    const currentUrl = window.location.href;
    fetch("/api/index", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: currentUrl }),
    })
      .then(() => console.log("📢 Sent to Google Indexing API:", currentUrl))
      .catch((err) => console.error("❌ Indexing API failed", err));
  }, []);

  return null;
}
