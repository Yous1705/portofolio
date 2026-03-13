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
  "Read some comics/manga",
  "Gaming (casual)",
];

export function AboutSection({ onBack }: { onBack?: () => void }) {
  return (
    <section id="about" className="scroll-mt-24 py-14 md:py-20">
      <div className="max-w-3xl">
        <p className="text-sm text-white/60">Medan, Indonesia</p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
          Junior Full Stack / Backend-oriented Software Engineer
        </h1>
      </div>

      <SectionHeader
        className="mt-6"
        title="About"
        description="A quick summary of my background, interests, and how I approach building software."
      />

      <Card className="border-white/10 bg-white/[0.03]">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed text-white/70">
            I’m a Junior Full-Stack Software Engineer with hands-on experience
            building secure and scalable web applications using TypeScript,
            React/Next.js, and NestJS. Experienced in designing RESTful APIs,
            implementing JWT-based authentication and role-based access control,
            and managing relational databases with PostgreSQL and Prisma ORM to
            ensure structured and reliable data handling. Passionate about
            developing maintainable systems across both frontend and backend,
            and eager to contribute impactful solutions within a collaborative
            engineering environment while continuously strengthening my
            technical expertise.
          </p>
        </CardContent>
      </Card>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="md:col-span-1">
          <h3 className="mb-3 text-base font-semibold text-white/90">
            Education
          </h3>
          <VerticalTimeline items={educationTimeline} />
        </div>

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
