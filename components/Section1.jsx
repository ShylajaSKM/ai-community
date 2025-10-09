import { BrainCircuit } from "lucide-react";
import Image from "next/image";
import { SkiperMarquee } from "./ui/skiper-marquee";

const Section1 = () => {
  return (
    <div className="w-screen overflow-x-hidden mx-auto min-h-screen bg-black flex flex-col pt-10">
      <div className="w-full md:w-[85%] flex-1 mx-auto justify-center object-cover relative">
        <div className="px-6 absolute z-20 h-full flex flex-col md:flex-row gap-5 justify-between items-center">
          <div className="w-full md:w-[60%] h-full flex flex-col p-5 capitalize justify-center items-center md:items-start gap-8">
            <h2 className="text-white text-center md:text-start text-3xl leading-[1.2] md:text-5xl font-extrabold">
              Shaping the Future of Tech—Together with AI.
            </h2>
            <p className="text-white text-base md:text-md font-light text-center md:text-start md:font-normal">
              where innovators, creators, and learners come together to exchange
              ideas, tackle challenges, and spark meaningful collaborations.
            </p>
            <button className="bg-gradient-to-tr from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-500  flex gap-2 items-center  text-black hover:text-black px-5 py-3 rounded text-sm font-semibold uppercase transition-all duration-600 hover:scale-109 hover:shadow-lg cursor-pointer">
              <BrainCircuit />
              Join Us on Saturday
            </button>
          </div>
        </div>
        <div className="w-full h-full absolute gradient z-10 flex flex-col justify-center items-center text-center"></div>
        <Image
          src="/images/img8.jpg"
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
