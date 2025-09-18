const Footer = () => {
  return (
    <div className="w-full py-10 mt-20 bg-black text-white">
      <div className="w-full max-w-7xl flex flex-col justify-center gap-10 px-5 h-max mx-auto items-start md:flex-row">
        <div className="flex-1 xl:flex-3/5 w-full h-max">
          <h2 className="text-xl font-semibold">About Us</h2>
          <p className="text-md max-w-xl mb-20 text-white/90 mt-5">
            A dynamic community of professionals, creators, and enthusiasts—built to share knowledge, spark collaboration, and create opportunities for growth.
          </p>
         
        </div>
        <div className="flex-1 xl:flex-1/5 w-full h-full">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <p className="text-md text-white/90">FlashQuery.ai</p>
          <p className="text-md text-white/90">AIPH Community Updates</p>
        </div>
        <div className="flex-1 xl:flex-1/5 w-full h-full">
          <h2 className="text-xl font-semibold mb-4">
            Start your journey 
          </h2>
          <p className="text-md max-w-xl mb-20 text-white/90 mt-5">
          Your journey begins here—join our community and be part of something meaningful.</p>
           <p className="pb-3">© 2025 AI Product Hive</p>
          <button className="bg-gradient-to-tr from-orange-300 to-orange-400 
                   hover:from-orange-400 hover:to-orange-500 
                   flex gap-2 items-center 
                   text-black hover:text-black
                   px-5 py-3 rounded text-sm font-semibold uppercase 
                   transition-all duration-600 hover:scale-109 hover:shadow-lg 
                   cursor-pointer">
            Join Us on Slack
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
