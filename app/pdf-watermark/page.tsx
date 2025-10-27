import PDFWatermarkTool from "@/components/PDFWatermarkTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/pdf-watermark');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFWatermarkTool />
    </main>
  );
}
