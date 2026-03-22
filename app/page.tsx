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

      {/* RESEARCH HIGHLIGHT */}
<section className="max-w-4xl mx-auto px-6 py-20">

  <div className="border border-gray-200 rounded-xl p-8 text-center">

    <p className="text-sm text-gray-500 mb-4">
      Research Insight
    </p>

    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
      LLMs don’t fail at decisions — they fail at knowing when to stop reasoning.
    </h2>

    <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
      My research focuses on understanding how models handle epistemic uncertainty. 
      I design evaluation frameworks that surface failure modes in reasoning, 
      rather than just measuring output accuracy.
    </p>

  </div>

</section>

<div className="section-divider" />

      {/* FEATURED WORK */}
<section className="max-w-6xl mx-auto px-6 py-20">

  <div className="mb-10 text-center">
  <h2 className="text-2xl font-semibold text-gray-900">
    Featured Work
  </h2>
  <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
    Selected work focused on building reliable AI systems and evaluating model behavior under real-world constraints.
  </p>
</div>

  <div className="grid md:grid-cols-2 gap-6">

    {/* LLM Research Feature */}
    <div className="border border-gray-200 rounded-xl p-6 hover:-translate-y-1 transition">
      <h3 className="text-lg font-medium text-gray-900">
        LLM Decision Pipeline Reliability
      </h3>

      <p className="text-sm text-gray-600 mt-2">
        A diagnostic framework for evaluating how language models behave under epistemic uncertainty, focusing on reasoning behavior, assumption generation, and decision reliability.
      </p>

      <div className="mt-4 text-sm text-gray-500">
        Research · Evaluation Systems · LLMs
      </div>

      <a
        href="/research"
        className="inline-block mt-4 text-sm text-gray-900 font-medium"
      >
        View Research →
      </a>
    </div>

    {/* Deepfake Project Feature */}
    <div className="border border-gray-200 rounded-xl p-6 hover:-translate-y-1 transition">
      <h3 className="text-lg font-medium text-gray-900">
        Deepfake Detection System
      </h3>

      <p className="text-sm text-gray-600 mt-2">
        A multi-stage detection pipeline evaluating robustness of CNNs, Vision Transformers, and CLIP-based models under real-world distortions.
      </p>

      <div className="mt-4 text-sm text-gray-500">
        Computer Vision · Robustness · Detection Systems
      </div>

      <a
        href="/projects/deepfake-detection-system"
        className="inline-block mt-4 text-sm text-gray-900 font-medium"
      >
        View Project →
      </a>
    </div>

  </div>

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