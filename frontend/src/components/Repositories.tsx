import { FolderCode, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { useRepositories } from '../hooks/useRepositories';
import { ProjectCard } from './ProjectCard';
import { PublicationCard } from './PublicationCard';

export const Repositories = () => {
  const {
    filter,
    changeFilter,
    counts,
    isLoading,
    visibleRepos,
    filteredRepos,
    showAllMobile,
    toggleShowAllMobile
  } = useRepositories();

  const isResearchOrAll = filter === 'all' || filter === 'research';

  return (
    <section id="projetos" className="scroll-mt-20 max-w-7xl xl:max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-10 sm:py-16 lg:py-24">
      <div className="space-y-6 sm:space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-500">
              <FolderCode size={15} />
              Trabalhos em Destaque
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Projetos & Código
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
              Sistemas em produção, pipelines de dados e ferramentas de engenharia desenvolvidas com foco em utilidade real.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {isLoading && (
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Atualizando...
              </span>
            )}

            <div 
              className="flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-fit"
              role="tablist"
              aria-label="Filtro de projetos"
            >
              <button
                role="tab"
                aria-selected={filter === 'all'}
                onClick={() => changeFilter('all')}
                className={`min-h-[34px] px-3 sm:px-3.5 py-1 text-xs font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                Todos ({counts.all})
              </button>
              <button
                role="tab"
                aria-selected={filter === 'live'}
                onClick={() => changeFilter('live')}
                className={`min-h-[34px] px-3 sm:px-3.5 py-1 text-xs font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  filter === 'live'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                No Ar ({counts.live})
              </button>
              <button
                role="tab"
                aria-selected={filter === 'research'}
                onClick={() => changeFilter('research')}
                className={`min-h-[34px] px-3 sm:px-3.5 py-1 text-xs font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  filter === 'research'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                Pesquisa & IA ({counts.research})
              </button>
            </div>
          </div>
        </div>

        {isResearchOrAll && <PublicationCard />}

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {(window.innerWidth < 768 ? visibleRepos : filteredRepos).map((repo) => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>

          {filteredRepos.length > 3 && (
            <div className="flex md:hidden justify-center pt-4">
              <button
                onClick={toggleShowAllMobile}
                className="min-h-[42px] px-5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 shadow-xs active:scale-95 transition-all"
              >
                {showAllMobile ? (
                  <>
                    Mostrar Menos <ChevronUp size={15} />
                  </>
                ) : (
                  <>
                    Ver Mais {filteredRepos.length - 3} Projetos <ChevronDown size={15} />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="text-center pt-2 sm:pt-4">
          <a
            href="https://github.com/VictorHugo-Neo"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[42px] inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <Github size={15} />
            Ver todos os 20+ repositórios no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
