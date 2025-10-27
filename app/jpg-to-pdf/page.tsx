import JPGToPDFTool from "@/components/JPGToPDFTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/jpg-to-pdf');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <JPGToPDFTool />
    </main>
  );
}
