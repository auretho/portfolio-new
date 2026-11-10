import React from 'react';
import { Code2, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Front-End',
    icon: Code2,
    description: 'Interfaces dynamiques, fluides et soignées.',
    skills: ['HTML5 / CSS3', 'JavaScript (ES6+)', 'React', 'Tailwind CSS', 'Vite', 'Node.js', 'Angular'],
  },
  {
    title: 'Back-End & Architecture',
    icon: Server,
    description: 'Logique métier robuste et persistance des données.',
    skills: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'REST APIs', 'H2 Database', 'SQL', 'Architecture MVC', 'Debugging'],
  },
  {
    title: 'Outils & Environnement',
    icon: Wrench,
    description: 'Méthodes de travail et outillage.',
    skills: ['Git / GitHub', 'macOS', 'Microsoft', 'IntelliJ', 'Eclipse', 'VS Code', 'npm', 'Yarn', 'Bitbucket'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#F7F4EF] dark:bg-[#262322] text-[#2C2523] dark:text-[#F3EFEA] border-t border-[#E8E0D5] dark:border-[#322E2C] scroll-mt-20 transition-colors">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">
        
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#B85D39] dark:text-[#E89274] uppercase block mb-2">
              Expertise
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-[#2C2523] dark:text-[#F3EFEA]">
              Compétences & Stack
            </h2>
          </div>
          <p className="text-xs text-[#6B5E5B] dark:text-[#C5BCB5] max-w-xs leading-relaxed font-sans">
            Les technologies et outils utilisés au quotidien pour concevoir des applications de bout en bout.
          </p>
        </div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-[#EDE7DF] dark:bg-[#3F3936] border border-[#E0D7CC] dark:border-[#5C534E] rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all hover:border-[#B85D39]/50 dark:hover:border-[#E89274]"
              >
                {/* 1. Bloc haut (Header + Description) : s'étire pour remplir le haut */}
                <div className="flex flex-col flex-1 pb-6">
                  <div className="flex items-center gap-3 min-h-[56px] mb-4">
                    <div className="p-2.5 bg-[#B85D39]/10 dark:bg-[#D4704B]/15 text-[#B85D39] dark:text-[#E89274] rounded-xl border border-[#B85D39]/20 dark:border-[#D4704B]/20 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans text-lg font-bold text-[#2C2523] dark:text-[#F3EFEA] leading-snug">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#6B5E5B] dark:text-[#C5BCB5] leading-relaxed font-sans font-light">
                    {category.description}
                  </p>
                </div>

                {/* 2. Zone des badges avec bordure top : hauteur minimale identique (min-h-[170px]) pour que la border-t démarre exactement au même niveau */}
                <div className="pt-5 border-t border-[#E0D7CC] dark:border-[#5C534E] min-h-[170px]">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] bg-[#F7F4EF] dark:bg-[#4D4541] text-[#5C4F4B] dark:text-[#F3EFEA] px-2.5 py-1 rounded-md border border-[#E0D7CC] dark:border-[#5C534E] font-sans font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}