import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

const Team = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-black/40"
          style={{
            backgroundImage: `url(${assets.teambg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
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
            <h3 className="font-bold text-3xl md:text-7xl text-white drop-shadow-lg mb-6">
              COMPANY
            </h3>
            <h4 className="text-white drop-shadow-lg text-xl md:text-2xl">
              Home &gt; Company &gt; Our Team
            </h4>
          </div>
        </div>
      </div>

      <div className="py-32 mx-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-blue-700 px-8 mb-10">
          OUR TEAM
        </h1>
        <div className="flex flex-col md:flex-row w-full md:justify-between gap-20 md:gap-0">
          <div className="flex flex-col items-center justify-center md:pt-60">
            <div
              className="h-80 w-80 rounded-full"
              style={{
                backgroundImage: `url(${assets.worker5})`,
                backgroundPosition: "right 30%",
                backgroundSize: "cover",
                
              }}
            ></div>
            <h5 className="text-lg font-semibold">OMAR HASSAN</h5>
            <p className="text-center">SOCIAL WORKER AND FORMER NDIS PLANNER</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div
              className="h-80 w-80 rounded-full"
              style={{
                backgroundImage: `url(${assets.omarHassan})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <h5 className="text-lg font-semibold">OMAR HASSAN</h5>
            <p className="text-center">SOCIAL WORKER AND FORMER NDIS PLANNER</p>
          </div>

          <div className="flex flex-col items-center justify-center md:pt-60">
            <div
              className="h-80 w-80 rounded-full"
              style={{
                backgroundImage: `url(${assets.vanessa})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <h5 className="text-lg font-semibold">VANESSA</h5>
            <p className="text-center">Support Coordinator</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div
              className="h-80 w-80 rounded-full"
              style={{
                backgroundImage: `url(${assets.worker4})`,
                backgroundPosition:"left 50%",
                backgroundSize: "cover",
              }}
            ></div>
            <h5 className="text-lg font-semibold">TEGAN MARSHALL</h5>
            <p className="text-center">Support Coordinator</p>
          </div>
        </div>
      </div>

      <div className="ps-3 pe-6 py-5 flex flex-col md:flex-row items-center justify-between gap-15 text-white bg-blue-900 mx-3 md:mx-10 mt-5 mb-8">
        <div className="flex flex-col items-center justify-center pt-10">
            <div
              className="h-80 w-80 mb-5 rounded-full"
              style={{
                backgroundImage: `url(${assets.omarHassan})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <p className="text-center">SOCIAL WORKER AND FORMER NDIS PLANNER</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold my-5 text-center md:text-left">OMAR HASSAN</h3>
            <p className="text-lg text-center md:text-left"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime exercitationem voluptates repellat eum! Enim atque est maxime exercitationem, eveniet, impedit earum deserunt iusto velit dolor animi suscipit unde iste! Eveniet nisi officia, sequi quo id itaque laboriosam mollitia possimus quis quisquam dolores facere facilis nam, commodi hic iure quam, numquam minima! Natus soluta dolor velit debitis iure aperiam cumque accusantium iusto obcaecati saepe. Blanditiis iste sequi facilis, cupiditate ad placeat omnis! In eos doloremque beatae omnis enim officiis, voluptate aperiam earum. Animi ducimus exercitationem obcaecati, libero cupiditate, dignissimos tempore voluptatum odio necessitatibus accusamus repellendus blanditiis possimus deleniti, earum qui similique labore? Dicta necessitatibus libero iste ullam ut in doloremque, eius autem rem ad? Veritatis molestiae provident iste exercitationem at libero esse, molestias architecto rerum aliquam repellendus recusandae voluptatum, magnam totam aut quisquam officia illo possimus. Cupiditate cumque facilis quo iure, commodi maxime iusto repudiandae debitis suscipit. In quaerat non autem. </p>
          </div>
      </div>


     <div className="hidden ps-3 pe-6 py-5 md:flex items-center justify-between gap-10 mx-10 my-8">
        
          <div>
            <h3 className="text-3xl font-bold my-5">Vanessa</h3>
            <p className="text-lg"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime exercitationem voluptates repellat eum! Enim atque est maxime exercitationem, eveniet, impedit earum deserunt iusto velit dolor animi suscipit unde iste! Eveniet nisi officia, sequi quo id itaque laboriosam mollitia possimus quis quisquam dolores facere facilis nam, commodi hic iure quam, numquam minima! Natus soluta dolor velit debitis iure aperiam cumque accusantium iusto obcaecati saepe. Blanditiis iste sequi facilis, cupiditate ad placeat omnis! In eos doloremque beatae omnis enim officiis, voluptate aperiam earum. Animi ducimus exercitationem obcaecati, libero cupiditate, dignissimos tempore voluptatum odio necessitatibus accusamus repellendus blanditiis possimus deleniti, earum qui similique labore? Dicta necessitatibus libero iste ullam ut in doloremque, eius autem rem ad? Veritatis molestiae provident iste exercitationem at libero esse, molestias architecto rerum aliquam repellendus recusandae voluptatum, magnam totam aut quisquam officia illo possimus. Cupiditate cumque facilis quo iure, commodi maxime iusto repudiandae debitis suscipit. In quaerat non autem. </p>
          </div>

          <div className="flex flex-col items-center justify-center pt-10">
            <div
              className="h-80 w-80 rounded-full"
              style={{
                backgroundImage: `url(${assets.vanessa})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <p className="text-center font-bold">Support Coordinator</p>
          </div>
      </div>

      <div className="ps-3 pe-6 py-5 flex flex-col items-center justify-between gap-10  mx-3  mt-5 mb-8 md:hidden">
        <div className="flex flex-col items-center justify-center pt-10">
            <div
              className="h-80 w-80 mb-5 rounded-full"
              style={{
                backgroundImage: `url(${assets.vanessa})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <p className="text-center">Support Coordinator</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold my-5 text-center md:text-left">Vanessa</h3>
            <p className="text-lg text-center md:text-left"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime exercitationem voluptates repellat eum! Enim atque est maxime exercitationem, eveniet, impedit earum deserunt iusto velit dolor animi suscipit unde iste! Eveniet nisi officia, sequi quo id itaque laboriosam mollitia possimus quis quisquam dolores facere facilis nam, commodi hic iure quam, numquam minima! Natus soluta dolor velit debitis iure aperiam cumque accusantium iusto obcaecati saepe. Blanditiis iste sequi facilis, cupiditate ad placeat omnis! In eos doloremque beatae omnis enim officiis, voluptate aperiam earum. Animi ducimus exercitationem obcaecati, libero cupiditate, dignissimos tempore voluptatum odio necessitatibus accusamus repellendus blanditiis possimus deleniti, earum qui similique labore? Dicta necessitatibus libero iste ullam ut in doloremque, eius autem rem ad? Veritatis molestiae provident iste exercitationem at libero esse, molestias architecto rerum aliquam repellendus recusandae voluptatum, magnam totam aut quisquam officia illo possimus. Cupiditate cumque facilis quo iure, commodi maxime iusto repudiandae debitis suscipit. In quaerat non autem. </p>
          </div>
      </div>



    </div>
  );
};

export default Team;
