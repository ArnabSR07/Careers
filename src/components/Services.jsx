import React, { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { assets } from "../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [servicesPerPage, setServicesPerPage] = useState(1);

  const totalServices = assets.services.length;
  const totalPages = Math.ceil(totalServices / servicesPerPage);

  // Dynamically adjust number of cards per page
  useEffect(() => {
    const updateServicesPerPage = () => {
      if (window.innerWidth >= 1280) {
        // xl and above → 3 cards
        setServicesPerPage(3);
      } else {
        // below xl → 1 card
        setServicesPerPage(1);
      }
    };

    updateServicesPerPage();
    window.addEventListener("resize", updateServicesPerPage);
    return () => window.removeEventListener("resize", updateServicesPerPage);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + servicesPerPage >= totalServices ? 0 : prevIndex + servicesPerPage
    );
    setSelectedIndex(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - servicesPerPage < 0
        ? (totalPages - 1) * servicesPerPage
        : prevIndex - servicesPerPage
    );
    setSelectedIndex(null);
  };

  const visibleServices = assets.services.slice(
    currentIndex,
    currentIndex + servicesPerPage
  );

  return (
    <div className="bg-[#fdf6ff] py-10 overflow-x-hidden">
      <h1 className="text-center text-2xl md:text-4xl mb-10">
        OUR <span className="font-bold">SERVICES</span>
      </h1>

      <div className="relative max-w-7xl mx-auto px-4 md:px-10 py-10 rounded-lg">
        {/* Prev button */}
        <button
          onClick={prevSlide}
          className="hidden xl:block absolute top-1/2 -left-6 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Cards */}
        <div
          className={`flex justify-center items-center gap-6 md:gap-10 transition-all duration-300 
          ${servicesPerPage === 1 ? "flex-col" : "flex-row"}`}
        >
          {visibleServices.map((service, index) => {
            const globalIndex = currentIndex + index;
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
          className="hidden xl:block absolute top-1/2 -right-6 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Mobile navigation */}
        <div className="flex xl:hidden justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Dots */}
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
