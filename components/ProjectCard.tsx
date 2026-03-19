"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  stack?: string[];
  slug: string;
  github?: string;
}

export default function ProjectCard({
  title,
  description,
  stack,
  slug,
}: ProjectProps) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 cursor-pointer"
      >
        <h3 className="text-lg font-semibold tracking-tight mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        {stack && (
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 border border-gray-200 rounded-md text-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </Link>
  );
}