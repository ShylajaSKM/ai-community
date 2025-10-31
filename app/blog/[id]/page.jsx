"use client";

import Image from "next/image";
import { blogPosts } from "@/constant";
import { use, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

export default function Blog1Page({ params }) {
  const { id } = use(params);
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(blogPosts[id - 1]);
  }, [id]);

  return (
    <Card className="my-5 mx-5 md:mx-20 lg:mx-30 shadow-lg bg-black">
      <div className=" bg-gray-950 text-gray-300 ">
        <div className=" text-center py-10">
          {data &&
            data.map((section) => {
              if (section.type === "heading") {
                return (
                  <h1 className="text-5xl font-bold mb-5 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-200 bg-clip-text text-transparent">
                    {section.content}
                  </h1>
                );
              } else {
                return null;
              }
            })}
        </div>
        <div className="w-[90%] mx-auto aspect-video relative">
          <Image
            src={`/images/W${id}.jpg`}
            alt="Blog Image"
            fill
            className="object-contain rounded-lg"
          />
        </div>

        <div className="max-w-7xl mx-auto">
          {data &&
            data.map((section) => {
              if (section.type === "title") {
                return (
                  <h1 className="text-3xl font-bold mb-5 text-blue-200">
                    {section.content}
                  </h1>
                );
              } else if (section.type === "para") {
                return (
                  <p className="text-2xl leading-12 mb-5 mt-6">
                    {section.content}
                  </p>
                );
              } else if (section.type === "points") {
                return (
                  <ul className="list-disc list-inside mt-4">
                    {section.content.map((point, idx) => (
                      <li key={idx} className="text-2xl leading-relaxed mt-5">
                        {point}
                      </li>
                    ))}
                  </ul>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    </Card>
  );
}
