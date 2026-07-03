import Badge from '../../components/common/Badge';
import Card from '../../components/common/Card';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import { certifications, skillGroups } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-32">
      <Container>
        <SectionTitle subtitle="STACK" title="Skills & Certifications" />

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <Card key={group.category} className="p-7">
                <h3 className="mb-5 text-xl font-bold text-white">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <Badge key={item} text={item} />
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-7">
            <h3 className="mb-6 text-xl font-bold text-white">
              Certifications
            </h3>

            <div className="space-y-5">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <p className="font-semibold text-white">{cert.name}</p>
                  <p className="mt-1 text-sm text-zinc-400">{cert.status}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
