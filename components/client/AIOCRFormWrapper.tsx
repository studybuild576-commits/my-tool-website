// components/client/AIOCRFormWrapper.tsx
"use client";
import dynamic from "next/dynamic";

const AIOCRForm = dynamic(() => import("@/components/AIOCRForm"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse space-y-3">
      <div className="h-8 w-48 bg-gray-200 rounded" />
      <div className="h-10 w-full bg-gray-200 rounded" />
      <div className="h-40 w-full bg-gray-200 rounded" />
    </div>
  ),
});

export default function AIOCRFormWrapper() {
  return <AIOCRForm />;
}
