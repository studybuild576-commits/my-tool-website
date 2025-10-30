"use client"; // ✅ Add this line

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-blue-600">
            PDF Maker AI
          </a>
          {/* Example Nav */}
          <nav className="space-x-6">
            <a href="/tools" className="text-gray-700 hover:text-blue-600">Tools</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-gray-100 border-t mt-10">
        <div className="max-w-7xl mx-auto py-6 px-4 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} PDF Maker AI — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
