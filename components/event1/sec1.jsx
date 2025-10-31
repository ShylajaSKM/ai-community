"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Event1sec1 = ({ event, index }) => {
  const router = useRouter();
  return (
    <div
      className={`w-screen mx-auto gap-10 flex flex-col text-white md:py-16 bg-black ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } px-5 md:px-10 py-10 rounded-lg my-10`}
    >
      <div className="w-full">
        <div className="w-[80%] aspect-square relative mx-auto">
          <Image
            src={`/images/W${index + 1}.jpg`}
            alt="Hero Image"
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center w-full items-center gap-8">
        <h3 className="text-3xl font-bold">Week {index + 1}</h3>
        <h3 className="text-3xl text-yellow-400 text-center font-bold">
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
        <p className=" text-lg text-center md:text-xl max-w-[90%]">
          <strong className="text-left text-yellow-400"></strong>{" "}
          {event.overview}
        </p>

        <button
          onClick={() => {
            router.push(`/events/${index + 1}`);
          }}
          className="bg-gradient-to-tr from-orange-300 to-orange-400 text-black px-5 py-4 rounded text-sm font-semibold uppercase"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Event1sec1;
