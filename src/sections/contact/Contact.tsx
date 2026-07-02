import SocialLink from '../../components/common/SocialLink';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import { profile } from '../../data/profile';

const Contact = () => {
  return (
    <section id="contact" className="py-32">
      <Container>
        <SectionTitle subtitle="CONTACT" title="Let's Connect" />

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 backdrop-blur-sm">
          <p className="max-w-3xl text-xl leading-9 text-zinc-300">
            데이터와 서비스 로직을 이해하고, 안정적인 소프트웨어를 만드는
            개발자로 성장하고 있습니다. 함께 이야기할 기회를 기다리겠습니다.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <SocialLink type="github" href={profile.github} />
            <SocialLink type="email" href={`mailto:${profile.email}`} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
