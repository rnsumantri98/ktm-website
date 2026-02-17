
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Hammer } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Layanan', href: '#services' },
    { name: 'Produk', href: '#products' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-md">
            {/* Concrete Mixer (Molen) Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-black"
            >
              <path d="M16 8a4 4 0 0 0-4-4h-1a5 5 0 0 0-5 5v1h10V8Z" /> {/* Drum top */}
              <path d="M6 10v3a5 5 0 0 0 5 5h1a4 4 0 0 0 4-4" /> {/* Drum bottom */}
              <path d="M16 10h3" /> {/* Side handle connection */}
              <circle cx="20" cy="10" r="2" /> {/* Side wheel/handle */}
              <path d="M4 18h12" /> {/* Frame base */}
              <path d="M7 18v-4" /> {/* Frame leg left */}
              <path d="M15 18v-4" /> {/* Frame leg right */}
              <circle cx="6" cy="19" r="2" /> {/* Wheel left */}
              <circle cx="16" cy="19" r="2" /> {/* Wheel right */}
            </svg>
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            KARYA TEKNIK MANDIRI
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium text-sm uppercase tracking-wide transition-colors hover:text-primary ${isScrolled ? 'text-gray-700' : 'text-gray-200'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/6287771081241"
            target="_blank"
            className="bg-primary hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded-md transition-all text-sm uppercase tracking-wider"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-800 font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/6287771081241"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-black font-semibold py-3 px-6 rounded-md text-center mt-2"
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
}
