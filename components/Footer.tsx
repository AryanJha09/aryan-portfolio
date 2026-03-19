"use client";

import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">

      <div className="max-w-6xl mx-auto px-6 py-16">
<h2 className="text-xl font-semibold text-gray-900 mb-6">
  Contact
</h2>

        <div className="space-y-3 text-gray-400 text-sm">

          <p>
            Phone:{" "}
            <a
              href="tel:+917015774339"
              className="hover:text-white transition"
            >
              +91 7015774339
            </a>
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:aryanjha.delhi@gmail.com"
              className="hover:text-white transition"
            >
              aryanjha.delhi@gmail.com
            </a>
          </p>

          <a
            href="https://www.linkedin.com/in/aryan-jha-627292347/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

        </div>

        <div className="text-gray-600 text-xs mt-10">
          © {new Date().getFullYear()} Aryan Jha
        </div>

      </div>

    </footer>
  );
}