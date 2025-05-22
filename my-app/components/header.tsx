'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '#Apropos', label: 'À propos' },
    { href: '#Mesprojets', label: 'Projets' },
    { href: '#Contact', label: 'Contact' },
  ];

  const getLinkClass = (href: string) =>
    pathname === href
      ? 'text-blue-500 underline underline-offset-4 decoration-blue-500 pointer-events-none cursor-not-allowed'
      : 'text-gray-700 hover:text-blue-500 relative inline-block after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full';

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 underline decoration-blue-500 decoration-4 underline-offset-8"
        >
          Luc Nkodia
        </Link>

        {/* Hamburger menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative w-6 h-6 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
              isOpen ? 'rotate-45 top-2.5' : 'top-1'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'top-3'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
              isOpen ? '-rotate-45 top-2.5' : 'top-5'
            }`}
          />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={getLinkClass(href)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile navigation */}
      {isClient && (
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white shadow-inner px-4 flex flex-col "
            >
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={toggleMenu}
                  className={`block py-3 ${getLinkClass(href)}`}
                >
                  {label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      )}
    </header>
  );
}
