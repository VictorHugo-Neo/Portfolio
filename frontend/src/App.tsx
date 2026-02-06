import { useEffect, useState } from 'react';
import { fetchGithubRepo } from './services/github';
import type { Repository } from './services/github';
import { 
  Github, Star, FolderCode, Database, 
  Server, Cpu, BookOpen, Terminal as TerminalIcon,
  BarChart3, Activity, Download, Briefcase,
  Mail, MapPin, Linkedin, ExternalLink, Sun, Moon,
  Layers, Code2, Globe, Boxes
} from 'lucide-react';
import Terminal from './components/Terminal';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Belt } from './components/Belt';
import { Skills } from './components/Skills';
const careerTimeline = [
  {
    period: "2024 — ATUAL",
    role: "Professor e Gestor de Projetos Técnicos",
    company: "EE Professor Jason de Morais",
    location: "Berilo, MG",
    description: "Liderança técnica no curso de Desenvolvimento de Sistemas. Gestão de KPIs educacionais (frequência, evasão e desempenho) e mentoria em arquitetura de software.",
    tech: ["Gestão de Indicadores", "SQL", "Liderança Técnica", "Didática"]
  },
  {
    period: "2022 — 2022",
    role: "Pesquisador em Data Science e Automação",
    company: "IFMG - Campus Araçuaí",
    location: "Araçuaí, MG",
    description: "Desenvolvimento de pipelines ETL (OpenCV/TensorFlow) para captura de dados visuais e transformação em métricas quantitativas de segurança.",
    tech: ["Python", "Computer Vision", "ETL", "Pandas", "Analytics"]
  },
  {
    period: "2021 — 2024",
    role: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    company: "IFMG",
    location: "MG, Brasil",
    description: "Foco em engenharia de dados, infraestrutura e soluções sistêmicas para problemas reais.",
    tech: ["Software Engineering", "Data Structures", "Cloud Fundamentals"]
  }
];

// Ícones para a esteira de tecnologias

function App() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [filter, setFilter] = useState<'all' | 'data' | 'backend'>('all');
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#050505] text-slate-300' : 'bg-[#f4f7f9] text-slate-800'} font-sans selection:bg-blue-500/30 overflow-x-hidden`}>
      
      {/* NAVEGAÇÃO */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* HEADER */}
      <Header isDarkMode={isDarkMode} />
      

      {/* ESTEIRA DE TECNOLOGIAS EM MOVIMENTO */}
      <Belt isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>

      {/* COMPETÊNCIAS */}
      <Skills isDarkMode={isDarkMode} />

      {/* TRAJETÓRIA E TERMINAL */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-black/5 dark:border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className={`text-2xl font-bold mb-12 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              <Briefcase size={24} className="text-blue-500" /> Trajetória Profissional
            </h2>
            <div className="space-y-12 relative border-l border-black/5 dark:border-white/5 ml-3">
              {careerTimeline.map((item, i) => (
                <div key={i} className="relative pl-10 group">
                  <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[5px] top-2"></div>
                  <span className="text-[10px] font-mono font-bold text-blue-500 uppercase">{item.period}</span>
                  <h3 className={`text-lg font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.role}</h3>
                  <p className="text-sm font-medium opacity-60 mb-4">{item.company}</p>
                  <p className="text-sm opacity-50 leading-relaxed mb-4">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className={`text-2xl font-bold mb-12 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                <TerminalIcon size={24} className="text-emerald-500" /> Shell Environment
              </h2>
              <div className="rounded-xl overflow-hidden shadow-2xl bg-black ring-1 ring-white/10">
                <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                  </div>
                  <span className="text-[10px] font-mono text-white/30 ml-2 uppercase tracking-widest italic">system_analytics.sh</span>
                </div>
                <div className="p-1"><Terminal /></div>
              </div>
            </div>
            
            <div className={`p-8 rounded-2xl border transition-all ${isDarkMode ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-100 shadow-sm'}`}>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4 font-black uppercase text-[10px] tracking-widest">
                <BookOpen size={16} /> Produção Acadêmica
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Machine Learning e Segurança do Trabalho</h3>
              <p className="text-sm opacity-60 mb-6 italic italic">Publicado nos Anais do WI-SCI do IFNMG. Foco em Visão Computacional.</p>
              <button className={`text-xs font-bold flex items-center gap-2 hover:underline ${isDarkMode ? 'text-white' : 'text-blue-700'}`}>
                Ver Publicação <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REPOSITÓRIOS GITHUB */}
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

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-16 border-t border-black/5 dark:border-white/5 text-center">
        <div className="text-[10px] font-mono uppercase tracking-[0.5em] opacity-30">
          Victor Hugo Lisboa Coutinho • 2026 • OpenSUSE Environment
        </div>
      </footer>
    </div>
  );
}

export default App;