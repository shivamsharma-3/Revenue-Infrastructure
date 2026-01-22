import React from 'react';
import DepthCard from '../components/DepthCard';

const SystemExamples: React.FC = () => {
  const examples = [
    {
      type: "Series A B2B SaaS",
      problem: "Heavy reliance on inbound content and paid ads with volatile lead costs.",
      system: "Multichannel Outbound Architecture with automated LinkedIn/Email integration and intent data monitoring.",
      outcome: "Predictable pipeline growth that allowed the team to reduce paid ad spend by 40%."
    },
    {
      type: "Global Tech Agency",
      problem: "Founder was doing all sales outreach manually; referrals were drying up.",
      system: "Automated Outbound Logic Engine focused on high-ACV Fortune 500 decision makers.",
      outcome: "Standardized outreach process that books 4-6 qualified enterprise meetings per month consistently."
    },
    {
      type: "Professional Services Firm",
      problem: "No centralized CRM; leads were lost in spreadsheets; no follow-up logic.",
      system: "CRM & Pipeline overhaul + automated nurturing loops for cold leads.",
      outcome: "Full visibility into sales cycle length and lead source ROI for the first time."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-16">
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Proven Architecture.</h1>
        <p className="text-xl text-neutral-400 max-w-2xl font-medium">
          Real systems, built for real companies. No vanity metrics—just operational infrastructure that produces results.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12">
        {examples.map((example, i) => (
          <DepthCard key={i} className="group cursor-default">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                  {example.type}
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Problem</h2>
                <p className="text-neutral-400 font-medium leading-relaxed italic">{example.problem}</p>
              </div>
              <div className="md:w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">The System Built</h3>
                  <p className="text-neutral-300 font-medium leading-relaxed mb-8">{example.system}</p>
                </div>
                <div className="pt-8 border-t border-white/5">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-teal-500/70 mb-2">Expected Outcome</h4>
                  <p className="text-neutral-400 font-medium">{example.outcome}</p>
                </div>
              </div>
            </div>
          </DepthCard>
        ))}
      </div>
    </div>
  );
};

export default SystemExamples;