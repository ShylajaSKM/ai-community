"use client";

import { blogPosts } from "@/constant";
import { use, useEffect, useState } from "react";

export default function Blog1Page({ params }) {
  const { id } = use(params);
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(blogPosts[id - 1]);
  }, [id])

  return (
    <div className=" bg-gray-950 text-white p-10">
      <div className="max-w-7xl mx-auto">
        {data && data.map((section) => {
          if (section.type === "title") {
            return (
              <h1 className="text-2xl font-bold mb-4 text-yellow-400">
                {section.content}
              </h1>
            );
          } else if (section.type === "para") {
            return (
              <p className="text-lg leading-relaxed mt-4">{section.content}</p>
            );
          } else if (section.type === "points") {
            return (
              <ul className="list-disc list-inside mt-4">
                {section.content.map((point, idx) => (
                  <li key={idx} className="text-lg leading-relaxed mt-2">
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
