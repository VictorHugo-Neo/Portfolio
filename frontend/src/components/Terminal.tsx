import { useState } from 'react';

export default function Terminal() {
  const [text] = useState("vhlc --status -all");
  
  return (
    <div className="w-full max-w-2xl mx-auto font-mono text-sm bg-black/40 rounded-lg border border-slate-700 shadow-2xl overflow-hidden mb-12">
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border-b border-slate-700">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <span className="text-slate-500 text-xs italic">bash — openSUSE</span>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex gap-2">
          <span className="text-brand-accent">➜</span>
          <span className="text-brand-blue">~</span>
          <span className="text-white">{text}</span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-400">
          <div><span className="text-brand-blue">ROLE:</span> Engenheiro de Dados</div>
          <div><span className="text-brand-blue">LOC:</span> MG, Brasil</div>
          <div><span className="text-brand-blue">EXP:</span> Professor & Dev</div>
          <div><span className="text-brand-blue">STACK:</span> Python/FastAPI</div>
        </div>
        <div className="text-brand-accent/70 animate-pulse mt-2">_</div>
      </div>
    </div>
  );
}