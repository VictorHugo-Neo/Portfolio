import { BookOpen, ExternalLink } from 'lucide-react';
import { publications } from '../data/publicationsData';

export const PublicationCard = () => {
  const publication = publications[0];
  if (!publication) return null;

  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-transparent border border-blue-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 shadow-xs">
      <div className="space-y-1.5 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-300">
          <BookOpen size={15} />
          <span>Publicação Científica — WI-SCI IFNMG</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
          {publication.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {publication.description} Algoritmos de Visão Computacional para detecção de conformidade em segurança ocupacional.
        </p>
      </div>
      <a
        href={publication.url}
        target="_blank"
        rel="noopener noreferrer"
        className="min-h-[40px] inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all whitespace-nowrap self-start sm:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        Artigo Científico <ExternalLink size={13} />
      </a>
    </div>
  );
};
