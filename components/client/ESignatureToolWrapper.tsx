// components/client/ESignatureToolWrapper.tsx
"use client";
import dynamic from "next/dynamic";

const ESignatureTool = dynamic(() => import("@/components/ESignatureTool"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse space-y-3" aria-label="Loading E‑Signature tool">
      <div className="h-8 w-56 bg-gray-200 rounded" />
      <div className="h-24 w-full bg-gray-200 rounded" />
      <div className="h-40 w-full bg-gray-200 rounded" />
    </div>
  ),
});

export default function ESignatureToolWrapper() {
  return <ESignatureTool />;
}
