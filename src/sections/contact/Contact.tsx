import { Mail } from 'lucide-react';
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

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:border-blue-500 hover:bg-blue-500"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white transition hover:border-blue-500 hover:bg-blue-500"
            >
              <svg
                height="18"
                width="18"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82A7.423 7.423 0 0 0 8 4c-.68 0-1.36.09-2 .28-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
