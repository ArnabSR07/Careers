
import React, { useState } from "react";
import AboutCard from "./AboutCard";
import { assets } from "../assets/assets";
import { ChevronRight, ChevronLeft } from "lucide-react";

const AboutUs = () => {
  const [current, setCurrent] = useState(0);
  const totalCards = assets.compliments.length;

  const nextCard = () => {
    setCurrent((prev) => (prev + 1) % totalCards);
  };

  const prevCard = () => {
    setCurrent((prev) => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <div className="relative md:h-[800px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.aboutbg})`,
          backgroundPosition: "top 20% left 50%",
          filter: "brightness(50%)", // dim the image only
        }}
      ></div>

      {/* Dark overlay (optional for better contrast) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col  items-center h-full text-center text-white px-5">
        <h1 className="font-bold text-3xl md:text-5xl my-20  mb-8">
          WHAT OUR CLIENTS SAY ABOUT US
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-100 max-w-3xl mb-14">
          We offer strategic planning services that help you organize,
          prioritize, and execute
          <br />
          your goals effectively with a clear roadmap for success.
        </p>

        {/* Cards Section */}

        <div className="relative w-full flex justify-center items-center">
          <button onClick={prevCard} className="absolute left-2 sm:left-5 lg:hidden bg-yellow-500 text-black p-2 rounded-full hover:scale-105 transition">
            <ChevronLeft size={24} />
          </button>

           <button onClick={nextCard} className="absolute right-2 sm:right-5 lg:hidden bg-yellow-500 text-black p-2 rounded-full hover:scale-105 transition">
            <ChevronRight size={24} />
          </button>
          

          <div className="w-full">

            <div className="lg:hidden">
                <AboutCard about={assets.compliments[current]} />
            </div>

          <div className="hidden lg:grid lg:grid-cols-3 gap-10 justify-items-center mx-4">
            {assets.compliments.map((about, index) => (
              <AboutCard key={index} about={about} />
            ))}
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
