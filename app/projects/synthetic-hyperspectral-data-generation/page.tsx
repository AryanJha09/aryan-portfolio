export default function SyntheticHSIProject() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-28 space-y-12">

      {/* TITLE */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          MetaPredHSI-CD: Predictive Hyperspectral Change Detection
        </h1>

        <p className="text-gray-600 leading-relaxed">
          A metaheuristic-optimized framework for forecasting land surface changes 
          in hyperspectral image time series, enabling forward-looking environmental 
          and urban monitoring.
        </p>
      </div>

      {/* PROBLEM */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Problem</h2>
        <p className="text-gray-600 leading-relaxed">
          Existing change detection methods in remote sensing are retrospective, 
          focusing on identifying past changes between image pairs. These approaches 
          struggle with hyperspectral data due to high dimensionality, noise, and 
          limited labeled data, while lacking predictive capability.
        </p>
      </div>

      {/* APPROACH */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Approach</h2>
        <p className="text-gray-600 leading-relaxed">
          Designed a hybrid framework combining metaheuristic optimization with 
          deep temporal models to forecast future change probability maps from 
          multi-temporal hyperspectral sequences.
        </p>

        <ul className="mt-4 space-y-2 text-gray-600 text-sm">
          <li>• PSO–GWO hybrid optimizer for parameter search</li>
          <li>• LSTM + Transformer backbone for temporal and spectral modeling</li>
          <li>• Multi-objective fitness: detection accuracy + prediction error</li>
          <li>• Dimensionality reduction integrated into optimization loop</li>
        </ul>
      </div>

      {/* SYSTEM FLOW */}
      <div>
        <h2 className="text-xl font-semibold mb-3">System Design</h2>
        <div className="text-sm text-gray-600 border border-gray-200 rounded-lg p-4 leading-relaxed">
          Input: Multi-temporal hyperspectral data (T1...Tn) <br />
          → Metaheuristic Optimization (PSO + GWO) <br />
          → LSTM-Transformer Prediction Model <br />
          → Output: Future change probability maps + uncertainty
        </div>
      </div>

      {/* DATA */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Datasets</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• CHANGEAB / Wetland (103 bands)</li>
          <li>• Pavia University (urban-rural transitions)</li>
          <li>• Houston2013 (dense urban changes)</li>
          <li>• Sentinel-2 time series (multispectral augmentation)</li>
        </ul>
      </div>

      {/* IMPACT */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Impact</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Enables forward prediction of land-use changes</li>
          <li>• Reduces dependence on labeled hyperspectral datasets</li>
          <li>• Demonstrates effectiveness of metaheuristic + DL hybrid systems</li>
          <li>• Applicable to environmental monitoring, agriculture, and urban planning</li>
        </ul>
      </div>

      {/* SKILLS */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Technical Stack</h2>
        <p className="text-gray-600 text-sm">
          PyTorch · Metaheuristics (PSO, GWO) · Remote Sensing (GDAL, SNAP) · 
          Hyperspectral Processing · Scientific Computing
        </p>
      </div>

    </main>
  );
}