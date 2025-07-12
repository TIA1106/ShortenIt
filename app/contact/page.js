import React from "react";

export default function Contact() {
  return (
    <main className="pt-20 bg-blue-50 min-h-screen text-blue-900">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold mb-6 text-center font-serif">
          Contact Us
        </h1>

        <p className="text-lg text-center mb-10">
          Have a suggestion, found a bug, or just want to say hi? We'd love to hear from you!
        </p>

        <form className="grid grid-cols-1 gap-6 bg-white p-8 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-4 border border-blue-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-8">
          Or email us directly at <span className="font-mono">support@shortenit.dev</span>
        </p>
      </section>
    </main>
  );
}
