"use client";
import dynamic from "next/dynamic";
const PDFReaderTool = dynamic(() => import("@/components/PDFReaderTool"), { ssr: false });
export default function PDFReaderPageClient() { return <PDFReaderTool />; }
