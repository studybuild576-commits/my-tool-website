import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-8">
          Privacy Policy
        </h1>
        <div className="prose lg:prose-xl text-gray-700 space-y-6">
          <p>
            Your privacy is important to us. It is [Your Website Name]'s policy to respect your privacy regarding any information we may collect from you across our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-800">File Privacy</h2>
          <p>
            All the tools on this website (PDF, Image, and Text tools) are client-side, meaning they run directly in your web browser. We do not upload, save, or view any of your files or the content you process. Your data remains on your device.
          </p>

          <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>

          <h2 className="text-2xl font-bold text-gray-800">Third-Party Services</h2>
          <p>
            We may use third-party services like Google AdSense to serve advertisements. These services may use cookies to collect information in order to provide advertisements about goods and services of interest to you. We have no control over the content and practices of these sites.
          </p>

          <h2 className="text-2xl font-bold text-gray-800">Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          
          <p>This policy is effective as of October 8, 2025.</p>

          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          <p>
            If you have any questions about our Privacy Policy, please contact us at:
            <strong>[यहाँ अपना ईमेल एड्रेस डालें]</strong>
          </p>
        </div>
      </div>
    </main>
  );
}
