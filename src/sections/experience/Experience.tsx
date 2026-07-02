import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import { experiences } from '../../data/experiences';
import ExperienceCard from './components/ExperienceCard';

const Experience = () => {
  return (
    <section id="experience" className="py-32">
      <Container>
        <SectionTitle subtitle="CAREER" title="Professional Experience" />

        <div className="space-y-10">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
