import React from "react";

export default function AcademicPartnerCard() {
  return (
    <div className="max-w-xl mx-auto bg-gradient-to-bl from gray-50 to gray-100  overflow-hidden my-8">
      <h2 className="text-3xl md:text-5xl font-black text-[#4F39F6] mb-6 text-center">
                  Academic Partner
          </h2>
      {/* Logo Section */}
      <div className="flex justify-center items-center p-2 mb-2">
        <img
          src="./images/Glob.png"
          alt="GlobalNxt University"
          className="max-h-60 object-contain rounded-2xl"
        />
      </div>

      {/* Bottom Title Bar */}
      <div className="bg-[#4F39F6] text-white text-center py-3">
        <p className="font-semibold text-base">
          GlobalNxt University, Malaysia
        </p>
      </div>

    </div>
  );
}
