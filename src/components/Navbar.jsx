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
        <nav className="flex items-center gap-6 text-xs font-mono">
          <a href="#projects" className="text-[#6B5E5B] hover:text-[#2C2523] dark:text-[#C5BCB5] dark:hover:text-[#F3EFEA] transition-colors">
            // 01. Projets
          </a>
          <a href="#skills" className="text-[#6B5E5B] hover:text-[#2C2523] dark:text-[#C5BCB5] dark:hover:text-[#F3EFEA] transition-colors">
            // 02. Expertise
          </a>
          <a href="#about" className="text-[#6B5E5B] hover:text-[#2C2523] dark:text-[#C5BCB5] dark:hover:text-[#F3EFEA] transition-colors">
            // 03. Parcours
          </a>
          <a href="#contact" className="text-[#6B5E5B] hover:text-[#2C2523] dark:text-[#C5BCB5] dark:hover:text-[#F3EFEA] transition-colors">
            // 04. Contact
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