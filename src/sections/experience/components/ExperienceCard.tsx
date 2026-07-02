import Badge from '../../../components/common/Badge';
import type { Experience } from '../../../types/experience';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm transition duration-300 hover:border-blue-500/40">
      {/* Header */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-3xl font-bold text-white">
            {experience.company}
          </h3>

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

      {/* Responsibilities */}
      <div className="mt-10">
        <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Responsibilities
        </h4>

        <ul className="grid gap-3 md:grid-cols-2">
          {experience.responsibilities.map((item) => (
            <li key={item} className="flex items-start gap-3 text-zinc-300">
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      <div className="mt-10">
        <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Key Achievements
        </h4>

        <ul className="space-y-4">
          {experience.achievements.map((item) => (
            <li key={item} className="flex items-start gap-3 text-zinc-300">
              <span className="mt-2 text-blue-400">✓</span>

              {item}
            </li>
          ))}
        </ul>
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
    </article>
  );
};

export default ExperienceCard;
