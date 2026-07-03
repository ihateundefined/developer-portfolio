import { Download } from 'lucide-react';
import { navigation } from '../../constants/navigation';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#070B14]/60 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
            CS
          </div>

          <div>
            <h1 className="text-sm font-bold tracking-wide text-white">
              SUNHEE CHO
            </h1>

            <p className="text-xs text-zinc-500">Software Developer</p>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition-all duration-500 hover:text-white"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Resume */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white transition-all duration-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white lg:flex"
        >
          Resume
          <Download size={16} />
        </a>

        {/* Mobile */}
        <button className="text-white lg:hidden">☰</button>
      </div>
    </header>
  );
};

export default Header;
