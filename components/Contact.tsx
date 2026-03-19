"use client";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-32 text-center">

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
        Let’s build something meaningful.
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 mb-10 text-sm md:text-base">
        Open to research collaborations, internships, and ambitious ideas.
      </p>

      {/* CTA */}
      <a
        href="mailto:aryanjha.delhi@gmail.com"
        className="inline-block text-sm border border-gray-300 px-8 py-3 rounded-md hover:border-gray-500 transition"
      >
        Get in Touch →
      </a>

    </section>
  );
}