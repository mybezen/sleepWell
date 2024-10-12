import { useState } from 'react';

function CenteredNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex justify-center p-5 z-50">
      <nav className="flex items-center justify-between w-full max-w-7xl px-6 py-2 text-white opacity-75 bg-transparent poppins-semibold">
        <img className="h-[4vh]" src="" alt="Logo" />

        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className="space-x-6 md:flex hidden">
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

        <a href="/team" className="hover:text-purple-400 hidden md:block">
          Team
        </a>

        <div
          className={`absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col space-y-4 py-4 transform transition-all duration-300 ease-in-out md:hidden ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <a href="github.com" className="hover:text-purple-400 px-6">
            Team
          </a>
          <a href="/" className="hover:text-purple-400 px-6">
            Home
          </a>
          <a href="/about" className="hover:text-purple-400 px-6">
            About
          </a>
          <a href="/blog" className="hover:text-purple-400 px-6">
            Blog
          </a>
          <a href="/contact" className="hover:text-purple-400 px-6">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default CenteredNavbar;
