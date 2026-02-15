export type ProjectCategory = "ALL" | "FULLSTACK" | "BACKEND" | "FRONTEND";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: Exclude<ProjectCategory, "ALL">;

  stack: string[];
  highlights: string[];

  role?: string;
  timeframe?: string;
  problems?: string[];
  solutions?: string[];
  impact?: string[];

  links?: {
    repo?: string;
    live?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "sipadi",
    name: "SIPADI (LMS)",
    tagline: "Role-based LMS with reporting & exports",
    description:
      "Learning Management System with modular NestJS architecture, Prisma migrations discipline, and reporting exports (CSV/XLSX).",
    category: "FULLSTACK",
    stack: ["TypeScript", "Next.js", "NestJS", "PostgreSQL", "Prisma"],
    highlights: [
      "RBAC (Admin/Teacher/Student)",
      "Report export (CSV/XLSX)",
      "Modular services + validation",
    ],
    role: "Full-stack developer (backend-focused)",
    timeframe: "Project-based development",
    problems: [
      "Complex LMS workflows across multiple roles require clear authorization boundaries.",
      "Reporting needs to be exportable and reliable for teachers/admin.",
    ],
    solutions: [
      "Implemented RBAC with guarded endpoints and role-scoped queries.",
      "Built reporting services that generate CSV/XLSX exports with consistent formatting.",
      "Kept backend modular to maintain clarity as features grew.",
    ],
    impact: [
      "Improved maintainability with modular services and clear separation of concerns.",
      "Enabled teachers/admin to export reports without manual data work.",
    ],
    links: { repo: "#", live: "#" },
  },
  {
    slug: "Mini-Play",
    name: "Mini-Play (Game Platform)",
    tagline: "Game module + admin management",
    description:
      "A simple game platform with admin endpoints and user-facing flow, including uploads and secure access control.",
    category: "BACKEND",
    stack: ["NestJS", "PostgreSQL", "Prisma", "JWT", "Multer"],
    highlights: ["Admin-only endpoints", "File uploads", "Auth flow"],
    role: "Backend developer",
    timeframe: "Personal project",
    problems: [
      "Need secure separation between admin-only operations and user operations.",
      "File uploads must be validated and served safely.",
    ],
    solutions: [
      "Created admin-only endpoints guarded by role checks.",
      "Handled uploads with size limits and safe storage paths.",
    ],
    impact: [
      "Clear access control and stable media handling for user content.",
    ],
    links: { repo: "#" },
  },
];
