"use client";

import * as React from "react";
import { Container } from "@/components/container";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  const [panel, setPanel] = React.useState<"hero" | "about">("hero");

  return (
    <Container>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </Container>
  );
}
