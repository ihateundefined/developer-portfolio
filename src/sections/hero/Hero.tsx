import { Mail, Code2, ChevronDown } from 'lucide-react';
import { profile } from '../../data/profile';
import CodeEditor from '../../components/ui/CodeEditor';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#070B14]">
      {/* Glow */}
      <div className="absolute left-20 top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute right-20 top-60 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[160px]" />
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[180px]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center justify-between gap-20 px-8">
        {/* LEFT */}
        <div className="max-w-xl">
          <p className="mb-5 text-3xl text-zinc-300">Hello, I'm</p>

          <h1 className="mb-4 text-5xl md:text-6xl xl:text-7xl font-black leading-none tracking-tight text-white">
            {profile.name}
          </h1>

          <h2 className="mb-8 text-4xl font-bold text-blue-400">
            {profile.role}
          </h2>

          <p className="mb-12 text-lg leading-9 text-zinc-400 leading-8 text-zinc-400">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 transition hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500"
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

            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 transition hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500"
            >
              <Code2 size={18} />
              Projects
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 transition hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500"
            >
              <Mail size={18} />
              Email
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden w-[560px] lg:block">
          <div className="absolute inset-0 translate-x-12 translate-y-12 z-0 rounded-full bg-gradient-to-tr from-blue-600/25 to-purple-600/25 blur-[60px]" />
          <div className="relative z-10 shadow-[20px_20px_30px_rgba(0,0,0,0.45),10px_10px_20px_rgba(0,0,0,0.25)] rounded-2xl">
            <CodeEditor />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500">
        <ChevronDown />
      </div>
    </section>
  );
};

export default Hero;
