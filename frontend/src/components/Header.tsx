import { Download, Mail, MapPin, Linkedin, Github, Check, MessageSquare, FolderCode, Copy } from 'lucide-react';
import { useClipboard } from '../hooks/useClipboard';

const EMAIL = "prfvhlc@gmail.com";

export const Header = () => {
  const { hasCopied, copy } = useClipboard();

  return (
    <header className="max-w-6xl mx-auto px-6 pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-8 space-y-4 sm:space-y-6">
          <div className="flex lg:hidden items-center gap-3.5">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-white/10 shadow-sm flex-shrink-0">
              <img
                src="/data/FotoPerfil.jpeg"
                alt="Foto de perfil de Victor Hugo Lisboa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold tracking-wide hover:bg-emerald-500/20 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Disponível para projetos
              </a>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                Berilo, MG — Remoto
              </p>
            </div>
          </div>

          <div className="hidden lg:inline-block">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Disponível para projetos de software & mentorias</span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold ml-0.5">→</span>
            </a>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Victor Hugo Lisboa
            </h1>
            <p className="text-base sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
              Desenvolvedor Full-Stack & Professor
            </p>
          </div>

          <p className="text-sm sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
            Construo aplicações web completas com arquitetura limpa, segurança e alto desempenho. 
            Uno a prática de engenharia (Python/FastAPI, React, TypeScript) à docência técnica para formar desenvolvedores e criar sistemas que resolvem problemas reais.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-medium text-slate-700 dark:text-slate-300">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <MapPin size={14} className="text-blue-600 dark:text-blue-400" />
              <span>Berilo, MG — Remoto</span>
            </div>

            <div className="inline-flex items-center rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden">
              <button
                onClick={() => copy(EMAIL)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 hover:bg-slate-200/60 dark:hover:bg-white/10 text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Copiar endereço de e-mail para a área de transferência"
                title="Clique para copiar e-mail"
              >
                {hasCopied ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold" aria-live="polite">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="text-blue-600 dark:text-blue-400" />
                    <span>{EMAIL}</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${EMAIL}?subject=Contato%20via%20Portfolio`}
                className="p-1 sm:p-1.5 hover:bg-slate-200/80 dark:hover:bg-white/10 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white border-l border-slate-200 dark:border-white/10 transition-colors"
                aria-label="Abrir cliente de e-mail"
                title="Abrir no cliente de e-mail"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <FolderCode size={15} />
              Ver Projetos
            </a>

            <a
              href="https://wa.me/5533998453545?text=Ol%C3%A1%20Victor!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-slate-100 hover:bg-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <MessageSquare size={15} className="text-emerald-600 dark:text-emerald-400" />
              WhatsApp
            </a>

            <a
              href="/data/CV_PTBR__VHLC.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Download size={15} />
              Currículo
            </a>

            <div className="flex items-center gap-1">
              <a
                href="https://www.linkedin.com/in/victor-hugo-13a350218/"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Perfil de Victor Hugo Lisboa no LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com/VictorHugo-Neo"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Perfil de Victor Hugo Lisboa no GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-4 justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 dark:opacity-30 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900 shadow-xl">
              <img
                src="/data/FotoPerfil.jpeg"
                alt="Foto de perfil de Victor Hugo Lisboa"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
