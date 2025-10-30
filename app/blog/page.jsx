"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function BlogCard() {
  const router = useRouter();

  const handleReadMore = () => {
    router.push("/blog/blog1"); // 👈 Navigate correctly
  };

  return (
    <div className="bg-gray-950 flex items-center  p-6">
      <Card className="w-full max-w-sm bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            1.AI Product Thinking — From Ideas to Intelligent Solutions
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 text-sm">
            The Shift from AI Hype to AI Impact
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
            2.Designing Intuitive AI Experiences — The Role of UI/UX
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 text-sm">
            Where AI Meets Human Experience
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
            3: Building AI MVPs That Solve Real Problems
Transforming Concepts into Impactful AI Prototypes
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 text-sm">
            From Vision to Validation
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
4.Scaling Your AI Product with PLG & GTM Strategies
Driving Growth Through Product-Led and Market-Driven
Approaches          </CardTitle>
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
          <CardTitle className="text-xl font-semibold">5: Execution Excellence — Turning AI Knowledge into Action2.Designing Intuitive AI Experiences — The Role of UI/UX
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
          <CardTitle className="text-xl font-semibold">6.Full Stack App Development with AI Integration
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 text-sm">
Building the Next Generation of Smart Applications          </p>
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
          <CardTitle className="text-xl font-semibold">7. The GenAI Ecosystem for Modern Product
Development
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 text-sm">
The Dawn of Generative Intelligence          </p>
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
          <CardTitle className="text-xl font-semibold">8.Building Agentic RAG Applications: The Future of
Intelligent AI Systems
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-gray-400 text-sm">
From Static AI to Intelligent Agents         </p>
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
      
      
      
    </div>
  );
}
