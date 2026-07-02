import Experience from '../../sections/experience/Experience';
import Hero from '../../sections/hero/Hero';
import Journey from '../../sections/journey/Journey';
import Projects from '../../sections/projects/Projects';
import Research from '../../sections/research/Research';
import Skills from '../../sections/skills/Skills';
import Contact from '../../sections/contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Journey />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
