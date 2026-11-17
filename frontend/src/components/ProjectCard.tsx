import { Github, ExternalLink, Globe, FolderCode } from 'lucide-react';
import type { Repository } from '../services/github';
import { LIVE_PROJECTS_URLS, languageColors, PROJECT_METADATA } from '../data/githubConfig';

interface ProjectCardProps {
  repo: Repository;
}

export const ProjectCard = ({ repo }: ProjectCardProps) => {
  const liveUrl = LIVE_PROJECTS_URLS[repo.name.toLowerCase().trim()];
  const meta = PROJECT_METADATA[repo.name.toLowerCase().trim()];
  const displayName = repo.displayName || meta?.displayName || repo.name;
  const category = repo.category || meta?.category || (liveUrl ? "Aplicação Web" : "Repositório de Código");
  const languageClass = languageColors[repo.language || 'default'] || languageColors.default;
  const targetUrl = liveUrl || repo.html_url;

  return (
    <div className="group relative p-4 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-sm transition-all flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 shadow-xs flex-shrink-0">
              {liveUrl ? <Globe size={18} /> : <FolderCode size={18} />}
            </div>
            <div>
              <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 block leading-tight">
                {category}
              </span>
              {liveUrl && (
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                  Aplicação no Ar
                </span>
              )}
            </div>
          </div>

          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[36px] min-h-[36px] sm:min-w-[40px] sm:min-h-[40px] flex items-center justify-center rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={`Ver código-fonte de ${displayName} no GitHub`}
            title="Ver código no GitHub"
          >
            <Github size={18} />
          </a>
        </div>

        <div className="space-y-0.5">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              {displayName}
            </a>
          </h3>
          <p className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400">
            repo: {repo.name}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
          {repo.description}
        </p>
      </div>

      <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
        <span className={`px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-medium border ${languageClass}`}>
          {repo.language || 'Python'}
        </span>

        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[34px] inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Acessar App
            <ExternalLink size={12} />
          </a>
        ) : (
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[34px] inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Ver Código
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </div>
  );
};
