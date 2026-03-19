import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-28">

      <h1 className="text-3xl font-semibold tracking-tight mb-6">
        {project.title}
      </h1>

      {/* Placeholder — you will fill later */}
      <p className="text-gray-600">
        Detailed project content coming soon.
      </p>

    </main>
  );
}