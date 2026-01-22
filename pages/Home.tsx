import React from 'react';
import Button from '../components/Button';
import DepthCard from '../components/DepthCard';
import SystemFlow from '../components/SystemFlow';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-16 flex flex-col items-center text-center max-w-6xl mx-auto perspective-2000">
        
        {/* Revenue Infrastructure Tag */}
        <div className="group relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-teal-500/20 bg-teal-500/5 backdrop-blur-xl mb-12 overflow-hidden transition-all duration-700 hover:border-teal-500/40 hover:bg-teal-500/10 animate-reveal-up shadow-[0_0_40px_rgba(45,212,191,0.05)]">
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-teal-500 rounded-full animate-ping opacity-30"></div>
            <div className="relative w-2 h-2 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(45,212,191,1)]"></div>
          </div>
          <span className="text-teal-400 text-[11px] font-black tracking-[0.3em] uppercase leading-none antialiased">
            Revenue Infrastructure
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"></div>
        </div>

        {/* Main Headline - High Fidelity Layout */}
        <h1 className="relative text-6xl md:text-8xl lg:text-[100px] font-extrabold tracking-tighter leading-[0.9] mb-12 text-white animate-reveal-up drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" style={{ animationDelay: '0.2s' }}>
          Predictable Revenue.<br />
          <span className="text-neutral-400">Built as a System.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-2xl text-neutral-500 max-w-3xl mb-14 font-light tracking-tight leading-relaxed animate-reveal-up" style={{ animationDelay: '0.4s' }}>
          We design and operate revenue infrastructure that helps B2B companies <span className="text-neutral-200 font-normal">get customers consistently</span> — without relying on luck.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 animate-reveal-up mb-24" style={{ animationDelay: '0.6s' }}>
          <Button to="/contact" className="shadow-[0_25px_50px_rgba(255,255,255,0.05)]">Request Revenue System Audit</Button>
          <Button to="/how-it-works" variant="secondary">View How It Works</Button>
        </div>
        
        {/* Core Principles Surface */}
        <div className="animate-reveal-up w-full max-w-xl mx-auto" style={{ animationDelay: '0.8s' }}>
          <div className="relative p-12 rounded-[2.5rem] border border-white/5 bg-neutral-900/10 backdrop-blur-md group/principles overflow-hidden shadow-2xl transition-all duration-700 hover:border-teal-500/20">
            {/* Top Light Stroke */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-10 bg-neutral-800"></div>
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-neutral-600 group-hover/principles:text-teal-500/60 transition-colors duration-500">
                Foundational Truth
              </span>
              <div className="h-[1px] w-10 bg-neutral-800"></div>
            </div>
            
            <p className="text-base font-medium text-neutral-400 italic leading-relaxed px-4">
              "Built for founder-led B2B companies scaling beyond referrals."
            </p>

            {/* Decorative Corner Elements */}
            <div className="absolute bottom-5 right-8 flex gap-2 opacity-20">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              What this looks like in practice.
            </h2>
            <p className="text-neutral-400 text-lg font-medium leading-relaxed">
              We don't sell hype or one-off campaigns. We build the operational plumbing required to sustain growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Define", desc: "Identify your ideal customers with architectural precision." },
            { title: "Build", desc: "Construct outbound systems to reach them at scale." },
            { title: "Automate", desc: "Deploy follow-up logic and pipeline tracking nodes." },
            { title: "Book", desc: "Generate qualified sales conversations consistently." }
          ].map((card, i) => (
            <DepthCard key={i}>
              <div className="text-[10px] font-black text-teal-500/40 mb-6 uppercase tracking-[0.3em]">Module 0{i+1}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-medium">
                {card.desc}
              </p>
            </DepthCard>
          ))}
        </div>
      </section>

      {/* Pipeline Architecture Section */}
      <section className="px-6 max-w-7xl mx-auto w-full py-20 bg-neutral-900/10 rounded-[4rem] border border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-teal-500/[0.01] pointer-events-none" />
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Revenue Pipeline Architecture</h2>
          <p className="text-neutral-500 max-w-lg mx-auto text-sm font-medium italic">
            Modular nodes connected by logic-driven operational triggers.
          </p>
        </div>
        <SystemFlow />
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-16 flex flex-col items-center text-center">
        <div className="w-full max-w-4xl p-20 rounded-[3rem] bg-gradient-to-b from-neutral-900/40 to-neutral-900/10 border border-white/5 relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 bg-teal-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h2 className="text-4xl md:text-6xl font-extrabold mb-10 text-white relative z-10 tracking-tighter">
            Let’s build a revenue system<br />that works.
          </h2>
          <Button to="/contact" className="relative z-10 px-12 py-5 text-lg">Request Free Audit</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;