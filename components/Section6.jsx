import Image from "next/image";
import Link from "next/link";

const Section6 = () => {
  return (
    <div className="w-screen h-max relative bg-black text-white flex flex-col items-center justify-center py-10 md:py-16">
      <div className="absolute w-full h-full z-10 bg-[url('/images/wave-13.png')] bg-cover bg-center"></div>
      <div className="relative flex flex-col justify-center items-center gap-8 z-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-0 md:mb-8 w-full capitalize max-w-2xl mx-auto">
          Founding Company
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-3 justify-center">
          <div className="relative w-20 h-20">
            <Image
              src="/images/pibi.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="bg-clip-text leading-[1.5] text-transparent bg-gradient-to-br from-[#18689F] via-[#4FB3A5] to-[#4FB3A5] text-3xl md:text-4xl font-bold whitespace-nowrap">
            Pibi Technologies
          </div>
        </div>
        <p className="text-xl md:text-2xl px-5 font-semibold text-center text-gray-200 w-full max-w-7xl mx-auto">
          We help teams accelerate product delivery through{" "}
          <span className="text-[#FFAD06]">Agile UX/UI design</span>, clear{" "}
          <span className="text-[#FFAD06]">user stories</span>, and{" "}
          <span className="text-[#FFAD06]">test case documentation</span> — all
          designed to reduce risk and cut internal costs. Whether you're
          building an MVP or scaling fast, our team can support you every step
          of the way.
        </p>
        <Link href="/" className="text-sm md:text-xl">
          <span className="text-[#FF6B1E]">»</span>{" "}
          <span className="text-[#FFAD06] underline leading-[1.2]">
            Let’s talk — no strings attached
          </span>{" "}
          <span className="text-[#FF6B1E]">«</span>
        </Link>
        <h2 className="text-lg md:text-3xl px-4 font-extrabold leading-[1.8] text-center mt-10 mb-8 w-full capitalize max-w-5xl mx-auto">
          Explore cutting edge AI tools or share your own with our{" "}
          <span className="text-[#FF6B1E]">Community Network!</span>
        </h2>
      </div>
    </div>
  );
};

export default Section6;
