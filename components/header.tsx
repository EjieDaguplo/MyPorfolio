"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass =
    "relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="flex justify-between items-center py-6 px-4 bg-gray-900 text-white relative">
      {/* Left side (could be logo/brand later) */}
      <h1 className="text-2xl font-bold ml-4 animate-bounce">EOD</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className={navLinkClass}>
          Home
        </Link>
        <Link href="/about" className={navLinkClass}>
          Projects
        </Link>
        <Link href="/projects" className={navLinkClass}>
          Certificate
        </Link>
        <Link href="/contact" className={navLinkClass}>
          About
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none mr-4"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 
             w-3/4 bg-gray-800/40 backdrop-blur-md border border-white/20
             mt-2 p-4 rounded-2xl w-full shadow-lg 
             flex flex-col space-y-4 md:hidden z-50r flex-col items-center"
        >
          <Link
            href="/"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/projects"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Certificate
          </Link>
          <Link
            href="/contact"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
