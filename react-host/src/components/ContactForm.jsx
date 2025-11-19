import React from 'react'

export default function ContactForm() {
  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

      <form className="space-y-4">
        <input 
          className="border p-2 w-full" 
          placeholder="Full Name" 
        />
        <input 
          className="border p-2 w-full" 
          placeholder="Email Address" 
        />
        <textarea 
          className="border p-2 w-full" 
          placeholder="Your Message" 
          rows={5}
        />

        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

