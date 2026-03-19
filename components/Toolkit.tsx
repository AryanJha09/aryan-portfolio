"use client";

import {
  SiPython,
  SiC,
  SiCplusplus,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiDart,
  SiSwift
} from "react-icons/si";

import { FaJava, FaMicrochip } from "react-icons/fa";

export default function Toolkit() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28">

      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-16">
        Technical Toolkit
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* AI / ML */}
        <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-4">AI / ML</h3>

          <div className="flex flex-wrap gap-3 text-sm text-gray-700">
            <span className="skill"><SiPython /> Python</span>
          </div>
        </div>

        {/* Backend */}
        <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Backend</h3>

          <div className="flex flex-wrap gap-3 text-sm text-gray-700">
            <span className="skill"><FaJava /> Java</span>
            <span className="skill"><SiCplusplus /> C++</span>
            <span className="skill"><SiMysql /> MySQL</span>
          </div>
        </div>

        {/* Systems */}
        <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Systems</h3>

          <div className="flex flex-wrap gap-3 text-sm text-gray-700">
            <span className="skill"><SiC /> C</span>
            <span className="skill"><FaMicrochip /> Verilog</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Frontend</h3>

          <div className="flex flex-wrap gap-3 text-sm text-gray-700">
            <span className="skill"><SiJavascript /> JavaScript</span>
            <span className="skill"><SiHtml5 /> HTML</span>
            <span className="skill"><SiCss /> CSS</span>
          </div>
        </div>

        {/* Cross Platform */}
        <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Cross Platform</h3>

          <div className="flex flex-wrap gap-3 text-sm text-gray-700">
            <span className="skill"><SiDart /> Dart</span>
            <span className="skill"><SiSwift /> Swift</span>
          </div>
        </div>

      </div>
    </section>
  );
}