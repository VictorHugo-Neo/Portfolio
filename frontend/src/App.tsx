import { useEffect, useState } from 'react';
import { fetchGithubRepo } from './services/github';
import type { Repository } from './services/github';
import { Github, Star, FolderCode } from 'lucide-react';

function App() {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    fetchGithubRepo().then(setRepos).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen p-8">
      {/* Header Profissional - Foco em Engenharia de Dados */}
      <header className="max-w-6xl mx-auto mb-16">
        <div className="border-l-4 border-brand-blue pl-6">
          <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-6xl">
            Victor Hugo <span className="text-brand-blue">Lisboa</span>
          </h1>
          <p className="mt-2 text-slate-400 font-medium">
            Software & Data Engineer | Professor de Sistemas | BI Specialist
          </p>
        </div>
      </header>

      {/* Grid de Projetos com Atualização Automática */}
      <main className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8 text-brand-accent">
          <FolderCode size={24} />
          <h2 className="text-2xl font-bold uppercase tracking-widest">Repositórios Ativos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div 
              key={repo.id} 
              className="group border border-slate-800 bg-slate-900/40 p-6 transition-all hover:border-brand-blue/50 hover:bg-slate-800/60"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg group-hover:text-brand-blue transition-colors lowercase italic">
                  {repo.name.replace(/-/g, '_')}
                </h3>
                <a href={repo.html_url} target="_blank" className="text-slate-500 hover:text-white">
                  <Github size={20} />
                </a>
              </div>

              <p className="text-sm text-slate-400 mb-6 line-clamp-2 h-10">
                {repo.description || "Project documentation in progress."}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {repo.topics.slice(0, 3).map(topic => (
                  <span key={topic} className="text-[10px] font-bold uppercase px-2 py-1 bg-slate-800 text-slate-300">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                <span className="text-[10px] font-mono text-brand-blue uppercase tracking-widest">
                  {repo.language || 'Code'}
                </span>
                <div className="flex items-center gap-1 text-slate-500">
                  <Star size={12} />
                  <span className="text-xs">{repo.stargazers_count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;