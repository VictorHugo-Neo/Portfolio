import { MapPin } from 'lucide-react';
import type { TimelineItem } from '../data/trajectoryData';

interface TimelineCardProps {
  item: TimelineItem;
  accentColor?: 'blue' | 'emerald';
}

export const TimelineCard = ({ item, accentColor = 'blue' }: TimelineCardProps) => {
  const isCurrent = item.period.includes('ATUAL');
  const isEmerald = accentColor === 'emerald';
  const nodeBgClass = isEmerald ? 'bg-emerald-600 dark:bg-emerald-500' : 'bg-blue-600 dark:bg-blue-500';

  return (
    <div className="relative pl-5 sm:pl-8 group">
      <div 
        className={`absolute w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full -left-[7px] sm:-left-[8px] top-1.5 border-2 border-white dark:border-slate-900 transition-transform group-hover:scale-125 ${
          isCurrent ? nodeBgClass : 'bg-slate-400 dark:bg-slate-600'
        }`} 
      />

      <div className="space-y-1.5">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wide text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-md">
            {item.period}
          </span>
          {isCurrent && (
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded-md">
              <span className={`w-1.5 h-1.5 rounded-full ${isEmerald ? 'bg-emerald-600 dark:bg-emerald-500' : 'bg-blue-600 dark:bg-blue-500'}`} />
              {isEmerald ? 'Especialização' : 'Ativo'}
            </span>
          )}
          <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
            <MapPin size={11} />
            {item.location}
          </span>
        </div>

        <div>
          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
            {item.role}
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
            {item.company}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {item.description}
        </p>

        {item.tech && item.tech.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {item.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
