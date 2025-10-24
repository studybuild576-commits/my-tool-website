export const metadata = {
  title: "About — My Tools",
  description: "About My Tools — mission, values and privacy-first utilities for PDFs, images and text.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">About PDFMakerAI</h1>
          <p className="text-slate-700 mb-4">
            PDFMakerAI (pdfmakerai.shop) provides fast, privacy-first
            utilities for working with PDFs, images and text. We focus on
            simple, useful tools that work in the browser — no account is
            required for basic use.
          </p>

          <h2 className="text-lg font-semibold mt-4">Our mission</h2>
          <p className="text-sm text-slate-700">
            Make file conversion and simple editing accessible to everyone.
            We prioritize privacy and performance so users can get work done
            quickly without sacrificing control over their data.
          </p>

          <h2 className="text-lg font-semibold mt-4">Why choose us?</h2>
          <ul className="list-disc ml-5 text-sm text-slate-700">
            <li>No signup required for basic usage.</li>
            <li>Fast, responsive UI optimized for desktop and mobile.</li>
            <li>Clear Privacy Policy, Contact page and Terms to help with
            AdSense approval and user trust.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
