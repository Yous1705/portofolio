"use client";

import { Button } from "@/components/ui/button";
import { TechMarqueeLogos } from "@/components/tech-marquee-logos";

export function HeroSection({ onAbout }: { onAbout?: () => void }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-sm text-white/60">Jakarta, Indonesia</p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Junior Full Stack / Backend-oriented Software Engineer
        </h1>

        <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
          I build reliable web applications with TypeScript, Next.js, NestJS,
          PostgreSQL, and Prisma. I care about clean architecture, strong data
          modeling, and maintainable code.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-[#2979FF] hover:bg-[#1E88E5]">
            <a href="#projects">View Projects</a>
          </Button>

          {/* tombol About (slide) */}
          <Button
            type="button"
            variant="outline"
            onClick={onAbout}
            className="border-white/15 bg-transparent text-white/80 hover:bg-white/5"
          >
            About me
          </Button>

          {/* CV (file di public/cv.pdf) */}
          <Button
            asChild
            variant="outline"
            className="border-white/15 bg-transparent text-white/80 hover:bg-white/5"
          >
            <a href="cv/cv-yous.pdf" download="Yous-Sibarani-CV.pdf">
              Download CV
            </a>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 text-xs text-white/60">
          {["TypeScript", "Next.js", "NestJS", "PostgreSQL", "Prisma"].map(
            (t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                {t}
              </span>
            ),
          )}
        </div>
      </div>
      <div className="mt-10">
        <p className="mb-3 text-xs text-white/55">Core stack</p>

        {/* SPACING BESAR */}
        <div className="h-16 md:h-24" />

        {/* MARQUEE AREA (CENTERED) */}
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <p className="mb-4 text-center text-xs text-white/55">Core stack</p>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <TechMarqueeLogos />
              <TechMarqueeLogos className="mt-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
