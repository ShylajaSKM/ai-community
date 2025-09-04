import { BrainCircuit } from "lucide-react";

const Section10 = () => {
  const steps = [
    {
      title: "Join the Community",
      description:
        "Simply click on any of the buttons on this page and get FREE access!",
    },
    {
      title: "Introduce yourself!",
      description:
        "Tell us about who you are and what you do. Then enjoy our welcome!",
    },
    {
      title: "Share your ideas!",
      description:
        "Tell us what you're working on and join community calls to get ideas!",
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
      <button className="bg-gradient-to-tr mt-20 flex gap-2 items-center from-orange-300 to-orange-400 text-black px-5 py-3 rounded text-sm font-semibold uppercase">
        <BrainCircuit />
        Join Us on Slack
      </button>
    </div>
  );
};

export default Section10;
