import { Link } from "react-router-dom"
import React from 'react'

function Navbar() {
  return (
    <nav className="bg-[#0a0e1a] border-b border-[#c9a84c] px-5 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-[#c9a84c] font-extrabold text-xl tracking-widest uppercase">
          TIF 2026
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-400 hover:text-[#c9a84c] text-sm uppercase tracking-wider transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="bg-[#c9a84c] text-[#0a0e1a] font-bold py-2 px-6 rounded text-sm uppercase tracking-wider hover:bg-yellow-400 transition-colors duration-300"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar