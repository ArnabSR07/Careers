import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
const SpecialServices = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative h-[520px] md:h-[800px] overflow-hidden">
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
          <div className="hidden md:w-full md:flex justify-between items-center px-4 md:px-10 py-6">
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

          <div className="flex justify-between items-center px-3 md:hidden pt-5">
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
              Home &gt; Services &gt; Special Services
            </h4>
          </div>
          <div className="absolute right-0 bottom-0 bg-white h-[50px] w-[100px] md:h-[100px] md:w-[200px] pt-3 md:pt-6 justify-items-center rounded-t-full">
            <img
              className="w-8 h-7 md:w-20 md:h-17 "
              src={assets.gear}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-5">
              Stock & Commodity Broker <br /> Related Services
            </h3>
            <ul style={{ listStyle: "disc" }} className="text-lg">
              <li>Comapany Incorporation</li>
              <li>
                Training Membership Application of NSE, BSE and other Exchanges
              </li>
              <li>Depository Participant Registration</li>
              <li>System Planning & Development</li>
              <li>Statutory, Internal & Concurrent Audit</li>
              <li>Certifications and Other Compliances</li>
            </ul>
            <h3 className="text-3xl md:text-4xl font-bold mb-5 mt-10">
              EB-5 Immigration Application
            </h3>
            <ul style={{ listStyle: "disc" }} className="text-lg">
              <li>
                Analysis and Preparation of Source of Fund for Investment based
                United States Immigration VISA.
              </li>
            </ul>
            <button className="my-5 py-3 px-10 text-lg text-white rounded-2xl bg-blue-800">
              Contact
            </button>
          </div>

          <div className="border border-gray-300 border-l-6 border-l-blue-700">
            <h3 className="text-3xl md:text-4xl font-bold my-5 px-5">
              Learn More About Our Services
            </h3>
            <hr className="text-gray-300" />
            <ul className="text-lg">
              <li className="px-8 py-3">
                <div className="inline-block h-2 w-2 rounded-full bg-black me-5"></div>
                Auditing Overview
              </li>{" "}
              <hr className="text-gray-300" />
              <li className="px-8 py-3">
                <div className="inline-block h-2 w-2 rounded-full bg-black me-5"></div>
                Internal Audit
              </li>{" "}
              <hr className="text-gray-300" />
              <li className="px-8 py-3">
                <div className="inline-block h-2 w-2 rounded-full bg-black me-5"></div>
                Service Tax Audit
              </li>{" "}
              <hr className="text-gray-300" />
              <li className="px-8 py-3">
                <div className="inline-block h-2 w-2 rounded-full bg-black me-5"></div>
                Transfer Pricing Audit
              </li>{" "}
              <hr className="text-gray-300" />
              <li className="px-8 py-3">
                <div className="inline-block h-2 w-2 rounded-full bg-black me-5"></div>
                Transfer Pricing FAQ's
              </li>{" "}
              <hr className="text-gray-300" />
              <li className="px-8 py-3">
                <div className="inline-block h-2 w-2 rounded-full bg-black me-5"></div>
                Domestic Transfer Pricing
              </li>{" "}
              <hr className="text-gray-300" />
              <li className="px-8 py-3">
                <div className="inline-block h-2 w-2 rounded-full bg-black me-5"></div>
                Business Taxation Overview
              </li>{" "}
              <hr className="text-gray-300" />
              <li className="px-8 py-3">
                <div className="inline-block h-2 w-2 rounded-full bg-black me-5"></div>
                Direct Taxation
              </li>{" "}
              <hr className="text-gray-300" />
              <li className="px-8 py-3">
                <div className="inline-block h-2 w-2 rounded-full bg-black me-5"></div>
                Indirect Taxation
              </li>{" "}
              <hr className="text-gray-300" />
              <li className="px-8 py-3">
                <div className="inline-block h-2 w-2 rounded-full bg-black me-5"></div>
                Capital Gains
              </li>{" "}
              <hr className="text-gray-300" />
              <li className="px-8 py-3">
                <div className="inline-block h-2 w-2 rounded-full bg-black me-5"></div>
                GST
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialServices;
