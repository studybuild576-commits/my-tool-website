export const metadata = {
  title: "Contact — My Tools",
  description: "Contact page for support or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">Contact</h1>
          <p className="text-slate-700 mb-4">
            For support or partnership inquiries please email us at
            <a href="mailto:support@pdfmakerai.shop" className="text-blue-600 ml-2">support@pdfmakerai.shop</a>.
          </p>

          <p className="text-sm text-slate-600">
            We recommend using an email address on the site domain (like
            support@pdfmakerai.shop) for better trust during AdSense review.
            Update this address if you'd like a different contact.
          </p>
        </div>
      </section>
    </main>
  );
}
