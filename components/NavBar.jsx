"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Community Events",
      path: "",
      subItems: [{ name: "Past Events", path: "/events/past-events" }],
    },
    { name: "Blog", path: "/blog" },
  ];

  const pathName = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsActive(false);
    };
    document.addEventListener("click", handleClickOutside);
  }, []);

  const formatPathName = (path) => {
    if (path === "/events/past-events" || path === "/events/upcoming-events") {
      return "Community Events";
    }
    return path;
  };

  return (
    <nav className="w-screen px-6 py-4 flex justify-between items-center text-white relative">
      {/* Mobile Menu Icon on the Left */}
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-white" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.path}
                    onClick={() => setIsMobileActive(true)}
                    className={`block text-md font-medium ${
                      pathName === item.path
                        ? "text-orange-400"
                        : "hover:text-orange-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {isMobileActive &&
                    item.subItems &&
                    item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.path}
                        className="px-4 py-2 text-white hover:bg-orange-500 hover:text-black block"
                      >
                        {sub.name}
                      </Link>
                    ))}
                </div>
              ))}
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      {/* Center Nav Items for Desktop */}
      <div className="hidden md:flex gap-7">
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
                formatPathName(pathName) === item.path
                  ? "text-orange-400"
                  : "hover:text-orange-300"
              }`}
            >
              {item.name}
            </Link>
          )
        )}
      </div>

      {/* Join Button on the Right */}
      <button
        onClick={() =>
          window.open(
            "https://chat.whatsapp.com/DTAYxvdJW8Z2CT82WcaWlY",
            "_blank"
          )
        }
        className="bg-gradient-to-tr from-orange-300 to-orange-400 hover:from-orange-400 hover:to-orange-500 flex gap-2 items-center text-black px-5 py-3 rounded text-sm font-semibold uppercase transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        Join Us on Slack
      </button>
    </nav>
  );
};

export default NavBar;
