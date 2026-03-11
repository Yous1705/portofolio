"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const words = [
  "SKILLS",
  "EXPERIENCE",
  "PROJECTS",
  "CONTACT",
  "IS DOWN BELOW!",
  "AND DONT FORGET TO CHECK ABOUT ME!",
];

const welcomeWords = [
  "Welcome to my portfolio!",
  "Yous Sibarani",
  "Fullstack Software Engineer",
];
export function RunningText() {
  const [phase, setPhase] = useState<"marquee" | "center">("marquee");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (phase === "marquee") {
      const timer = setTimeout(() => {
        setPhase("center");
      }, 9000);
      return () => clearTimeout(timer);
    }

    if (phase === "center") {
      const timer = setTimeout(() => {
        if (index < words.length - 1) {
          setIndex(index + 1);
        } else {
          setIndex(0);
          setPhase("marquee");
        }
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [phase, index]);
  return (
    <div className="h-[25vh] flex items-center justify-center overflow-hidden border-y border-border">
      {phase === "marquee" && (
        <Marquee speed={60} gradient={false}>
          {welcomeWords.map((wellcomeWord, i) => (
            <span
              key={i}
              className={cn(
                "mx-8 text-lg font-semibold tracking-widest text-blue-400 uppercase",
                i === index && "text-white",
              )}
            >
              {wellcomeWord}
            </span>
          ))}
        </Marquee>
      )}
      {phase === "center" && (
        <span className="text-7xl font-bold text-blue-400 animate-pulse tracking-widest">
          {words[index]}
        </span>
      )}
    </div>
  );
}
