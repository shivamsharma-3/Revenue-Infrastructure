import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Services', path: '/services' },
    { name: 'System Examples', path: '/system-examples' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full bg-neutral-900/40 backdrop-blur-xl border border-white/5 shadow-2xl shadow-black/50 transition-all duration-500 hover:border-white/10">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-7 h-7 flex items-center justify-center">
            {/* Outer structural frame - Represents ARCH infrastructure */}
            <div className="absolute inset-0 border border-white/10 border-t-white/40 rounded-md animate-[spin_15s_linear_infinite]"></div>
            
            {/* Middle logic frame - Represents the operational system loop */}
            <div className="absolute w-4 h-4 border border-teal-500/20 border-r-teal-500/60 rounded-sm animate-[spin_8s_linear_infinite_reverse]"></div>
            
            {/* Central revenue node - The engine heartbeat pulsing with growth */}
            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse shadow-[0_0_12px_rgba(45,212,191,0.8)]"></div>
            
            {/* Sub-layer glow for depth separation */}
            <div className="absolute inset-0 bg-teal-500/5 blur-xl rounded-full opacity-60"></div>
          </div>
          <span className="text-white text-xl brand-font antialiased">ARCH</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive(item.path) ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="px-5 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:shadow-white/5 active:scale-95"
        >
          Book Audit
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;