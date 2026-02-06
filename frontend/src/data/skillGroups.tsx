import { BarChart3, Cpu, Activity } from "lucide-react";

export const skillGroups = [
    {
    title: "BI & Analytics",
    icon: <BarChart3 className="text-blue-500" size={18} />,
    skills: ["Power BI (DAX/M)", "Modelagem Star Schema", "SQL Avançado", "Looker Studio"]
  },
  {
    title: "Engenharia & Cloud",
    icon: <Cpu className="text-emerald-500" size={18} />,
    skills: ["Python (FastAPI)", "Pandas/NumPy", "Docker", "AWS Fundamentals", "OpenSUSE"]
  },
  {
    title: "Gestão & Processos",
    icon: <Activity className="text-amber-500" size={18} />,
    skills: ["BPMN (Bizagi)", "Metodologias Ágeis", "Power Automate", "Ciclo PDCA"]
  }
];