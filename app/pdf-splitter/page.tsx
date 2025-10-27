import PDFSplitterTool from "@/components/PDFSplitterTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/pdf-splitter');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFSplitterTool />
    </main>
  );
}
