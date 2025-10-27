import PDFOrganizeTool from "@/components/PDFOrganizeTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/pdf-organize');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <PDFOrganizeTool />
    </main>
  );
}
