"use client";

import { CheckCircle, Info, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import React from 'react';

// ✅ Type definitions for PlatformSection
interface PlatformSectionProps {
  icon: React.ReactNode;
  title: string;
  points: { label: string; size: string }[];
}

// ✅ Reusable component for platform sections
const PlatformSection: React.FC<PlatformSectionProps> = ({ icon, title, points }) => (
  <section className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 transition hover:shadow-2xl">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b flex items-center gap-3">
      {icon} {title}
    </h2>
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="flex items-start text-gray-700">
          <ArrowRight className="w-5 h-5 text-purple-500 mt-1 mr-2 flex-shrink-0" />
          <span className="font-semibold">{point.label}:</span> <span className="ml-2">{point.size}</span>
        </li>
      ))}
    </ul>
  </section>
);

// ✅ Main component
export default function SocialMediaImageSizes() {
  return (
    <main className="font-sans px-4 py-10 max-w-4xl mx-auto min-h-screen">

      {/* Header */}
      <header className="mb-12 text-center pt-5">
        <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-2">SEO & DIGITAL MARKETING</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          2024 के लिए Social Media Image Sizes Guide
        </h1>
        <p className="text-lg text-gray-600 font-medium">
          अपनी पोस्ट को पिक्सल-परफेक्ट (Pixel-Perfect) बनाने के लिए सबसे लेटेस्ट डाइमेंशन्स!
        </p>
      </header>

      {/* Introduction */}
      <section className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-4 border-purple-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <CheckCircle className="w-7 h-7 text-green-500" />
          सही साइज़ क्यों मायने रखता है?
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          यदि आप अपनी मार्केटिंग या व्यक्तिगत ब्रांडिंग के लिए सोशल मीडिया का उपयोग कर रहे हैं, तो
          <strong> सही इमेज साइज़ </strong>
          का उपयोग करना सफलता की पहली सीढ़ी है। गलत साइज़ की इमेज
          <strong> फटी हुई </strong>,
          <strong> क्रॉप </strong> हुई, या
          <strong> धीरे लोड </strong> हो सकती है। यह गाइड सुनिश्चित करती है कि आपका content हर प्लेटफॉर्म पर प्रोफेशनल और आकर्षक दिखे।
        </p>
      </section>

      {/* Platform Sections */}
      <div className="space-y-12">
        {/* Facebook */}
        <PlatformSection
          icon={<Facebook className="w-8 h-8 text-blue-600" />}
          title="Facebook (फेसबुक)"
          points={[
            { label: "प्रोफाइल पिक्चर", size: "170 x 170 px (डेस्कटॉप पर)" },
            { label: "कवर फोटो", size: "820 x 312 px (डेस्कटॉप पर सर्वोत्तम)" },
            { label: "Feed इमेज", size: "1200 x 630 px (सबसे आम)" },
            { label: "स्टोरी साइज़", size: "1080 x 1920 px (9:16 आस्पेक्ट रेशियो)" },
          ]}
        />

        {/* Instagram */}
        <PlatformSection
          icon={<Instagram className="w-8 h-8 text-pink-600" />}
          title="Instagram (इंस्टाग्राम)"
          points={[
            { label: "प्रोफाइल पिक्चर", size: "320 x 320 px" },
            { label: "स्क्वायर पोस्ट", size: "1080 x 1080 px (1:1)" },
            { label: "लैंडस्केप पोस्ट", size: "1080 x 566 px (1.91:1)" },
            { label: "पोर्ट्रेट पोस्ट", size: "1080 x 1350 px (4:5)" },
            { label: "Reels/Stories", size: "1080 x 1920 px (9:16)" },
          ]}
        />

        {/* LinkedIn */}
        <PlatformSection
          icon={<Linkedin className="w-8 h-8 text-blue-800" />}
          title="LinkedIn (लिंक्डइन)"
          points={[
            { label: "प्रोफाइल पिक्चर", size: "400 x 400 px" },
            { label: "कवर फोटो (पर्सनल)", size: "1584 x 396 px" },
            { label: "कंपनी लोगो", size: "300 x 300 px" },
            { label: "पोस्ट इमेज", size: "1200 x 627 px" },
          ]}
        />

        {/* Twitter (X) */}
        <PlatformSection
          icon={<Twitter className="w-8 h-8 text-black" />}
          title="Twitter (X)"
          points={[
            { label: "प्रोफाइल फोटो", size: "400 x 400 px" },
            { label: "हेडर फोटो", size: "1500 x 500 px" },
            { label: "इन-स्ट्रीम फोटो", size: "1600 x 900 px (16:9 आस्पेक्ट रेशियो)" },
          ]}
        />

        {/* YouTube */}
        <PlatformSection
          icon={<Youtube className="w-8 h-8 text-red-600" />}
          title="YouTube (यूट्यूब)"
          points={[
            { label: "चैनल प्रोफाइल", size: "800 x 800 px" },
            { label: "चैनल आर्ट (कवर)", size: "2560 x 1440 px" },
            { label: "वीडियो थंबनेल", size: "1280 x 720 px (16:9 आस्पेक्ट रेशियो)" },
          ]}
        />
      </div>

      {/* Conclusion */}
      <div className="p-6 my-12 bg-purple-100 border-l-4 border-purple-500 rounded-xl shadow-md">
        <p className="font-semibold text-purple-800 flex items-center gap-2 mb-2">
          <Info className="w-5 h-5" /> निष्कर्ष:
        </p>
        <p className="text-purple-700 text-lg">
          सही साइज़ की इमेज अपलोड करने से पिक्सलेशन (pixelation) रुकता है, आपकी पोस्ट आकर्षक दिखती है, और आपका
          <strong> Engagement Rate </strong>
          बढ़ता है। सही टूल का उपयोग करके इस प्रक्रिया को स्वचालित (automate) करें।
        </p>
      </div>

      {/* Long SEO Section */}
      <section className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          सोशल मीडिया पर अपनी विजिबिलिटी कैसे बढ़ाएँ (SEO Tips)
        </h2>
        <p className="leading-relaxed text-gray-700 mb-4">
          केवल सही इमेज साइज़ ही काफी नहीं है; आपको यह भी सुनिश्चित करना होगा कि आपकी इमेज
          <strong> SEO (Search Engine Optimization) </strong>
          के लिए ऑप्टिमाइज़्ड हों।
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-3">
          इमेज फ़ाइल साइज़ और फ़ॉर्मेट
        </h3>
        <ul className="list-disc ml-6 space-y-3 text-gray-700">
          <li><strong>JPEG/JPG:</strong> फोटोग्राफिक इमेजेस के लिए सबसे अच्छा, क्योंकि यह फ़ाइल साइज़ को छोटा रखता है।</li>
          <li><strong>PNG:</strong> ग्राफिक्स, लोगो, या पारदर्शिता (transparency) वाली इमेजेस के लिए बेहतर।</li>
          <li><strong>फ़ाइल साइज़:</strong> हमेशा अपनी इमेज को <strong>100–300 KB</strong> के बीच रखें।</li>
        </ul>

        <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-3">ऑल्ट टेक्स्ट (Alt Text) का महत्व</h3>
        <p className="leading-relaxed text-gray-700 mb-4">
          ऑल्ट टेक्स्ट, जिसे <strong>ऑल्ट एट्रीब्यूट</strong> भी कहा जाता है, Google को आपकी इमेज समझने में मदद करता है।
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-3">कंसिस्टेंसी बनाए रखें</h3>
        <p className="leading-relaxed text-gray-700 mb-4">
          सभी प्लेटफॉर्म पर अपने <strong>ब्रांडिंग</strong> और <strong>कलर स्कीम</strong> में समानता रखें।
        </p>

        <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-3">निष्कर्ष: सही टूल का चयन</h3>
        <p className="leading-relaxed text-gray-700">
          इन सभी साइज़ और फ़ॉर्मेट आवश्यकताओं को याद रखना मुश्किल हो सकता है। सही टूल का उपयोग करें और इस गाइड को <strong>Bookmark</strong> करें।
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-base mt-16 bg-gray-50 py-4 rounded-t-xl shadow-inner border-t">
        &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
      </footer>
    </main>
  );
}
