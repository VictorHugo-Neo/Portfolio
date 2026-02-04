interface SkillProps {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediary';
}

export function SkillBadge({ name, level }: SkillProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-900/80 border border-slate-800 rounded-lg group hover:border-brand-blue/40 transition-all">
      <span className="text-sm font-mono text-slate-300 group-hover:text-white">{name}</span>
      <div className="flex gap-1">
        <span className={`h-1.5 w-1.5 rounded-full ${level === 'Expert' || level === 'Advanced' ? 'bg-brand-blue shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'bg-slate-700'}`}></span>
        <span className={`h-1.5 w-1.5 rounded-full ${level === 'Expert' ? 'bg-brand-accent shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-slate-700'}`}></span>
      </div>
    </div>
  );
}