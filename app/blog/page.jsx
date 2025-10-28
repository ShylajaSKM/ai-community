"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import B1 from "@/components/blog1/B1";
import B2 from "@/components/blog1/B2";
import B3 from "@/components/blog1/B3";
import B4 from "@/components/blog1/B4";
import B5 from "@/components/blog1/B5";
import B6 from "@/components/blog1/B6";
import B7 from "@/components/blog1/B7";
import B8 from "@/components/blog1/B8";

export default function B1CardPage() {
  return (
    <main className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-10 p-6">
      {/* Section 1 */}
      <div className="flex flex-wrap justify-center gap-10">
        <Card className="max-w-3xl w-full bg-gray-900 border border-gray-700 text-white shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-yellow-400 font-bold">
              AI Product Thinking — From Ideas to Intelligent Solutions
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 text-lg leading-relaxed">
            <B1 />
          </CardContent>
        </Card>

        <Card className="max-w-3xl w-full bg-gray-900 border border-gray-700 text-white shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-yellow-400 font-bold">
              AI Product Thinking — From Ideas to Intelligent Solutions
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 text-lg leading-relaxed">
            <B2 />
          </CardContent>
        </Card>
      </div>

      {/* Section 2 */}
      <div className="flex flex-wrap justify-center gap-10">
        <Card className="max-w-3xl w-full bg-gray-900 border border-gray-700 text-white shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-yellow-400 font-bold">
              Laying the Foundation: Problem Discovery and Validation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 text-lg leading-relaxed">
            <B3 />
          </CardContent>
        </Card>

        <Card className="max-w-3xl w-full bg-gray-900 border border-gray-700 text-white shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-yellow-400 font-bold">
              Defining Success: From Outputs to Outcomes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 text-lg leading-relaxed">
            <B4 />
          </CardContent>
        </Card>
        <Card className="max-w-3xl w-full bg-gray-900 border border-gray-700 text-white shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-yellow-400 font-bold">
              Frameworks for Turning Ideas into Intelligent Products
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 text-lg leading-relaxed">
            <B5 />
          </CardContent>
        </Card>
        <Card className="max-w-3xl w-full bg-gray-900 border border-gray-700 text-white shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-yellow-400 font-bold">
              Bridging Business and Technology
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 text-lg leading-relaxed">
            <B6 />
          </CardContent>
        </Card>
        <Card className="max-w-3xl w-full bg-gray-900 border border-gray-700 text-white shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-yellow-400 font-bold">
              Building with Purpose: From Prototype to Product
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 text-lg leading-relaxed">
            <B7 />
          </CardContent>
        </Card>
        <Card className="max-w-3xl w-full bg-gray-900 border border-gray-700 text-white shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-yellow-400 font-bold">
              Conclusion: Turning AI Vision into Business Reality
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-200 text-lg leading-relaxed">
            <B8 />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
