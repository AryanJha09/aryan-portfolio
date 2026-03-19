import SectionWrapper from "@/components/SectionWrapper";

export default function ResearchPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-28 space-y-20">

      {/* INTRO */}
      <SectionWrapper>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Research
          </h1>

          <p className="text-gray-600 leading-relaxed">
            My research focuses on understanding and improving the reliability of 
            AI systems, particularly in settings involving uncertainty, high-dimensional 
            data, and real-world deployment constraints. I am interested in building 
            evaluation frameworks and hybrid systems that bridge theoretical insights 
            with practical applications.
          </p>
        </div>
      </SectionWrapper>

      {/* LLM RESEARCH */}
      <SectionWrapper>
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            Epistemic Failure in LLM Decision Systems
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Investigates how large language models behave under uncertainty, focusing 
            on whether models recognize limits of knowledge rather than simply producing 
            plausible outputs.
          </p>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Designed controlled decision-making scenarios with varying uncertainty</li>
            <li>• Developed taxonomy of assumption behavior (benign, escalated, degenerate)</li>
            <li>• Identified mismatch between decision outputs and underlying reasoning</li>
            <li>• Demonstrated that epistemic failure occurs at reasoning level, not output</li>
          </ul>
        </div>
      </SectionWrapper>

      {/* HYPERSPECTRAL */}
      <SectionWrapper>
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            Predictive Hyperspectral Change Detection
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Developing a metaheuristic-optimized framework for forecasting land surface 
            changes from multi-temporal hyperspectral imagery, shifting from retrospective 
            detection to predictive modeling.
          </p>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Hybrid PSO–GWO optimization for model parameter tuning</li>
            <li>• LSTM–Transformer architecture for temporal and spectral modeling</li>
            <li>• Multi-objective optimization balancing detection and prediction accuracy</li>
            <li>• Cross-dataset validation on hyperspectral benchmarks</li>
          </ul>
        </div>
      </SectionWrapper>

      {/* DEEPFAKE */}
      <SectionWrapper>
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            Robust Detection of AI-Generated Images
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Ongoing work focused on evaluating and improving detection methods for 
            AI-generated images across GANs, diffusion, and transformer-based models.
          </p>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Comparative analysis of CNN, Vision Transformer, and CLIP-based detectors</li>
            <li>• Robustness evaluation under compression and noise distortions</li>
            <li>• Study of generalization across generative model families</li>
            <li>• Exploration of hybrid detection strategies</li>
          </ul>
        </div>
      </SectionWrapper>

    </main>
  );
}