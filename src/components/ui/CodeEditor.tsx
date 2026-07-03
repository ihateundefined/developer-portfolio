import { profile } from '../../data/profile';

const CodeEditor = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A]/80 shadow-[35px_35px_80px_-10px_rgba(59,130,246,0.22)] backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#111827] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <span className="text-sm text-zinc-400">Developer.tsx</span>
        <div />
      </div>

      <div className="overflow-x-auto p-6 font-mono text-[15px] leading-8">
        <div>
          <span className="text-pink-400">const</span>{' '}
          <span className="text-blue-300">Developer</span>{' '}
          <span className="text-white">=</span>{' '}
          <span className="text-white">{'{'}</span>
        </div>

        <div className="pl-6">
          <span className="text-blue-300">name</span>
          <span className="text-white">:</span>{' '}
          <span className="text-green-400">'{profile.name}'</span>,
        </div>

        <div className="pl-6">
          <span className="text-blue-300">role</span>
          <span className="text-white">:</span>{' '}
          <span className="text-green-400">'{profile.role}'</span>,
        </div>

        <div className="pl-6">
          <span className="text-blue-300">background</span>
          <span className="text-white">:</span>{' '}
          <span className="text-white">[</span>
          <span className="text-green-400">'Chemistry'</span>,
          <span className="text-green-400">'Computer Science'</span>
          <span className="text-white">]</span>,
        </div>

        <div className="pl-6">
          <span className="text-blue-300">strengths</span>
          <span className="text-white">:</span>{' '}
          <span className="text-white">[</span>
          <span className="text-green-400">'Frontend'</span>,
          <span className="text-green-400">'Backend'</span>,
          <span className="text-green-400">'Database'</span>,
          <span className="text-green-400">'Banking'</span>
          <span className="text-white">]</span>,
        </div>

        <div className="pl-6">
          <span className="text-blue-300">goal</span>
          <span className="text-white">:</span>{' '}
          <span className="text-green-400">
            'Build software with deep understanding'
          </span>
        </div>

        <div>{'};'}</div>
        <div className="mt-8 text-pink-400">export default Developer;</div>
      </div>
    </div>
  );
};

export default CodeEditor;
