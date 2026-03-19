import Hero from "@/components/Hero"
import ResearchCard from "@/components/ResearchCard"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"
import Toolkit from "@/components/Toolkit"
import Academics from "@/components/Academics"
import Contact from "@/components/Contact"
import SectionWrapper from "@/components/SectionWrapper"

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      <div className="section-divider" />

      {/* RESEARCH PREVIEW */}
      <section id="research" className="max-w-6xl mx-auto px-6 py-28">
        <SectionWrapper>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12">
            Research Focus
          </h2>

          <ResearchCard />

          <div className="text-center mt-14">
            <a
              href="/research"
              className="text-sm border border-gray-300 px-6 py-3 rounded-md hover:border-gray-500 transition"
            >
              View All Research →
            </a>
          </div>

        </SectionWrapper>
      </section>

      <div className="section-divider" />

      {/* PROJECT PREVIEW */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
        <SectionWrapper>

          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12">
            Selected Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="/projects"
              className="text-sm border border-gray-300 px-6 py-3 rounded-md hover:border-gray-500 transition"
            >
              View All Projects →
            </a>
          </div>

        </SectionWrapper>
      </section>

      <div className="section-divider" />

      {/* TOOLKIT */}
      <section id="toolkit">
        <SectionWrapper>
          <Toolkit />
        </SectionWrapper>
      </section>

      <div className="section-divider" />

      {/* EDUCATION */}
      <section id="education">
        <SectionWrapper>
          <Academics />
        </SectionWrapper>
      </section>

      <div className="section-divider" />

      {/* CONTACT */}
      <section id="contact">
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </section>

    </main>
  )
}