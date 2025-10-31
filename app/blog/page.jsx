"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BlogCard() {
  const router = useRouter();

  const blogs = [
    {
      id: 1,
      title: "1. AI Product Thinking — From Ideas to Intelligent Solutions",
      desc: "From idea to impact—build AI that matters",
    },
    {
      id: 2,
      title: "2. Designing Intuitive AI Experiences — The Role of UI/UX",
      desc: "Design trust, not just interfaces",
    },
    {
      id: 3,
      title: "3. Building AI MVPs That Solve Real Problems",
      desc: "Start small, solve big—your AI MVP journey begins here",
    },
    {
      id: 4,
      title: "4. Scaling Your AI Product with PLG & GTM Strategies",
      desc: "Let your product speak, scale, and sell itself",
    },
    {
      id: 5,
      title: "5. Execution Excellence — Turning AI Knowledge into Action",
      desc: "Turn learning into action—build, test, repeat",
    },
    {
      id: 6,
      title: "6. Full Stack App Development with AI Integration",
      desc: "Code the future—AI-powered apps from front to back",
    },
    {
      id: 7,
      title: "7. The GenAI Ecosystem for Modern Product Development",
      desc: "Build smarter—map GenAI to real-world workflows",
    },
    {
      id: 8,
      title:
        "8. Building Agentic RAG Applications: The Future of Intelligent AI Systems",
      desc: "Autonomous apps, powered by reasoning and retrieval",
    },
  ];

  return (
<<<<<<< HEAD
    <div className="bg-gray-950 flex items-center justify-center p-6">
      <Card className="w-full max-w-sm bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            1.AI Product Thinking — From Ideas to Intelligent Solutions
          </CardTitle>
        </CardHeader>
=======
    <div className="min-h-screen bg-gray-950 p-10">
      <h1 className="text-6xl text-center font-bold mb-12 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-200 bg-clip-text text-transparent ">
        AI Blog Series
      </h1>
>>>>>>> dc0afc807310b679c31866cb23c4f4b0def9c8b3

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center ">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="w-full max-w-xl bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl flex flex-col justify-between items-center"
          >
            <CardContent className="flex w-full flex-1 flex-col items-center gap-2">
              <div className="w-[90%] mx-auto aspect-square object-cover rounded-t-none rounded-b-sm relative">
                <Image
                  src={`/images/W${blog.id}.jpg`}
                  fill
                  alt={blog.title}
                  className="object-cover"
                />
              </div>
              <p className="text-gray-400 text-lg p-5">{blog.desc}</p>
            </CardContent>

<<<<<<< HEAD
        <CardFooter>
          <Button
            onClick={handleReadMore}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            3: Building AI MVPs That Solve Real Problems Transforming Concepts
            into Impactful AI Prototypes
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 text-sm">From Vision to Validation</p>
        </CardContent>

        <CardFooter>
          <Button
            onClick={handleReadMore}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            4.Scaling Your AI Product with PLG & GTM Strategies Driving Growth
            Through Product-Led and Market-Driven Approaches{" "}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 text-sm">
            The Growth Challenge for AI Startups
          </p>
        </CardContent>

        <CardFooter>
          <Button
            onClick={handleReadMore}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            5: Execution Excellence — Turning AI Knowledge into
            Action2.Designing Intuitive AI Experiences — The Role of UI/UX
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 text-sm">
            Beyond Learning — It’s About Doing
          </p>
        </CardContent>

        <CardFooter>
          <Button
            onClick={handleReadMore}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            6.Full Stack App Development with AI Integration
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 text-sm">
            Building the Next Generation of Smart Applications{" "}
          </p>
        </CardContent>

        <CardFooter>
          <Button
            onClick={handleReadMore}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            7. The GenAI Ecosystem for Modern Product Development
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 text-sm">
            The Dawn of Generative Intelligence{" "}
          </p>
        </CardContent>

        <CardFooter>
          <Button
            onClick={handleReadMore}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
      <Card className="w-full max-w-sm bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            8.Building Agentic RAG Applications: The Future of Intelligent AI
            Systems
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 text-sm">
            From Static AI to Intelligent Agents{" "}
          </p>
        </CardContent>

        <CardFooter>
          <Button
            onClick={handleReadMore}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
=======
            <CardFooter>
              <Button
                onClick={() => router.push(`/blog/${blog.id}`)} // ✅ dynamic navigation
                className="w-full bg-gradient-to-tr from-orange-300 to-orange-400 text-black hover:opacity-90 rounded text-sm font-semibold uppercase transition-all duration-300"
              >
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
>>>>>>> dc0afc807310b679c31866cb23c4f4b0def9c8b3
    </div>
  );
}
