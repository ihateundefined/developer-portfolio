import Badge from '../../../components/common/Badge';
import Card from '../../../components/common/Card';
import type { Experience } from '../../../types/experience';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Card>
      {/* Header */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-4">
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={experience.logo}
                alt={experience.company}
                className="h-12 w-auto"
              />
            </a>
          </div>

          <p className="mt-2 text-lg text-blue-400">{experience.position}</p>
        </div>

        <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-400">
          {experience.period}
        </span>
      </div>

      {/* Overview */}
      <div className="mt-10">
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Overview
        </h4>
        <p className="leading-8 text-zinc-300">{experience.overview}</p>
      </div>

      {/* Projects & Achievements (여기가 핵심 변경 구간입니다!) */}
      <div className="mt-10">
        <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Projects & Achievements
        </h4>

        <div className="space-y-8">
          {experience.projects.map((project, pIdx) => (
            <div key={pIdx} className="space-y-3">
              {/* 프로젝트 분류 제목 */}
              {/* text-zinc-200  */}
              <h5 className="text-md font-bold text-blue-400 pl-[26px]">
                {project.title}
              </h5>

              {/* 프로젝트 상세 성과 리스트 */}
              <ul className="space-y-3 pl-1">
                {project.details.map((detail, dIdx) => (
                  <li
                    key={dIdx}
                    className="flex items-start gap-3 text-zinc-300 leading-7"
                  >
                    <span className="mt-1 text-blue-400 select-none">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-10">
        <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Tech Stack
        </h4>

        <div className="flex flex-wrap gap-3">
          {experience.skills.map((skill) => (
            <Badge key={skill} text={skill} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ExperienceCard;
