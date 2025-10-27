import ImageResizerTool from "@/components/ImageResizerTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/image-resizer');

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <ImageResizerTool />
    </main>
  );
}
