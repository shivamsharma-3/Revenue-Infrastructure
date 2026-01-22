
import React from 'react';
import { Target, MessageSquare, Repeat, Users, Database, ArrowRight } from 'lucide-react';

const FlowNode = ({ icon: Icon, label, description, index }: any) => (
  <div className="flex flex-col items-center group relative w-48">
    <div className="relative mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-teal-500/50 group-hover:shadow-teal-500/10">
      <Icon className="w-6 h-6 text-neutral-400 group-hover:text-teal-400 transition-colors" />
      {/* Floating Tooltip */}
      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="px-3 py-1 bg-neutral-800 border border-white/10 rounded-lg text-[10px] whitespace-nowrap shadow-2xl">
          {description}
        </div>
      </div>
    </div>
    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest text-center group-hover:text-white transition-colors">{label}</span>
    
    {/* Connection Line */}
    {index < 4 && (
      <div className="hidden lg:block absolute top-8 left-[100%] w-full h-[1px] bg-gradient-to-r from-teal-500/20 to-transparent" />
    )}
  </div>
);

const SystemFlow: React.FC = () => {
  const nodes = [
    { icon: Target, label: "Target Accounts", description: "Identify high-fit prospects" },
    { icon: MessageSquare, label: "Outbound Logic", description: "Architected sequences" },
    { icon: Repeat, label: "Follow-Ups", description: "Automated persistent loops" },
    { icon: Users, label: "Conversations", description: "Qualified sales meetings" },
    { icon: Database, label: "CRM & Pipeline", description: "Clean data infrastructure" }
  ];

  return (
    <div className="py-20 flex flex-wrap justify-center gap-12 lg:gap-0 lg:flex-nowrap lg:justify-between items-start">
      {nodes.map((node, i) => (
        <FlowNode key={i} {...node} index={i} />
      ))}
    </div>
  );
};

export default SystemFlow;
