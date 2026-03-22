"use client";

export default function Academics() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-28">

      {/* SECTION TITLE */}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-16">
        Education & Beyond
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* EDUCATION */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Education</h3>

          <div className="space-y-6">

            <div className="border border-gray-200 rounded-xl p-6">
              <p className="font-medium">Manipal Institute of Technology</p>
              <p className="text-sm text-gray-600">
                B.Tech Computer Science (AI) · CGPA: 8.0
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <p className="font-medium">Chennai Public School</p>
              <p className="text-sm text-gray-600">
                School Topper · Computer Science
              </p>
            </div>

          </div>
        </div>

        {/* Extracurriculars */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Extracurriculars</h3>

          <div className="space-y-6">

            <div className="border border-gray-200 rounded-xl p-6">
              <p className="font-medium">Neura AI Club</p>
              <p className="text-sm text-gray-600">
                Active contributor in AI-focused initiatives and projects.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <p className="font-medium">Endurance Club</p>
              <p className="text-sm text-gray-600">
                Vice-Head · Led operations and coordinated large-scale events.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <p className="font-medium">Tech Solstice & Falak</p>
              <p className="text-sm text-gray-600">
                Participated in technical and cultural events, contributing to team-based initiatives.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-medium text-gray-900">
                    IEEE SMC Student Chapter
                </h3>
                <p className="text-gray-600 mt-2">
                    Graphic Designer · Designed visual assets and branding for technical initiatives and events.
                </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}