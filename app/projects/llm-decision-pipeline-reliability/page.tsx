export default function LLMDecisionProject() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-28 space-y-12">

      {/* TITLE */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          Epistemic Failure Modes in LLM Decision Systems
        </h1>

        <p className="text-gray-600 leading-relaxed">
          A behavior-centric evaluation framework analyzing how large language models 
          reason under uncertainty, focusing on epistemic failure rather than decision accuracy.
        </p>
      </div>

      {/* PROBLEM */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Problem</h2>
        <p className="text-gray-600 leading-relaxed">
          Existing evaluations of LLMs emphasize correctness and confidence, but fail 
          to capture how models behave under uncertainty. In high-stakes decision systems, 
          the critical question is not just whether a model is correct, but whether it 
          recognizes when it should refrain from making a decision.
        </p>
      </div>

      {/* APPROACH */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Approach</h2>
        <p className="text-gray-600 leading-relaxed">
          Designed a controlled evaluation framework to study epistemic behavior in LLMs 
          under varying levels of uncertainty, focusing on internal reasoning patterns 
          rather than final outputs.
        </p>

        <ul className="mt-4 space-y-2 text-gray-600 text-sm">
          <li>• Synthetic decision-making task (loan approval under uncertainty)</li>
          <li>• Controlled data regimes: normal, missing, contradictory, stress</li>
          <li>• Standardized output: decision, confidence, and explicit assumptions</li>
          <li>• No prompt tuning to preserve default model behavior</li>
        </ul>
      </div>

      {/* SYSTEM DESIGN */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Evaluation Framework</h2>
        <div className="text-sm text-gray-600 border border-gray-200 rounded-lg p-4 leading-relaxed">
          Input: Structured decision scenarios with varying uncertainty <br />
          → LLM inference (no tuning) <br />
          → Output: decision + confidence + assumptions <br />
          → Analysis: assumption behavior + epistemic consistency
        </div>
      </div>

      {/* ANALYSIS */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Assumption Taxonomy</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Benign: grounded in provided inputs</li>
          <li>• Escalated: unsupported speculative additions</li>
          <li>• Degenerate: cascading assumptions altering decision context</li>
        </ul>
      </div>

      {/* FINDINGS */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Key Findings</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Models frequently fill missing information with speculative reasoning</li>
          <li>• Deferring decisions does not imply epistemic caution</li>
          <li>• High confidence often coexists with unsupported assumptions</li>
          <li>• Failure occurs at the reasoning level, not just the output level</li>
          <li>• Significant variation observed across model architectures</li>
        </ul>
      </div>

      {/* INSIGHT */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Core Insight</h2>
        <p className="text-gray-600 leading-relaxed">
          Epistemic failure in LLMs is not primarily a problem of incorrect decisions, 
          but of uncontrolled reasoning under uncertainty. Models optimized for fluent 
          language generation tend to prioritize plausible completion over grounded reasoning.
        </p>
      </div>

      {/* IMPACT */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Impact</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Highlights risks in deploying LLMs for autonomous decision-making</li>
          <li>• Demonstrates limitations of accuracy-based evaluation metrics</li>
          <li>• Motivates development of behavior-aware evaluation frameworks</li>
          <li>• Relevant to AI safety, alignment, and agentic systems</li>
        </ul>
      </div>

      {/* STACK */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Technical Stack</h2>
        <p className="text-sm text-gray-600">
          Python · LLM Evaluation · Synthetic Data Generation · 
          Prompt Design · Behavioral Analysis
        </p>
      </div>

    </main>
  );
}