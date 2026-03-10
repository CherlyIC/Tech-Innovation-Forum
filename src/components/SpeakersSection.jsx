import React from "react";
import carine from "../assets/speakers/carine.jpeg"
import david from "../assets/speakers/david.png"
import paula from "../assets/speakers/paula.jpeg"



const speakers = [
  {
    name: "Carine Umutoni",
    role: "Managing Director",
    organization: "Ecobank Rwanda",
    image: carine
  },
   {
    name: "David Nandwa",
    role: "Founder & Chief Executive Officer",
    organization: "HoneyCoin",
    image: david
  },
   {
    name: "Hon. Paula Ingabire",
    role: "Minister of ICT and Innovation",
    organization: "Republic of Rwanda",
    image: paula
  }
]

function SpeakersSection () {
  return (
    <section className="bg-[#0a0e1a] py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#c9a84c] text-center mb-2">Featured Speakers</h2>
        <p className="text-gray-400 text-center mb-12">Learn from the best mind in fintech and technology across africa</p>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
          { speakers.map((speaker , index) => (
            <div key={index} className="bg-[#1a2744] border border-[#2d3a5e] rounded-lg p-6 text-center hover:border-[#c9a84c] transition colors duration-300">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-[#c9a84c]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
             <h3 className="text-white font-bold text-base mb-1">{speaker.name}</h3>
             <p className="text-[#c9a84c] text-sm mb-1">{speaker.role}</p>
             <p>{speaker.organization}</p>
            </div>
          )
           )

          }
        </div>

      </div>

    </section>
  )
}

export default SpeakersSection