import { Database, Code2, Cpu, Sparkles, BookOpen, MoveHorizontal } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

export const About = ({ isDarkMode }: AboutProps) => {
  return (
    <section id="sobre" className="scroll-mt-24 max-w-7xl mx-auto px-6 py-12 md:py-24 border-t border-black/5 dark:border-white/5">

      <div className="flex flex-col items-center text-center mb-12 md:mb-20 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest">
          <Sparkles size={12} /> Desenvolvimento & Análise
        </div>
        <h2 className={`text-4xl md:text-5xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Engenharia de Software <span className="text-blue-600">Direta e Reta</span>
        </h2>
        <p className="text-lg leading-relaxed text-slate-500 max-w-3xl">
          Sou desenvolvedor e professor. Trabalho com
          <span className={isDarkMode ? 'text-white' : 'text-slate-900 font-medium'}> desenvolvimento full-stack</span>, 
          <span className={isDarkMode ? 'text-white' : 'text-slate-900 font-medium'}> dados</span> e 
          <span className={isDarkMode ? 'text-white' : 'text-slate-900 font-medium'}> métodos ágeis</span> para entregar softwares que resolvem problemas reais, sem complicação.
        </p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible scrollbar-hide">

        <div className={`min-w-[85vw] md:min-w-0 snap-center p-6 md:p-8 rounded-2xl border transition-all hover:-translate-y-2 duration-300 ${isDarkMode ? 'bg-slate-900/40 border-white/5 hover:border-blue-500/30' : 'bg-white border-black/5 shadow-sm hover:border-blue-500/30'}`}>
          <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-500 mb-6">
            <Code2 size={24} />
          </div>
          <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Desenvolvimento</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Criação de sistemas web e APIs modernas com Python (FastAPI) e React. Foco em código limpo, seguro e funcional para resolver problemas reais.
          </p>
        </div>

        <div className={`min-w-[85vw] md:min-w-0 snap-center p-6 md:p-8 rounded-2xl border transition-all hover:-translate-y-2 duration-300 ${isDarkMode ? 'bg-slate-900/40 border-white/5 hover:border-amber-500/30' : 'bg-white border-black/5 shadow-sm hover:border-amber-500/30'}`}>
          <div className="p-3 w-fit rounded-xl bg-amber-500/10 text-amber-500 mb-6">
            <Database size={24} />
          </div>
          <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Análise de Dados</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Tratamento de dados e criação de dashboards em Power BI. Transformação de informações brutas em indicadores (KPIs) para suporte à decisão.
          </p>
        </div>

        <div className={`min-w-[85vw] md:min-w-0 snap-center p-6 md:p-8 rounded-2xl border transition-all hover:-translate-y-2 duration-300 ${isDarkMode ? 'bg-slate-900/40 border-white/5 hover:border-emerald-500/30' : 'bg-white border-black/5 shadow-sm hover:border-emerald-500/30'}`}>
          <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-500 mb-6">
            <Cpu size={24} />
          </div>
          <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Gestão & Ágil</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Aplicação de metodologias como Kanban e Scrum para organizar fluxos de trabalho, garantindo prazos e qualidade na entrega de projetos.
          </p>
        </div>

        <div className={`min-w-[85vw] md:min-w-0 snap-center p-6 md:p-8 rounded-2xl border transition-all hover:-translate-y-2 duration-300 ${isDarkMode ? 'bg-slate-900/40 border-white/5 hover:border-purple-500/30' : 'bg-white border-black/5 shadow-sm hover:border-purple-500/30'}`}>
          <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-500 mb-6">
            <BookOpen size={24} />
          </div>
          <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Ensino Técnico</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Experiência em simplificar conceitos complexos, atuando como professor e mentor técnico para formar novos talentos na área de tecnologia.
          </p>
        </div>

      </div>

      <div className="flex md:hidden justify-center items-center gap-2 mt-6 text-slate-500 opacity-60">
        <MoveHorizontal size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Deslize para ver mais</span>
      </div>
    </section>
  );
};