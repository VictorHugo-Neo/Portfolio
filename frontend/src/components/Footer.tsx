import { Mail, MessageSquare, Linkedin, Github, ArrowUp, Check, MapPin, Send } from 'lucide-react';
import { useClipboard } from '../hooks/useClipboard';
import { useScrollThreshold } from '../hooks/useScrollThreshold';

const EMAIL = "prfvhlc@gmail.com";

export const Footer = () => {
  const { hasCopied, copy } = useClipboard();
  const showFloatingTop = useScrollThreshold(350);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="contato" className="scroll-mt-20 bg-slate-50/50 dark:bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6 py-10 sm:py-16 lg:py-24 space-y-8 sm:space-y-12">
          <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-slate-900 text-white dark:bg-blue-600/10 dark:border dark:border-blue-500/20 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-2 sm:space-y-3 max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                Contato Direto & Oportunidades
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                Vamos construir algo relevante juntos?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Disponível para projetos sob demanda em software full-stack (Python/FastAPI & React), consultoria e docência técnica.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <a
                href="https://wa.me/5533998453545?text=Ol%C3%A1%20Victor!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[42px] inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 active:scale-95"
              >
                <MessageSquare size={15} />
                WhatsApp
              </a>

              <a
                href={`mailto:${EMAIL}?subject=Contato%20Profissional%20via%20Portfolio`}
                className="min-h-[42px] inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                title="Abrir no cliente de e-mail"
              >
                <Send size={14} />
                Enviar E-mail
              </a>

              <button
                onClick={() => copy(EMAIL)}
                className="min-h-[42px] inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-200 text-xs font-bold transition-all border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Copiar endereço de e-mail"
              >
                {hasCopied ? (
                  <>
                    <Check size={15} className="text-emerald-400" />
                    <span className="text-emerald-400">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Mail size={14} />
                    <span>Copiar E-mail</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-4 sm:pt-6 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-center sm:text-left">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Victor Hugo Lisboa Coutinho
              </span>
              <span className="hidden sm:inline" aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1 font-medium">
                <MapPin size={13} className="text-blue-600 dark:text-blue-400" />
                Berilo, MG — Brasil
              </span>
              <span className="hidden sm:inline" aria-hidden="true">•</span>
              <span className="font-mono">Full-Stack & Educação</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/victor-hugo-13a350218/"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Perfil no LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com/VictorHugo-Neo"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Perfil no GitHub"
              >
                <Github size={18} />
              </a>

              <button
                onClick={scrollToTop}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl bg-slate-200/80 hover:bg-slate-300 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Voltar ao topo da página"
                title="Voltar ao topo"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {showFloatingTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-40 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 transition-all animate-in fade-in zoom-in duration-200 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Voltar rapidamente ao topo"
          title="Voltar ao topo"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
};

export default Footer;
