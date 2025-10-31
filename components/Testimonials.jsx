"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        "border-border bg-white border shadow-sm",
        "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="text-black text-sm font-normal select-none">
        {description}
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <div className="w-10 aspect-square rounded-full bg-black flex justify-center items-center">
          {name.charAt(0)}
        </div>

        <div>
          <p className="text-black font-medium">{name}</p>
          <p className="text-muted-foreground text-xs font-normal">{role}</p>
        </div>
      </div>
    </div>
  );
}
const testimonials = [
  {
    name: "Jaya Lakshmi",
    role: "Strategic leader",
    img: "/images/team2.HEIC",
    description: (
      <p>
        “Aspiring founder turned developer and now Gen AI enthusiast. I am
        trying to build the best RAG system as I see it as the pivotal part of a
        successful AI bot with company resources“
      </p>
    ),
  },
  {
    name: "Maya Rodriguez",
    role: "Lead Developer at Skyline Digital",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    description: (
      <p>
        “I’m a PM at an EdTech scale-up from the Netherlands. Looking into AI to
        support teachers in their work related to building and grading exams.“
      </p>
    ),
  },
  {
    name: "Ethan Park",
    role: "Startup Founder at Elevate Labs",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    description: (
      <p>
        “I am a Software Engineer with 10+ years of experience, currently
        navigating the world of SaaS for Enterprise and Enterprise segments as a
        Solution Architect and CTO.“
      </p>
    ),
  },
  {
    name: "Zoe Bennett",
    role: "UX Architect at Fusion Systems",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description: (
      <p>
        “Mathematics Graduate worked at McKinsey. Now building sandboxed cloud
        environments for AI-powered apps and agentic workflows“
      </p>
    ),
  },
  {
    name: "Patrick Olsen",
    role: "Strategic leader",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    description: (
      <p>
        “Aspiring founder turned developer and now Gen AI enthusiast. I am
        trying to build the best RAG system as I see it as the pivotal part of a
        successful AI bot with company resources“
      </p>
    ),
  },
  {
    name: "Maya Rodriguez",
    role: "Lead Developer at Skyline Digital",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    description: (
      <p>
        “I’m a PM at an EdTech scale-up from the Netherlands. Looking into AI to
        support teachers in their work related to building and grading exams.“
      </p>
    ),
  },
  {
    name: "Ethan Park",
    role: "Startup Founder at Elevate Labs",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    description: (
      <p>
        “I am a Software Engineer with 10+ years of experience, currently
        navigating the world of SaaS for Enterprise and Enterprise segments as a
        Solution Architect and CTO.“
      </p>
    ),
  },
  {
    name: "Zoe Bennett",
    role: "UX Architect at Fusion Systems",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description: (
      <p>
        “Mathematics Graduate worked at McKinsey. Now building sandboxed cloud
        environments for AI-powered apps and agentic workflows“
      </p>
    ),
  },
  {
    name: "Ethan Park",
    role: "Startup Founder at Elevate Labs",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    description: (
      <p>
        “I am a Software Engineer with 10+ years of experience, currently
        navigating the world of SaaS for Enterprise and Enterprise segments as a
        Solution Architect and CTO.“
      </p>
    ),
  },
  {
    name: "Zoe Bennett",
    role: "UX Architect at Fusion Systems",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description: (
      <p>
        “Mathematics Graduate worked at McKinsey. Now building sandboxed cloud
        environments for AI-powered apps and agentic workflows“
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="relative container overflow-hidden">
      <div className="absolute top-20 -left-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:50s]": i === 0,
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20%"></div>
        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20%"></div>
      </div>
    </section>
  );
}
