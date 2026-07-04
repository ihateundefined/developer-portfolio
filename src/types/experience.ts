export interface Experience {
  company: string;
  logo: string;
  link: string;
  position: string;
  period: string;
  overview: string;
  projects: {
    title: string;
    details: string[];
  }[]; 
  skills: string[];
}