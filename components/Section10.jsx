import { BrainCircuit } from "lucide-react";

const Section10 = () => {
  const steps = [
    {
      title: "Join the Meet",
      description:
        " Connect with people who share your passion for learning, growth, and innovation.",
    },
    {
      title: "Introduce yourself!",
      description:
        "Tell us who you are and what you do. Our community is friendly, open, and excited to welcome you.",
    },
    {
      title: "Share your ideas!",
      description:
        " Bring your ideas, join discussions, and explore opportunities for collaboration.",
    },
  ];
  return (
    <div className="bg-[#000B26] w-screen h-max relative text-white flex flex-col items-center justify-center py-10 md:py-16">
      <div className="grid mt-5 max-w-6xl grid-cols-1 xl:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center flex-col md:flex-row gap-5"
          >
            <h2 className="text-7xl md:text-9xl font-extrabold text-[#FFAD00]">
              {index + 1}
            </h2>
            <div className="flex flex-col justify-start h-full pt-3 items-center md:items-start gap-1">
              <h2 className="text-xl font-semibold">{step.title}</h2>
              <p className="text-md px-3 text-center md:text-start md:px-0">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="pt-10">
        <button
          className="bg-gradient-to-tr from-orange-300 to-orange-400 
                   hover:from-orange-400 hover:to-orange-500 
                   flex gap-2.5 items-center 
                   text-black hover:text-black
                   px-5 py-3 rounded text-sm font-semibold uppercase 
                   transition-all duration-600 hover:scale-109 hover:shadow-lg 
                   cursor-pointer"
        >
          <BrainCircuit />
          Join Us on Saturday
        </button>
      </p>
    </div>
  );
};

export default Section10;
