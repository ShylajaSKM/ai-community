// app/events/event1/page.jsx
import Image from "next/image";

const Event1sec1 = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 text-white md:py-16 bg-black">
      {/* Left image */}
      <div className="w-full aspect-square relative p-6">
        <Image
          src={"/images/AICOMMUNITY1.png"}
          alt="Hero Image"
          fill
          className="object-contain rounded-lg"
        />
      </div>

      {
        // <div className="w-full aspect-square relative">
        //   <Image
        //     src={"/images/img12.jpg"}
        //     alt="Hero Image"
        //     fill
        //     className="object-cover rounded-lg"
        //   />
        // </div>
      }

      {/* Right text section */}
      <div className="flex flex-col justify-center items-center text-center px-4 gap-5">
        <h3 className="text-3xl font-bold">Week 1</h3>
        <h3 className="text-4xl text-yellow-400 font-bold">
          Topic - AI Product Thinking
        </h3>
        <p className="text-lg md:text-2xl max-w-[90%]">
          <strong>Madurai AI Developer Community</strong>{" "}
        </p>
        <p className="text-lg md:text-xl max-w-[90%]">
          <strong>Theme :</strong> Code Local Think Global
        </p>
        <p className="text-lg md:text-xl max-w-[90%]">
          <strong>Time :</strong> 4 PM to 6 PM
        </p>
        <p className="text-lg md:text-xl max-w-[90%]">
          <strong>Venue :</strong> PiBi Technologies, Zudio Backside, Opp.
          Income Tax Office, BB Kulam, Madurai
        </p>
      </div>
    </div>
  );
};

export default Event1sec1;
