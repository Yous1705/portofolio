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
      "Completed an intensive full-stack software engineering program covering software development fundamentals, frontend, and backend architecture. Built modern web applications using TypeScript, React, and Next.js, and developed RESTful APIs with NestJS. Implemented authentication using JWT, tested APIs with Postman, and designed relational databases. Delivered integrated full-stack projects from system design to deployment.",
    imageSrc: "./images/yous1.jpeg",
    imageAlt: "RevoU",
    type: "education",
  },
  {
    title: "Teknik Rekayasa Perangkat Lunak (TRPL)",
    period: "2021 — 2025",
    description:
      "Studied software engineering fundamentals including programming, database systems, and application development. Built web and mobile applications using PHP, Java, and Kotlin, and worked with frameworks such as Laravel and Yii. Developed Android applications using Android Studio and explored object-oriented programming, software design principles, and database integration as the foundation of my journey toward becoming a software engineer.",
    imageSrc: "./images/yous3.jpeg",
    imageAlt: "University",
    type: "education",
  },
  {
    title: "SMA",
    period: "2018 — 2021",
    description:
      "Completed senior high school education following the national curriculum at a public high school, studying core subjects such as mathematics, science, and social studies before pursuing software engineering in university.",
    imageSrc: "./images/yous2.jpeg",
    imageAlt: "School",
    type: "education",
  },
];
