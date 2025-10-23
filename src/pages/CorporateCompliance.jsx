import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

const CorporateCompliance = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative h-[680px] lg:h-[800px] overflow-hidden">
        <div
          className="absolute inset-0 bg-black/40"
          style={{
            backgroundImage: `url(${assets.aboutbg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top 20% left 50%",
            backgroundSize: "cover",
            filter: "brightness(50%)",
          }}
        ></div>

        {/* Content layer */}
        <div className="relative z-10 flex flex-col justify-between h-full text-white">
          {/* Top Section */}
          <div className="hidden w-full xl:flex justify-between items-center px-4 md:px-10 py-6">
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

          <div className="flex justify-between items-center px-3 xl:hidden pt-5">
            <div className="flex flex-col">
              <h1 className="font-bold text-xl md:text-4xl text-white drop-shadow-lg">
                NAME
              </h1>
              <div className="font-semibold text-sm md:text-2xl text-white drop-shadow-md">
                +1 90898718876
              </div>
            </div>
            <Navbar />
          </div>

          {/* Middle Text */}
          <div className="flex flex-col justify-center items-center text-center flex-grow">
            <h3 className="font-bold text-3xl md:text-7xl text-white mb-6">
              SERVICES
            </h3>
            <h4 className="text-white text-xl md:text-2xl">
              Home &gt; Services &gt; Corporate Compliance
            </h4>
          </div>
          <div className="absolute right-0 bottom-0  bg-white h-[50px] w-[100px] md:h-[100px] md:w-[200px] pt-3 md:pt-6 justify-items-center rounded-t-full">
            <img
              className="w-8 h-7 md:w-20 md:h-17 "
              src={assets.gear}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="py-10 px-10 md:px-20">
        <h3 className="text-4xl text-bold text-blue-900 mt-10">
          Corporate Compliance
        </h3>
        <h4 className="text-blue-800">
          <i>Compliance for Companies and LimitedLiability Partnership</i>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-20 md:gap-40">
          <div className="justify-center items-center">
            <h5 className="text-2xl font-semibold">Corporate Due Diligence</h5>
            <p className="text-lg text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus, ullam! Laboriosam eligendi qui asperiores dolorum
              fugit saepe sed at enim provident pariatur tempore optio iure, sit
              fugiat magni rem! Nam impedit deleniti deserunt sed cupiditate
              libero distinctio. Quod, nesciunt id?{" "}
            </p>
            <h5 className="text-2xl font-semibold mt-5">
              Mergers & Acquisitions
            </h5>
            <p className="text-lg text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum at
              veritatis autem.
            </p>
          </div>
          <div className="justify-center items-center">
            <h5 className="text-2xl font-semibold">
              Annual Fillings & Other Compilance
            </h5>
            <p className="text-lg text-gray-700">It includes -</p>
            <ul
              style={{ listStyle: "disc" }}
              className="text-lg text-gray-700 px-8"
            >
              <li>Annual and Incidental Fillings</li>
              <li>Drafting of Minutes of Meetings, etc.</li>
              <li>Incorporation of Companies & LLPs</li>
              <li>Sourcing of Funds</li>
            </ul>
            <p className="text-lg text-gray-700 mb-5">etc.</p>
            <button className="px-10 py-4 text-xl bg-blue-800 rounded-md text-white">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateCompliance;
