import {
  BrainCircuit,
  Handshake,
  Network,
  PhoneCall,
  UserStar,
} from "lucide-react";
import Image from "next/image";

// Networking
// Find other like-minded individuals working on similar projects!

// Community Calls
// Participate in regular community calls and learn from each other.

// Get Feedback
// Share your current project and get feedback from the community!

// Find collaborators
// Need a partner-in-crime for your next project? You’ve come to the best place to find one.

const Section2 = () => {
  const items = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "Networking",
      text: "Find other like-minded individuals working on similar projects!",
    },
    {
      icon: <PhoneCall className="w-8 h-8" />,
      title: "Community Calls",
      text: "Participate in regular community calls and learn from each other.",
    },
    {
      icon: <UserStar className="w-8 h-8" />,
      title: "Get Feedback",
      text: "Share your current project and get feedback from the community!",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Find collaborators",
      text: "Need a partner-in-crime for your next project? You’ve come to the best place to find one.",
    },
  ];
  return (
    <div className="w-full text-black min-h-screen bg-white flex flex-col items-center gap-8 py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center w-full capitalize max-w-2xl mx-auto">
        The community you knew you always needed
      </h2>
      <p className="text-sm md:text-md text-center text-gray-600 w-full max-w-2xl mx-auto">
        It's hard to find an AI-based community where everyone is willing to
        learn, grow, and help each other. Now, you'll be able to do exactly that
        with more than 500 others just like you.
      </p>
      <button className="bg-gradient-to-tr flex gap-2 items-center from-orange-300 to-orange-400 text-black px-5 py-3 rounded text-sm font-semibold uppercase">
        <BrainCircuit />
        Join Us on Slack
      </button>
      <p className="text-md font-bold text-center text-gray-600">
        (It's 100% Free!)
      </p>
      <div className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-6 flex flex-col items-center ${
              index != 0 && "max-sm:border-t-2 md:border-l-2 border-gray-200"
            }`}
          >
            {item.icon}
            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600 font-normal text-center mt-2">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="pt-16 pb-6 flex flex-col gap-5 px-4 justify-center items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center w-full capitalize max-w-2xl mx-auto">
          AI Product Hive is my favorite AI community
        </h2>
        <p className="text-sm md:text-md text-center text-gray-600 w-full max-w-2xl mx-auto">
          It’s on Slack, there are interesting discussions about AI tools, there
          is no spam or meaningless noise, plus they sometimes invite guests to
          chat about AI news.
        </p>
        <div className="flex h-max gap-5">
          <div className="w-16 aspect-square bg-gray-200 rounded-full relative overflow-hidden">
            <Image
              src={"/hero.png"}
              alt="AI Product Hive"
              fill
              objectFit="cover"
              className="rounded"
            />
          </div>
          <div className="flex flex-col justify-around">
            <h4>Tereza Tizkova</h4>
            <p>Head of Growth @ E2B.dev</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
