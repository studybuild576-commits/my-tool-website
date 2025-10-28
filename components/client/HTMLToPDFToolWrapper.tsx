// components/client/HTMLToPDFToolWrapper.tsx
"use client";
import dynamic from "next/dynamic";

const HTMLToPDFTool = dynamic(() => import("@/components/HTMLToPDFTool"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse space-y-3" aria-label="Loading HTML to PDF tool">
      <div className="h-8 w-56 bg-gray-200 rounded" />
      <div className="h-24 w-full bg-gray-200 rounded" />
      <div className="h-40 w-full bg-gray-200 rounded" />
    </div>
  )
});

export default function HTMLToPDFToolWrapper() {
  return <HTMLToPDFTool />;
}
