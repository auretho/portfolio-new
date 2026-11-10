import React from 'react';
import { Sun, Moon, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md transition-colors bg-[#F7F4EF]/80 dark:bg-[#262322]/80 border-b border-[#E8E0D5] dark:border-[#423D3A]">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Monogramme avec le dégradé coloré */}
        <a href="#" className="group flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#EDE7DF] dark:bg-[#3F3936] border border-[#E0D7CC] dark:border-[#5C534E] flex items-center justify-center transition-all group-hover:border-[#D4704B]">
            <span className="font-sans font-black text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#2C2523] via-[#B85D39] to-[#D4704B] dark:from-[#F3EFEA] dark:via-[#E89274] dark:to-[#D4704B]">
              AT
            </span>
          </div>
        </a>

        {/* Liens de navigation */}
        <nav className="flex items-center gap-8 text-s font-sans font-bold ">
          <a href="#projects" className="text-[#D4704B]">
            Projets
          </a>
          <a href="#skills" className="text-[#D4704B]">
            Expertise
          </a>
          <a href="#about" className="text-[#D4704B]">
            Parcours
          </a>
          <a href="#contact" className="text-[#D4704B]">
            Contact
          </a>

          {/* Bouton Switch Thème */}
          <button
            onClick={toggleTheme}
            aria-label="Changer de thème"
            className="p-2 rounded-full border border-[#E0D7CC] dark:border-[#5C534E] text-[#D4704B] hover:bg-[#EDE7DF] dark:hover:bg-[#3F3936] transition-all cursor-pointer"
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#E89274]" /> : <Moon className="w-4 h-4 text-[#2C2523]" />}
          </button>
        </nav>

      </div>
    </header>
  );
}