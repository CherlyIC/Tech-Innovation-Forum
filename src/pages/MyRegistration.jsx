import React from "react";
import { useNavigate } from "react-router-dom"

function MyRegistration({ form, setForm, setIsRegistered }) {
  const navigate = useNavigate()

  const handleCancel = () => {
    localStorage.removeItem("registration")
    setIsRegistered(false)
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      organization: "",
      ticketType: "Standard",
      
    })
    navigate("/")
  }

  return (
    <div className="bg-[#0a0e1a] min-h-screen flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center">

        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-[#c9a84c] flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl text-[#0a0e1a] font-bold">✓</span>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-extrabold text-white mb-3">
          You're Already Registered!
        </h1>
        <p className="text-gray-400 mb-2">
          Name: <span className="text-[#c9a84c] font-bold">{form.firstName} {form.lastName}</span>
        </p>
        <p className="text-gray-400 mb-2">
          Email: <span className="text-[#c9a84c] font-bold">{form.email}</span>
        </p>
        <p className="text-gray-400 mb-10">
          Ticket: <span className="text-[#c9a84c] font-bold">{form.ticketType}</span>
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/register")}
            className="flex-1 border border-[#c9a84c] text-[#c9a84c] font-bold py-3 rounded-lg uppercase tracking-widest hover:bg-[#c9a84c] hover:text-[#0a0e1a] transition-colors duration-300"
          >
             Edit
          </button>
          <button
            onClick={handleCancel}
            className="flex-1 border border-red-500 text-red-500 font-bold py-3 rounded-lg uppercase tracking-widest hover:bg-red-500 hover:text-white transition-colors duration-300"
          >
            ✕ Cancel
          </button>
        </div>

      </div>
    </div>
  )
}

export default MyRegistrationPage