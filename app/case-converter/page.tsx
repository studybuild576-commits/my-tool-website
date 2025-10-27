import CaseConverterTool from "@/components/CaseConverterTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/case-converter');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <CaseConverterTool />
    </main>
  );
}
