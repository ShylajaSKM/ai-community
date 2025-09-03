import { BrainCircuit } from "lucide-react";
import Image from "next/image";

const Section4 = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 place-items-center text-black bg-white gap-8 py-10 md:py-16">
      <div className="w-[80%] mx-auto md:w-full aspect-square relative">
        <Image
          src={"/hero.png"}
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[80%] mx-auto md:w-full aspect-square relative">
        <Image
          src={"/hero.png"}
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex w-full px-4 flex-col items-center gap-5">
        <h3 className="text-3xl font-bold">Who are we?</h3>
        <p className="text-center text-lg md:text-xl">
          We’re an AI-focused community for product managers, designers, and
          development teams. inside!
        </p>
        <p className="text-center text-lg md:text-xl">
          We love sharing ideas and helping each other grow. If that’s something
          you like to do, we can’t wait to welcome you
        </p>
        <button className="bg-gradient-to-tr flex gap-2 items-center from-orange-300 to-orange-400 text-black px-5 py-3 rounded text-sm font-semibold uppercase">
          <BrainCircuit />
          Join Us on Slack
        </button>
      </div>
    </div>
  );
};

export default Section4;
