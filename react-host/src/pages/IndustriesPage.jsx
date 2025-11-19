import React from 'react'

export default function IndustriesPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Industries We Serve</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border shadow rounded">Automotive (ADAS, EV)</div>
        <div className="p-4 border shadow rounded">5G / Telecom</div>
        <div className="p-4 border shadow rounded">Industrial Automation</div>
        <div className="p-4 border shadow rounded">Aerospace & Defense</div>
        <div className="p-4 border shadow rounded">Healthcare</div>
        <div className="p-4 border shadow rounded">Cloud & Data Centers</div>
      </div>
    </div>
  )
}
