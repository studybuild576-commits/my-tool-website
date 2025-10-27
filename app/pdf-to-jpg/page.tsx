import PDFToJPGTool from "@/components/PDFToJPGTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/pdf-to-jpg');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFToJPGTool />
    </main>
  );
}
