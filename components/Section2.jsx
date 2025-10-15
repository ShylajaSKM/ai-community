import { ButtonGroup } from "@chakra-ui/react";
import {
  AlignCenter,
  BrainCircuit,
  Handshake,
  Network,
  PhoneCall,
  UserStar,
} from "lucide-react";
import Image from "next/image";

const Section2 = () => {
  const items = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Connections That Matter",
      text: "Meet like-minded people who share your passion for technology, business, and innovation.",
    },
    {
      icon: <PhoneCall className="w-8 h-8" />,
      title: " Weekly Meetups",
      text: " Join our Saturday sessions filled with discussions, activities, and knowledge sharing.",
    },
    {
      icon: <UserStar className="w-8 h-8" />,
      title: " Ideas & Feedback",
      text: " Present your thoughts or projects and get real, constructive feedback from the community.",
    },
    {
      icon: <Handshake className="w-8h-8" />,

      title: "Collaboration Opportunities",
      text: " Looking for a mentor, or team for your next big idea? You’ll find them here.",
    },
  ];
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
    <div className="w-full text-black min-h-screen bg-white flex flex-col items-center gap-8 py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center w-full capitalize max-w-2xl mx-auto">
        The Community You’ve Been Waiting For
      </h2>
      <p className="text-base md:text-md text-center text-gray-700 w-full max-w-4xl mx-auto">
        At PibiTech, we believe growth happens when people come together. Every
        Saturday, our Community Meet brings curious minds, innovators, and
        builders to one place — to share ideas, learn from each other, and spark
        collaborations that last.
      </p>
      <div className="grid mt-5 max-w-6xl grid-cols-1 xl:grid-cols-3 gap-8 mb-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center flex-col md:flex-row gap-5"
          >
            <h2 className="text-7xl md:text-9xl font-extrabold text-[#FFAD00] ">
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
      <button className="bg-gradient-to-tr from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-500 flex gap-2 items-center text-black hover:text-black px-5 py-3 rounded text-sm font-semibold uppercase transition-all duration-600 hover:scale-109 hover:shadow-lg cursor-pointer">
        <BrainCircuit />
        Join Us This Saturday
      </button>
      <p className="text-md font-bold text-center  text-gray-900">
        ( It's 100% Free! )
      </p>
      <div>
        <h3 className="text-4xl font-bold text-center mt-10">
          What You’ll Find Here
        </h3>
        <div className=" w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 flex flex-col items-center border-2 rounded-xl border-black/60 shadow-md"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-center mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 font-normal text-center mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-16 pb-6 flex flex-col gap-5 px-4 justify-center items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center w-full capitalize max-w-2xl mx-auto">
          Community Meet Is My Go-To Learning Hub
        </h2>
        <p className="text-base md:text-md text-center text-gray-600 w-full max-w-2xl mx-auto">
          Every Saturday feels like a fresh spark of ideas. The sessions are
          practical, the people are collaborative, and the conversations always
          lead to new learnings. No fluff, just real discussions and
          opportunities to grow together.
        </p>
        <div className="flex h-max gap-5">
          <div className="w-16 aspect-square bg-gray-200 rounded-full relative overflow-hidden">
            <Image
              src={"/images/team1.JPG"}
              alt="AI Product Hive"
              fill
              className="rounded cover"
            />
          </div>
          <div className="flex flex-col justify-around">
            <h4>Siranjeevi Ramadoss</h4>
            <p>Head of Pibi Tech</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
