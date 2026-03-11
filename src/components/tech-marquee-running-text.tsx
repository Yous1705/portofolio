"use client";

import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const words = [
  "Welcome to my portfolio!",
  "Yous Sibarani",
  "Fullstack Software Engineer",
  "SKILLS",
  "EXPERIENCE",
  "PROJECTS",
  "CONTACT",
  "IS DOWN BELOW!",
  "AND DONT FORGET TO CHECK ABOUT ME!",
];

export function RunningText() {
  const [phase, setPhase] = useState<"center">("center");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (phase === "center") {
        if (index < words.length - 1) {
          setIndex(index + 1);
        } else {
          setIndex(0);
          setPhase("center");
        }
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [index, phase]);
  return (
    <div className="h-[25vh] flex items-center justify-center overflow-hidden border-y border-border">
      {phase === "center" && (
        <span className="text-7xl font-bold text-blue-400 animate-pulse tracking-widest">
          {words[index]}
        </span>
      )}
    </div>
  );
}
