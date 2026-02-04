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

const skillGroups = [
  {
    title: "BI & Analytics",
    icon: <BarChart3 className="text-blue-500" size={18} />,
    skills: ["Power BI (DAX/M)", "Modelagem Star Schema", "SQL Avançado", "Looker Studio"]
  },
  {
    title: "Engenharia & Cloud",
    icon: <Cpu className="text-emerald-500" size={18} />,
    skills: ["Python (FastAPI)", "Pandas/NumPy", "Docker", "AWS Fundamentals", "OpenSUSE"]
  },
  {
    title: "Gestão & Processos",
    icon: <Activity className="text-amber-500" size={18} />,
    skills: ["BPMN (Bizagi)", "Metodologias Ágeis", "Power Automate", "Ciclo PDCA"]
  }
];

// Ícones para a esteira de tecnologias
const techIcons = [
  { name: "Python", icon: <Code2 size={22} className="text-blue-500" /> },
  { name: "SQL", icon: <Database size={22} className="text-emerald-500" /> },
  { name: "Power BI", icon: <BarChart3 size={22} className="text-yellow-500" /> },
  { name: "React", icon: <Globe size={22} className="text-cyan-400" /> },
  { name: "TypeScript", icon: <Boxes size={22} className="text-blue-600" /> },
  { name: "Docker", icon: <Layers size={22} className="text-blue-400" /> },
  { name: "Linux", icon: <TerminalIcon size={22} className="text-orange-500" /> },
];

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
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b py-4 transition-colors ${isDarkMode ? 'border-white/5 bg-black/20' : 'border-black/5 bg-white/50'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] opacity-50">Lisboa.dev</span>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-full border transition-all ${isDarkMode ? 'border-white/10 text-yellow-400' : 'border-black/10 text-blue-600'}`}>
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                Engenharia de Software & Inteligência de Negócio
              </div>
              <h1 className={`text-6xl md:text-7xl font-black tracking-tighter leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Victor Hugo <span className="opacity-40 italic font-light">Lisboa</span>
              </h1>
              <p className="text-2xl text-slate-500 font-medium">Data & Process Analyst</p>
            </div>
            <p className="text-lg text-slate-500 max-w-3xl leading-relaxed">
              Especialista na interface entre o código e o negócio. Atuo na <span className={isDarkMode ? 'text-white' : 'text-black'}>automação de pipelines ETL</span> e na construção de dashboards estratégicos.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:prfvhlc@gmail.com" className="px-8 py-3 bg-blue-600 text-white font-bold text-sm rounded hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all">Contato</a>
              <a href="/CV_PTBR__VHLC.pdf" className={`px-8 py-3 font-bold text-sm rounded border transition-all flex items-center gap-2 ${isDarkMode ? 'bg-slate-900 text-white border-white/10' : 'bg-white text-slate-900 border-black/10'}`}>
                <Download size={16} /> Currículo
              </a>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className={`p-4 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-900/40 border-white/5' : 'bg-white border-black/5 shadow-xl shadow-black/5'}`}>
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQGOKyyN6u8sdw/profile-displayphoto-crop_800_800/B4DZkel64YIEAI-/0/1757154881543?e=1772064000&v=beta&t=wDSN49dfq7Bi3pAx5-6kjZF8VuLq0CbtbzGnycK_GLg" alt="Profile" className="w-full aspect-square object-cover rounded-xl mb-6 grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="space-y-3 opacity-70">
                <div className="flex items-center gap-3 text-sm font-medium"><Mail size={16} className="text-blue-500" /> prfvhlc@gmail.com</div>
                <div className="flex items-center gap-3 text-sm font-medium"><MapPin size={16} className="text-blue-500" /> Berilo, MG - Brasil</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ESTEIRA DE TECNOLOGIAS EM MOVIMENTO */}
      <div className={`py-10 border-y ${isDarkMode ? 'border-white/5 bg-white/[0.01]' : 'border-black/5 bg-black/[0.01]'} overflow-hidden relative`}>
        <div className="flex animate-scroll w-[max-content] gap-16 items-center">
          {[...techIcons, ...techIcons, ...techIcons, ...techIcons].map((item, index) => (
            <div key={index} className="flex items-center gap-4 group cursor-default">
              <div className={`p-3 rounded-xl transition-all ${isDarkMode ? 'bg-white/5 grayscale group-hover:grayscale-0' : 'bg-white shadow-sm grayscale group-hover:grayscale-0'}`}>
                {item.icon}
              </div>
              <span className={`font-mono text-[10px] font-bold tracking-widest uppercase opacity-30 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className={`absolute inset-y-0 left-0 w-32 z-10 pointer-events-none bg-gradient-to-r ${isDarkMode ? 'from-[#050505]' : 'from-[#f4f7f9]'} to-transparent`} />
        <div className={`absolute inset-y-0 right-0 w-32 z-10 pointer-events-none bg-gradient-to-l ${isDarkMode ? 'from-[#050505]' : 'from-[#f4f7f9]'} to-transparent`} />
      </div>

      {/* COMPETÊNCIAS */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map(group => (
          <div key={group.title} className={`p-8 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-900/20 border-white/5 hover:border-blue-500/30' : 'bg-white border-black/5 shadow-sm hover:border-blue-500/30'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-white/5' : 'bg-slate-100'}`}>{group.icon}</div>
              <h3 className={`font-bold uppercase tracking-widest text-[10px] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span key={skill} className={`px-3 py-1 border rounded-full text-[11px] font-semibold transition-all ${isDarkMode ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-slate-50 border-black/5 text-slate-600'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

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