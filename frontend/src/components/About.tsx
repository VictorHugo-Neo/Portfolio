import { Database, Code2, LineChart, Cpu } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

export const About = ({ isDarkMode }: AboutProps) => {
  return (
    <section id="sobre" className="max-w-7xl mx-auto px-6 py-24 border-t border-black/5 dark:border-white/5">
      
      {/* CABEÇALHO CENTRALIZADO */}
      <div className="flex flex-col items-center text-center mb-20 space-y-6">
        <h2 className={`text-4xl md:text-5xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          A intersecção entre <span className="text-blue-600">Código e Estratégia</span>
        </h2>
        <p className="text-lg leading-relaxed text-slate-500 max-w-3xl">
          Minha trajetória é definida pela capacidade de transitar entre dois mundos: o rigor técnico do 
          <span className={isDarkMode ? 'text-white' : 'text-slate-900 font-medium'}> Desenvolvimento de Software</span> e a visão analítica do 
          <span className={isDarkMode ? 'text-white' : 'text-slate-900 font-medium'}> Business Intelligence</span>.
        </p>
        <div className={`p-4 rounded-xl border inline-block ${isDarkMode ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
          <p className="text-sm italic opacity-80">
            "Sistemas não são apenas ferramentas, são geradores de ativos de dados."
          </p>
        </div>
      </div>

      {/* GRID DE CARDS EMBAIXO */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card: Dev */}
        <div className={`p-8 rounded-2xl border transition-all hover:-translate-y-2 duration-300 ${isDarkMode ? 'bg-slate-900/40 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
          <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-500 mb-6">
            <Code2 size={24} />
          </div>
          <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Software</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            APIs robustas com **FastAPI** e automação em **openSUSE**, priorizando escalabilidade.
          </p>
        </div>

        {/* Card: Dados */}
        <div className={`p-8 rounded-2xl border transition-all hover:-translate-y-2 duration-300 ${isDarkMode ? 'bg-slate-900/40 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
          <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-500 mb-6">
            <LineChart size={24} />
          </div>
          <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>BI & Analytics</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Dashboards em **Power BI** com **DAX** e modelagem **Star Schema**.
          </p>
        </div>

        {/* Card: ETL */}
        <div className={`p-8 rounded-2xl border transition-all hover:-translate-y-2 duration-300 ${isDarkMode ? 'bg-slate-900/40 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
          <div className="p-3 w-fit rounded-xl bg-amber-500/10 text-amber-500 mb-6">
            <Database size={24} />
          </div>
          <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Engenharia ETL</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Pipelines automatizados com **Python/Pandas** para integração de dados.
          </p>
        </div>

        {/* Card: Gestão */}
        <div className={`p-8 rounded-2xl border transition-all hover:-translate-y-2 duration-300 ${isDarkMode ? 'bg-slate-900/40 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
          <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-500 mb-6">
            <Cpu size={24} />
          </div>
          <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Gestão Técnica</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Liderança e monitoramento de **KPIs** com foco em eficiência operacional.
          </p>
        </div>

      </div>
    </section>
  );
};