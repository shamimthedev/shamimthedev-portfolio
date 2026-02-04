const Header = () => {
  return (
    <header className="flex justify-center fixed top-3 w-full z-10">
      <div className="flex items-center gap-4 px-2">
    <div className="hidden md:block text-sm text-white/60">
      Shamim.dev
    </div>
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
      </nav>
      </div>
    </header>
  );
};

export default Header;