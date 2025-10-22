import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative h-[500px] w-full md:h-[600px] lg:h-[800px] overflow-hidden">
      
      <div
        className="absolute inset-0 bg-black/40" 
        style={{
          backgroundImage: `url(${assets.manwithpapers})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left 50% top 10%",
          backgroundSize: "cover", 
          filter: "brightness(50%)", 
        }}
      ></div>

      {/* Content layer */}
      <div className="relative z-10 flex flex-col justify-between h-full text-white">
        {/* Top Section */}
        <div className=" hidden md:w-full md:flex justify-between items-center px-10 py-6">
          <h1 className="font-bold md:text-4xl text-white drop-shadow-lg">NAME</h1>
          <Navbar />
          <div className="text-right">
            <div className="text-2xl font-light">Have any question?</div>
            <div className="font-semibold text-2xl text-white drop-shadow-md">
              +1 90898718876
            </div>
          </div>
        </div>

        {/* Top section for mobile */}

        <div className="flex justify-between items-center p-6 md:hidden">
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl md:text-4xl text-white drop-shadow-lg">NAME</h1>
                  <div className="font-semibold text-sm md:text-2xl text-white drop-shadow-md">
              +1 90898718876
            </div>
                </div>
                <Navbar/>
        </div>

        {/* Middle Text */}
        <div className="flex flex-col justify-center items-center text-center flex-grow">
          <h3 className="font-semibold text-xl md:text-3xl text-white">
            We Provide Real
          </h3>
          <h3 className="font-bold text-3xl md:text-7xl text-white mb-6">
            WORLD SOLUTION
          </h3>
          <button className="text-md md:text-xl border border-white text-white px-3 md:px-6 py-2 rounded-lg hover:bg-white hover:text-black transition">
            About More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
