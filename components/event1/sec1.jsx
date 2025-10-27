"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Event1sec1 = ({ event, index }) => {
  const router = useRouter();
  return (
    <div className="w-full max-w-[1400px] mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 text-white md:py-16 bg-black">
      <div className="w-130 aspect-square relative p-10 mx-auto">
        <Image
          src={`/images/W${index + 1}.jpg`}
          alt="Hero Image"
          fill
          className="object-contain rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-center   px-30 gap-8">
        <h3 className="text-3xl font-bold">Week {index + 1}</h3>
        <h3 className="text-3xl text-yellow-400 font-bold">
          Topic - {event.title}
        </h3>
        {/* <h3 className="md:text-xl max-w-[90%]">
          <strong>Madurai AI Developer Community</strong>{" "}
        </h3> */}

        {/* <p className="text-left test-left text-lg md:text-xl max-w-[90%]">
          <strong className="text-yellow-400">Theme :</strong> Code Local Think
          Global
        </p> */}
        {/* <p className="text-left text-lg md:text-xl max-w-[90%]">
          <strong className="text-left text-yellow-400">Time :</strong> 4 PM to
          6 PM
        </p> */}
        {/* 
        <p className=" text-left text-lg md:text-xl max-w-[90%]">
          <strong className="text-left text-yellow-400">Entry :</strong>{" "}
          Free(Registration must)
        </p> */}
        <p className=" text-lg md:text-xl max-w-[90%]">
          <strong className="text-left text-yellow-400"></strong>{" "}
          {event.overview}
        </p>

        <button
          onClick={() => {
            router.push(`/events/${index + 1}`);
          }}
          className="bg-gradient-to-tr hidden md:block from-orange-300 to-orange-400 text-black px-5 py-4 rounded text-sm font-semibold uppercase"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Event1sec1;
