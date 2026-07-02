import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import { projects } from '../../data/projects';
import ProjectCard from './components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <Container>
        <SectionTitle subtitle="WORK" title="Selected Projects" />

        <div className="grid gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
