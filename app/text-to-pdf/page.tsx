import TextToPDFTool from "@/components/TextToPDFTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/text-to-pdf');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <TextToPDFTool />
    </main>
  );
}
