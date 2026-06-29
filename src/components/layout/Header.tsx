const Header = () => {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-white">
          SUNHEE CHO
        </h1>

        <nav className="flex gap-6 text-sm text-zinc-300">
          <button>Journey</button>
          <button>Experience</button>
          <button>Projects</button>
          <button>Research</button>
          <button>Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;