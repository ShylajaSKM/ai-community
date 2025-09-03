"use client";
import { useEffect, useId, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Briefcase, Cpu, Code2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:10s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

const roles = [
  {
    title: "Product Managers",
    icon: <Users className="size-8 text-violet-600" />,
  },
  {
    title: "AI Engineers",
    icon: <Cpu className="size-8 text-cyan-600" />,
  },
  {
    title: "Software Engineers",
    icon: <Code2 className="size-8 text-green-600" />,
  },
  {
    title: "Business Owners",
    icon: <Briefcase className="size-8 text-orange-600" />,
  },
];

function shuffleArray(array) {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function Card({ title, icon, bg }) {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 cursor-pointer overflow-hidden rounded-2xl p-4",
        "transform-gpu"
      )}
    >
      {icon}
      <span className="text-center text-white text-sm font-medium">
        {title}
      </span>
    </motion.div>
  );
}

export function SkiperMarquee() {
  const [randomRoles, setRandomRoles] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRandomRoles(shuffleArray([...roles]));
    }
  }, []);

  return (
    <section id="cta">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:10s]"
              repeat={6}
            >
              {randomRoles.map((role, idx) => (
                <Card key={idx} {...role} />
              ))}
            </Marquee>
            <div className="absolute">
              <div className="absolute inset-0 -z-10 rounded-full opacity-40 blur-xl" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
