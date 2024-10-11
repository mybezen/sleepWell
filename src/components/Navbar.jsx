

function CenteredNavbar() {
  return (
    <header className="relative flex justify-center p-5">
      <nav className="flex items-center justify-between w-full max-w-7xl px-6 py-2 text-white opacity-50 bg-transparent poppins-semibold">
        <img className="h-[4vh]" src="" alt="Logo" />

        <div className="flex space-x-6">
          <a href="/" className="hover:text-purple-400">
            Home
          </a>
          <a href="/about" className="hover:text-purple-400">
            About
          </a>
          <a href="/blog" className="hover:text-purple-400">
            Blog
          </a>
          <a href="/contact" className="hover:text-purple-400">
            Contact
          </a>
        </div>

        <a href="/team" className="hover:text-purple-400">
          Team
        </a>
      </nav>
    </header>
  );
}

export default CenteredNavbar;
