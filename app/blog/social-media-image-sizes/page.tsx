"use client";

import { CheckCircle, Info, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react';

// Main content component
export default function SocialMediaImageSizes() {
    return (
        <main className="font-sans px-4 py-10 max-w-4xl mx-auto min-h-screen">

            {/* Header */}
            <header className="mb-12 text-center pt-5">
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-2">SEO & DIGITAL MARKETING</p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    2024 के लिए Social Media Image Sizes Guide
                </h1>
                <p className="text-lg text-gray-600 font-medium">अपनी पोस्ट को पिक्सल-परफेक्ट (Pixel-Perfect) बनाने के लिए सबसे लेटेस्ट डाइमेंशन्स!</p>
            </header>

            {/* Introduction */}
            <section className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-4 border-purple-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                    <CheckCircle className="w-7 h-7 text-green-500" />
                    सही साइज़ क्यों मायने रखता है?
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    यदि आप अपनी मार्केटिंग या व्यक्तिगत ब्रांडिंग के लिए सोशल मीडिया का उपयोग कर रहे हैं, तो **सही इमेज साइज़** का उपयोग करना सफलता की पहली सीढ़ी है। गलत साइज़ की इमेज **फटी हुई**, **क्रॉप** हुई, या **धीरे लोड** हो सकती है। यह गाइड सुनिश्चित करती है कि आपका content हर प्लेटफॉर्म पर प्रोफेशनल और आकर्षक दिखे।
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
                        { label: "स्टोरी साइज़", size: "1080 x 1920 px (9:16 आस्पेक्ट रेशियो)" }
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
                        { label: "Reels/Stories", size: "1080 x 1920 px (9:16)" }
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
                        { label: "पोस्ट इमेज", size: "1200 x 627 px" }
                    ]}
                />

                {/* Twitter (X) */}
                <PlatformSection
                    icon={<Twitter className="w-8 h-8 text-black" />}
                    title="Twitter (X)"
                    points={[
                        { label: "प्रोफाइल फोटो", size: "400 x 400 px" },
                        { label: "हेडर फोटो", size: "1500 x 500 px" },
                        { label: "इन-स्ट्रीम फोटो", size: "1600 x 900 px (16:9 आस्पेक्ट रेशियो)" }
                    ]}
                />

                {/* YouTube */}
                <PlatformSection
                    icon={<Youtube className="w-8 h-8 text-red-600" />}
                    title="YouTube (यूट्यूब)"
                    points={[
                        { label: "चैनल प्रोफाइल", size: "800 x 800 px" },
                        { label: "चैनल आर्ट (कवर)", size: "2560 x 1440 px" },
                        { label: "वीडियो थंबनेल", size: "1280 x 720 px (16:9 आस्पेक्ट रेशियो)" }
                    ]}
                />
            </div>

            {/* Conclusion & Actionable Tip */}
            <div className="p-6 my-12 bg-purple-100 border-l-4 border-purple-500 rounded-xl shadow-md">
                <p className="font-semibold text-purple-800 flex items-center gap-2 mb-2">
                    <Info className="w-5 h-5" /> निष्कर्ष:
                </p>
                <p className="text-purple-700 text-lg">
                    सही साइज़ की इमेज अपलोड करने से पिक्सलेशन (pixelation) रुकता है, आपकी पोस्ट आकर्षक दिखती है, और आपका **Engagement Rate** बढ़ता है। सही टूल का उपयोग करके इस प्रक्रिया को स्वचालित (automate) करें।
                </p>
            </div>
            
            {/* Long SEO Content */}
            <section className="mt-16 pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">सोशल मीडिया पर अपनी विजिबिलिटी कैसे बढ़ाएँ (SEO Tips)</h2>
                <p className="leading-relaxed text-gray-700 mb-4">
                    केवल सही इमेज साइज़ ही काफी नहीं है; आपको यह भी सुनिश्चित करना होगा कि आपकी इमेज **SEO (Search Engine Optimization)** के लिए ऑप्टिमाइज़्ड हों। इसका मतलब है कि इमेज फ़ाइल का साइज़ छोटा होना चाहिए ताकि वह तेज़ी से लोड हो, और उसका नाम (File Name) प्रासंगिक (relevant) होना चाहिए।
                </p>

                <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-3">इमेज फ़ाइल साइज़ और फ़ॉर्मेट</h3>
                <ul className="list-disc ml-6 space-y-3 text-gray-700">
                    <li>**JPEG/JPG:** फोटोग्राफिक इमेजेस के लिए सबसे अच्छा, क्योंकि यह फ़ाइल साइज़ को छोटा रखता है।</li>
                    <li>**PNG:** ग्राफिक्स, लोगो, या उन इमेजेस के लिए बेहतर है जिनमें पारदर्शिता (transparency) की आवश्यकता हो।</li>
                    <li>**फ़ाइल साइज़:** हमेशा अपनी इमेज को **100-300 KB** के बीच रखने का प्रयास करें ताकि वह मोबाइल पर भी तेज़ी से लोड हो। हमारा **PDF Compressor** टूल भविष्य में इमेज कंप्रेस (compress) करने में आपकी मदद कर सकता है।</li>
                </ul>

                <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-3">ऑल्ट टेक्स्ट (Alt Text) का महत्व</h3>
                <p className="leading-relaxed text-gray-700 mb-4">
                    ऑल्ट टेक्स्ट, जिसे **ऑल्ट एट्रीब्यूट** भी कहा जाता है, इमेज का टेक्स्ट विवरण है। यह केवल दृष्टिबाधित (visually impaired) यूज़र्स के लिए ही नहीं, बल्कि **Google** और अन्य सर्च इंजनों को भी यह बताने में मदद करता है कि आपकी इमेज किस बारे में है। यह आपकी पोस्ट की **विजिबिलिटी (visibility)** को बढ़ाता है।
                </p>

                <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-3">कंसिस्टेंसी (Consistency) बनाए रखें</h3>
                <p className="leading-relaxed text-gray-700 mb-4">
                    सभी प्लेटफॉर्म पर अपने **ब्रांडिंग** और **कलर स्कीम** में कंसिस्टेंसी बनाए रखें। यह आपके दर्शकों के लिए तुरंत पहचान बनाने में मदद करता है।
                </p>

                <h3 className="text-2xl font-semibold text-blue-600 mt-8 mb-3">निष्कर्ष: सही टूल का चयन</h3>
                <p className="leading-relaxed text-gray-700">
                    इन सभी साइज़ और फ़ॉर्मेट आवश्यकताओं को याद रखना मुश्किल हो सकता है। इसलिए, सही टूल का उपयोग करना महत्वपूर्ण है। भविष्य में हमारा **Image Editor** टूल आपको सोशल मीडिया के लिए तुरंत इमेज को **resize** करने और **crop** करने में मदद करेगा। तब तक, इस गाइड को **bookmark** करें और अपनी पोस्टिंग को सफल बनाएं!
                </p>
            </section>

            <footer className="text-center text-gray-500 text-base mt-16 bg-gray-50 py-4 rounded-t-xl shadow-inner border-t">
                &copy; {new Date().getFullYear()} PDF & Text Tools. All rights reserved.
            </footer>
        </main>
    );
}

// Reusable component for platform sections
const PlatformSection = ({ icon, title, points }) => (
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
