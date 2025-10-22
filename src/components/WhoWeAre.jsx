import React from 'react'
import { assets } from '../assets/assets'

const WhoWeAre = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      
      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[738px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${assets.dimmedbg})`,
          }}
        ></div>

        <div className="relative z-10 w-[70%] sm:w-[60%] md:w-[55%] lg:w-[500px]">
          <img
            src={assets.shortImg}
            alt="Who We Are"
            className="w-full object-contain shadow-lg rounded-md"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 py-10 px-6 sm:px-10 flex flex-col justify-center">
        <h2 className="text-2xl md:text-4xl mb-6 text-center lg:text-left">
          WHO <span className="font-bold">WE ARE</span>
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellat facere optio obcaecati tenetur aliquam. 
          Quam accusantium suscipit facere expedita velit rerum minus quo animi totam repellat! Laboriosam, itaque fugiat 
          aliquid dolores similique nulla molestiae quam quasi! Cum, ullam. Hic dolores quos blanditiis enim temporibus 
          ea nisi ipsum dolorum. Minus nostrum nisi quisquam cum repudiandae nesciunt tempore totam? Praesentium voluptatibus 
          blanditiis corporis error consequatur, reiciendis odio alias illo quaerat quo eos! Quam mollitia maxime reiciendis 
          incidunt! Praesentium, cum explicabo! Nihil sequi consequuntur repellat esse non iusto obcaecati officia iste, 
          molestiae numquam facere quae voluptatibus ipsum quas repudiandae, explicabo culpa aspernatur.
        </p>
      </div>
    </div>
  )
}

export default WhoWeAre
