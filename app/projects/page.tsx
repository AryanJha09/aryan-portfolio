import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-28">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

    </main>
  );
}