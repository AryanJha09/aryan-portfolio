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
  <div className="space-y-10">

    {/* Title + Intro */}
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">
        Epistemic Failure in LLM Decision Systems
      </h2>

      <p className="text-gray-600 leading-relaxed max-w-2xl">
        This work introduces a diagnostic framework for evaluating how large language models behave under epistemic uncertainty, focusing on reasoning behavior rather than decision correctness.
      </p>
    </div>

    {/* Contributions */}
    <ul className="text-sm text-gray-600 space-y-2">
      <li>• Designed controlled decision-making scenarios with varying uncertainty</li>
      <li>• Developed taxonomy of assumption behavior (benign, escalated, degenerate)</li>
      <li>• Identified mismatch between decision outputs and underlying reasoning</li>
      <li>• Demonstrated that epistemic failure occurs at the reasoning level, not output</li>
    </ul>

    {/* Deep Dive */}
    <div className="space-y-10 pt-6">

      {/* Framework */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Evaluation Framework
        </h3>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Models are evaluated under a fixed interaction protocol and analyzed through behavioral signals such as assumption generation, confidence expression, and procedural deferral.
        </p>
      </div>

      {/* Pipeline */}
      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-900">
          Experimental Pipeline
        </h4>
        <img
          src="/research/llm-pipeline.png"
          alt="LLM evaluation pipeline"
          className="rounded-xl border border-gray-200"
        />
        <p className="text-sm text-gray-600 max-w-2xl">
          Separates model inference from post-hoc epistemic analysis, allowing reasoning behavior to be studied independently of final decisions.
        </p>
      </div>

      {/* Assumptions */}
      <div className="space-y-4">
        <h4 className="text-md font-medium text-gray-900">
          Assumption Typology
        </h4>
        <img
          src="/research/assumption-typology.png"
          alt="Assumption classification"
          className="rounded-xl border border-gray-200"
        />
        <p className="text-sm text-gray-600 max-w-2xl">
          Distinguishes explanatory reasoning from epistemic overreach by categorizing model-generated assumptions based on their relationship to input evidence.
        </p>
      </div>

      {/* Insight */}
      <div className="space-y-2">
        <h4 className="text-md font-medium text-gray-900">
          Key Insight
        </h4>
        <p className="text-gray-600 max-w-2xl">
          Procedural deferral is not a reliable indicator of epistemic restraint. Models often defer decisions while internally relying on speculative assumptions, indicating that failure originates in reasoning rather than decision selection.
        </p>
      </div>

    </div>
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