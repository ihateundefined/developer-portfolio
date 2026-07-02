import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "바로스탬핑",
    type: "Team Project",
    period: "2024",
    overview: "전자문서에 안전하게 스탬프를 생성하고 관리하는 웹 서비스",
    roles: ["Frontend", "Backend", "Deployment"],
    problem: "사용자가 문서의 진위 여부를 쉽게 확인할 수 있는 서비스가 필요했습니다.",
    solution: "React와 Meteor 기반의 웹 서비스를 구축하고 Azure에 배포했습니다.",
    result: "웹개발 부문 최우수상을 수상했습니다.",
    skills: ["React", "Meteor", "MongoDB", "Azure", "Linux", "Nginx", "Tailwind CSS"],
    github: "https://github.com/sunhcho227/BaroStampingLocal",
    demo: "배포 후 주소"
  },
  {
    title: "Developer Portfolio",
    type: "Personal Project",
    period: "2026",
    overview: "개인 브랜딩을 위한 반응형 개발자 포트폴리오",
    roles: ["Design", "Frontend"],
    problem: "실무 경험과 연구 경험을 함께 보여줄 수 있는 포트폴리오가 필요했습니다.",
    solution: "React와 TypeScript 기반으로 디자인 시스템을 직접 구축했습니다.",
    result: "GitHub Pages/Vercel을 통해 배포 예정",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/ihateundefined/developer-portfolio",
    demo: "배포 후 주소"
  }
];