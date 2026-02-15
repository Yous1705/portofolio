import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-14 md:py-20">
      <SectionHeader
        title="Skills"
        description="Core technologies I use to build maintainable, production-ready applications."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((g) => (
          <Card
            key={g.title}
            className="border-white/10 bg-white/[0.03] text-white/100"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {g.title}
                  </h3>
                  {g.description ? (
                    <p className="mt-1 text-sm text-white/60">
                      {g.description}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="border border-white/10 bg-white/5 text-white/70"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
