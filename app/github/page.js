import React from "react";
import { FaGithub } from "react-icons/fa";

export default function GitHub() {
  return (
    <main className="pt-20 bg-blue-50 min-h-screen text-blue-900">
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-extrabold mb-6 font-serif">Open Source on GitHub</h1>
        
        <p className="text-lg mb-8">
          ShortenIt is proudly open source. Check out the code, contribute, or fork the project and make it your own!
        </p>

        <a
          href="https://github.com/TIA1106/ShortenIt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-gray-800 transition"
        >
          <FaGithub className="text-2xl" />
          View on GitHub
        </a>

        <div className="mt-12 text-left bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">What You’ll Find</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Fully functional Next.js 15 app with Turbopack</li>
            <li>MongoDB backend with server actions</li>
            <li>Simple URL shortening logic</li>
            <li>Beautiful Tailwind UI components</li>
            <li>Clean code and contributor-friendly</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
