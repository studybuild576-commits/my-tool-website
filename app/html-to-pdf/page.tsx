import HTMLToPDFTool from "@/components/HTMLToPDFTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/html-to-pdf');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <HTMLToPDFTool />
    </main>
  );
}
