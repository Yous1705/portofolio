"use client";
import { SectionHeader } from "@/components/section-header";
import { VerticalTimeline } from "@/components/vertical-timeline";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { educationTimeline } from "@/data/about";
import { Button } from "@/components/ui/button";

const interests = [
  "Backend architecture",
  "Database design",
  "REST API & validation",
  "RBAC & auth flows",
  "Performance mindset",
];

const hobbies = [
  "Building side projects",
  "Exploring new tech",
  "Multimedia / design exploration",
  "Gaming (casual)",
];

export function AboutSection({ onBack }: { onBack?: () => void }) {
  return (
    <section id="about" className="scroll-mt-24 py-14 md:py-20">
      <Button
        type="button"
        variant="outline"
        onClick={onBack}
        className="border-white/15 bg-transparent text-white/80 hover:bg-white/5"
      >
        Back
      </Button>
      <SectionHeader
        title="About"
        description="A quick summary of my background, interests, and how I approach building software."
      />

      {/* Snapshot */}
      <Card className="border-white/10 bg-white/[0.03]">
        <CardContent className="p-6">
          <p className="text-sm leading-relaxed text-white/70">
            I’m a junior full-stack engineer with a backend focus. I enjoy
            building reliable APIs, modeling data carefully, and keeping code
            maintainable with clear structure and validation.
          </p>
        </CardContent>
      </Card>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {/* Education timeline */}
        <div className="md:col-span-1">
          <h3 className="mb-3 text-base font-semibold text-white/90">
            Education
          </h3>
          <VerticalTimeline items={educationTimeline} />
        </div>

        {/* Right column: interests + hobbies + now learning */}
        <div className="space-y-4 md:col-span-1">
          <Card className="border-white/10 bg-white/[0.03]">
            <CardContent className="p-6">
              <h3 className="text-base font-semibold text-white/90">
                Technical interests
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {interests.map((x) => (
                  <Badge
                    key={x}
                    variant="secondary"
                    className="border border-white/10 bg-white/5 text-white/70"
                  >
                    {x}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/[0.03]">
            <CardContent className="p-6">
              <h3 className="text-base font-semibold text-white/90">Hobbies</h3>
              <p className="mt-2 text-sm text-white/65">
                A few things I enjoy outside work:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
                {hobbies.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/[0.03]">
            <CardContent className="p-6">
              <h3 className="text-base font-semibold text-white/90">
                Currently improving
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
                <li>Docker & deployment workflows</li>
                <li>System design fundamentals</li>
                <li>Better testing habits</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
