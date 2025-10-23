// app/events/event1/page.jsx
import Image from "next/image";

const Event1sec10 = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto gap-10 grid grid-cols-1 md:grid-cols-3 text-white md:py-16 bg-black">
      {/* Left image */}
      <div className="w-full aspect-square relative">
        <Image
          src={"/images/img12.jpg"}
          alt="Hero Image"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Center image */}
      <div className="w-full aspect-square relative">
        <Image
          src={"/images/img12.jpg"}
          alt="Hero Image"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Right text section */}
      <div className="flex flex-col justify-center items-center text-center px-4 gap-5">
        <h3 className="text-3xl font-bold">Who are we?</h3>
        <p className="text-lg md:text-xl max-w-[90%]">
          We're a growing community of{" "}
          <strong>builders, designers, product folks, and developers</strong>{" "}
          who care deeply about the future of tech — especially around{" "}
          <strong>AI, product, and creativity</strong>.
        </p>
        <p className="text-lg md:text-xl max-w-[90%]">
          We believe in open collaboration, idea-sharing, and lifting each other
          up.{" "}
          <strong>
            If that sounds like your kind of energy — we’d love to have you with
            us.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Event1sec10;
