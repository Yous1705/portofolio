"use client";

import * as React from "react";
import { Container } from "@/components/container";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  const [panel, setPanel] = React.useState<"hero" | "about">("hero");

  return (
    <Container>
      <div className="overflow-hidden">
        <div
          className={[
            "flex w-[200%] transition-transform duration-500 ease-out",
            panel === "about" ? "-translate-x-1/2" : "translate-x-0",
          ].join(" ")}
        >
          <div className="w-1/2">
            <HeroSection onAbout={() => setPanel("about")} />
          </div>
          <div className="w-1/2">
            <AboutSection onBack={() => setPanel("hero")} />
          </div>
        </div>
      </div>
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </Container>
  );
}
