const Section8 = () => {
  return (
    <div className="w-screen h-max relative bg-black text-white flex flex-col items-center justify-center py-10 md:py-16">
      <div className="absolute w-full h-full z-10 bg-[url('/images/wave-13.png')] bg-cover bg-center"></div>
      <div className="relative flex flex-col justify-center items-center gap-8 z-20">
        <h2 className="text-xl md:text-5xl px-4 font-extrabold leading-[1.8] text-center mt-25 mb-8 w-full capitalize max-w-5xl mx-auto">
          Explore cutting edge AI tools or share your own with our{" "}
          <span className="text-[#FF6B1E]">Community Network!</span>
        </h2>
      </div>
    </div>
  );
};

export default Section8;
