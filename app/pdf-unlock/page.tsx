import PDFUnlockTool from "@/components/PDFUnlockTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/pdf-unlock');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFUnlockTool />
    </main>
  );
}
