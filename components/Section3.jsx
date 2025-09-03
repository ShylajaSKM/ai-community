"use client";

import Slider from "./Slider";

const Section3 = () => {
  return (
    <div className="w-full text-white max-w-7xl mx-auto md:min-h-screen flex flex-col items-center gap-8 py-10 md:py-16 px-4">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-center">
        <div className="flex-[40%] flex flex-col gap-8 justify-center">
          <h3 className="text-3xl md:text-5xl text-center md:text-start capitalize font-bold">
            There’s a channel for everything.
          </h3>
          <p className="text-sm md:text-base text-center md:text-start">
            Connect with the right people who are looking for the same things as
            you! Find collaborators, share your thing, or even get the latest &
            greatest ChatGPT prompts!
          </p>
        </div>
        <div className="flex-[60%] hidden md:block">
          <h3 className="text-8xl leading-[1.4] font-bold text-[#FFAD00] w-full text-end uppercase">
            Focused Channels
          </h3>
        </div>
      </div>
      <div className="w-[80%]">
        <Slider />
      </div>
    </div>
  );
};

export default Section3;
