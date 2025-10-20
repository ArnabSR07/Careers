import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import AllBlogs from "../components/AllBlogs";

const Blog = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative h-[800px] overflow-hidden">
        <div
          className="absolute inset-0 bg-black/40"
          style={{
            backgroundImage: `url(${assets.blogbg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left 50%",
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
              BLOGS
            </h3>
            <h4 className="text-white drop-shadow-lg text-xl md:text-2xl">
              Home &gt; Knowledge & Events &gt; Blogs
            </h4>
          </div>
        </div>
      </div>
      <AllBlogs />
    </div>
  );
};

export default Blog;
