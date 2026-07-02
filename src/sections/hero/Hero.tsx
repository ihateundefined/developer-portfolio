import { ChevronDown } from 'lucide-react';
import SocialLink from '../../components/common/SocialLink';
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
            <SocialLink type="github" href={profile.github} />
            <SocialLink type="projects" href="#projects" />
            <SocialLink type="email" href={`mailto:${profile.email}`} />
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
