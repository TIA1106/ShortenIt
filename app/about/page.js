import React from "react";

export default function About() {
  return (
    <main className="pt-10 bg-blue-50 min-h-screen text-blue-900">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-6 text-center font-serif">
          About ShortenIt
        </h1>

        <p className="text-lg mb-6 leading-relaxed">
          <strong>ShortenIt</strong> is your fast, reliable, and no-nonsense URL shortener. Whether you're sharing links for social media, campaigns, or just decluttering a long URL, we make it easy — no sign-up, no friction.
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          Unlike most platforms, we believe in <strong>speed, simplicity, and privacy</strong>. That's why we:
        </p>

        <ul className="list-disc list-inside mb-8 space-y-2 text-lg">
          <li>No login required – just shorten and go</li>
          <li>Clean, distraction-free user interface</li>
          <li>Built with performance and accessibility in mind</li>
          <li>Hosted securely and backed by modern tech</li>
        </ul>

        <div className="bg-blue-200 border border-blue-500 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Why We Built This</h2>
          <p className="text-lg leading-relaxed">
            We noticed how bloated most URL shorteners had become — ads, trackers, signups. We built ShortenIt to bring the tool back to what it should be:
            fast, lightweight, and for everyone.
          </p>
        </div>

        <p className="pt-4 text-center text-gray-600 font-bold ">
          Made with 💙 by the ShortenIt team – for makers, marketers, and minimalists.
        </p>
      </section>
    </main>
  );
}
