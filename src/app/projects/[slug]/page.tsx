import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectBySlug } from "@/lib/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <Container className="py-10 md:py-14">
      <div className="mb-8">
        <Link
          href="/#project"
          className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {project.name}
          </h1>
          <p className="mt-2 text-base text-white/70 md:text-lg">
            {project.tagline}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Badge
                key={s}
                variant="secondary"
                className="border border-white/10 bg-white/5 text-white/70"
              >
                {s}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links?.repo ? (
              <Button
                asChild
                variant="outline"
                className="border-white/15 bg-transparent hover:bg-white/5"
              >
                <a href={project.links.repo} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Repository
                </a>
              </Button>
            ) : null}

            {project.links?.live ? (
              <Button
                asChild
                variant="outline"
                className="bg-[#2979ff] hover:bg-[#1e88e5]"
              >
                <a href={project.links.live} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Site
                </a>
              </Button>
            ) : null}
          </div>
        </div>

        <Card className="w-full border-white/10 bg-white/[0.03] md:w-[360px]">
          <CardContent className="p-6">
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white/60">Role</p>
                <p className="mt-1 text-white/85">{project.role ?? "-"}</p>
              </div>
              <div>
                <p className="text-white/60">Timeframe</p>
                <p className="mt-1 text-white/85">{project.timeframe ?? "-"}</p>
              </div>
              <div>
                <p className="text-white/60">Category</p>
                <p className="mt-1 text-white/85">{project.category ?? "-"}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <Card className="border-white/10 bg-white/[0.03]">
          <CardContent className="p-6">
            <SectionHeader title="Highlights" className="mb-4" />
            <ul className="list-disc space-y-2 pl-5 text-sm text-white/70">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/[0.03]">
          <CardContent className="p-6">
            <SectionHeader title="Problems -> Solutions" className="mb-4" />
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-white/85">Problems</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-white/70">
                  {(project.problems ?? []).map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-white/85">Solutions</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-white/70">
                  {(project.solutions ?? []).map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/[0.03] md:col-span-2">
          <CardContent className="p-6">
            <SectionHeader title="Impact" className="mb-4" />
            <ul className="list-disc space-y-2 px-5 text-sm text-white/70">
              {(project.impact ?? []).map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}

export default ProjectDetailPage;
