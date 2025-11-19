import React from 'react'

export default function AboutLeadership() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Our Leadership</h1>

      <p className="text-gray-700 mb-4">
        DeepTech Semiconductors is led by engineering & semiconductor experts with 
        decades of experience in ASIC, AI/ML acceleration, and advanced chip design.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow">
          <h4 className="font-bold">Dr. A. Engineer</h4>
          <p className="text-sm">CTO — AI & Architecture</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h4 className="font-bold">Ms. B. Leader</h4>
          <p className="text-sm">VP — Product & Strategy</p>
        </div>
        <div className="p-4 border rounded-lg shadow">
          <h4 className="font-bold">Mr. C. Architect</h4>
          <p className="text-sm">Head — Physical Design</p>
        </div>
      </div>
    </div>
  )
}
