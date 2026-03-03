# Portfolio — Next.js (App Router) Project

## Overview

This is a personal developer portfolio built with Next.js (App Router) and TypeScript, focused on static-first rendering, strong SEO, and crisp performance. The site showcases data-driven projects stored in `src/data`, uses a dynamic route at `/projects/[slug]`, supports dark theme with blue accents, and is optimized for recruiters evaluating technical and design capabilities.

## Live Demo

Live Server: https://yous1705.github.io/portofolio/

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI primitives:** shadcn/ui
- **Icons:** lucide-react
- **Toasts:** sonner
- **State / utilities:** small, focused utilities (static-first architecture)

## Architecture & Design Decisions

- Static-first: content (projects, experience, skills) is stored in `src/data` and rendered statically where possible to maximize performance and SEO.
- Next.js App Router: enables file-system routing and server-side features while keeping components modular and colocated with routes.
- Type safety: TypeScript provides clear contracts for data models (e.g., project entries) and reduces runtime errors.
- Component-driven: UI primitives from `shadcn/ui` and Tailwind keep components reusable and design-consistent while minimizing custom CSS.
- Accessibility & performance: lightweight icon set (`lucide-react`), minimal client-side JavaScript, and server-rendered metadata improve accessibility and load speed.

## Folder Structure Explanation

Top-level (relevant):

- `src/app/` — App Router entry points, layout and top-level pages (including `/projects/[slug]`).
- `src/components/` — Reusable UI components and section components (hero, projects, skills, contact, etc.).
- `src/data/` — Static data used across the site (projects, experience, skills, contact). This is the single source of truth for project content.
- `src/lib/` — Utility functions and hooks (e.g., `use-active-section`, project helpers).
- `public/` — Static assets (images, CV PDF).

Why this layout:

- Co-location of data, components, and routes keeps the app maintainable and easy to navigate for reviewers.
- `src/data` enables a CMS-like workflow without external dependencies — easy to update and preview locally.

## Key Features

- Static-first, data-driven projects rendered from `src/data`
- Dynamic project pages at `/projects/[slug]`
- SEO-ready metadata, sitemap, and robots configuration
- Dark theme with blue accents and responsive design
- Mobile-friendly drawer navigation
- IntersectionObserver-based active section highlighting
- Lightweight toast notifications via `sonner`

## SEO & Performance Strategy

- `sitemap.xml` and `robots.txt` implemented for crawler discovery.
- Static rendering for content when possible to serve HTML quickly and allow CDNs to cache pages.
- Minimized client JS by relying on server-rendered HTML and small client bundles for interactivity (drawer, toasts, theme switch).

## Getting Started (Installation)

Prerequisites:

- Node.js (LTS recommended)
- npm or pnpm

Windows PowerShell (recommended commands):

```powershell
# clone repository
git clone <repo-url> portfolio
cd portfolio

# install dependencies
npm install

# start development server
npm run dev
```

The app will run at `http://localhost:3000` by default.

## Available Scripts

Use the following npm scripts (from `package.json`):

- `npm run dev` — start development server (Next.js)
- `npm run build` — build for production
- `npm run start` — start the production server after build
- `npm run lint` — run ESLint

Adjust commands if you use `pnpm` or `yarn`.

## Customization Guide — Add A New Project

Projects are data-driven. To add a new project:

1. Open `src/data/projects.ts`.
2. Add a new project entry following the existing interface.

Example (TypeScript-style entry):

```ts
// src/data/projects.ts
export const projects = [
  {
    slug: "example-project",
    title: "Example Project",
    summary: "One-line summary highlighting impact and tech used.",
    description:
      "Longer description with details, responsibilities, and results.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    repo: "https://github.com/yourname/example-project",
    demo: "https://example-project.vercel.app",
    coverImage: "/projects/example-cover.png",
  },
  // ...other projects
];

export type Project = (typeof projects)[number];
```

3. Create any static assets (images) under `public/` and reference them in `coverImage`.
4. Run the dev server and verify the new project page at `/projects/example-project`.

Notes:

- Keep `slug` URL-safe (lowercase, hyphens). The project page uses the slug for routing.
- Follow the existing metadata pattern so SEO and OpenGraph remain consistent.

## Future Improvements

- Add a lightweight CMS or Git-based content preview (e.g., Netlify CMS, Sanity, or a simple Git-backed preview) for non-dev content updates.
- Progressive image loading and AVIF/WebP fallbacks for additional performance gains.
- Automated accessibility checks in CI and Lighthouse audits.
- Add unit/integration tests for critical components and pages.
- Internationalization (i18n) for broader reach.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
