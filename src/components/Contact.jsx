import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#F7F4EF] dark:bg-[#262322] text-[#2C2523] dark:text-[#F3EFEA] border-t border-[#E8E0D5] dark:border-[#322E2C] scroll-mt-20 transition-colors">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        
        <span className="text-[11px] font-mono tracking-widest text-[#B85D39] dark:text-[#E89274] uppercase">
          // 04. Contact
        </span>

        <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#2C2523] dark:text-[#F3EFEA] max-w-xl leading-tight">
          Envie d'échanger ou de collaborer ?
        </h2>

        <p className="text-sm md:text-base text-[#6B5E5B] dark:text-[#C5BCB5] max-w-md leading-relaxed font-sans font-light">
          Je suis actuellement à l'écoute d'opportunités en tant que développeuse full-stack. N'hésite pas à m'écrire pour discuter de projets ou de mon parcours.
        </p>

        {/* Bouton principal email */}
        <div className="pt-2">
          <a
            href="mailto:aurelie@example.com"
            className="inline-flex items-center gap-2 bg-[#D4704B] hover:bg-[#B85D39] text-white text-xs font-sans font-semibold px-8 py-4 rounded-full shadow-md shadow-[#D4704B]/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Me contacter par email</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Liens réseaux sociaux secondaires */}
        <div className="flex items-center gap-6 pt-6 border-t border-[#E8E0D5] dark:border-[#423D3A] w-full max-w-xs justify-center text-[#6B5E5B] dark:text-[#C5BCB5]">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#B85D39] dark:hover:text-[#E89274] transition-colors flex items-center gap-2 text-xs font-sans font-medium"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <span className="text-[#D0C5B8] dark:text-[#423D3A]">•</span>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#B85D39] dark:hover:text-[#E89274] transition-colors flex items-center gap-2 text-xs font-sans font-medium"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Footer bas de page */}
        <div className="pt-8 text-[11px] text-[#8A7C75] dark:text-[#9A8F87] font-sans font-light">
          © {new Date().getFullYear()} Aurélie Thouzeau • Conçu avec React & Tailwind CSS
        </div>

      </div>
    </section>
  );
}