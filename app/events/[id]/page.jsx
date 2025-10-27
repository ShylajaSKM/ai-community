"use client";

import React, { use } from "react";
import { eventsData } from "@/constant";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin } from "lucide-react";

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
    <div className="min-h-screen bg-[#07070a] text-slate-100 py-10 px-6 md:px-12">
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Avatar className="ring-1 ring-white/6">
              <AvatarImage src="/images/pibi.png" alt="Madurai AI" />
              <AvatarFallback>MAI</AvatarFallback>
            </Avatar>

            <div className="leading-tight">
              <div className="text-xs text-slate-400">Hosted by</div>
              <div className="font-semibold">{event.organizer}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Badge className="uppercase bg-gradient-to-r from-primary-600 to-primary-400 text-white px-3 py-1">
              Week {id}
            </Badge>
            <div className="text-sm text-slate-400 text-right">
              <div>{event.date}</div>
              <div className="mt-0.5">{event.time}</div>
            </div>
          </div>
        </div>

        <section className="relative rounded-3xl overflow-hidden shadow-2xl bg-[rgba(255,255,255,0.03)] ring-1 ring-white/6 backdrop-blur-md border border-white/6">
          <div
            className="absolute -inset-px rounded-3xl pointer-events-none"
            aria-hidden
          >
            <div className="h-full w-full rounded-3xl p-0.5 bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#06d6a0] opacity-40 blur-[20px]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-8 md:p-12">
            <div className="col-span-2">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  {event.title}
                </span>
              </h1>

              <p className="mt-4 text-slate-300 max-w-2xl">{event.overview}</p>

              <div className="mt-6 flex gap-3 flex-wrap">
                <Button variant="ghost" className="border border-white/6">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date} • {event.time}
                </Button>

                <Button variant="ghost" className="border border-white/6">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.venue}
                </Button>

                <Button
                  className="ml-1"
                  onClick={() =>
                    document
                      .getElementById("register")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Register (Free)
                </Button>
              </div>
            </div>

            <aside className="space-y-4">
              <Card className="bg-gradient-to-br w-full from-[#0b1221]/70 to-[#071028]/50 border border-white/6">
                <CardHeader>
                  <CardTitle className="flex items-center flex-col gap-2 md:flex-row justify-between">
                    <span className="text-white">Entry</span>
                    <Badge className="text-sm">{event.entry}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-slate-300">
                    Secure your slot. Limited seats may apply.
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex flex-col md:flex-row gap-2">
                    <Button
                      className="flex-1"
                      onClick={() =>
                        document
                          .getElementById("register")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Register Now
                    </Button>
                    <Button className="flex-1">Join Community</Button>
                  </div>
                </CardFooter>
              </Card>

              <Card className="p-4 border border-white/6">
                <div className="text-xs text-slate-800">Theme</div>
                <div className="font-semibold">{event.theme}</div>
                <Separator className="my-1" />
                <div className="text-xs text-slate-400">Organizers</div>
                <div className="text-sm text-slate-800">{event.organizer}</div>
              </Card>
            </aside>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2 space-y-6">
            <Card className="p-6 bg-[rgba(255,255,255,0.02)] border border-white/6">
              <CardHeader>
                <CardTitle className="text-lg">🌟 Event Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{event.overview}</p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">🎯 Session Objectives</h4>
                    <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2">
                      {event.objectives.map((o, idx) => (
                        <li key={idx}>{o}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">🤝 Community Benefits</h4>
                    <ul className="mt-3 list-disc list-inside text-slate-300 space-y-2">
                      {event.communityBenefits.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-[rgba(255,255,255,0.02)] border border-white/6">
              <CardHeader>
                <CardTitle className="text-lg">💬 From the Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{event.callToAction}</p>

                <div className="mt-4 flex gap-3">
                  <Button
                    onClick={() =>
                      navigator.share
                        ? navigator.share({
                            title: event.title,
                            text: event.overview,
                          })
                        : alert("Share not supported")
                    }
                  >
                    Share
                  </Button>
                  <Button variant="ghost" className="border border-white/6">
                    Suggest a Speaker
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div
              id="register"
              className="p-6 rounded-xl border border-white/6 bg-gradient-to-b from-[#071026]/50 to-transparent"
            >
              <h3 className="text-lg font-semibold">Register for Week {id}</h3>
              <p className="mt-2 text-slate-300">
                Quick register — we will confirm your seat via email.
              </p>

              <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  className="bg-transparent border border-white/6 rounded-md px-3 py-2 outline-none"
                  placeholder="Full name"
                />
                <input
                  className="bg-transparent border border-white/6 rounded-md px-3 py-2 outline-none"
                  placeholder="Email"
                />
                <input
                  className="col-span-1 md:col-span-2 bg-transparent border border-white/6 rounded-md px-3 py-2 outline-none"
                  placeholder="Comments (optional)"
                />
                <Button className="col-span-1 md:col-span-2">Submit</Button>
              </form>
            </div>
          </div>

          <aside className="space-y-6">
            <Card className="p-4 sticky top-6 bg-black border border-white/6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Next meetup</div>
                  <div className="font-semibold">
                    Week {Number(id) + 1} — TBD
                  </div>
                </div>
                <div>
                  <Badge>Free</Badge>
                </div>
              </div>

              <div className="mt-4 text-sm text-slate-300">
                Keep an eye on the community page for updates.
              </div>
            </Card>

            <Card className="p-4 bg-[rgba(255,255,255,0.02)] border border-white/6">
              <div className="text-sm font-semibold">Organizers</div>
              <div className="mt-3 text-xs text-slate-400">Core Team</div>
              <ul className="mt-2 text-sm text-slate-300 space-y-2">
                <li>Lead: Siranjeevi</li>
                <li>Events: Team A</li>
                <li>Community: Team B</li>
              </ul>
            </Card>
          </aside>
        </div>

        <footer className="mt-10 text-center text-sm text-slate-400">
          Made with ❤️ by the Madurai AI Developers Community
        </footer>
      </div>
    </div>
  );
}
