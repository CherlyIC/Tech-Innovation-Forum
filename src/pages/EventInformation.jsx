import React from "react"
import { useNavigate } from "react-router-dom"
import SpeakersSection from "../components/SpeakersSection"

function EventInformation () {
  const navigate = useNavigate()
  return (
    <div className="bg-[#0a0e1a] min-h-screen">
      <section className="bg-gradient-to-br from-[#0a0e1a] via-[#1a2744] to-[#0d1b3e] py-32 px-5 text-center border-b border-[#c9a84c]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#c9a84c] text-sm tracking-widest uppercase mb-4">
            10 – 12 April 2026
          </p>
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
            Tech Innovation Forum 2026
          </h1>
          <p className="text-[#c9a84c] text-lg mb-5">
            Kigali Convention Centre, Kigali, Rwanda
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-10">
            The global platform convening 3,000+ leaders, investors and
            innovators to advance financial inclusion through technology
            across Africa and emerging markets.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-[#c9a84c] text-[#0a0e1a] font-bold py-4 px-10 rounded uppercase tracking-widest hover:bg-yellow-400 transition-colors duration-300"
          >
            Register Now
          </button>




        </div>

      </section>

      <SpeakersSection />


    </div>
  )

}
export default EventInformation