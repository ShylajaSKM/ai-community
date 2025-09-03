"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const NavBar = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Mind Submit",
      path: "/mind-submit",
    },
    {
      name: "Blog & Community Updates",
      path: "/blog",
    },
  ];

  const pathName = usePathname();

  return (
    <nav className="w-full flex justify-between relative items-center text-white max-w-7xl mx-auto p-4">
      <div></div>
      <div className="hidden gap-5 md:flex">
        {navItems.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className={`text-md font-medium ${
              pathName === item.path
                ? "text-orange-400"
                : "hover:text-orange-300"
            }`}
          >
            {item.name}
          </Link>
        ))}
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
