"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const logos = [
  "/tech/typescript.svg",
  "/tech/nextjs.svg",
  "/tech/react.svg",
  "/tech/nestjs.svg",
  "/tech/postgresql.svg",
  "/tech/prisma.svg",
  "/tech/tailwind.svg",
];

export function TechHeroGrid({ className }: { className?: string }) {
  const items = [...logos, ...logos]; // duplikat untuk loop mulus

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-[#121212] pointer-events-none z-10" />

      <div className="marquee-track flex w-[200%] gap-6 py-6">
        <div className="flex w-1/2 gap-6">
          {logos.map((src, i) => (
            <div
              key={`a-${i}`}
              className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur"
            >
              <Image
                src={src}
                alt="tech"
                width={60}
                height={60}
                className="opacity-80"
              />
            </div>
          ))}
        </div>

        <div className="flex w-1/2 gap-6">
          {logos.map((src, i) => (
            <div
              key={`b-${i}`}
              className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <Image
                src={src}
                alt="tech"
                width={60}
                height={60}
                className="opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
