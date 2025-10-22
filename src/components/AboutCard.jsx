import React from "react";

const AboutCard = ({about}) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="relative flex flex-col justify-between 
        w-[85vw] max-w-[300px] sm:max-w-[350px] md:max-w-[400px] 
        h-[420px] sm:h-[480px] md:h-[500px] 
        rounded-2xl overflow-hidden shadow-md"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-yellow-500 opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full py-10 sm:py-16 px-4 text-white">
          {/* Quote Symbol */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-2">"</h1>

          {/* Message */}
          <p className="text-center text-xs sm:text-sm md:text-base leading-relaxed px-2">
            {about.comment}
          </p>

          {/* Person Info */}
          <div className="mt-6">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-center">
              {about.author}
            </h2>
            <p className="text-xs sm:text-sm text-center opacity-90">
             {about.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
