import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-28 transition-colors bg-[#F7F4EF] dark:bg-[#262322] text-[#2C2523] dark:text-[#F3EFEA] overflow-hidden">
      
      {/* Petit effet de lueur décoratif en arrière-plan (ambiance colorée et lumineuse) */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#D4704B]/10 dark:bg-[#D4704B]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-start gap-8 relative z-10">
        
        {/* Badge de statut */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-sans tracking-wide border-[#E0D7CC] dark:border-[#423D3A] bg-[#EDE7DF] dark:bg-[#322E2C] text-[#6B5E5B] dark:text-[#C5BCB5] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></span>
          <span>Disponible pour de nouvelles opportunités</span>
        </div>

        {/* Titre : Prénom & Nom avec police Sans-Serif et dégradé coloré lumineux */}
        <div className="space-y-3">
          <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#2C2523] via-[#B85D39] to-[#D4704B] dark:from-[#F3EFEA] dark:via-[#E89274] dark:to-[#D4704B]">
            Aurélie Thouzeau
          </h1>
          <p className="text-lg md:text-xl font-mono font-medium text-[#D4704B]">
            Développeuse Full-Stack
          </p>
        </div>

        {/* Description épurée */}
        <p className="text-[#6B5E5B] dark:text-[#C5BCB5] text-base md:text-lg leading-relaxed font-light max-w-2xl font-sans">
          Conception d'applications web de bout en bout, de l'ergonomie front-end (<span className="text-[#2C2523] dark:text-[#F3EFEA] font-medium">React, Tailwind</span>) à la logique métier back-end (<span className="text-[#2C2523] dark:text-[#F3EFEA] font-medium">Java, Spring Boot</span>).
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold px-6 py-3.5 rounded-full transition-all duration-300 bg-[#D4704B] hover:bg-[#B85D39] hover:scale-[1.02] text-white shadow-md shadow-[#D4704B]/20"
          >
            <span>Découvrir mes projets</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="text-xs font-sans font-medium text-[#6B5E5B] dark:text-[#C5BCB5] hover:text-[#2C2523] dark:hover:text-[#F3EFEA] px-4 py-3.5 transition-colors underline underline-offset-8 decoration-[#E0D7CC] dark:decoration-[#423D3A]"
          >
            Me contacter
          </a>
        </div>

      </div>
    </section>
  );
}