import { useState, useRef } from 'react';
import { GraduationCap, ChevronRight } from 'lucide-react';
import { aboutPillars } from '../data/aboutData';

export const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.8));
      setActiveSlide(Math.min(index, aboutPillars.length - 1));
    }
  };

  return (
    <section id="sobre" className="scroll-mt-20 max-w-7xl xl:max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 py-10 sm:py-16 lg:py-24">
      <div className="space-y-6 sm:space-y-10">
        <div className="max-w-3xl space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-500">
            <GraduationCap size={15} />
            Perfil & Atuação
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engenharia de software e paixão por ensinar.
          </h2>
          <p className="text-sm sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Graduado em ADS e pós-graduando em Gestão de Projetos e Inovação pelo IFNMG.
            Uno a vivência de desenvolvedor autônomo construindo soluções para a web à docência técnica formando novos profissionais da tecnologia.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-3 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none"
          >
            {aboutPillars.map((item) => (
              <div
                key={item.title}
                className="w-[84vw] sm:w-[320px] md:w-auto flex-shrink-0 snap-center p-5 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all flex flex-col justify-between space-y-3 shadow-xs"
              >
                <div className="space-y-2.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-200 dark:border-slate-800">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex md:hidden items-center justify-between pt-2 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              {aboutPillars.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    activeSlide === i ? 'w-5 bg-blue-600' : 'w-1.5 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono">
              Deslize para ver mais <ChevronRight size={12} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
