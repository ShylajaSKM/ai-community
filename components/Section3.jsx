"use client";

import Slider from "./Slider";

const Section3 = () => {
  return (
    <div className="w-full text-white max-w-7xl mx-auto md:min-h-screen flex flex-col items-center gap-8 py-10 md:py-16 px-4">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between">
        <div className="flex-[40%] flex flex-col gap-8 justify-start">
          <h3 className="text-4xl text-center leading-[1.2] md:text-start capitalize font-bold">
            Community Meetups That Spark Real Connections
          </h3>
          <p className="text-lg px-4 md:px-0 text-center md:text-start">
            We’re building something special- a space where makers, developers,
            designers, founders, and curious minds can connect, collaborate, and
            grow together.
          </p>
        </div>
        <div className="flex-[50%] hidden md:block">
          <h3 className="text-6xl leading-[1.5] font-bold text-[#FFAD00] w-full text-end uppercase">
            Come for the energy, Stay for the people.
          </h3>
        </div>
      </div>
      <div className="w-[80%] bg-black">
        <Slider />
      </div>
    </div>
  );
};

export default Section3;
