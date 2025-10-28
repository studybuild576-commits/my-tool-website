// components/client/ChatWithPDFFormWrapper.tsx
"use client";
import dynamic from "next/dynamic";

const ChatWithPDFForm = dynamic(() => import("@/components/ChatWithPDFForm"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse space-y-3">
      <div className="h-8 w-56 bg-gray-200 rounded" />
      <div className="h-24 w-full bg-gray-200 rounded" />
      <div className="h-40 w-full bg-gray-200 rounded" />
    </div>
  ),
});

export default function ChatWithPDFFormWrapper() {
  return <ChatWithPDFForm />;
}
