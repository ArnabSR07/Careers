import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
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
          <h1 className="font-bold text-2xl md:text-4xl text-white drop-shadow-lg">NAME</h1>
          <Navbar />
          <div className="text-right">
            <div className="text-lg md:text-2xl font-light">Have any question?</div>
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
            CONTACT US
          </h3>
         <h4 className="text-white text-xl md:text-2xl">Home &gt; Contact Us</h4>
        </div>
         <div className="absolute right-0 bottom-0 bg-white h-[50px] w-[100px] md:h-[100px] md:w-[200px] pt-3 md:pt-6 justify-items-center rounded-t-full">
      <img className="w-8 h-7 md:w-20 md:h-17 " src={assets.contact} alt="" />
         </div>
      </div>
      
    </div>

    <div className="px-4 md:px-8 max-w-7xl mx-auto my-10">
        <div className="grid grid-cols-1 w-full md:grid-cols-2 min-h-[600px]">
            <div className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none min-h-[300px] md:min-h-0" style={{
                backgroundImage:`url(${assets.ca})`,
                backgroundSize:"cover",
                backgroundPosition:"center"
            }}></div>
            <div className="bg-gray-300 px-4 md:px-10 py-8 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
                <h3 className="font-semibold text-2xl md:text-3xl my-6 md:my-10">Find a Chartered Accountant</h3>
                <p className="text-base md:text-lg"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias consectetur, enim pariatur consequatur molestias magni optio accusantium odio. Ullam, doloribus. Inventore eligendi maxime officiis, nihil explicabo, asperiores, sit amet sequi quos aliquid voluptatem nisi vel hic porro molestiae quisquam illo minima repudiandae vero pariatur? Placeat molestias quasi, vel sequi voluptates aperiam earum ullam exercitationem illum debitis eos ab ipsum delectus quod totam enim provident officia architecto, aspernatur dolor cupiditate hic animi atque! Officiis placeat voluptatibus commodi voluptas laborum ipsum eius.em nisi vel hic porro molestiae quisquam illo minima repudiandae vero pariatur? Placeat molestias quasi, vel sequi voluptates aperiam earum ullam exercitationem illum debitis eos ab ipsum delectus quod totam enim provident officia architecto, aspernatur dolor cupiditate hic animi atque! Officiis placeat voluptatibus commodi voluptas laborum ipsum eius. </p>
            </div>
        </div>
    </div>

    <div className="md:w-full w-[400px] md:max-w-7xl h-[400px] md:h-[580px] mx-auto px-4 md:px-8 rounded-2xl my-10" style={{
        backgroundImage:`url(${assets.map})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"
    }}></div>

    <NewsLetter/>
    

    </div>
  );
};

export default Contact;