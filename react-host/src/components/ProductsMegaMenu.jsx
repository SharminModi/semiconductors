import React from 'react'

export default function ProductsMegaMenu() {
  return (
    <div className="bg-white p-10 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Product Families</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">AI Platforms</h4>
          <ul className="text-gray-600 text-sm mt-2">
            <li>Cadence Cerebrus</li>
            <li>Machine Learning Engines</li>
            <li>Accelerator Cores</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">IC Design Tools</h4>
          <ul className="text-gray-600 text-sm mt-2">
            <li>Virtuoso Suite</li>
            <li>SPECTRE Simulation</li>
            <li>Innovus Physical Design</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">System Analysis</h4>
          <ul className="text-gray-600 text-sm mt-2">
            <li>Allegro X</li>
            <li>Sigrity X</li>
            <li>AWR Microwave Suite</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
