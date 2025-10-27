import ImageConverterTool from "@/components/ImageConverterTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/image-converter');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <ImageConverterTool />
    </main>
  );
}
