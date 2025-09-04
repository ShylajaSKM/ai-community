import Image from "next/image";
import Link from "next/link";

const Section6 = () => {
  return (
    <div className="w-screen h-max relative bg-black text-white flex flex-col items-center justify-center py-10 md:py-16">
      <div className="absolute w-full h-full z-10 bg-[url('/images/wave-13.png')] bg-cover bg-center"></div>
      <div className="relative flex flex-col justify-center items-center gap-8 z-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 w-full capitalize max-w-2xl mx-auto">
          Founding Company
        </h2>
        <div className="flex items-center gap-3 justify-center">
          <div className="relative w-14 h-14 md:w-20 md:h-20">
            <Image
              src="/images/pibi.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="bg-clip-text leading-[1.5] text-transparent bg-gradient-to-br from-[#18689F] via-[#4FB3A5] to-[#4FB3A5] text-3xl md:text-5xl font-bold whitespace-nowrap">
            Pibi Technologies
          </span>
        </div>
        <p className="text-xl md:text-2xl px-5 font-semibold text-center text-gray-200 w-full max-w-7xl mx-auto">
          Accelerate products to market with Agile UX/UI design, user story and
          test case documentation. De-risk your development while reducing
          internal costs.
        </p>
        <Link href="/" className="text-sm md:text-xl">
          <span className="text-[#FF6B1E]">»</span>{" "}
          <span className="text-[#FFAD06] underline leading-[1.2]">
            Reach out for a no-strings-attached call
          </span>{" "}
          <span className="text-[#FF6B1E]">«</span>
        </Link>
      </div>
    </div>
  );
};

export default Section6;
