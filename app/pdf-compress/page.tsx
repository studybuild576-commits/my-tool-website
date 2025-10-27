import PDFCompressTool from "@/components/PDFCompressTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/pdf-compress');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFCompressTool />
    </main>
  );
}
