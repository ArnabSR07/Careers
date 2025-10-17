import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

const TaxConsultancy = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative h-[800px] overflow-hidden">
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
          <div className="w-full flex justify-between items-center px-4 md:px-10 py-6">
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

          {/* Middle Text */}
          <div className="flex flex-col justify-center items-center text-center flex-grow">
            <h3 className="font-bold text-4xl md:text-7xl text-white drop-shadow-lg mb-6">
              SERVICES
            </h3>
            <h4 className="text-white drop-shadow-lg text-xl md:text-2xl">
              Home &gt; Services &gt; Auditing
            </h4>
          </div>
          <div className="absolute right-0 bottom-0 bg-white h-[100px] w-[200px] pt-6 justify-items-center rounded-t-full">
            <img className="w-20 h-19 " src={assets.gear} alt="" />
          </div>
        </div>
      </div>
      <div className="py-10 px-20">
        <h3 className='text-4xl text-bold text-blue-900 mt-10'>Tax Consultancy</h3>
        <h4 className='text-blue-800 mb-10'><i>Compliance for Companies and LimitedLiability Partnership</i></h4>
        <div className="grid grid-cols-2 gap-40">

            <div>
                 <h5 className='text-2xl font-semibold'>Corporate & Non-Corporate Tax Planning</h5>
                 <p className='text-lg text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, ullam! Laboriosam eligendi qui asperiores dolorum fugit saepe sed at enim provident pariatur tempore optio iure, sit fugiat magni rem! Nam impedit deleniti deserunt sed cupiditate libero distinctio. Quod, nesciunt id? </p>
            </div>

            <div>
                <h5 className='text-2xl font-semibold'>Representation Services</h5>
                <p className="text-lg text-gray-700 mb-8">Representation of tax cases in front of Tax Authorities like the ITO, CIT(A) and ITAT.</p>
                <button className='px-10 py-4 text-xl bg-blue-800 rounded-md text-white'>Contact</button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default TaxConsultancy;
