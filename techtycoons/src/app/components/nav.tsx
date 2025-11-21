"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      !mounted ? 'bg-transparent' : 
      isScrolled ? 'bg-[#0b0d23] text-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/Images/anime/LogoNew.png"
              alt="Tech Tycoons Logo"
              className="h-16 w-16 md:h-20 md:w-20 object-contain"
            />
            <div className="ml-3 text-xl md:text-2xl font-bold text-white">
              Tech Tycoons
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-lg font-medium">
            <li>
              <Link href="/events" className="text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/members" className="text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Members
              </Link>
            </li>
            <li>
              <Link href="/achievements" className="text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Achievements
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="pt-2 pb-4 space-y-2">
            <li>
              <Link href="/events" className="block px-4 py-2 text-white hover:bg-blue-600 hover:text-white transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="block px-4 py-2 text-white hover:bg-blue-600 hover:text-white transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="block px-4 py-2 text-white hover:bg-blue-600 hover:text-white transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/members" className="block px-4 py-2 text-white hover:bg-blue-600 hover:text-white transition-colors">
                Members
              </Link>
            </li>
            <li>
              <Link href="/achievements" className="block px-4 py-2 text-white hover:bg-blue-600 hover:text-white transition-colors">
                Achievements
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
