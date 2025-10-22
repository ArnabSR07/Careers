import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

const Career = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative h-[500px] md:h-[800px] overflow-hidden">
        <div
          className="absolute inset-0 bg-black/40"
          style={{
            backgroundImage: `url(${assets.careerbg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top 20% left 50%",
            backgroundSize: "cover",
            filter: "brightness(50%)",
          }}
        ></div>

        {/* Content layer */}
        <div className="relative z-10 flex flex-col justify-between h-full text-white">
          {/* Top Section */}
          <div className="hidden w-full md:flex justify-between items-center px-4 md:px-10 py-6">
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
                  <h1 className="font-bold text-xl md:text-4xl text-white drop-shadow-lg">NAME</h1>
                  <div className="font-semibold text-sm md:text-2xl text-white drop-shadow-md">
              +1 90898718876
            </div>
                </div>
                <Navbar/>
        </div>



          {/* Middle Text */}
          <div className="flex flex-col justify-center items-center text-center flex-grow">
            <h3 className="font-bold text-3xl md:text-7xl text-white mb-6">
              SERVICES
            </h3>
            <h4 className="text-white text-xl md:text-2xl">
              Home &gt; Knowledge & Events &gt; Careers
            </h4>
          </div>
        </div>
      </div>
       <div className="px-8 py-10">
      <div className="grid grid-cols-1 gap-10  md:grid-cols-2">
        <div  className="text-7xl font-bold text-center text-gray-700 my-auto">CAREERS</div>
        {/* Form */}
        <div className="bg-gray-200 flex flex-col justify-center items-center drop-shadow-lg px-8 py-8">
          <h4 className="text-lg font-medium">For Career Opportunities</h4>
          <h3 className="text-2xl font-semibold">PLEASE  FILL  THE  FORM</h3>
          <div className="flex items-center justify-between w-full gap-10">
            <input type="text" className="shadow-md rounded-md w-full px-5 py-3 md:py-5 my-8 bg-white" placeholder="Name"/>
            <input type="text" className="shadow-md rounded-md w-full px-5 py-3 md:py-5 my-8 bg-white" placeholder="Email"/>
        </div>
        <div className="flex items-center justify-between w-full gap-10">
            <input type="text" className="shadow-md rounded-md w-full px-2 text-sm md:text-base md:px-5 py-3 md:py-5 my-8 bg-white" placeholder="Phone Number"/>
            <input type="text" className="shadow-md rounded-md w-full px-5 py-3 md:py-5 my-8 bg-white" placeholder="Designation"/>
        </div>
        <div className="flex items-center justify-between w-full gap-10">
            <input type="text" className="shadow-md rounded-md w-full px-5 py-3 md:py-5 my-8 bg-white"/>
            <input type="text" className="shadow-md rounded-md w-full px-5 py-3 md:py-5 my-8 bg-white"/>
        </div>
        <button className="bg-blue-800 text-white text-2xl py-3 px-6 w-full mb-3 rounded-md">SUBMIT</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Career;
