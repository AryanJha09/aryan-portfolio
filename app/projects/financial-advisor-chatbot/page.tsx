export default function CentsibleProject() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-28 space-y-12">

      {/* TITLE */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          Centsible: Conversational AI for Personal Finance
        </h1>

        <p className="text-gray-600 leading-relaxed">
          An AI-powered financial assistant that combines structured expense tracking 
          with conversational interaction to improve financial discipline and decision-making.
        </p>
      </div>

      {/* PROBLEM */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Problem</h2>
        <p className="text-gray-600 leading-relaxed">
          Existing personal finance tools rely heavily on manual input and static dashboards, 
          leading to low user engagement and poor long-term adherence. Most systems fail to 
          influence user behavior in real time, limiting their effectiveness.
        </p>
      </div>

      {/* APPROACH */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Approach</h2>
        <p className="text-gray-600 leading-relaxed">
          Designed a hybrid system combining deterministic financial logic with a conversational 
          AI interface, enabling users to interact with their finances naturally while maintaining 
          reliability in core operations.
        </p>

        <ul className="mt-4 space-y-2 text-gray-600 text-sm">
          <li>• Natural language expense logging → structured data extraction</li>
          <li>• Rule-based financial tracking for accuracy and consistency</li>
          <li>• LLM-powered assistant for contextual financial guidance</li>
          <li>• Structured onboarding to enforce goal-oriented usage</li>
        </ul>
      </div>

      {/* SYSTEM DESIGN */}
      <div>
        <h2 className="text-xl font-semibold mb-3">System Architecture</h2>
        <div className="text-sm text-gray-600 border border-gray-200 rounded-lg p-4 leading-relaxed">
          User Input (natural language) <br />
          → Parsing + classification layer <br />
          → Structured storage (transactions, categories) <br />
          → Query engine (analytics + summaries) <br />
          → LLM layer (LangChain + LLaMA 3 via Ollama) for advisory responses
        </div>
      </div>

      {/* FEATURES */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Core Features</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Conversational expense tracking (no manual forms)</li>
          <li>• Automated categorization of transactions</li>
          <li>• Real-time financial summaries and breakdowns</li>
          <li>• AI-driven suggestions based on user spending patterns</li>
        </ul>
      </div>

      {/* DESIGN DECISION */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Design Decision</h2>
        <p className="text-gray-600 leading-relaxed">
          Adopted a hybrid architecture where financial data handling is rule-based 
          and deterministic, while the LLM is restricted to advisory and interaction. 
          This avoids hallucination risks in financial calculations while retaining 
          the benefits of natural language interfaces.
        </p>
      </div>

      {/* TECH STACK */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Technical Stack</h2>
        <p className="text-sm text-gray-600">
          Flask · LangChain · Ollama (LLaMA 3) · Python · 
          CSV-based storage · NLP parsing
        </p>
      </div>

      {/* LIMITATIONS */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Limitations & Future Work</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• No predictive financial modeling in current version</li>
          <li>• Limited scalability due to CSV-based storage</li>
          <li>• No behavioral anomaly detection (impulse spending)</li>
          <li>• Future work: personalization, alerts, and predictive analytics</li>
        </ul>
      </div>

      {/* IMPACT */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Impact</h2>
        <p className="text-gray-600 leading-relaxed">
          Reframes personal finance as an interactive system rather than a passive dashboard, 
          improving engagement and enabling more consistent financial decision-making.
        </p>
      </div>

    </main>
  );
}