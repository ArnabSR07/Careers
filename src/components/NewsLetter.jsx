import React from "react";
import { assets } from "../assets/assets";

const NewsLetter = () => {
  return (
    <div className="px-8 py-6">
      <div className="flex items-center justify-between">
        <span className="text-blue-700 text-3xl font-semibold">
          SIGN UP FOR INSIGHTS
        </span>
        <div>
          <input
            type="text"
            className="px-4 py-3 text-lg  border"
            placeholder="EMAIL"
          />
          <button className="text-white px-5 py-3 text-lg border-black bg-black font-light">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <h1 className="font-bold text-5xl text-center text-blue-800 my-10">
        We'd Love <br /> TO HEAR FROM YOU
      </h1>

      <div className="grid grid-cols-2 gap-10">
        <div>
          <h2 className="text-blue-700 font-bold text-4xl r mb-8">
            Call us on 111222333444 <br />
            or send us a message{" "}
          </h2>
          <p className="text-lg">
            Do you need NDIS services? Do you have a question that we can help
            you with. Please feel free to contact us via phone, or leave a
            message on the form. Alternatively, you can visit our North Lakes
            office.
          </p>

          <div className="grid grid-cols-2 w-[40%] my-10">
            <div className="flex flex-col gap-6 mr-4">
              <img src={assets.location} className="h-10 w-8" alt="" />
              <img src={assets.contact} className="h-10 w-12" alt="" />
              <img src={assets.mail} className="h-10 w-12" alt="" />
            </div>

            <div>
              <p>
                <span className="text-lg font-semibold hover:cursor-pointer hover:text-red-500">
                  Our Office
                </span>{" "}
                <span className="text-sm">
                  416 Churchill Rd, <br /> Killburn 5082
                </span>
              </p>
              <p>
                <span className="text-lg font-semibold hover:cursor-pointer hover:text-red-500">
                  Call Us
                </span>{" "}
                <br />
                <span className="text-sm">+91 (033) 666 33333</span>
              </p>
              <p>
                <span className="text-lg font-semibold hover:cursor-pointer hover:text-red-500">
                  Email Us
                </span>{" "}
                <br />
                <span className="text-sm">info@ABCgmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Form */}

        <div className="px-6 py-6 flex flex-col gap-5 bg-blue-200/60 backdrop-blur-sm rounded-md shadow-lg">
          <h3 className="font-bold text-4xl text-blue-900 text-center">
            Send Us a Message
          </h3>

          <div>
            <label className=" font-medium">Full Name:</label>
            <input
              type="text"
              className="w-full bg-white text-gray-800 shadow-md py-3 px-2 rounded-md"
            />
          </div>

          <div>
            <label className=" font-medium">Email:</label>
            <input
              type="text"
              className="w-full bg-white text-gray-800 shadow-md py-3 px-2 rounded-md"
            />
          </div>

          <div>
            <label className=" font-medium">Phone Number:</label>
            <input
              type="text"
              className="w-full bg-white text-gray-800 shadow-md py-3 px-2 rounded-md"
            />
          </div>

          <div>
            <label className=" font-medium">
              Select the service you are interested in:
            </label>
            <input
              type="text"
              className="w-full bg-white text-gray-800 shadow-md py-3 px-2 rounded-md"
            />
          </div>

          <div>
            <label className=" font-medium">
              Company you are interested in:
            </label>
            <input
              type="text"
              className="w-full bg-white text-gray-800 shadow-md py-3 px-2 rounded-md"
            />
          </div>

          <div>
            <label className=" font-medium">How can we help you?</label>
            <textarea className="w-full bg-white text-gray-800 shadow-md h-[200px] py-3 px-2 rounded-md" />
          </div>
          <div className="mx-auto">
            <button className="px-10 py-3 rounded-md bg-cyan-800 text-white text-bold">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
