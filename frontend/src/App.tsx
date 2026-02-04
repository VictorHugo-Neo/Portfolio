import { useEffect, useState } from 'react';
import { fetchGithubRepo } from './services/github';
import type { Repository } from './services/github';
import { 
  Github, Star, FolderCode, Database, Layout, 
  Server, Cpu, BookOpen, Terminal as TerminalIcon 
} from 'lucide-react';
import { SkillBadge } from './components/SkillBadge';
import Terminal from './components/Terminal';

const skillGroups = [
  {
    title: "Data Engineering & BI",
    icon: <Database size={18} />,
    skills: [
      { name: "Power BI (DAX/M)", level: "Expert" },
      { name: "SQL Avançado", level: "Expert" },
      { name: "Pandas/ETL", level: "Advanced" },
      { name: "Looker Studio", level: "Advanced" }
    ]
  },
  {
    title: "Backend & Systems",
    icon: <Server size={18} />,
    skills: [
      { name: "Python (FastAPI)", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Linux (OpenSUSE)", level: "Expert" }
    ]
  },
  {
    title: "AI & Frontend",
    icon: <Cpu size={18} />,
    skills: [
      { name: "OpenCV", level: "Intermediary" },
      { name: "TypeScript", level: "Advanced" },
      { name: "React/Vite", level: "Advanced" },
      { name: "Tailwind v4", level: "Advanced" }
    ]
  }
];

const publications = [
  {
    title: "Aprendizado de Máquina Aplicado ao Gerenciamento de Uso de EPIs",
    journal: "Anais do WI-SCI do IFNMG",
    description: "Pesquisa focada em Computer Vision (OpenCV) para automação e monitoramento de segurança do trabalho.",
    tags: ["Python", "Computer Vision", "Safety"]
  }
];

function App() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [filter, setFilter] = useState<'all' | 'data' | 'backend'>('all');

  useEffect(() => {
    fetchGithubRepo().then(setRepos).catch(console.error);
  }, []);

  const filteredRepos = repos.filter(repo => {
    if (filter === 'all') return true;
    if (filter === 'data') return repo.topics.includes('data') || repo.topics.includes('bi') || repo.name.toLowerCase().includes('ia');
    if (filter === 'backend') return repo.language === 'Python' || repo.language === 'TypeScript' || repo.language === 'C++';
    return true;
  });

  return (
    <div className="min-h-screen p-4 md:p-8 bg-brand-dark">
      {/* Header & Terminal Section */}
      <header className="max-w-6xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="border-l-4 border-brand-blue pl-6">
          <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-7xl text-white">
            Victor Hugo <span className="text-brand-blue">Lisboa</span>
          </h1>
          <p className="mt-4 text-slate-400 font-medium text-lg max-w-md">
            Software & Data Engineer | Professor de Sistemas | BI Specialist
          </p>
          <div className="flex gap-4 mt-6">
             <a href="https://github.com/VictorHugo-Neo" target="_blank" className="p-2 bg-slate-800 rounded-full hover:bg-brand-blue transition-colors">
                <Github size={20} />
             </a>
          </div>
        </div>
        <Terminal />
      </header>

      {/* Skills Dashboard */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="flex items-center gap-3 mb-10 text-brand-blue">
          <Layout size={24} />
          <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-slate-100">Tech Stack Dashboard</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-tighter">
                {group.icon}
                {group.title}
              </div>
              <div className="grid grid-cols-1 gap-2">
                {group.skills.map(skill => (
                  <SkillBadge key={skill.name} name={skill.name} level={skill.level as any} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section className="max-w-6xl mx-auto mb-24 border-t border-slate-800 pt-16">
        <div className="flex items-center gap-3 mb-10 text-brand-accent">
          <BookOpen size={24} />
          <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-slate-100">Publicações & Research</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((pub) => (
            <div key={pub.title} className="bg-slate-900/30 p-8 rounded-xl border border-slate-800 hover:border-brand-accent/30 transition-all">
              <span className="text-brand-accent text-[10px] font-bold uppercase tracking-widest">{pub.journal}</span>
              <h3 className="text-xl font-bold mt-2 mb-4 text-white leading-tight">{pub.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{pub.description}</p>
              <div className="flex gap-2">
                {pub.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-slate-500 border border-slate-800 px-3 py-1 rounded-full uppercase font-bold tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Feed */}
      <main className="max-w-6xl mx-auto pb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-3 text-brand-blue">
            <FolderCode size={24} />
            <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-slate-100">Repositórios Ativos</h2>
          </div>
          
          <div className="flex gap-2 bg-slate-900/50 p-1 rounded-lg border border-slate-800">
            {(['all', 'data', 'backend'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all rounded-md ${
                  filter === t ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo) => (
            <div 
              key={repo.id} 
              className="group border border-slate-800 bg-slate-900/40 p-6 transition-all hover:border-brand-blue/50 hover:bg-slate-800/60 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg group-hover:text-brand-blue transition-colors lowercase italic text-white">
                  {repo.name.replace(/-/g, '_')}
                </h3>
                <a href={repo.html_url} target="_blank" className="text-slate-500 hover:text-brand-blue transition-colors">
                  <Github size={20} />
                </a>
              </div>

              <p className="text-sm text-slate-400 mb-6 line-clamp-2 h-10">
                {repo.description || "Project documentation in progress via GitHub API."}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {repo.topics.slice(0, 3).map(topic => (
                  <span key={topic} className="text-[10px] font-bold uppercase px-2 py-1 bg-brand-blue/5 text-brand-blue border border-brand-blue/10">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest">
                  {repo.language || 'Binary'}
                </span>
                <div className="flex items-center gap-1 text-slate-500">
                  <Star size={12} className="text-yellow-600" />
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