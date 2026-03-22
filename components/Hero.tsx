"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-36 pb-28">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <Image
          src="/profile.jpg"
          alt="Aryan Jha"
          width={130}
          height={130}
          className="rounded-full mx-auto mb-10"
        />

        {/* NAME */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
          Aryan Jha
        </h1>

        {/* MAIN LINE */}
        <p className="mt-4 text-lg text-gray-700">
          Building reliable AI systems under uncertainty
        </p>

        {/* SUBTEXT */}
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Focused on evaluation frameworks, decision systems, and real-world 
          machine learning applications. My work explores how AI systems behave 
          under uncertainty and how to make them more reliable.
        </p>

        {/* ACTIONS */}
<div className="mt-12 flex justify-center">
  <div className="flex gap-4 flex-wrap justify-center items-center">

    {/* LEFT */}
    <a
      href="mailto:aryanjha.delhi@gmail.com"
      className="px-6 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 hover:-translate-y-1 transition"
    >
      Get in Touch
    </a>

    {/* CENTER (PRIMARY) */}
    <a
      href="/cv.pdf"
      target="_blank"
      className="px-6 py-3 rounded-xl border border-gray-300 text-sm font-medium text-gray-900 hover:-translate-y-1 transition"
    >
      View Resume
    </a>

    {/* RIGHT */}
    <a
      href="https://github.com/AryanJha09"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 hover:-translate-y-1 transition"
    >
      GitHub
    </a>

  </div>
</div>

      </div>

    </section>
  );
}