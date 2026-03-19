export default function JimBroProject() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-28 space-y-12">

      {/* TITLE */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          JimBro: Scalable Fitness Tracking and Training Platform
        </h1>

        <p className="text-gray-600 leading-relaxed">
          A modular, cross-platform fitness application designed to evolve into 
          an intelligent training system, focusing on structured user data, 
          low-friction interaction, and scalable architecture.
        </p>
      </div>

      {/* PROBLEM */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Problem</h2>
        <p className="text-gray-600 leading-relaxed">
          Most fitness applications either rely on manual tracking, leading to 
          low engagement, or provide generic programs with limited personalization. 
          These systems fail to adapt to user performance and do not support 
          long-term training consistency.
        </p>
      </div>

      {/* APPROACH */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Approach</h2>
        <p className="text-gray-600 leading-relaxed">
          Built a structured frontend system with a modular architecture, enabling 
          scalable feature development and future integration of intelligent 
          training and recommendation systems.
        </p>

        <ul className="mt-4 space-y-2 text-gray-600 text-sm">
          <li>• Cross-platform development using Flutter</li>
          <li>• Feature-based modular architecture</li>
          <li>• Centralized theming and UI system</li>
          <li>• Early user profile modeling for personalization</li>
        </ul>
      </div>

      {/* SYSTEM DESIGN */}
      <div>
        <h2 className="text-xl font-semibold mb-3">System Architecture</h2>
        <div className="text-sm text-gray-600 border border-gray-200 rounded-lg p-4 leading-relaxed">
          UI Layer (Flutter) <br />
          → Feature Modules (home, profile, onboarding) <br />
          → Core Layer (theme, config, shared components) <br />
          → Planned Backend (API + persistent storage)
        </div>
      </div>

      {/* CURRENT STATE */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Current Implementation</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Structured onboarding and entry flow</li>
          <li>• Home dashboard for navigation</li>
          <li>• Profile system for user data modeling</li>
          <li>• UI-focused implementation with scalable foundation</li>
        </ul>
      </div>

      {/* DESIGN DECISION */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Design Decisions</h2>
        <p className="text-gray-600 leading-relaxed">
          Prioritized a clean architectural foundation and consistent design system 
          early in development to enable rapid iteration and scalability, rather 
          than building isolated features without long-term structure.
        </p>
      </div>

      {/* FUTURE DIRECTION */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Future Direction</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Adaptive training recommendations based on performance data</li>
          <li>• Backend integration for persistent and scalable user data</li>
          <li>• Performance tracking and progression analytics</li>
          <li>• Focus on intelligent, data-driven training systems</li>
        </ul>
      </div>

      {/* STACK */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Technical Stack</h2>
        <p className="text-sm text-gray-600">
          Flutter · Dart · Modular Architecture · UI System Design · 
          Cross-Platform Development
        </p>
      </div>

      {/* IMPACT */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Positioning</h2>
        <p className="text-gray-600 leading-relaxed">
          JimBro represents a foundational system for building intelligent 
          fitness applications, with emphasis on scalability, structured data, 
          and future integration of adaptive training logic.
        </p>
      </div>

    </main>
  );
}