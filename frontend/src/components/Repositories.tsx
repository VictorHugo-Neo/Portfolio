import { useEffect, useState } from 'react';
import { fetchGithubRepo } from '../services/github';
import type { Repository } from '../services/github';
import { Github, Star, FolderCode } from 'lucide-react';

interface RepositoryProps {
    isDarkMode: boolean
}

export const Repositories = ({ isDarkMode }: RepositoryProps) => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [filter, setFilter] = useState<'all' | 'data' | 'backend'>('all');

    useEffect(() => {
        fetchGithubRepo().then(setRepos).catch(console.error);
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const filteredRepos = repos.filter(repo => {
        if (filter === 'all') return true;
        const isData = repo.topics.some(t => ['data', 'bi', 'analytics'].includes(t.toLowerCase()));
        return filter === 'data' ? isData : (repo.language === 'Python' || repo.language === 'TypeScript');
    });
    return (
        <main className="max-w-7xl mx-auto px-6 py-24 border-t border-black/5 dark:border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="space-y-2">
                    <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Sistemas & Código</h2>
                    <p className="opacity-50 font-medium">Extração via GitHub API.</p>
                </div>
                <div className={`flex p-1 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-black/5'}`}>
                    {(['all', 'data', 'backend'] as const).map((t) => (
                        <button key={t} onClick={() => setFilter(t)} className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${filter === t ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500'}`}>
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRepos.map((repo) => (
                    <div key={repo.id} className={`group p-8 rounded-2xl border transition-all flex flex-col ${isDarkMode ? 'bg-slate-900/20 border-white/5 hover:border-blue-500/40' : 'bg-white border-black/5 shadow-sm hover:border-blue-500/30'}`}>
                        <div className="flex justify-between mb-8">
                            <div className={`p-3 rounded-xl transition-all ${isDarkMode ? 'bg-white/5 text-blue-500 group-hover:bg-blue-600 group-hover:text-white' : 'bg-slate-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
                                <FolderCode size={20} />
                            </div>
                            <a href={repo.html_url} target="_blank" className="opacity-30 hover:opacity-100"><Github size={20} /></a>
                        </div>
                        <h3 className={`text-lg font-bold mb-2 font-mono ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{repo.name.toLowerCase()}</h3>
                        <p className="text-sm opacity-50 mb-8 flex-grow leading-relaxed">{repo.description || "Project metadata hosted on GitHub."}</p>
                        <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5">
                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{repo.language || 'Python'}</span>
                            <div className="flex items-center gap-1 text-xs opacity-40"><Star size={14} /> {repo.stargazers_count}</div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}