import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 'questboard',
    title: 'Questboard',
    subtitle: 'APPLICATION KANBAN GAMIFIÉE • FULL-STACK',
    featured: true,
    description:
      'Une application de gestion de tâches qui transforme la productivité en système d\'expérience. Déplacement fluide des quêtes en drag-and-drop, calcul dynamique d\'XP avec montée de niveau, et synchronisation complète en base de données.',
    tags: ['React', 'Tailwind CSS', '@hello-pangea/dnd', 'Java 17', 'Spring Boot', 'Spring Data JPA', 'H2 Database'],
    highlights: [
      'Gestion centralisée de l\'état de progression et calcul d\'XP côté client et serveur',
      'Architecture REST propre avec contrôleurs et repositories JPA',
      'Interface fluide et interactive avec retour visuel immédiat',
    ],
    githubUrl: 'https://github.com/auretho/questboard-front',
    liveUrl: null,
  },
  {
    id: 'greenroute',
    title: 'Green Route',
    subtitle: 'CALCULATEUR D\'ITINÉRAIRES ÉCO-RESPONSABLES',
    featured: false,
    description:
      'Application cartographique permettant de comparer l\'impact carbone de différents modes de transport sur un trajet donné et d\'évaluer les alternatives les plus écologiques.',
    tags: ['React', 'Tailwind CSS', 'REST API', 'Leaflet / Maps'],
    highlights: [
      'Calcul en temps réel des émissions CO2 comparées',
    ],
    githubUrl: 'https://github.com/auretho/greenroute',
    liveUrl: null,
  },
  {
    id: 'puzzleGame',
    title: 'Puzzle game',
    subtitle: 'JEU DE REFLEXION ET DE LOGIQUE',
    featured: false,
    description:
      'Jeu de réflexion visuel qui comporte 10 niveaux et un chronomètre pour comparer les scores de résolution',
    tags: ['React', 'Redux', 'Tailwind CSS', 'Lucide React'],
    highlights: [
      'Chronomètre du temps de résolution des 10 niveaux',
    ],
    githubUrl: 'https://github.com/auretho/puzzle',
    liveUrl: 'https://puzzle.aurelie-thouzeau.me/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#EDE7DF] dark:bg-[#201D1C] text-[#2C2523] dark:text-[#F3EFEA] border-t border-[#E0D7CC] dark:border-[#322E2C] scroll-mt-20 transition-colors">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">
        
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#B85D39] dark:text-[#E89274] uppercase block mb-2">
              Réalisations
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-[#2C2523] dark:text-[#F3EFEA]">
              Projets sélectionnés
            </h2>
          </div>
          <p className="text-xs text-[#6B5E5B] dark:text-[#C5BCB5] max-w-xs leading-relaxed font-sans">
            Focus sur la qualité du code, la pertinence produit et l'attention aux détails.
          </p>
        </div>

        {/* Liste des cartes projets */}
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-[#F7F4EF] dark:bg-[#3F3936] border border-[#E0D7CC] dark:border-[#5C534E] rounded-2xl p-6 md:p-8 flex flex-col gap-6 transition-all duration-300 hover:border-[#B85D39]/50 dark:hover:border-[#E89274] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <span className="text-[11px] font-mono tracking-wider text-[#B85D39] dark:text-[#E89274] font-medium">
                  {project.subtitle}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B85D39]/10 dark:bg-[#D4704B]/15 text-[#B85D39] dark:text-[#E89274] text-[11px] font-sans font-medium w-fit">
                    <Sparkles className="w-3 h-3" />
                    <span>Focus principal</span>
                  </span>
                )}
              </div>

              <h3 className="font-sans text-2xl md:text-3xl font-bold text-[#2C2523] dark:text-[#F3EFEA]">
                {project.title}
              </h3>

              <p className="text-sm md:text-base text-[#6B5E5B] dark:text-[#C5BCB5] leading-relaxed font-sans font-light">
                {project.description}
              </p>

              {/* Highlights techniques */}
              <div className="pt-4 border-t border-[#E8E0D5] dark:border-[#322E2C]">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#5C4F4B] dark:text-[#C5BCB5]">
                  {project.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#B85D39] dark:text-[#E89274] shrink-0 mt-0.5" />
                      <span className="font-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Badges de technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] bg-[#EDE7DF] dark:bg-[#322E2C] text-[#5C4F4B] dark:text-[#D4CBC4] px-3 py-1 rounded-md border border-[#E0D7CC] dark:border-[#423D3A] font-sans font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Liens du projet */}
              <div className="flex items-center gap-5 pt-4 border-t border-[#E8E0D5] dark:border-[#322E2C]">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-sans font-medium text-[#2C2523] dark:text-[#F3EFEA] hover:text-[#B85D39] dark:hover:text-[#E89274] transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>Code source</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-[#B85D39] dark:text-[#E89274] hover:underline"
                  >
                    <span>Voir la démo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}