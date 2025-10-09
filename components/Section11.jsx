import { BrainCircuit } from "lucide-react";

const Section11 = () => {
  return (
    <div className="w-full text-white bg-black flex flex-col justify-center items-center gap-8 py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center w-full capitalize max-w-2xl mx-auto">
        Join us today!
      </h2>
      <p className="text-sm md:text-md text-center text-white/90 w-full max-w-2xl mx-auto">
        Be part of a vibrant community that thrives on collaboration, learning, and innovation. Connect, share, and grow with like-minded peers.
      </p>
      <h3 className="text-2xl md:text-2xl font-extrabold text-center w-full capitalize max-w-2xl mx-auto">
We’d love to have you onboard !
</h3>
      <button className="bg-gradient-to-tr from-orange-300 to-orange-400 
                   hover:from-orange-400 hover:to-orange-500 
                   flex gap-2 items-center 
                   text-black hover:text-black
                   px-5 py-3 rounded text-sm font-semibold uppercase 
                   transition-all duration-600 hover:scale-109 hover:shadow-lg 
                   cursor-pointer">
        <BrainCircuit />
        Join Us on Slack
      </button>
    </div>
  );
};

export default Section11;
