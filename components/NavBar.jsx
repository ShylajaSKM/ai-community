"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Events",
      path: "/events",
      subItems: [
        { name: "Event 1", path: "/events/event1" },
        { name: "Event 2", path: "/events/event2" },
      ],
    },
    {
      name: "Blog & Community Updates",
      path: "/blog",
    },
  ];

  const pathName = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsActive(false);
    };

    document.addEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="w-full z-[1000] flex justify-between relative items-center text-white max-w-10xl mx-auto p-`10">
      <div></div>
      <div className="hidden gap-7 md:flex relative">
        {navItems.map((item) =>
          item.subItems ? (
            <div key={item.name} className="relative group">
              <button
                className={`flex items-center text-md font-medium ${
                  pathName === item.path
                    ? "text-orange-400"
                    : "hover:text-orange-300"
                }`}
                onMouseOver={() => setIsActive(true)}
              >
                {item.name}
              </button>
              <div
                className={cn(
                  "absolute top-full left-0 flex-col bg-black rounded shadow-md mt-1 min-w-[150px] z-10",
                  isActive ? "flex" : "hidden"
                )}
              >
                {item.subItems.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.path}
                    className="px-4 py-2 text-white hover:bg-orange-500 hover:text-black"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.path}
              className={`text-md font-medium ${
                pathName === item.path
                  ? "text-orange-400"
                  : "hover:text-orange-300"
              }`}
            >
              {item.name}
            </Link>
          )
        )}
      </div>

      <Sheet className="bg-black">
        <SheetTrigger className="px-4">
          <Menu className="text-white block md:hidden" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.name}
                className={`block text-md font-medium ${
                  pathName === item.path
                    ? "text-orange-400"
                    : "hover:text-orange-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <button className="bg-gradient-to-tr hidden md:block from-orange-300 to-orange-400 text-black px-5 py-3 rounded text-sm font-semibold uppercase">
        Join Us on Slack
      </button>
    </nav>
  );
};

export default NavBar;
