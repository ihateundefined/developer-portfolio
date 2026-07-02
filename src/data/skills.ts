import type { Certification, SkillGroup } from "../types/skill";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Vite", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Java", "REST API", "Batch", "Interface", "Data Encryption"],
  },
  {
    category: "Database",
    items: ["MySQL", "Tibero", "SQL", "Schema Design", "Data Migration"],
  },
  {
    category: "Infra & Tools",
    items: ["Linux", "Nginx", "Jenkins", "Jira", "Git", "Azure"],
  },
  {
    category: "Research",
    items: ["C", "Python", "Molecular Dynamics", "Data Analysis"],
  },
];

export const certifications: Certification[] = [
  {
    name: "SQLD",
    status: "Certified",
  },
  {
    name: "ADsP",
    status: "Certified",
  },
  {
    name: "정보처리기사",
    status: "Written Exam Passed",
  },
];