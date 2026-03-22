"use client";

import { research } from "@/data/research";

export default function ResearchCard() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {research.map((area) => (
        <div
          key={area.slug}
          className="bg-white border border-gray-200 rounded-xl p-6 transition hover:-translate-y-1"
        >
          {/* Title */}
          <h3 className="text-lg font-semibold tracking-tight mb-2">
            {area.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {area.description}
          </p>
        </div>
      ))}
    </div>
  );
}