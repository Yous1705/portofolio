export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    description: "API design, validation, auth, database modeling",
    items: [
      "NestJs",
      "REST API",
      "JWT Auth",
      "RBAC",
      "Validation (DTO / Pipes)",
      "File Uploads (Multer)",
    ],
  },
  {
    title: "Database",
    description: "Schema design, migrations, query optimization mindset",
    items: ["PostgreSQL", "Prisma ORM", "Migrations", "Indexing basics"],
  },
  {
    title: "Frontend",
    description: "Clean UI, reusable components, data fetching patterns",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Testing & Tools",
    description: "Development workflow and collaboration",
    items: ["Git", "Docker basics", "Swagger/OpenAPI", "Postman"],
  },
];
