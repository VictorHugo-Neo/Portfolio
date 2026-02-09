import { useEffect, useState } from 'react';
import { fetchGithubRepo } from '../services/github';
import type { Repository } from '../services/github';
import { Github, FolderCode, ExternalLink } from 'lucide-react';

interface RepositoryProps {
    isDarkMode: boolean
}

// Mapeamento de cores para as tecnologias
const languageColors: { [key: string]: string } = {
    Python: "text-blue-500",
    TypeScript: "text-blue-600",
    JavaScript: "text-yellow-500",
    HTML: "text-orange-600",
    CSS: "text-purple-500",
    React: "text-cyan-400",
    FastAPI: "text-emerald-500",
    PostgreSQL: "text-indigo-400",
    default: "text-slate-400"
};

// Lista de curadoria manual
const FEATURED_REPOS = [
    "prototype_PGO",
    "Reciplay",
    "CHAT-CALL"
];

export const Repositories = ({ isDarkMode }: RepositoryProps) => {
    const [repos, setRepos] = useState<Repository[]>([]);

    useEffect(() => {
        fetchGithubRepo()
            .then(data => {
                // Normaliza a lista de busca para evitar erros de digitação/maiusculas
                const cleanFeaturedList = FEATURED_REPOS.map(name => name.trim().toLowerCase());

                const featured = data.filter(repo =>
                    cleanFeaturedList.includes(repo.name.toLowerCase().trim())
                );

                setRepos(featured);
            })
            .catch(console.error);
    }, []);

    return (
        <main id="projetos" className="max-w-7xl mx-auto px-6 py-24 border-t border-black/5 dark:border-white/5">
            {/* Cabeçalho da Seção */}
            <div className="flex flex-col items-center text-center mb-16 space-y-4">
                <h2 className={`text-4xl font-bold tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    Projetos em Destaque
                </h2>
                <p className="opacity-50 font-medium max-w-2xl text-sm">
                    Sistemas e automações desenvolvidos para resolver problemas reais, extraídos via GitHub API.
                </p>
                <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
            </div>

            {/* Grid de Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                    <div
                        key={repo.id}
                        className={`group p-8 rounded-2xl border transition-all flex flex-col relative ${isDarkMode
                            ? 'bg-slate-900/20 border-white/5 hover:border-blue-500/40'
                            : 'bg-white border-black/5 shadow-sm hover:border-blue-500/30'
                            }`}
                    >
                        {/* Topo do Card */}
                        <div className="flex justify-between mb-8">
                            <div className={`p-3 rounded-xl transition-all ${isDarkMode ? 'bg-white/5 text-blue-500' : 'bg-slate-50 text-blue-600'}`}>
                                <FolderCode size={20} />
                            </div>
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-30 hover:opacity-100 transition-opacity"
                            >
                                <Github size={20} />
                            </a>
                        </div>

                        {/* Título e Descrição */}
                        <h3 className={`text-lg font-bold mb-2 font-mono ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                            {repo.name.toLowerCase()}
                        </h3>

                        <p className="text-sm opacity-50 mb-8 flex-grow leading-relaxed">
                            {repo.description || "Descrição técnica disponível no repositório do projeto."}
                        </p>

                        {/* Rodapé do Card com Cores e Link */}
                        <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5">
                            <div className="flex gap-2 items-center">
                                {/* Linguagem Principal */}
                                <span className={`text-[10px] font-black uppercase tracking-widest ${languageColors[repo.language || 'default'] || languageColors.default}`}>
                                    {repo.language || 'Python'}
                                </span>

                                {/* Segunda Tech (Topics) */}
                                {repo.topics && repo.topics.length > 0 && (
                                    <>
                                        <span className="opacity-20 text-slate-500">|</span>
                                        <span className={`text-[10px] font-black uppercase tracking-widest ${
                                            languageColors[repo.topics.find(t => t.toLowerCase() !== repo.language?.toLowerCase()) || ''] || 'text-slate-500'
                                        }`}>
                                            {repo.topics.find(t => t.toLowerCase() !== repo.language?.toLowerCase()) || repo.topics[0]}
                                        </span>
                                    </>
                                )}
                            </div>

                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider transition-all group/link ${
                                    isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-blue-600'
                                }`}
                            >
                                Acessar <ExternalLink size={12} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Final */}
            <div className="mt-16 text-center">
                <a
                    href="https://github.com/VictorHugo-Neo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border text-xs font-bold transition-all ${isDarkMode
                        ? 'border-white/10 hover:bg-white/5 text-white'
                        : 'border-black/10 hover:bg-black/5 text-slate-900'
                        }`}
                >
                    Repositório Completo no GitHub <Github size={16} />
                </a>
            </div>
        </main>
    );
};