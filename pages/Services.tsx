import React from 'react';
import DepthCard from '../components/DepthCard';
import { Database, Send, Workflow } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Outbound Revenue Systems",
      icon: Send,
      friction: "Fragmented, inconsistent cold outreach that damages your brand reputation.",
      outcome: "A quiet, persistent machine that books qualified meetings while you sleep.",
      who: "Founders and sales leaders tired of manual prospecting."
    },
    {
      title: "CRM & Pipeline Setup",
      icon: Database,
      friction: "Ghost leads, messy data, and a total lack of visibility into your true sales ROI.",
      outcome: "Architectural clarity. Every dollar tracked from first touch to closed-won.",
      who: "Scaling B2B companies with 10+ employees."
    },
    {
      title: "Revenue Ops Support",
      icon: Workflow,
      friction: "High-cost hires that can't actually build or maintain complex systems.",
      outcome: "An outsourced infrastructure team that acts as your internal systems arm.",
      who: "Agencies and SaaS companies needing long-term stability."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Infrastructure-Grade Services.</h1>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-medium">
          We don't offer generic marketing. We provide the revenue plumbing that turns your product into a predictable business.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <DepthCard key={i} className="h-full">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <service.icon className="w-6 h-6 text-teal-400" />
            </div>
            <h2 className="text-2xl font-bold mb-8">{service.title}</h2>
            
            <div className="space-y-8">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold block mb-2">The Friction</span>
                <p className="text-sm text-neutral-400 font-medium">{service.friction}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-teal-500/70 font-bold block mb-2">The Outcome</span>
                <p className="text-sm text-white font-medium">{service.outcome}</p>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold block mb-2">Ideal For</span>
                <p className="text-sm text-neutral-400 font-medium">{service.who}</p>
              </div>
            </div>
          </DepthCard>
        ))}
      </div>

      <div className="mt-16 p-12 rounded-3xl bg-white/5 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Need a custom architecture?</h3>
          <p className="text-neutral-400 font-medium">For enterprise-grade requirements, we offer custom implementation projects.</p>
        </div>
        <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors">
          Talk to a Partner
        </button>
      </div>
    </div>
  );
};

export default Services;