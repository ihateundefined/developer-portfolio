import {
  BriefcaseBusiness,
  CircleCheckBig,
  Hammer,
  Lightbulb,
  TriangleAlert,
} from 'lucide-react';
import SocialLink from '../../../components/common/SocialLink';
import Badge from '../../../components/common/Badge';
import type { Project } from '../../../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.05]">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">
            {project.type}
          </p>

          <h3 className="text-3xl font-bold text-white">{project.title}</h3>
        </div>

        <span className="w-fit rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-400">
          {project.period}
        </span>
      </div>

      <p className="mb-8 leading-8 text-zinc-300">{project.overview}</p>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
          <div className="mb-3 flex items-center gap-2 text-blue-400">
            <BriefcaseBusiness size={18} />
            <h4 className="font-semibold">Role</h4>
          </div>

          <ul className="space-y-2 text-zinc-300">
            {project.roles.map((role) => (
              <li key={role}>• {role}</li>
            ))}
          </ul>
        </div>

        <InfoBox
          icon={<TriangleAlert size={18} />}
          title="Problem"
          content={project.problem}
        />

        <InfoBox
          icon={<Lightbulb size={18} />}
          title="Solution"
          content={project.solution}
        />

        <InfoBox
          icon={<CircleCheckBig size={18} />}
          title="Result"
          content={project.result}
        />
      </div>

      <div className="mt-8">
        <div className="mb-4 flex items-center gap-2 text-blue-400">
          <Hammer size={18} />
          <h4 className="font-semibold">Tech Stack</h4>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.skills.map((skill) => (
            <Badge key={skill} text={skill} />
          ))}
        </div>
      </div>

      {(project.github || project.demo) && (
        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && <SocialLink type="github" href={project.github} />}
          {project.demo && <SocialLink type="github" href={project.demo} />}
        </div>
      )}
    </article>
  );
};

interface InfoBoxProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const InfoBox = ({ icon, title, content }: InfoBoxProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="mb-3 flex items-center gap-2 text-blue-400">
        {icon}
        <h4 className="font-semibold">{title}</h4>
      </div>

      <p className="leading-7 text-zinc-300">{content}</p>
    </div>
  );
};

export default ProjectCard;
