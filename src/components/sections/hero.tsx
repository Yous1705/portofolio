import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="scroll-mt-24 py-14 md:py-20">
      <div className="max-w-3xl">
        <p className="text-sm text-white/60">Medan, Indonesia</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Full Stack Software Engineer
        </h1>

        <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
          I build reliable web applications with TypeScript, Next.js, NestJS,
          PostgreSQL, and Prisma. I care about clean architecture, strong
          modeling, and maintainable code
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-[#2979ff] hover:bg-[#1e88e5]">
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/15 bg-transparent text-white/80 hover:bg-white/50"
          >
            <a href="#contact">Contact</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/15 bg-transparent text-white/80 hover:bg-white/50"
          >
            <a href="#">Download CV</a>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 text-xs text-white/60">
          {["TypeScript", "Next.js", "NestJS", "PostgreSQL", "Prisma"].map(
            (t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5p px-3 py-1"
              >
                {t}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
