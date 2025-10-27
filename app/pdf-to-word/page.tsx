import PDFToWordTool from "@/components/PDFToWordTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/pdf-to-word');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFToWordTool />
    </main>
  );
}
