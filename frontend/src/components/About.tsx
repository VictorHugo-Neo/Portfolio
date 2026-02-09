import { Database, Code2, LineChart, Cpu } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

export const About = ({ isDarkMode }: AboutProps) => {
  return (
    <section id="sobre" className="max-w-7xl mx-auto px-6 py-24 border-t border-black/5 dark:border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Título e Visão Geral */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className={`text-4xl font-black tracking-tighter ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            A intersecção entre <br />
            <span className="text-blue-600">Código e Estratégia.</span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-500">
            Minha trajetória é definida pela capacidade de transitar entre dois mundos: o rigor técnico do 
            <span className={isDarkMode ? 'text-white' : 'text-slate-900 font-medium'}> Desenvolvimento de Software</span> e a visão analítica do 
            <span className={isDarkMode ? 'text-white' : 'text-slate-900 font-medium'}> Business Intelligence</span>.
          </p>
          <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
            <p className="text-sm italic opacity-80">
              "Não vejo sistemas apenas como ferramentas funcionais, mas como geradores de dados que, se bem arquitetados, tornam-se o maior ativo de uma empresa."
            </p>
          </div>
        </div>

        {/* Pilares de Atuação */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Dev */}
          <div className={`p-8 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-900/40 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
            <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-500 mb-6">
              <Code2 size={24} />
            </div>
            <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Desenvolvedor de Software</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Foco na construção de APIs robustas com **Python (FastAPI)** e automação de rotinas em ambiente **Linux (openSUSE)**. Experiência em arquitetura de sistemas que priorizam a integridade e escalabilidade dos dados.
            </p>
          </div>

          {/* Card 2: Dados */}
          <div className={`p-8 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-900/40 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
            <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-500 mb-6">
              <LineChart size={24} />
            </div>
            <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Analista de Dados & BI</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Especialista em transformar grandes volumes de dados em dashboards estratégicos no **Power BI**. Domínio de **DAX**, **SQL Avançado** e modelagem **Star Schema** para suporte à decisão executiva.
            </p>
          </div>

          {/* Card 3: ETL */}
          <div className={`p-8 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-900/40 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
            <div className="p-3 w-fit rounded-xl bg-amber-500/10 text-amber-500 mb-6">
              <Database size={24} />
            </div>
            <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Engenharia de Dados (ETL)</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Desenvolvimento de pipelines de dados automatizados, utilizando bibliotecas como **Pandas** e ferramentas de integração para garantir que a informação chegue limpa e rápida ao destino final.
            </p>
          </div>

          {/* Card 4: Gestão */}
          <div className={`p-8 rounded-2xl border transition-all ${isDarkMode ? 'bg-slate-900/40 border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
            <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-500 mb-6">
              <Cpu size={24} />
            </div>
            <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Gestão Técnica</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Como professor e gestor, aplico metodologias ágeis e visão sistêmica para liderar projetos, garantindo que o desenvolvimento técnico esteja sempre alinhado aos KPIs de negócio.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};