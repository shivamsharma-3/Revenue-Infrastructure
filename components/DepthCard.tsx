
import React from 'react';

interface DepthCardProps {
  children: React.ReactNode;
  className?: string;
}

const DepthCard: React.FC<DepthCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`group relative perspective-1000 ${className}`}>
      <div className="relative p-8 rounded-2xl bg-neutral-900/30 border border-white/5 backdrop-blur-sm transition-all duration-500 transform-gpu group-hover:-translate-y-2 group-hover:rotate-x-1 group-hover:border-white/10 group-hover:bg-neutral-900/50">
        {/* Soft shadow that expands on hover */}
        <div className="absolute inset-0 -z-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)]" />
        
        {/* Inner subtle glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DepthCard;
