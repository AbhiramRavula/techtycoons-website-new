"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-[#0b0d23] text-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/Images/anime/LogoNew.png"
              alt="Tech Tycoons Logo"
              className="h-20 w-20 object-contain"
            />
            <div className="ml-3 text-2xl font-bold text-gray-800 dark:text-white">
              Tech Tycoons
            </div>
          </Link>
          
          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-10 text-lg font-medium">
            <li>
              <Link href="/events" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/members" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Members
              </Link>
            </li>
            <li>
              <Link href="/achievements" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Achievements
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
