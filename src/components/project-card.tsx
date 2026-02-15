import { Project } from "@/data/projects";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="border-white/10 bg-white/[0.03]">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link
              href={`/projects/${project.slug}`}
              className="text-base font-semibold tracking-tight hover:underline"
            >
              {project.name}
            </Link>
            <p className="mt-1 text-sm text-white/65">{project.tagline}</p>
          </div>
          <div className="flex items-center gap-2">
            {project.links?.repo ? (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/10 p-2 text-white/70 hover:text-white hover:border-white/20 transition-colors"
                aria-label="Repository"
              >
                <Github className="h-4 w-4" />
              </a>
            ) : null}
            {project.links?.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/10 p-2 text-white/70 hover:text-white hover:border-white/20 transition-colors"
                aria-label="Live Site"
              >
                {" "}
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-white/70">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((i) => (
            <Badge
              key={i}
              variant="secondary"
              className="border border-white/10 bg-white/5 text-white/70"
            >
              {i}
            </Badge>
          ))}
        </div>

        <ul className="list-disc space-y-1 pl-5 text-sm text-white/65">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </CardContent>
      <div className="pt-2">
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-medium text-[#90caf9] hover:text-[#64b5f6] transition-colors"
        >
          View case study →
        </Link>
      </div>
    </Card>
  );
}
