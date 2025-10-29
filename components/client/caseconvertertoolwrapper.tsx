"use client";
import dynamic from "next/dynamic";
const CaseConverterTool = dynamic(() => import("@/components/CaseConverterTool"), { ssr: false });
export default function CaseConverterToolWrapper() { return <CaseConverterTool />; }
