import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Section9 = () => {
  const newsletter = [
    {
      title:
        "The Ultimate Solution to Job Search Problems: How JobLogr.com is Revolutionizing the Job Search Game",
      author: "Maks Khamrovskyi",
      date: "16 October 2024",
      description:
        "In today’s fast-paced digital age, the job search process has become a marathon, demanding efficiency, perseverance, and tech-savviness. Yet, even…",
    },
    {
      title: "The Power of AI Communities: Why You Should Join One",
      author: "Maks Khamrovskyi",
      date: "12 August 2024",
      description:
        "Our AI community has reached 1000 members on Slack, and we have seen the incredible power that communities represent! You…",
    },
    {
      title: "The Best AI Communities Online",
      author: "Maks Khamrovskyi",
      date: "27 May 2024",
      description:
        "Connect With The Top Minds In AIJoin our Slack AI community It’s hard to find an AI-based community where everyone…",
    },
  ];
  return (
    <div className="w-screen h-max relative bg-white text-black flex flex-col items-center justify-center py-10 md:py-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 w-full capitalize">
        Check out our bi-weekly Newsletter
      </h2>
      <div className="grid mt-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-5">
        {newsletter.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <div className="w-full relative aspect-video overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="Newsletter Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <span className="text-sm text-[#FFAD06]">Blog</span>
            <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
            <div className="text-sm w-full text-black flex justify-start items-center gap-2">
              By {item.author}{" "}
              <div className="w-2 h-2 rounded-full bg-black"></div> {item.date}
            </div>
            <p className="text-black font-light">{item.description}</p>
            <Link
              href="/"
              className="text-sm uppercase flex items-center gap-2"
            >
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section9;
