import { BrainCircuit } from "lucide-react";

const Section11 = () => {
  return (
    <div className="w-full text-white bg-black flex flex-col items-center gap-8 py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center w-full capitalize max-w-2xl mx-auto">
        Join us today!
      </h2>
      <p className="text-sm md:text-md text-center text-white/90 w-full max-w-2xl mx-auto">
        Where else will you find access to such a vibrant and helpful community
        for free? We can’t wait to have you onboard!
      </p>
      <button className="bg-gradient-to-tr flex gap-2 items-center from-orange-300 to-orange-400 text-black px-5 py-3 rounded text-sm font-semibold uppercase">
        <BrainCircuit />
        Join Us on Slack
      </button>
    </div>
  );
};

export default Section11;
