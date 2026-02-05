import { Code2, Database, BarChart3, Globe, Boxes, Layers, Terminal as TerminalIcon } from 'lucide-react';

export const techIcons = [
  { name: "Python", icon: <Code2 size={22} className="text-blue-500" /> },
  { name: "SQL", icon: <Database size={22} className="text-emerald-500" /> },
  { name: "Power BI", icon: <BarChart3 size={22} className="text-yellow-500" /> },
  { name: "React", icon: <Globe size={22} className="text-cyan-400" /> },
  { name: "TypeScript", icon: <Boxes size={22} className="text-blue-600" /> },
  { name: "Docker", icon: <Layers size={22} className="text-blue-400" /> },
  { name: "Linux", icon: <TerminalIcon size={22} className="text-orange-500" /> },
];