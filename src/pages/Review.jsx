import { useNavigate } from "react-router-dom";
import React from "react";

function Review({ form }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0a0e1a] min-h-screen py-16 px-5">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#c9a84c] text-sm tracking-widest uppercase mb-2">
            Step 2 of 2
          </p>
          <h1 className="text-4xl font-extrabold text-white mb-3">
            Review Your Registration
          </h1>
          <p className="text-gray-400">
            Please confirm your details before submitting
          </p>
        </div>

        <div className="bg-[#0f1520] border border-[#2d3a5e] rounded-xl p-8 space-y-5 mb-8">
          <div className="flex justify-between border-b border-[#2d3a5e] pb-4">
            <span className="text-gray-400 text-sm">First Name</span>
            <span className="text-white font-semibold">{form?.firstName}</span>
          </div>

          <div className="flex justify-between border-b border-[#2d3a5e] pb-4">
            <span className="text-gray-400 text-sm">Last Name</span>
            <span className="text-white font-semibold">{form?.lastName}</span>
          </div>

          <div className="flex justify-between border-b border-[#2d3a5e] pb-4">
            <span className="text-gray-400 text-sm">Email Address</span>
            <span className="text-white font-semibold">{form?.email}</span>
          </div>

          <div className="flex justify-between border-b border-[#2d3a5e] pb-4">
            <span className="text-gray-400 text-sm">Phone Number</span>
            <span className="text-white font-semibold">{form?.phone}</span>
          </div>

          <div className="flex justify-between border-b border-[#2d3a5e] pb-4">
            <span className="text-gray-400 text-sm">Organization</span>
            <span className="text-white font-semibold">
              {form?.organization || "Not provided"}
            </span>
          </div>

          <div className="flex justify-between border-b border-[#2d3a5e] pb-4">
            <span className="text-gray-400 text-sm">Ticket Type</span>
            <span className="text-[#c9a84c] font-bold">{form?.ticketType}</span>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/register")}
              className="flex-1 border border-[#c9a84c] text-[#c9a84c] font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-[#c9a84c] hover:text-[#0a0e1a] transition-colors duration-300"
            >
              ← Edit Details
            </button>

            <button
              onClick={() => navigate("/confirmation")}
              className="flex-1 bg-[#c9a84c] text-[#0a0e1a] font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-yellow-400 transition-colors duration-300"
            >
              Confirm →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;