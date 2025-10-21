import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { assets } from "../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // tracks page start
  const [selectedIndex, setSelectedIndex] = useState(null); // tracks selected card
  const servicesPerPage = 3;
  const totalServices = assets.services.length;
  const totalPages = Math.ceil(totalServices / servicesPerPage);

  // Show next set of 3 cards
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + servicesPerPage >= totalServices ? 0 : prevIndex + servicesPerPage
    );
    setSelectedIndex(null); 
  };

  // Show previous set of 3 cards
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - servicesPerPage < 0
        ? (totalPages - 1) * servicesPerPage
        : prevIndex - servicesPerPage
    );
    setSelectedIndex(null); 
  };

  // Extract current visible services (3 per page)
  const visibleServices = assets.services.slice(
    currentIndex,
    currentIndex + servicesPerPage
  );
  
  

  return (
    <div className="bg-[#fdf6ff] py-10 relative">
      {/* Heading */}
      <h1 className="text-center text-4xl mb-10">
        OUR <span className="font-bold">SERVICES</span>
      </h1>

      {/* Cards + Navigation */}
      <div className="flex justify-center items-center gap-10">
        {/* Prev button */}
        <button
          onClick={prevSlide}
          className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Service cards */}
        <div className="flex gap-10 justify-center">
          {visibleServices.map((service, index) => {
            const globalIndex = currentIndex + index; // actual position in the full array
            return (
              <div
                key={globalIndex}
                onClick={() => setSelectedIndex(globalIndex)}
              >
                <ServiceCard
                  service={service}
                  selected={selectedIndex === globalIndex}
                />
              </div>
            );
          })}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            onClick={() => {
              setCurrentIndex(pageIndex * servicesPerPage);
              setSelectedIndex(null);
            }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex / servicesPerPage === pageIndex
                ? "bg-blue-600 scale-110"
                : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Services;
