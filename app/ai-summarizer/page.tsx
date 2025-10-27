import AISummarizerTool from "@/components/AISummarizerTool";
import { pageMetadataForRoute } from '@/lib/generateMetadataForRoute';

export const metadata = pageMetadataForRoute('/ai-summarizer');
export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <AISummarizerTool />
      <div className="prose max-w-none">
        <h1>AI Summarizer</h1>
        <p>Summarize long text using AI.</p>
      </div>
    </main>
  );
}
