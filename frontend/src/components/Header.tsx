import { Download, Mail, MapPin, Linkedin } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
}

export const Header = ({ isDarkMode }: HeaderProps) => {
  return (
    <header className="max-w-7xl mx-auto px-6 pt-32 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Lado Esquerdo: Textos e CTA */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest">
              Desenvolvimento Full-Stack & BI Analytics
            </div>
            
            <h1 className={`text-6xl md:text-7xl font-black tracking-tighter leading-none ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Victor Hugo 
            </h1>
            
          </div>

          <p className="text-lg text-slate-500 max-w-3xl leading-relaxed">
            Especialista em unir a robustez da
            <span className={isDarkMode ? 'text-white' : 'text-black font-medium'}> Engenharia de Software </span>
            à precisão da
            <span className={isDarkMode ? 'text-white' : 'text-black font-medium'}> Análise de Dados. </span>
            Desenvolvo sistemas escaláveis e pipelines ETL automatizados que transformam fluxos de informação 
            brutos em dashboards estratégicos e decisões baseadas em evidências.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/5533998453545?text=Seja%20bem-vindo(a)%20ao%20meu%20contato%20profissional." 
              className="px-8 py-3 bg-blue-600 text-white font-bold text-sm rounded hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all active:scale-95"
            >
              Entrar em Contato
            </a>
            <a 
              href="./data/CV_PTBR__VHLC.pdf" 
              target="_blank"
              className={`px-8 py-3 font-bold text-sm rounded border transition-all flex items-center gap-2 ${
                isDarkMode 
                ? 'bg-slate-900 text-white border-white/10 hover:bg-slate-800' 
                : 'bg-white text-slate-900 border-black/10 hover:bg-slate-50'
              }`}
            >
              <Download size={16} /> Currículo Completo
            </a>
          </div>
        </div>

        {/* Lado Direito: Card de Perfil */}
        <div className="lg:col-span-4">
          <div className={`p-4 rounded-2xl border transition-all duration-500 ${
            isDarkMode 
            ? 'bg-slate-900/40 border-white/5 shadow-2xl shadow-black' 
            : 'bg-white border-black/5 shadow-xl shadow-black/5'
          }`}>
            <div className="overflow-hidden rounded-xl mb-6 group">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQGOKyyN6u8sdw/profile-displayphoto-crop_800_800/B4DZkel64YIEAI-/0/1757154881543?e=1772064000&v=beta&t=wDSN49dfq7Bi3pAx5-6kjZF8VuLq0CbtbzGnycK_GLg" 
                alt="Victor Hugo Lisboa" 
                className="w-full aspect-square object-cover group-hover:scale-105 transition-all duration-700 ease-in-out" 
              />
            </div>
            
            <div className="space-y-4 px-2">
              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  <Mail size={16} />
                </div>
                <span className="opacity-70">prfvhlc@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  <MapPin size={16} />
                </div>
                <span className="opacity-70">Berilo, MG - Brasil</span>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/5 flex justify-center gap-6 opacity-50">
                <a href="https://github.com/VictorHugo-Neo" target="_blank" className="hover:text-blue-500 transition-colors">
                  <Linkedin size={30} />
                </a>
                {/* Outros links sociais aqui */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};