import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { assets } from "../assets/assets"; // assuming services are stored here

const Services = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="bg-[#fdf6ff]">
      <h1 className="text-center text-4xl py-10">OUR <span className="font-bold">SERVICES</span></h1>
    <div className="flex gap-20 justify-center py-10 ">
      {assets.services.map((service, index) => (
        <div key={index} onClick={() => setSelectedIndex(index)}>
          <ServiceCard
            service={service}
            selected={selectedIndex === index}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Services;
