import React from 'react'

export default function ServicesPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Services</h1>

      <ul className="list-disc pl-6 text-gray-700">
        <li>ASIC & SoC Design</li>
        <li>FPGA Prototyping</li>
        <li>Verification & Validation</li>
        <li>Embedded Engineering</li>
        <li>AI / ML Hardware Acceleration</li>
      </ul>
    </div>
  )
}
