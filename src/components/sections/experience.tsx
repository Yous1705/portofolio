import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-14 md:py-20">
      <SectionHeader
        title="Experience"
        description="Where I’ve built real-world habits: shipping features, communicating clearly, and keeping code maintainable."
      />

      <div className="space-y-4">
        {experiences.map((e) => (
          <Card
            key={`${e.company}-${e.role}`}
            className="border-white/10 bg-white/[0.03] text-white/100 "
          >
            <CardContent className="p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {e.role}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    <span className="font-medium text-white/85">
                      {e.company}
                    </span>
                    {e.location ? (
                      <span className="text-white/55"> • {e.location}</span>
                    ) : null}
                  </p>
                </div>

                <div className="text-sm text-white/60 md:text-right">
                  {e.timeframe}
                </div>
              </div>

              {e.summary ? (
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {e.summary}
                </p>
              ) : null}

              <Separator className="my-5 bg-white/10" />

              <ul className="list-disc space-y-2 pl-5 text-sm text-white/70">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {e.stack?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="border border-white/10 bg-white/5 text-white/70"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
