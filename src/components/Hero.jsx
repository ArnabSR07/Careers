import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative h-[500px] md:h-[600px] xl:h-[800px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black/40"
        style={{
          backgroundImage: `url(${assets.manwithpapers})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          filter: "brightness(50%)",
        }}
      ></div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col justify-between h-full text-white">
        
        {/* Desktop Navbar (only for xl and above) */}
        <div className="hidden w-full xl:flex justify-between items-center px-10 py-6">
          <h1 className="font-bold text-4xl text-white drop-shadow-lg">NAME</h1>
          <Navbar />
          <div className="text-right">
            <div className="text-2xl font-light">Have any question?</div>
            <div className="font-semibold text-2xl text-white drop-shadow-md">
              +1 90898718876
            </div>
          </div>
        </div>

        {/* Tablet & Mobile Navbar */}
        <div className="flex justify-between items-center px-6 py-4 xl:hidden">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl md:text-3xl text-white drop-shadow-lg">
              NAME
            </h1>
            <div className="font-semibold text-sm md:text-lg text-white drop-shadow-md">
              +1 90898718876
            </div>
          </div>
          <Navbar />
        </div>

        {/* Center text */}
        <div className="flex flex-col justify-center items-center text-center flex-grow px-4">
          <h3 className="font-semibold text-lg md:text-2xl xl:text-3xl text-white">
            We Provide Real
          </h3>
          <h3 className="font-bold text-3xl md:text-5xl xl:text-7xl text-white mb-6 leading-tight">
            WORLD SOLUTION
          </h3>
          <button className="text-sm md:text-lg xl:text-xl border border-white text-white px-4 md:px-6 py-2 rounded-lg hover:bg-white hover:text-black transition">
            About More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
