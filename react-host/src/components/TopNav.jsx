import React from 'react'
import { Link } from 'react-router-dom'

export default function TopNav() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="font-bold text-xl">DTS</div>

        <nav className="hidden md:flex gap-4 text-sm text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
