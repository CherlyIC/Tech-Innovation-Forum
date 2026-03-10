import { useNavigate } from 'react-router-dom'
import React from 'react'

function Register ({form, setForm}) {
  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm ({ ...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/review")
  }
  return (
    <div className="bg-[#0a0e1a] min-h-screen py-16  px-5">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white mb-3">Register for the Tech Innovation Forum 2026</h1>
          <p className="text-[#c9a84c] text-sm tracking-widest uppercase mb-2">Step 1 of 2</p>
          <p className="text-gray-400">
            Please fill in the details below to register for the event.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#0f1520] border border-[#2d3a5e] rounded-xl p-8 space-y-6">

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2" >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="bg-[#0f1520] border border-[#2d3a5e] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]"
              placeholder="Enter your first name"
            />
          </div>
           <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2" >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="bg-[#0f1520] border border-[#2d3a5e] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2" >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-[#0f1520] border border-[#2d3a5e] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2" >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="bg-[#0f1520] border border-[#2d3a5e] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2" >
              Organization/institution
            </label>  
            <input
              type="text"
              name="organization"
              value={form.organization}
              onChange={handleChange}
              className="bg-[#0f1520] border border-[#2d3a5e] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]"
              placeholder="Enter your organization or institution"
            />

          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2" >Ticket Type</label>
            <select
              name="ticketType"
              value={form.ticketType}
              onChange={handleChange}
              className="bg-[#0f1520] border border-[#2d3a5e] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#c9a84c]"
            >
              <option value="Standard">Standard</option>
              <option value="VIP">VIP</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#c9a84c] text-[#0a0e1a] font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-yellow-400 transition-colors duration-300"
          >
            Review My Registration →
          </button>



        </form>

      </div>

    </div>

    
  )
}

export default Register