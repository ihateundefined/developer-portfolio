import Badge from '../../components/common/Badge';
import Card from '../../components/common/Card';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import { research } from '../../data/research';

const Research = () => {
  return (
    <section id="research" className="py-32">
      <Container>
        <SectionTitle subtitle="BACKGROUND" title="Research Experience" />

        <Card>
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h3 className="text-3xl font-bold text-white">
                {research.title}
              </h3>
              <p className="mt-2 text-blue-400">{research.organization}</p>
            </div>

            <span className="w-fit rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-400">
              {research.period}
            </span>
          </div>

          <p className="mb-10 leading-8 text-zinc-300">{research.overview}</p>

          <div className="grid gap-8 lg:grid-cols-2">
            <InfoGroup title="Research Topics" items={research.topics} />
            <InfoGroup title="Tools" items={research.tools} />
            <InfoGroup title="Publications" items={research.publications} />
            <InfoGroup title="Awards" items={research.awards} />
          </div>
        </Card>
      </Container>
    </section>
  );
};

interface InfoGroupProps {
  title: string;
  items: string[];
}

const InfoGroup = ({ title, items }: InfoGroupProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
      <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
        {title}
      </h4>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <Badge key={item} text={item} />
        ))}
      </div>
    </div>
  );
};

export default Research;
