export type TimelineItem = {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  type?: "education" | "experience";
};

export const educationTimeline: TimelineItem[] = [
  {
    title: "FullStack Software Engineer (FSSE)",
    period: "2025 — 2026",
    description:
      "Fokus ke backend/full-stack. Sering mengerjakan project berbasis TypeScript, API, dan database design.",
    imageSrc: "portofolio/images/yous1.jpeg",
    imageAlt: "RevoU",
    type: "education",
  },
  {
    title: "Teknik Rekayasa Perangkat Lunak (TRPL)",
    period: "2021 — 2025",
    description:
      "Fokus ke backend/full-stack. Sering mengerjakan project berbasis TypeScript, API, dan database design.",
    imageSrc: "portofolio/images/yous3.jpeg",
    imageAlt: "University",
    type: "education",
  },
  {
    title: "SMA",
    period: "2018 — 2021",
    description: "Perjallanan SMA",
    imageSrc: "portofolio/images/yous2.jpeg",
    imageAlt: "School",
    type: "education",
  },
];
