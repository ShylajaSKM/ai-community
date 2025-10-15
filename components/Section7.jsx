import Image from "next/image";

const Section7 = () => {
  const products = [
    {
      title: "Sinfonia",
      description:
        "Streamlining product management by simplifying ideation, evaluation, and requirement definition.",
      founder: "Matt Genovese",
    },
    {
      title: "MindyGem",
      description:
        "AI-powered tool to generate full-cycle development requirements in minutes.",
      founder: "Valentyna Zakharova",
    },
    {
      title: "Community Echo",
      description:
        "Creating community-focused content designed to boost engagement and collaboration.",
      founder: "Maksym Khamrovskyi",
    },
    {
      title: "AI ML Jobs",
      description:
        "A dedicated job board for AI, Data Science, and Machine Learning opportunities.",
      founder: "Pri",
    },
    {
      title: "Cloud Careers Hub",
      description:
        "Job platform at the forefront of cloud computing and AI talent.",
      founder: "Laura Dobos",
    },
    {
      title: "Airstrip",
      description:
        "An open-source enterprise AI management platform for scalable adoption.",
      founder: "Hendy Chua",
    },
  ];

  return (
    <div className="w-screen h-max relative bg-white text-black flex flex-col items-center justify-center py-10 md:py-16">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8 w-full capitalize max-w-3xl mx-auto">
        Notable Community Projects
      </h2>
      <p className="text-sm md:text-lg text-center px-4 text-black w-full max-w-2xl mx-auto">
        Explore some of the exciting initiatives our members are building and
        contributing to:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mt-8 mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col p-4 rounded-xl shadow-xl shadow-black/20 items-center md:items-start mb-4"
          >
            <div className="w-[30%] md:w-[50%] aspect-square relative rounded-lg">
              <Image
                src={"/images/pibi.png"}
                fill
                className="object-cover"
                alt={product.title}
              />
            </div>
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-black px-4 md:px-0 text-center md:text-start">
              {product.description}
            </p>
            <p className="text-[#FFD500] text-md font-semibold">
              {product.founder}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7;
