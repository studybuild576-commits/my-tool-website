import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // यह async redirects function यहाँ जोड़ा गया है
  async redirects() {
    return [
      {
        // source: www.pdfmakerai.shop के बाद का कोई भी पाथ
        source: '/:path((?!_next|favicon.ico).*)', 
        
        // destination: उसे बिना-www डोमेन पर भेजें, और पाथ को सुरक्षित रखें
        destination: 'https://pdfmakerai.shop/:path',
        
        // permanent: true इसे 301 स्थायी रीडायरेक्ट बनाता है (SEO के लिए ज़रूरी)
        permanent: true,
        
        // has: यह सुनिश्चित करता है कि यह नियम तभी चले जब होस्ट www.pdfmakerai.shop हो
        has: [
          {
            type: 'host',
            value: 'www.pdfmakerai.shop',
          },
        ],
      },
    ];
  },

  /* अगर आपकी कोई अन्य कॉन्फ़िगरेशन सेटिंग्स हैं, तो उन्हें यहाँ जोड़ें */
};

export default nextConfig;
