import { useState } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
    isDarkMode: boolean
}

export const Terminal = ({isDarkMode} : TerminalProps) => {
  // Simulando um comando que faz sentido com sua rotina de dev e professor
  const [text] = useState("sudo zypper info vhlc-dev");

  return (
    <div id="terminal" className="py-12">
      <h2 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        <TerminalIcon size={24} className="text-emerald-500" /> System Environment
      </h2>
      
      <div className="w-full max-w-2xl font-mono text-sm bg-[#1c1c1c] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Barra Superior do Terminal */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">openSUSE — zsh</span>
        </div>

        {/* Conteúdo do Shell */}
        <div className="p-5 space-y-3">
          <div className="flex gap-2">
            <span className="text-emerald-500 font-bold">victorhugo@leap:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">{text}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-slate-300">
            <div><span className="text-emerald-500/80">Title:</span> Sistemas & Dados</div>
            <div><span className="text-emerald-500/80">Status:</span> Graduado / Pós-Graduando</div>
            <div><span className="text-emerald-500/80">Expertise:</span> Dev & Professor</div>
            <div><span className="text-emerald-500/80">Focus:</span> Gestão de Projetos</div>
            <div><span className="text-emerald-500/80">OS:</span> openSUSE Leap 15.6</div>
            <div><span className="text-emerald-500/80">Location:</span> Berilo, MG</div>
          </div>

          <div className="pt-2 text-slate-500 text-xs">
            # Verificando dependências de inovação...
          </div>

          <div className="flex items-center gap-2">
            <span className="text-emerald-500">➜</span>
            <span className="text-blue-400">~</span>
            <div className="w-2 h-4 bg-emerald-500 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}