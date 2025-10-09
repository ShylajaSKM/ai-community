import { BrainCircuit } from "lucide-react";
import Image from "next/image";

const Section4 = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 place-items-center text-black bg-white gap-8 py-10 md:py-16">
      <div className="w-[80%] mx-auto md:w-full aspect-square relative">
        <Image
          src={"/images/img12.jpg"}
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[80%] mx-auto md:w-full aspect-square relative">
        <Image
          src={"/images/img13.jpg"}
          alt="Hero Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex w-full px-4 flex-col items-center gap-5">
        <h3 className="text-3xl font-bold">Who are we?</h3>
        <p className="text-center text-lg md:text-xl">
          We're a growing community of{" "}
          <strong>builders, designers, product folks, and developers</strong>{" "}
          who care deeply about the future of tech — especially around{" "}
          <strong>AI, product, and creativity</strong>.
        </p>
        <p className="text-center text-lg md:text-xl">
          We believe in open collaboration, idea-sharing, and lifting each other
          up.{" "}
          <strong>
            If that sounds like your kind of energy — we’d love to have you with
            us.
          </strong>
        </p>
        <button className="bg-gradient-to-tr from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-500 flex gap-2 items-center text-black hover:text-black px-5 py-3 rounded text-sm font-semibold uppercase transition-all duration-600 hover:scale-109 hover:shadow-lg cursor-pointer">
          <BrainCircuit />
          Join Us on Slack
        </button>
      </div>
    </div>
  );
};

export default Section4;
