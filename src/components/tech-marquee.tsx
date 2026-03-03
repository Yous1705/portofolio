"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Code2,
  Database,
  Server,
  Layers,
  ShieldCheck,
  Terminal,
} from "lucide-react";

type TechItem = {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const tech: TechItem[] = [
  { label: "TypeScript", Icon: Code2 },
  { label: "Next.js", Icon: Layers },
  { label: "React", Icon: Layers },
  { label: "NestJS", Icon: Server },
  { label: "PostgreSQL", Icon: Database },
  { label: "Prisma", Icon: Database },
  { label: "Tailwind CSS", Icon: Layers },
  { label: "RBAC / Auth", Icon: ShieldCheck },
  { label: "Swagger", Icon: Terminal },
];

function Chip({ item }: { item: TechItem }) {
  const Icon = item.Icon;
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75">
      <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/5">
        <Icon className="h-4 w-4 text-white/70" />
      </span>
      <span className="whitespace-nowrap">{item.label}</span>
    </div>
  );
}

export function TechMarquee({ className }: { className?: string }) {
  // duplicate list untuk loop mulus
  const items = React.useMemo(() => [...tech, ...tech], []);

  return (
    <div className={cn("marquee marquee-mask overflow-hidden", className)}>
      <div className="marquee-track flex w-[200%] gap-3">
        {/* set 1 */}
        <div className="flex w-1/2 gap-3">
          {tech.map((t) => (
            <Chip key={`a-${t.label}`} item={t} />
          ))}
        </div>

        {/* set 2 (duplikat) */}
        <div className="flex w-1/2 gap-3">
          {tech.map((t) => (
            <Chip key={`b-${t.label}`} item={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
