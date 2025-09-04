import Testimonials from "./Testimonials";

const Section5 = () => {
  return (
    <div className="w-full text-white md:min-h-screen bg-black flex flex-col items-center py-10 md:py-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 w-full capitalize max-w-2xl mx-auto">
        Meet some of the members
      </h2>
      <p className="text-sm md:text-lg text-center text-gray-200 w-full max-w-2xl mx-auto">
        We've got community members from all walks of life and backgrounds. Here
        are some of them!
      </p>
      <Testimonials />
    </div>
  );
};

export default Section5;
