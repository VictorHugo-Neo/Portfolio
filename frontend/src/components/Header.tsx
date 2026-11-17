import { Download, Mail, MapPin, Linkedin, Github, MessageSquare, FolderCode } from 'lucide-react';

const EMAIL = "prfvhlc@gmail.com";

export const Header = () => {
  return (
    <header className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
        <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-7">
          <div className="flex lg:hidden items-center gap-4">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 shadow-sm flex-shrink-0">
              <img
                src="/data/FotoPerfil.jpeg"
                alt="Foto de perfil de Victor Hugo Lisboa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                Victor Hugo Lisboa
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-500 font-semibold">
                Desenvolvedor Full-Stack & Professor
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Berilo, MG — Remoto
              </p>
            </div>
          </div>

          <div className="space-y-1.5 sm:space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Victor Hugo Lisboa
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600 dark:text-blue-500">
              Desenvolvedor Full-Stack & Professor
            </p>
          </div>

          <p className="text-sm sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            Construo aplicações web completas com arquitetura limpa, segurança e alto desempenho. 
            Uno a prática de engenharia (Python/FastAPI, React, TypeScript) à docência técnica para formar desenvolvedores e criar sistemas que resolvem problemas reais.
          </p>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <MapPin size={15} className="text-blue-600 dark:text-blue-500" />
              <span>Berilo, MG — Remoto</span>
            </div>

            <a
              href={`mailto:${EMAIL}?subject=Contato%20via%20Portfolio`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Enviar e-mail para Victor Hugo Lisboa"
              title="Enviar e-mail"
            >
              <Mail size={15} className="text-blue-600 dark:text-blue-500" />
              <span>{EMAIL}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <FolderCode size={16} />
              Ver Projetos
            </a>

            <a
              href="https://wa.me/5533998453545?text=Ol%C3%A1%20Victor!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <MessageSquare size={16} className="text-emerald-600 dark:text-emerald-500" />
              WhatsApp
            </a>

            <a
              href="/data/CV_PTBR__VHLC.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Download size={16} />
              Currículo
            </a>

            <div className="flex items-center gap-1.5">
              <a
                href="https://www.linkedin.com/in/victor-hugo-13a350218/"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[42px] min-h-[42px] flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Perfil de Victor Hugo Lisboa no LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://github.com/VictorHugo-Neo"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[42px] min-h-[42px] flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Perfil de Victor Hugo Lisboa no GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end">
          <div className="relative w-80 h-80 lg:w-[380px] lg:h-[380px] xl:w-[440px] xl:h-[440px] 2xl:w-[480px] 2xl:h-[480px] rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-xl flex-shrink-0">
            <img
              src="/data/FotoPerfil.jpeg"
              alt="Foto de perfil de Victor Hugo Lisboa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
