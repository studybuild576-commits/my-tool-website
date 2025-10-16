import React from 'react';

// Main component for the Privacy Policy page
const PrivacyPolicyPage = () => {
  // Common Tailwind classes for readability
  const contentClasses = "max-w-4xl mx-auto px-4 py-12 bg-white shadow-xl rounded-xl mt-8 mb-8";
  const headerClasses = "text-4xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-500 pb-2";
  const subHeaderClasses = "text-2xl font-semibold text-indigo-600 mt-8 mb-4";
  const listItemClasses = "mb-2 text-gray-700 leading-relaxed";

  return (
    <div className={contentClasses}>
      <h1 className={headerClasses}>Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: October 16, 2025</p>

      <p className="mb-4 text-gray-700 leading-relaxed">
        Welcome to <strong>PDF & AI Tools</strong> (“we”, “our”, or “us”). 
        This Privacy Policy describes how we collect, use, and protect your personal information when you use our online tools and services, such as PDF converters, image utilities, and our **AI Text Summarizer**.
      </p>

      <p className="mb-6 text-gray-700 leading-relaxed">
        We value your privacy and are committed to protecting your personal data in accordance with the laws of India, including the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
      </p>

      {/* --- Interpretation and Definitions --- */}
      <h2 className={subHeaderClasses}>Interpretation and Definitions</h2>
      <ul className="list-disc pl-5">
        <li className={listItemClasses}><strong>Company:</strong> Refers to PDF & AI Tools, operating at <a href="https://pdfmakerai.shop" target="_blank" className="text-blue-500 hover:text-blue-700 font-medium">https://pdfmakerai.shop</a>.</li>
        <li className={listItemClasses}><strong>Country:</strong> India</li>
        <li className={listItemClasses}><strong>Service:</strong> Refers to all online tools and pages offered on PDFMakerAI.shop, including AI-powered utilities.</li>
        <li className={listItemClasses}><strong>You:</strong> Means the individual or entity using our website or tools.</li>
      </ul>

      {/* --- Information We Collect --- */}
      <h2 className={subHeaderClasses}>Information We Collect</h2>
      <ul className="list-disc pl-5">
        <li className={listItemClasses}><strong>Usage Data:</strong> We automatically collect non-personal data such as your IP address, browser type, and usage statistics to improve our service.</li>
        <li className={listItemClasses}><strong>Uploaded Files:</strong> Files you upload (e.g., PDFs or images) are processed securely and deleted automatically after processing. We do not store or share your uploaded files.</li>
        <li className={listItemClasses}>
            <strong>Text Input for AI:</strong> Text you input into the AI Summarizer is sent to the third-party AI service provider (Google's Generative AI API) for immediate processing and summarization. This text is not stored by us.
        </li>
        <li className={listItemClasses}><strong>Cookies:</strong> We use cookies to remember preferences and enhance your user experience.</li>
      </ul>

      {/* --- How We Use Your Data --- */}
      <h2 className={subHeaderClasses}>How We Use Your Data</h2>
      <ul className="list-disc pl-5">
        <li className={listItemClasses}>To operate and maintain our online tools.</li>
        <li className={listItemClasses}>To improve performance and user experience.</li>
        <li className={listItemClasses}>To monitor usage and detect technical issues.</li>
        <li className={listItemClasses}>To facilitate the summarization of text using third-party Artificial Intelligence models.</li>
        <li className={listItemClasses}>To comply with applicable Indian laws.</li>
      </ul>

      {/* --- Third-Party Services --- */}
      <h2 className={subHeaderClasses}>Third-Party Services and AI Data Processing</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We may use third-party services such as Google Analytics and Google AdSense for traffic analysis and monetization.  
        These third parties may use cookies to serve personalized ads based on your prior visits to this or other websites.  
        You can opt out of personalized advertising by visiting <a href="https://adssettings.google.com/" target="_blank" className="text-blue-500 hover:text-blue-700 font-medium">adssettings.google.com</a>.
      </p>

      <p className="text-gray-700 font-semibold mt-4 mb-2">AI Tool Data Policy:</p>
      <ul className="list-disc pl-5">
        <li className={listItemClasses}>**No Retention:** The text submitted for summarization is **not stored** by us, nor is it permanently stored or used for training purposes by the AI service provider in connection with this Service.</li>
        <li className={listItemClasses}>**Secure Transmission:** Data is encrypted and sent solely for the purpose of fulfilling your summarization request.</li>
      </ul>


      {/* --- Data Retention --- */}
      <h2 className={subHeaderClasses}>Data Retention</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy. Uploaded files and AI-processed text are automatically deleted shortly after processing.
      </p>

      {/* --- Children’s Privacy --- */}
      <h2 className={subHeaderClasses}>Children’s Privacy</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Our website is not directed to children under 13. We do not knowingly collect personal information from anyone under 13 years of age.
      </p>

      {/* --- Links to Other Websites --- */}
      <h2 className={subHeaderClasses}>Links to Other Websites</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Our site may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.
      </p>

      {/* --- Changes to This Policy --- */}
      <h2 className={subHeaderClasses}>Changes to This Policy</h2>
      <p className="mb-4 text-gray-700 leading-relaxed">
        We may update this Privacy Policy periodically. Any updates will be posted on this page with a revised “Last updated” date.
      </p>

      {/* --- Contact Us --- */}
      <h2 className={subHeaderClasses}>Contact Us</h2>
      <p className="mb-2 text-gray-700 leading-relaxed">
        If you have questions or concerns about this Privacy Policy, please contact us:
      </p>
      <ul className="list-disc pl-5">
        <li className={listItemClasses}>Email: <a href="mailto:rajputr51903@gmail.com" className="text-blue-500 hover:text-blue-700 font-medium">rajputr51903@gmail.com</a></li>
        <li className={listItemClasses}>Website: <a href="https://pdfmakerai.shop" target="_blank" className="text-blue-500 hover:text-blue-700 font-medium">https://pdfmakerai.shop</a></li>
        <li className={listItemClasses}>Address: Punjab, India</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicyPage;
