import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import { journey } from '../../data/journey';

const Journey = () => {
  return (
    <section id="journey" className="py-32">
      <Container>
        <SectionTitle subtitle="CAREER" title="Journey" />

        <div className="relative">
          <div className="absolute left-20 top-0 h-full w-px bg-zinc-800" />

          {journey.map((item) => (
            <div key={item.year} className="relative mb-20 flex gap-12">
              <div className="w-20 text-right">
                <span className="text-lg font-semibold text-blue-400">
                  {item.year}
                </span>
              </div>

              <div className="relative">
                <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-blue-500 ring-8 ring-blue-500/10" />
              </div>

              <div className="max-w-3xl">
                <p className="mb-1 text-sm uppercase tracking-[0.3em] text-zinc-500">
                  {item.subtitle}
                </p>

                <h3 className="mb-4 text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-lg leading-8 text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Journey;
