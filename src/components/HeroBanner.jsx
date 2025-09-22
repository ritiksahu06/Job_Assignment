import React from "react";
import shoe from "../assets/shoe_logo.png"; // path must be correct


const HeroBanner = ({ title, subtitle, ctaLink, image }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#40BFFF] shadow p-6 gap-4">
      <div className="flex flex-col gap-2 text-center lg:text-left lg:flex-1">
        <h1 className="font-poppins font-medium text-[30px] text-white">{title}</h1>
        <p className="font-poppins text-[14px] text-white">{subtitle}</p>
        <a href={ctaLink} className="font-poppins font-medium text-[14px] text-white underline hover:text-gray-200 transition">
          Shop Now
        </a>
      </div>
      <div className="lg:flex-1 flex justify-center lg:justify-end">
        <img src={shoe} alt="Hero" className="w-[300px] sm:w-[400px] lg:w-[442px] h-auto object-contain" />
      </div>
    </div>
  );
};

export default HeroBanner;
