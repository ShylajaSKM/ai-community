const Footer = () => {
  return (
    <div className="w-full py-10 mt-20 bg-black text-white">
      <div className="w-full max-w-7xl flex flex-col justify-center gap-10 px-5 h-max mx-auto items-start md:flex-row">
        <div className="flex-1 md:flex-3/5 w-full h-max">
          <h2 className="text-xl font-semibold">Ai Product Hive</h2>
          <p className="text-md max-w-xl mb-20 text-white/90 mt-5">
            AI-focused community for startup and enterprise product development
            professionals, including product managers, designers, and dev teams.
          </p>
          <p>© 2025 AI Product Hive</p>
        </div>
        <div className="flex-1 md:flex-1/5 w-full h-full">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <p className="text-md text-white/90">FlashQuery.ai</p>
          <p className="text-md text-white/90">AIPH Community Updates</p>
        </div>
        <div className="flex-1 md:flex-1/5 w-full h-full">
          <h2 className="text-2xl font-semibold mb-4">
            Start your journey with us
          </h2>
          <button className="bg-gradient-to-tr w-full text-center from-orange-300 to-orange-400 text-black px-5 py-3 rounded text-sm font-semibold uppercase">
            Join Us on Slack
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
