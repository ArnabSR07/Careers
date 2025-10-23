import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
const Auditing = () => {
  return (
    <div className="overflow-x-hidden">
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
              Home &gt; Services &gt; Auditing
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

      <div className="px-8">
        <h2 className="text-3xl md:text-4xl text-blue-800 font-bold my-8">
          Audit and Assurance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold py-2">
              Internal & Concurrent Audit
            </h3>
            <p className="text-sm md:text-lg">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur distinctio temporibus nesciunt, aspernatur voluptates
              eaque obcaecati iste inventore consequatur ullam porro, atque vel
              illum dignissimos fuga repudiandae laboriosam labore provident?
              Sequi adipisci error aperiam, odit, atque, ipsum nulla modi
              ducimus cupiditate est harum quaerat similique cum! Maxime magni
              omnis voluptates, voluptatem nesciunt numquam repellendus? Alias
              minus quisquam ut saepe dolores?
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold py-2">
              Management & Operations Audit
            </h3>
            <p className="text-sm md:text-lg mb-10 md:mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui rem
              sit quibusdam nostrum ipsam. Laborum perferendis earum placeat
              maiores quae voluptatum enim nisi veritatis sit, veniam, quis
              velit optio obcaecati nam non mollitia!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold py-2">Forensic Audit</h3>
            <p className="text-sm md:text-lg">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur distinctio temporibus nesciunt, aspernatur voluptates
              eaque obcaecati iste inventore consequatur ullam porro, atque vel
              illum dignissimos fuga repudiandae laboriosam labore provident?
              Sequi adipisci error aperiam, odit, atque, ipsum nulla modi
              ducimus cupiditate est harum quaerat similique cum! Maxime magni
              omnis voluptates, voluptatem nesciunt numquam repellendus? Alias
              minus quisquam ut saepe dolores?
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold py-2">Statutory Audit</h3>
            <p className="text-sm md:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui rem
              sit quibusdam nostrum ipsam. Laborum perferendis earum placeat
              maiores quae voluptatum enim nisi veritatis sit, veniam, quis
              velit optio obcaecati nam non mollitia!
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mx-auto my-8">
          <button className="text-white bg-blue-800 px-8 py-3">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Auditing;
