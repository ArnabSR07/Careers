import React from "react";

const AboutCard = () => {
  return (
    <div>
      <div className="relative flex flex-col justify-between w-[300px] h-[500px] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-yellow-500 opacity-50"></div>

        <div className="relative z-10 flex flex-col justify-between h-full py-20 text-white">
          <h1 className="text-6xl font-bold text-white text-center ">"</h1>
          <p className="text-center text-lg text-white">
            "With thanks to the NBC team in Delhi.
            <br />
            Thanks for all your support, we look forward to working further with
            you.
          </p>
          <div>
            <h2 className="text-4xl font-semibold text-white text-center">
              Mr. Simon Wise
            </h2>
            <p className="text-sm text-white text-center">
              Karumba Consulting Ltd. (London)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
