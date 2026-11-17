import { useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { servicesTimeline, educationTimeline } from "../data/trajectoryData";
import { TimelineCard } from "./TimelineCard";

export const Trajectory = () => {
  const [mobileTab, setMobileTab] = useState<'services' | 'education'>('services');

  return (
    <section 
      id="trajetoria" 
      className="scroll-mt-20 max-w-7xl xl:max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-10 sm:py-16 lg:py-24"
    >
      <span id="experiencia" className="scroll-mt-20" aria-hidden="true" />
      <span id="servicos" className="scroll-mt-20" aria-hidden="true" />
      <span id="estudos" className="scroll-mt-20" aria-hidden="true" />

      <div className="space-y-6 sm:space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Briefcase size={15} />
              Carreira & Academia
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Serviços & Estudos
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
              Minha atuação prática entre desenvolvimento de software e ensino técnico, aliada a uma sólida base acadêmica contínua.
            </p>
          </div>

          <div className="lg:hidden flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-fit">
            <button
              onClick={() => setMobileTab('services')}
              className={`min-h-[34px] px-3.5 py-1 text-xs font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                mobileTab === 'services'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              Atuação Profissional ({servicesTimeline.length})
            </button>
            <button
              onClick={() => setMobileTab('education')}
              className={`min-h-[34px] px-3.5 py-1 text-xs font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                mobileTab === 'education'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              Formação ({educationTimeline.length})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <div className={`space-y-4 sm:space-y-6 ${mobileTab !== 'services' ? 'hidden lg:block' : 'block'}`}>
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-blue-600 dark:text-blue-500 flex items-center justify-center">
                <Briefcase size={16} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Serviços & Atuação
              </h3>
            </div>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-2 sm:ml-4 space-y-6 sm:space-y-8">
              {servicesTimeline.map((item, index) => (
                <TimelineCard key={`${item.role}-${index}`} item={item} accentColor="blue" />
              ))}
            </div>
          </div>

          <div className={`space-y-4 sm:space-y-6 ${mobileTab !== 'education' ? 'hidden lg:block' : 'block'}`}>
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-500 flex items-center justify-center">
                <GraduationCap size={16} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Estudos & Formação
              </h3>
            </div>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-2 sm:ml-4 space-y-6 sm:space-y-8">
              {educationTimeline.map((item, index) => (
                <TimelineCard key={`${item.role}-${index}`} item={item} accentColor="emerald" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
