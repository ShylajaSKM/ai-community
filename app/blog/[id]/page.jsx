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
    <div className="bg-gray-950 text-gray-300 min-h-screen">
      {/* 🧠 Blog Heading */}
      <div className="text-center py-10 px-4">
        {data &&
          data.map((section) => {
            if (section.type === "heading") {
              return (
                <h1
                  key={section.content}
                  className="text-4xl md:text-5xl font-bold mb-5 
                             bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-200 
                             bg-clip-text text-transparent"
                >
                  {section.content}
                </h1>
              );
            } else {
              return null;
            }
          })}
      </div>

      {/* 🖼️ Blog Image */}
      <div className="w-[90%] md:w-[70%] mx-auto aspect-video relative mb-10">
        <Image
          src={`/images/W${id}.jpg`}
          alt="Blog Image"
          fill
          className="object-contain rounded-lg"
        />
      </div>

      {/* 📝 Small Heading */}
      <div className="text-center px-4">
        {data &&
          data.map((section) => {
            if (section.type === "Small") {
              return (
                <h4
                  key={section.content}
                  className="text-2xl md:text-3xl font-bold p-5 
                             bg-gradient-to-r from-blue-400 via-blue-300 to-purple-200 
                             bg-clip-text text-transparent"
                >
                  {section.content}
                </h4>
              );
            } else {
              return null;
            }
          })}
      </div>

      {/* 🧾 Main Content */}
      <div className="max-w-4xl mx-auto text-center px-4 py-8">
        {data &&
          data.map((section, idx) => {
            if (section.type === "title") {
              return (
                <h2
                  key={idx}
                  className="text-2xl md:text-3xl font-bold mb-5 text-blue-200"
                >
                  {section.content}
                </h2>
              );
            } else if (section.type === "para") {
              return (
                <p
                  key={idx}
                  className="text-lg md:text-xl leading-relaxed mb-5 text-gray-300"
                >
                  {section.content}
                </p>
              );
            } else if (section.type === "points") {
              return (
                <ul
                  key={idx}
                  className="list-disc list-inside inline-block text-left"
                >
                  {section.content.map((point, i) => (
                    <li
                      key={i}
                      className="text-lg md:text-xl leading-relaxed mt-2"
                    >
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
