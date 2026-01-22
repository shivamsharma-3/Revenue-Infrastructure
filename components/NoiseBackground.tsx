import React from 'react';

const NoiseBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050506]">
      {/* Base Foundation */}
      <div className="absolute inset-0 bg-[#050506]" />

      {/* 1. Deep Perspective Grid (Semi-3D) */}
      <div className="absolute inset-0 opacity-[0.08]" style={{ perspective: '1200px' }}>
        <div 
          className="absolute inset-[-100%] origin-center" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'rotateX(45deg) translateZ(-200px)',
            maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
          }} 
        />
      </div>

      {/* 2. Atmospheric Infrastructure Glows */}
      <div className="absolute inset-0">
        {/* Teal Core Pulse */}
        <div 
          className="absolute top-1/4 left-1/3 w-[70vw] h-[70vw] bg-teal-500/[0.03] blur-[140px] rounded-full animate-[pulse-slow_15s_ease-in-out_infinite]" 
        />
        
        {/* Subtle Side Glow */}
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-white/[0.02] blur-[120px] rounded-full" 
          style={{ animation: 'float-slow 25s ease-in-out infinite' }}
        />

        {/* Vertical Scan Beams */}
        <div 
          className="absolute top-[-20%] left-[20%] w-[1px] h-[140%] bg-gradient-to-b from-transparent via-teal-500/10 to-transparent rotate-[25deg] animate-[scan_18s_linear_infinite]"
        />
        <div 
          className="absolute top-[-20%] right-[30%] w-[1px] h-[140%] bg-gradient-to-b from-transparent via-white/5 to-transparent rotate-[25deg] animate-[scan_22s_linear_infinite]"
          style={{ animationDelay: '-7s' }}
        />
      </div>

      {/* 3. System Nodes (Floating Particles) */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-[2px] h-[2px] bg-teal-400/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 15px rgba(45, 212, 191, 0.6)',
              animation: `node-float ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * -10}s`,
              opacity: 0.2 + Math.random() * 0.4
            }}
          />
        ))}
      </div>

      {/* 4. Moving Data Signals (Logic pulses along invisible lines) */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/30 to-transparent animate-[data-pulse_10s_linear_infinite]" />
        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/30 to-transparent animate-[data-pulse_12s_linear_infinite_reverse]" />
        <div className="absolute top-0 left-[40%] h-full w-[1px] bg-gradient-to-b from-transparent via-teal-500/30 to-transparent animate-[data-pulse-v_15s_linear_infinite]" />
      </div>

      {/* 5. Premium Grain Texture */}
      <div className="absolute inset-0 grain-overlay opacity-[0.04]" />

      {/* 6. Depth Shaping Vignettes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.5)_90%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-5%, 8%); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%) rotate(25deg); }
          100% { transform: translateY(100%) rotate(25deg); }
        }
        @keyframes node-float {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(30px, -40px); opacity: 0.6; }
        }
        @keyframes data-pulse {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes data-pulse-v {
          0% { background-position: 0 -200%; }
          100% { background-position: 0 200%; }
        }
      `}</style>
    </div>
  );
};

export default NoiseBackground;