import Image from "next/image";

const Section7 = () => {
  const products = [
    {
      title: "Sinfonia",
      description:
        "Sinfonia empowers product managers by streamlining the ideation, evaluation, and definition of product requirements.",
      founder: "Matt Genovese",
    },
    {
      title: "MindyGem",
      description:
        "Create full-cycle development requirements in minutes with the power of AI",
      founder: "Valentyna Zakharova",
    },
    {
      title: "Community Echo",
      description:
        "Create unique community-focused content to increase engagement",
      founder: "Maksym Khamrovskyi",
    },
    {
      title: "AI ML Jobs",
      description: "Job board for AI, Data Science, and Machine Learning Jobs",
      founder: "Pri",
    },
    {
      title: "Cloud Careers Hub",
      description:
        "Job board at the forefront of Cloud Computing and Artificial Intelligence.",
      founder: "Laura Dobos",
    },
    {
      title: "Airstrip",
      description: "Open-source Enterprise AI Management Platform",
      founder: "Hendy Chua",
    },
  ];

  return (
    <div className="w-screen h-max relative bg-black text-white flex flex-col items-center justify-center py-10 md:py-16">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8 w-full capitalize max-w-3xl mx-auto">
        Notable Community Projects
      </h2>
      <p className="text-sm md:text-lg text-center px-4 text-gray-200 w-full max-w-2xl mx-auto">
        Here are some of the projects our community members are working on.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mt-8 mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <div className="w-[30%] md:w-[60%] aspect-square relative rounded-lg">
              <Image
                src={"/images/pibi.png"}
                fill
                className="object-cover"
                alt={product.title}
              />
            </div>
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-400 px-4 text-center md:text-start">
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
