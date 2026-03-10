import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import React from "react"

function Confirmation({ form, setIsRegistered }) {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem("registration", JSON.stringify(form))
    setIsRegistered(true)
  }, [])

  return (
    <div className="bg-[#0a0e1a] min-h-screen flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center">

        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-[#c9a84c] flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl text-[#0a0e1a] font-bold">✓</span>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-extrabold text-white mb-3">
          You're Registered!
        </h1>
        <p className="text-gray-400 mb-2">
          Welcome, <span className="text-[#c9a84c] font-bold">{form.firstName} {form.lastName}</span>
        </p>
        <p className="text-gray-400 mb-2">
          Ticket: <span className="text-[#c9a84c] font-bold">{form.ticketType}</span>
        </p>
        <p className="text-gray-400 mb-10">
          See you at TIF 2026 in Kigali, Rwanda! 🎉
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-[#c9a84c] text-[#0a0e1a] font-bold py-3 px-8 rounded-lg uppercase tracking-widest hover:bg-yellow-400 transition-colors duration-300"
        >
          Back to Home
        </button>

      </div>
    </div>
  )
}

export default Confirmation