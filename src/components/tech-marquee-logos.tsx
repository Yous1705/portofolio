"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type TechLogo = {
  name: string;
  src: string; // taruh di /public/tech/
};

const logos: TechLogo[] = [
  { name: "TypeScript", src: "/tech/typescript.svg" },
  { name: "Next.js", src: "/tech/nextjs.svg" },
  { name: "React", src: "/tech/react.svg" },
  { name: "NestJS", src: "/tech/nestjs.svg" },
  { name: "PostgreSQL", src: "/tech/postgresql.svg" },
  { name: "Prisma", src: "/tech/prisma.svg" },
  //   { name: "Tailwind CSS", src: "/tech/tailwind.svg" },
];

function LogoTile({ logo }: { logo: TechLogo }) {
  return (
    <div
      className="
        flex h-16 w-44 items-center gap-3 rounded-2xl
        border border-white/10 bg-white/10 px-4
        backdrop-blur
      "
      title={logo.name}
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/90">
        <Image
          src={logo.src}
          alt={logo.name}
          width={26}
          height={26}
          className="h-6 w-6 object-contain"
        />
      </div>

      <p className="text-sm font-medium text-white/85 whitespace-nowrap">
        {logo.name}
      </p>
    </div>
  );
}

export function TechMarqueeLogos({ className }: { className?: string }) {
  return (
    <div className={cn("marquee marquee-mask overflow-hidden", className)}>
      <div className="marquee-track flex w-[200%] gap-4">
        <div className="flex w-1/2 gap-4">
          {logos.map((l) => (
            <LogoTile key={`a-${l.name}`} logo={l} />
          ))}
        </div>
        <div className="flex w-1/2 gap-4">
          {logos.map((l) => (
            <LogoTile key={`b-${l.name}`} logo={l} />
          ))}
        </div>
      </div>
    </div>
  );
}
