"use client";

import { ProjectCategory, projects } from "@/data/projects";
import * as React from "react";
import { SectionHeader } from "../section-header";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { ProjectCard } from "../project-card";

const categories: { key: ProjectCategory; label: string }[] = [
  { key: "ALL", label: "All" },
  { key: "FULLSTACK", label: "Fullstack" },
  { key: "BACKEND", label: "Backend" },
  { key: "FRONTEND", label: "Frontend" },
];

export function ProjectsSection() {
  const [active, setActive] = React.useState<ProjectCategory>("ALL");

  const filtered = React.useMemo(() => {
    if (active === "ALL") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="scroll-mt-24 py-14 md:py-20">
      <SectionHeader
        title="Projects"
        description="Selected work that highlights my engineering decision, backend focus, and end-to-end delivery."
      />

      <div className="mb-6">
        <Tabs
          value={active}
          onValueChange={(v) => setActive(v as ProjectCategory)}
        >
          <TabsList className="border border-white/10 bg-white/[0.03]">
            {categories.map((c) => (
              <TabsTrigger
                key={c.key}
                value={c.key}
                className="text-white/80 hover:text-white hover:bg-white/10 data-[state=active]:bg-white/15 data-[state=active]:text-white transition-colors"
              >
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
