import PDFRotateTool from "@/components/PDFRotateTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/pdf-rotate');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFRotateTool />
    </main>
  );
}
