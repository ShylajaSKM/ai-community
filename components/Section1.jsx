import { BrainCircuit } from "lucide-react";
import Image from "next/image";
import { SkiperMarquee } from "./ui/skiper-marquee";

const Section1 = () => {
  return (
    <div className="w-screen overflow-x-hidden mx-auto min-h-screen bg-black flex flex-col pt-10">
      <div className="w-full md:w-[85%] flex-1 mx-auto object-cover relative">
        <div className="px-5 absolute z-20 h-full flex flex-col md:flex-row gap-5 justify-center md:justify-start items-center">
          <div className="w-full md:w-[60%] h-full flex flex-col p-5 capitalize justify-center items-center md:items-start gap-8">
            <h2 className="text-white text-center md:text-start text-4xl md:text-7xl font-extrabold">
              Connect with the top minds in AI
            </h2>
            <p className="text-white text-base md:text-md font-light text-center md:text-start md:font-normal">
              Need a place to network your ideas on a new AI product, startup,
              or tool? AI Product Hive is a free community to find inspiration,
              feedback, and the network to grow.
            </p>
            <button className="bg-gradient-to-tr flex gap-2 items-center from-orange-300 to-orange-400 text-black px-5 py-3 rounded text-sm font-semibold uppercase">
              <BrainCircuit />
              Join Us on Slack
            </button>
          </div>
        </div>
        <div className="w-full h-full absolute bg-black/60 z-10 flex flex-col justify-center items-center text-center"></div>
        <Image
          src="/images/hero.png"
          alt="Description of image"
          fill
          className="absolute h-full object-cover"
        />
      </div>
      <SkiperMarquee />
    </div>
  );
};

export default Section1;
