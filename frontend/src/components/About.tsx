import { Database, Code2, LineChart, Cpu, Sparkles } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

export const About = ({ isDarkMode }: AboutProps) => {
  return (
    <section id="sobre" className="scroll-mt-24 max-w-7xl mx-auto px-6 py-24 border-t border-black/5 dark:border-white/5">

      {/* CABEÇALHO CENTRALIZADO */}
      <div className="flex flex-col items-center text-center mb-20 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
          <Sparkles size={12} /> Engenharia de Software ∩ IA Generativa
        </div>
        <h2 className={`text-4xl md:text-5xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Sistemas Inteligentes & <span className="text-blue-600">Estratégia de Dados</span>
        </h2>
        <p className="text-lg leading-relaxed text-slate-500 max-w-3xl">
          Especialista em construir a ponte entre o dado bruto e a decisão automatizada. Desenvolvo desde
          <span className={isDarkMode ? 'text-white' : 'text-slate-900 font-medium'}> arquiteturas escaláveis</span> até
          <span className={isDarkMode ? 'text-white' : 'text-slate-900 font-medium'}> agentes baseados em LLMs</span>, integrando IA para resolver problemas complexos de negócio e processos.
        </p>
      </div>

      {/* GRID DE CARDS EMBAIXO */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card: Software Engineering */}
        <div className={`p-8 rounded-2xl border transition-all hover:-translate-y-2 duration-300 ${isDarkMode ? 'bg-slate-900/40 border-white/5 hover:border-blue-500/30' : 'bg-white border-black/5 shadow-sm hover:border-blue-500/30'}`}>
          <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-500 mb-6">
            <Code2 size={24} />
          </div>
          <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Engenharia</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Arquiteturas modernas com FastAPI e React. Foco em sistemas que servem como base sólida para integração de inteligência e dados.
          </p>
        </div>

        {/* Card: Data & ETL */}
        <div className={`p-8 rounded-2xl border transition-all hover:-translate-y-2 duration-300 ${isDarkMode ? 'bg-slate-900/40 border-white/5 hover:border-amber-500/30' : 'bg-white border-black/5 shadow-sm hover:border-amber-500/30'}`}>
          <div className="p-3 w-fit rounded-xl bg-amber-500/10 text-amber-500 mb-6">
            <Database size={24} />
          </div>
          <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Engenharia de Dados</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Pipelines ETL automatizados e modelagem Star Schema. Transformação de dados brutos em conhecimento acionável.
          </p>
        </div>

        {/* Card: LLM & Local AI */}
        <div className={`p-8 rounded-2xl border transition-all hover:-translate-y-2 duration-300 ${isDarkMode ? 'bg-slate-900/40 border-white/5 hover:border-emerald-500/30' : 'bg-white border-black/5 shadow-sm hover:border-emerald-500/30'}`}>
          <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-500 mb-6">
            <Cpu size={24} />
          </div>
          <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>IA & Orquestração</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Desenvolvimento de sistemas com LangChain e execução local via Ollama (Llama 3.2). Foco em privacidade, processamento assíncrono e agentes autônomos.
          </p>
        </div>

        {/* Card: BI & Analytics */}
        <div className={`p-8 rounded-2xl border transition-all hover:-translate-y-2 duration-300 ${isDarkMode ? 'bg-slate-900/40 border-white/5 hover:border-purple-500/30' : 'bg-white border-black/5 shadow-sm hover:border-purple-500/30'}`}>
          <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-500 mb-6">
            <LineChart size={24} />
          </div>
          <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>BI & Processos</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Gestão baseada em indicadores (KPIs) e dashboards em Power BI para otimização de performance e eficiência operacional.
          </p>
        </div>

      </div>
    </section>
  );
};