import React from "react";
import { MoveRight } from "lucide-react";

const ServiceCard = ({ service, selected }) => {
  return (
    <div
      className={`relative bg-white flex flex-col items-center justify-between text-center 
      p-4 sm:p-6 rounded-none shadow-sm hover:shadow-md 
      transition-all duration-300 cursor-pointer
      w-[85vw] max-w-[280px] h-[320px] sm:h-[370px]`}
    >
      {/* Corner Borders */}
      <span
        className={`absolute top-0 right-0 h-[3px] w-[80%] ${
          selected ? "bg-blue-600" : "bg-gray-300"
        }`}
      ></span>
      <span
        className={`absolute bottom-0 left-0 h-[80%] w-[3px] ${
          selected ? "bg-blue-600" : "bg-gray-300"
        }`}
      ></span>
      <span
        className={`absolute bottom-0 left-0 h-[3px] w-[80%] ${
          selected ? "bg-blue-600" : "bg-gray-300"
        }`}
      ></span>
      <span
        className={`absolute top-0 right-0 h-[80%] w-[3px] ${
          selected ? "bg-blue-600" : "bg-gray-300"
        }`}
      ></span>

      {/* Icon */}
      <img
        src={service.img}
        alt={service.title}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-2 w-[55px] sm:w-[70px]"
      />

      {/* Title */}
      <h3
        className={`text-lg sm:text-2xl font-semibold mt-12 ${
          selected ? "text-black" : "text-gray-800"
        }`}
      >
        {service.title}
      </h3>

      {/* Text */}
      <p
        className={`text-xs sm:text-sm mx-3 sm:mx-4 leading-relaxed ${
          selected ? "text-gray-600" : "text-gray-500"
        }`}
      >
        {service.text}
      </p>

      {/* Read More */}
      <button
        className={`flex items-center justify-center gap-1 sm:gap-2 mt-4 mb-4 text-sm sm:text-base ${
          selected ? "text-black font-medium" : "text-gray-700"
        }`}
      >
        Read More <MoveRight size={16} className="sm:w-[18px]" />
      </button>
    </div>
  );
};

export default ServiceCard;
