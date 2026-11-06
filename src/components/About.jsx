import React from 'react';
import { Compass, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#EDE7DF] dark:bg-[#201D1C] text-[#2C2523] dark:text-[#F3EFEA] border-t border-[#E0D7CC] dark:border-[#322E2C] scroll-mt-20 transition-colors">
      <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">
        
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#B85D39] dark:text-[#E89274] uppercase block mb-2">
              // 03. Parcours
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-[#2C2523] dark:text-[#F3EFEA]">
              À propos de moi
            </h2>
          </div>
          <p className="text-xs text-[#6B5E5B] dark:text-[#C5BCB5] max-w-xs leading-relaxed font-sans">
            De l'analyse rigoureuse au développement d'applications logicielles.
          </p>
        </div>

        {/* Contenu en grille avec les cartes bien contrastées en mode dark */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          <div className="md:col-span-7 bg-[#F7F4EF] dark:bg-[#3F3936] border border-[#E0D7CC] dark:border-[#5C534E] rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-sm">
            <h3 className="font-sans text-2xl font-bold text-[#2C2523] dark:text-[#F3EFEA]">
              Allier logique analytique et création technique.
            </h3>
            <div className="space-y-4 text-sm text-[#6B5E5B] dark:text-[#C5BCB5] font-sans font-light leading-relaxed">
              <p>
                Après un parcours orienté vers la résolution de problèmes complexes et l'analyse méthodique, j'ai choisi de me réorienter vers le développement logiciel. Une transition naturelle guidée par le goût de la construction et de la logique.
              </p>
              <p>
                Aujourd'hui développeuse full-stack, j'aime concevoir des applications de bout en bout — du soin apporté à l'ergonomie visuelle sur le front-end (<span className="text-[#2C2523] dark:text-[#F3EFEA] font-medium">React, Tailwind</span>) jusqu'à la structuration robuste de la logique métier et des données sur le back-end (<span className="text-[#2C2523] dark:text-[#F3EFEA] font-medium">Java, Spring Boot</span>).
              </p>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="bg-[#F7F4EF] dark:bg-[#3F3936] border border-[#E0D7CC] dark:border-[#5C534E] rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="p-2.5 bg-[#B85D39]/10 dark:bg-[#D4704B]/20 text-[#B85D39] dark:text-[#E89274] rounded-xl border border-[#B85D39]/20 dark:border-[#D4704B]/30 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans text-base font-bold text-[#2C2523] dark:text-[#F3EFEA]">Rigueur & Méthode</h4>
                <p className="text-xs text-[#6B5E5B] dark:text-[#C5BCB5] mt-1 leading-relaxed font-sans font-light">
                  Une attention toute particulière portée au refactoring, à la propreté du code et à la gestion des cas d'erreur.
                </p>
              </div>
            </div>

            <div className="bg-[#F7F4EF] dark:bg-[#3F3936] border border-[#E0D7CC] dark:border-[#5C534E] rounded-2xl p-6 shadow-sm flex items-start gap-4">
              <div className="p-2.5 bg-[#B85D39]/10 dark:bg-[#D4704B]/20 text-[#B85D39] dark:text-[#E89274] rounded-xl border border-[#B85D39]/20 dark:border-[#D4704B]/30 shrink-0">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans text-base font-bold text-[#2C2523] dark:text-[#F3EFEA]">Vision Full-Stack</h4>
                <p className="text-xs text-[#6B5E5B] dark:text-[#C5BCB5] mt-1 leading-relaxed font-sans font-light">
                  Comprendre l'ensemble de la chaîne de valeur d'une application, de l'interface utilisateur jusqu'à la persistance en base.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}