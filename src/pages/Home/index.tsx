import Experience from '../../sections/experience/Experience';
import Hero from '../../sections/hero/Hero';
import Journey from '../../sections/journey/Journey';
import Projects from '../../sections/projects/Projects';
import Research from '../../sections/research/Research';
import Skills from '../../sections/skills/Skills';
import Contact from '../../sections/contact/Contact';
import SectionDivider from '../../components/common/SectionDivider';

const Home = () => {
  return (
    <>
      <Hero />
      <SectionDivider />

      <Journey />
      <SectionDivider />

      <Experience />
      <SectionDivider />

      <Projects />
      <SectionDivider />

      <Research />
      <SectionDivider />

      <Skills />
      <SectionDivider />

      <Contact />
    </>
  );
};

export default Home;
