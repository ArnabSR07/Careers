import React from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'

const Budget = () => {
  return (
    <div className='overflow-x-hidden'>
          <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-black/40"
          style={{
            backgroundImage: `url(${assets.budgetbg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
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
              PUBLICATIONS
            </h3>
            <h4 className="text-white text-xl md:text-2xl">
              Home &gt; Publications &gt; Budget News
            </h4>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center px-10 py-24 gap-20'>
         <img className='w-full' src={assets.budgetNews2}  alt="" />
         <img className='w-full' src={assets.budgetNews1}  alt="" />
      </div>
    </div>
  )
}

export default Budget