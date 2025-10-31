"use client";

import React, { use } from "react";
import { eventsData } from "@/constant";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page({ params }) {
  const { id } = use(params);
  const event = eventsData[id - 1] || {
    title: "Unknown Event",
    organizer: "Madurai AI Developers Community",
    theme: "AI • Community • Code",
    date: "TBD",
    time: "TBD",
    venue: "TBD",
    entry: "Free",
    overview: "No overview available.",
    objectives: ["—"],
    communityBenefits: ["—"],
    callToAction: "Join us!",
    cover: "/hero-pattern.svg",
  };

  return (
    <div className="min-h-screen bg-[#07070a] text-slate-100 py-10 px-6 md:px-12 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Avatar className="ring-1 ring-white/10">
              <AvatarImage src="/images/pibi.png" alt="Madurai AI" />
              <AvatarFallback>MAI</AvatarFallback>
            </Avatar>

            <div className="leading-tight">
              <div className="text-xs text-slate-400">Hosted by</div>
              <div className="font-semibold">{event.organizer}</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <Badge className="uppercase bg-gradient-to-r from-primary-600 to-primary-400 text-white px-3 py-1">
              Week {id}
            </Badge>
            <div className="text-sm text-slate-400 text-center md:text-right">
              <div>{event.date}</div>
              <div className="mt-0.5">{event.time}</div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <section className="relative rounded-3xl overflow-hidden shadow-2xl bg-[rgba(255,255,255,0.03)] ring-1 ring-white/10 backdrop-blur-md border border-white/10 p-6 md:p-10 text-center md:text-left">
          <h1 className="font-extrabold text-3xl md:text-4xl text-white mb-6">
            {event.title}
          </h1>

          <CardContent className="p-0">
            <h4 className="mt-5 text-2xl font-semibold text-white text-center md:text-left">
              🌟 Event Overview
            </h4>
            <ul className="mt-2 list-disc list-inside text-slate-300 space-y-3 text-left">
              {event.objectives.map((o, idx) => (
                <li key={idx}>{o}</li>
              ))}
            </ul>

            <h4 className="mt-8 text-2xl font-semibold text-white text-center md:text-left">
              🤝 Community Benefits
            </h4>
            <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2 text-left">
              {event.communityBenefits.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>

            {event.sessionOverview && (
              <>
                <h4 className="mt-8 text-2xl font-semibold text-white text-center md:text-left">
                  🎯 Session Objectives
                </h4>
                <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2 text-left">
                  {event.sessionOverview.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </>
            )}

            {event.fromCommunity && (
              <>
                <h4 className="mt-8 text-2xl font-semibold text-white text-center md:text-left">
                  💬 From the Community, We Can Do
                </h4>
                <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2 text-left">
                  {event.fromCommunity.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </>
            )}
          </CardContent>
        </section>

        {/* Organizer Card */}
        <div className="mt-8">
          <Card className="bg-[rgba(255,255,255,0.02)] border border-white/10 text-center md:text-left">
            <div className="p-5">
              <div className="text-sm text-slate-400 font-semibold">
                Organizers
              </div>
              <div className="text-xs text-slate-400 mt-1">Core Team</div>
              <ul className="text-sm text-slate-300 space-y-2 mt-2">
                <li>Lead: Siranjeevi</li>
                <li>Events: Team A</li>
                <li>Community: Team B</li>
              </ul>
            </div>
          </Card>
        </div>

        <footer className="mt-10 text-center text-sm text-slate-400">
          Made with ❤️ by the Madurai AI Developers Community
        </footer>
      </div>
    </div>
  );
}
