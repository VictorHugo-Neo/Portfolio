import { Layers } from "lucide-react";
import { skillGroups } from "../data/skillGroups";

export const Skills = () => {
  return (
    <section 
      id="habilidades" 
      className="scroll-mt-20 max-w-6xl mx-auto px-6 py-10 sm:py-16 lg:py-24"
    >
      <div className="space-y-6 sm:space-y-10">
        <div className="space-y-2 sm:space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Layers size={15} />
            Stack & Competências
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Tecnologias & Ferramentas
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
            Conjunto de tecnologias aplicadas no dia a dia para desenvolver soluções robustas, seguras e orientadas a dados.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="p-3.5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between space-y-3 sm:space-y-5 shadow-xs"
            >
              <div className="space-y-2 sm:space-y-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-xs">
                  {group.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1 sm:gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-lg text-[10px] sm:text-xs font-mono font-medium bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-blue-500/40 transition-colors shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
