import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import KnowledgeCard from "../components/KnowledgeCard";

const Knowledge = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative h-[600px] md:h-[800px] overflow-hidden p-6">
        <div
          className="absolute inset-0 bg-black/40"
          style={{
            backgroundImage: `url(${assets.eventbg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom 30% left 50%",
            backgroundSize: "cover",
            filter: "brightness(50%)",
          }}
        ></div>

        {/* Content layer */}
        <div className="relative z-10 flex flex-col justify-between text-white">
          {/* Top Section */}
          <div className=" hidden md:w-full md:flex justify-between items-center px-4 md:px-10 py-6">
            <h1 className="font-bold text-2xl md:text-4xl text-white drop-shadow-lg">
              NAME
            </h1>
            <Navbar />
            <div className="text-right">
              <div className="text-lg md:text-2xl font-light">
                Have any question?
              </div>
              <div className="font-semibold text-lg md:text-2xl text-white drop-shadow-md">
                +1 90898718876
              </div>
            </div>
          </div>

           <div className="flex justify-between items-center px-2 md:hidden">
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl md:text-4xl text-white drop-shadow-lg">NAME</h1>
                  <div className="font-semibold text-sm md:text-2xl text-white drop-shadow-md">
              +1 90898718876
            </div>
                </div>
                <Navbar/>
        </div>

          {/* Middle Text */}
          <div className="flex flex-col md:flex-row md:justify-between items-center px-40 mt-20">
            <div className=" text-gray-400">
              <h1 className=" text-3xl md:text-6xl font-bold mb-8">
                Knowledge <br />& Event
              </h1>
    
              <p className="text-lg text-center md:text-left md:text-2xl text-gray-400 mb-5 md:pb-0">
                We know how large object will act,
                <br />
                but things on a small circle
              </p>
            </div>
            <div className=" bg-gray-400 px-6 py-6 md:py-10 rounded-md">
              <h3 className="text-2xl font-bold text-center text-black mb-6">
                Join as Accountant
              </h3>
              <button className="bg-black text-white rounded-md w-full py-3">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Display knowledge Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 mx-8">
        {assets.facts.map((fact, index) => (
          <KnowledgeCard key={index} fact={fact} />
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
