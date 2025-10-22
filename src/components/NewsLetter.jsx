import React from "react";
import { assets } from "../assets/assets";

const NewsLetter = () => {
  return (
    <div className="px-4 sm:px-8 py-8">
      {/* --- Signup Row --- */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <span className="text-blue-700 text-2xl sm:text-3xl font-semibold text-center sm:text-left">
          SIGN UP FOR INSIGHTS
        </span>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <input
            type="text"
            className="px-4 py-3 text-base sm:text-lg border w-full sm:w-[250px] md:w-[300px] rounded-md"
            placeholder="EMAIL"
          />
          <button className="text-white px-6 py-3 text-base sm:text-lg border-black bg-black font-light rounded-md w-full sm:w-auto">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* --- Title --- */}
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center text-blue-800 my-10">
        We'd Love <br className="sm:hidden" /> TO HEAR FROM YOU
      </h1>

      {/* --- Main Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Contact Info */}
        <div>
          <h2 className="text-blue-700 font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
            Call us on 111222333444 <br className="hidden sm:block" />
            or send us a message
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-gray-800">
            Do you need NDIS services? Do you have a question that we can help
            you with? Please feel free to contact us via phone, or leave a
            message on the form. Alternatively, you can visit our North Lakes
            office.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-6 mt-10">
            {/* Each contact row */}
            <div className="flex items-start gap-4">
              <img
                src={assets.location}
                className="h-8 w-6 sm:h-10 sm:w-8 flex-shrink-0 mt-1"
                alt="Location"
              />
              <div>
                <p className="text-lg font-semibold hover:text-red-500 cursor-pointer">
                  Our Office
                </p>
                <p className="text-sm sm:text-base">
                  416 Churchill Rd, <br /> Killburn 5082
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src={assets.contact}
                className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 mt-1"
                alt="Contact"
              />
              <div>
                <p className="text-lg font-semibold hover:text-red-500 cursor-pointer">
                  Call Us
                </p>
                <p className="text-sm sm:text-base">+91 (033) 666 33333</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                src={assets.mail}
                className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 mt-1"
                alt="Mail"
              />
              <div>
                <p className="text-lg font-semibold hover:text-red-500 cursor-pointer">
                  Email Us
                </p>
                <p className="text-sm sm:text-base">info@ABCgmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="px-4 sm:px-6 py-6 flex flex-col gap-5 bg-blue-200/60 backdrop-blur-sm rounded-lg shadow-lg">
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-900 text-center">
            Send Us a Message
          </h3>

          {/* Input Fields */}
          {[
            "Full Name",
            "Email",
            "Phone Number",
            "Select the service you are interested in",
            "Company you are interested in",
          ].map((label, index) => (
            <div key={index}>
              <label className="font-medium text-gray-800">{label}:</label>
              <input
                type="text"
                className="w-full bg-white text-gray-800 shadow-md py-3 px-3 rounded-md mt-1"
              />
            </div>
          ))}

          {/* Message Box */}
          <div>
            <label className="font-medium text-gray-800">How can we help you?</label>
            <textarea className="w-full bg-white text-gray-800 shadow-md h-[150px] sm:h-[200px] py-3 px-3 rounded-md mt-1" />
          </div>

          {/* Submit Button */}
          <div className="mx-auto mt-2">
            <button className="px-10 py-3 rounded-md bg-cyan-800 text-white font-semibold hover:bg-cyan-700 transition">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
