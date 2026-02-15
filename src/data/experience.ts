export type Experience = {
  company: string;
  role: string;
  location?: string;
  timeframe: string;
  summary?: string;
  bullets: string[];
  stack?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Kominfo",
    role: "Intern (Software Engineer)",
    location: "Medan",
    timeframe: "Internship",
    summary:
      "Worked on application development and learned delivery practices in a government environment.",
    bullets: [
      "Built application features based on requirements and iterated through feedback cycles.",
      "Collaborated with stakeholders to clarify needs and translate them into implementation tasks.",
      "Improved reliability by applying validation and clearer data handling in API flows.",
    ],
    stack: ["Php", "Laravel", "Mysql"],
  },
];
