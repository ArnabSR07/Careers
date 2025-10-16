import React, { useState } from "react";
import { assets } from "../assets/assets";

const Capabilities = () => {
  // Start with the 2nd card (index 1) selected like in the image
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleSelect = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-14 px-8">
      <h1 className="text-4xl text-center mb-4 tracking-wide">
        OUR <span className="font-bold">CAPABILITIES</span>
      </h1>
      <p className="text-lg text-center mb-12 text-gray-700 max-w-3xl mx-auto">
        We provide a comprehensive range of services required to meet your
        business needs with precision and excellence. Our strengths lie in
        delivering dependable solutions that help you grow and succeed.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {assets.capabilities.map((capability, index) => {
          const isSelected = selectedIndex === index;
          return (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className={`relative w-[300px] h-[320px] bg-white rounded-md shadow-sm flex flex-col justify-center items-center cursor-pointer transition-all duration-300 ${
                isSelected ? "border-blue-600" : "border-gray-400"
              }`}
            >
              {/* Partial corner borders */}
             <span
        className={`absolute top-0 right-0 h-[3px] w-[80%] ${
          isSelected ? "bg-blue-600" : "bg-gray-300"
        }`}
      ></span>
      <span
        className={`absolute bottom-0 left-0 h-[80%] w-[3px] ${
          isSelected ? "bg-blue-600" : "bg-gray-300"
        }`}
      ></span>
      <span
        className={`absolute bottom-0 left-0 h-[3px] w-[80%] ${
          isSelected ? "bg-blue-600" : "bg-gray-300"
        }`}
      ></span>
      <span
        className={`absolute top-0 right-0 h-[80%] w-[3px] ${
          isSelected ? "bg-blue-600" : "bg-gray-300"
        }`}
      ></span>

              {/* Icon */}
              <img
                src={capability.img}
                alt={capability.title}
                className="w-14 h-14 mb-4 object-contain"
              />

              {/* Title */}
              <h1
                className={`text-lg font-semibold text-center tracking-wide ${
                  isSelected ? "text-black" : "text-gray-700"
                }`}
              >
                {capability.title.toUpperCase()}
              </h1>

              {/* Description (only visible when selected) */}
              <p
                className={`text-gray-600 text-center text-sm mt-3 px-5 leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
                  isSelected
                    ? "opacity-100 max-h-40"
                    : "opacity-0 max-h-0"
                }`}
              >
                {capability.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Capabilities;
