import PDFProtectTool from "@/components/PDFProtectTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/pdf-protect');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFProtectTool />
    </main>
  );
}
