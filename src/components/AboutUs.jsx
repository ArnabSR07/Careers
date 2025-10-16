import React from "react";
import AboutCard from "./AboutCard";

const AboutUs = () => {
  return (
    <div className="relative h-[800px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('../src/assets/aboutbg.png')",
          filter: "brightness(50%)", // dim the image only
        }}
      ></div>

      {/* Dark overlay (optional for better contrast) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col  items-center h-full text-center text-white px-5">
        <h1 className="font-bold text-5xl md:text-5xl my-20  mb-8">
          WHAT OUR CLIENTS SAY ABOUT US
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-100 max-w-3xl mb-14">
          We offer strategic planning services that help you organize,
          prioritize, and execute
          <br />
          your goals effectively with a clear roadmap for success.
        </p>

        <div className="grid grid-cols-3 gap-20 justify-items-center">
          <AboutCard></AboutCard>
          <AboutCard></AboutCard>
          <AboutCard></AboutCard>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
