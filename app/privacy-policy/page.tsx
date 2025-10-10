import type { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 flex items-center justify-center gap-3">
            <Shield className="w-10 h-10 text-gray-500" />
            Privacy Policy
          </h1>
        </header>

        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg prose prose-lg lg:prose-xl text-gray-700">
          {/* ↓↓↓ आपका जनरेट किया हुआ कंटेंट यहाँ है ↓↓↓ */}
          
          <p>Last updated: October 10, 2025</p>
          <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
          <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
          
          <h2>Interpretation and Definitions</h2>
          <h3>Interpretation</h3>
          <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
          <h3>Definitions</h3>
          <p>For the purposes of this Privacy Policy:</p>
          <ul>
            <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to pdf-macker-ai.</li>
            <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website...</li>
            <li><strong>Country</strong> refers to: Punjab, India</li>
            <li><strong>Website</strong> refers to pdf-macker-ai, accessible from <a href="https://pdf-macker-ai.vercel.app" target="_blank" rel="noopener noreferrer">https://pdf-macker-ai.vercel.app</a></li>
            <li><strong>You</strong> means the individual accessing or using the Service...</li>
          </ul>

          <h2>Collecting and Using Your Personal Data</h2>
          <h3>Types of Data Collected</h3>
          <h4>Personal Data</h4>
          <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information... This may include, but is not limited to: Usage Data.</p>
          <h4>Usage Data</h4>
          <p>Usage Data is collected automatically when using the Service...</p>
          
          {/* ... The rest of your policy content will be styled automatically ... */}
          
          <h2>Children's Privacy</h2>
          <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13...</p>
          
          <h2>Links to Other Websites</h2>
          <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site...</p>
          
          <h2>Changes to this Privacy Policy</h2>
          <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page...</p>
          
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, You can contact us:</p>
          <ul>
            <li>By email: [rajputr51903@gmail.com]</li>
          </ul>

        </div>
      </div>
    </main>
  );
}
