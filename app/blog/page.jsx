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

export default function BlogCard() {
  const router = useRouter();

  const blogs = [
    {
      id: 1,
      title: "1. AI Product Thinking — From Ideas to Intelligent Solutions",
      desc: "The Shift from AI Hype to AI Impact",
    },
    {
      id: 2,
      title: "2. Designing Intuitive AI Experiences — The Role of UI/UX",
      desc: "Where AI Meets Human Experience",
    },
    {
      id: 3,
      title: "3. Building AI MVPs That Solve Real Problems",
      desc: "From Vision to Validation",
    },
    {
      id: 4,
      title: "4. Scaling Your AI Product with PLG & GTM Strategies",
      desc: "Driving Growth Through Product-Led and Market-Driven Approaches",
    },
    {
      id: 5,
      title: "5. Execution Excellence — Turning AI Knowledge into Action",
      desc: "Beyond Learning — It’s About Doing",
    },
    {
      id: 6,
      title: "6. Full Stack App Development with AI Integration",
      desc: "Building the Next Generation of Smart Applications",
    },
    {
      id: 7,
      title: "7. The GenAI Ecosystem for Modern Product Development",
      desc: "The Dawn of Generative Intelligence",
    },
    {
      id: 8,
      title:
        "8. Building Agentic RAG Applications: The Future of Intelligent AI Systems",
      desc: "From Static AI to Intelligent Agents",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 p-10">
      <h1 className="text-3xl font-bold text-center text-white mb-10">
        AI Blog Series
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="w-full max-w-sm bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl flex flex-col justify-between"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {blog.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-400 text-sm">{blog.desc}</p>
            </CardContent>

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
    </div>
  );
}
