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
      <div className=" text-center py-2">
        {data &&
          data.map((section) => {
            if (section.type === "Small") {
              return (
                <h4 className="text-3xl font-bold p-7 bg-gradient-to-r from-blue-400 via-blue-300 to-purple-200 bg-clip-text text-transparent">
                  {section.content}
                </h4>
              );
            } else {
              return null;
            }
          })}
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
                <p className="text-2xl leading-12 mb-5">{section.content}</p>
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
  );
}
