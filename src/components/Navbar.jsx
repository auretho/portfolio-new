import React, { useState } from 'react';
import { Sun, Moon, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md transition-colors bg-[#F7F4EF] dark:bg-[#262322] text-[#2C2523] dark:text-[#F3EFEA] border-b border-[#E8E0D5] dark:border-[#423D3A]">
<nav className="sticky top-0 z-50 bg-[#F7F4EF]/90 dark:bg-[#1C1917]/90 backdrop-blur-md border-b border-[#EDE7DF] dark:border-stone-800/60 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">                          
          {/* Logo / Monogramme avec le dégradé coloré */}
          <a href="#" className="group flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#EDE7DF] dark:bg-[#3F3936] border border-[#E0D7CC] dark:border-[#5C534E] flex items-center justify-center transition-all group-hover:border-[#D4704B]">
              <span className="font-sans font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#2C2523] via-[#B85D39] to-[#D4704B] dark:from-[#F3EFEA] dark:via-[#E89274] dark:to-[#D4704B]">
                AT
              </span>
            </div>
          </a>

          {/* Menu Desktop (masqué sur mobile) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-[#D4704B]">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-stone-950 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Bouton Switch Thème */}
          <button
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className="p-2 rounded-full border border-[#E0D7CC] dark:border-[#5C534E] text-[#D4704B] hover:bg-[#EDE7DF] dark:hover:bg-[#3F3936] transition-all cursor-pointer"
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#E89274]" /> : <Moon className="w-4 h-4 text-[#E89274]" />}
          </button>

          {/* Bouton Burger Mobile */}
          <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#D4704B] focus:outline-none cursor-pointer"
          aria-label="Menu"
        >
            {isOpen ? (
              // Icône Croix (Fermer)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icône Burger (Ouvrir)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Menu Déroulant Mobile */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#F7F4EF] dark:bg-[#1C1917] border-b border-[#EDE7DF] dark:border-stone-800 shadow-xl py-6 px-8 flex flex-col gap-4 transition-colors">            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Ferme le menu au clic sur un lien
                className="text-base font-bold text-[#D4704B] py-2 "
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}