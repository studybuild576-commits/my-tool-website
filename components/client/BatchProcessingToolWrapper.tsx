// components/client/BatchProcessingToolWrapper.tsx
"use client";
import dynamic from "next/dynamic";

const BatchProcessingTool = dynamic(() => import("@/components/BatchProcessingTool"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse space-y-3" aria-label="Loading batch processing tool">
      <div className="h-8 w-56 bg-gray-200 rounded" />
      <div className="h-32 w-full bg-gray-200 rounded" />
      <div className="h-40 w-full bg-gray-200 rounded" />
    </div>
  )
});

export default function BatchProcessingToolWrapper() {
  return <BatchProcessingTool />;
}
