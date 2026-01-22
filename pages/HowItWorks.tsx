import React from 'react';
import Button from '../components/Button';

const HowItWorks: React.FC = () => {
  const phases = [
    {
      title: "System Audit",
      description: "We dive into your existing CRM, target market, and current sales process to identify where the leaks are. We map out the gaps between your current state and a predictable outbound machine.",
      details: ["Data integrity check", "Market fit verification", "Infrastructure gaps"]
    },
    {
      title: "Architecture Design",
      description: "We don't use templates. We design a custom revenue blueprint based on your ACV, sales cycle, and technical stack. This is the master plan for your outbound and inbound engine.",
      details: ["Sequence logic", "Logic branching", "Technical routing"]
    },
    {
      title: "Core Integration",
      description: "Our engineers build the system. We connect your CRM, set up outbound servers, install tracking pixels, and deploy the initial outreach nodes. High-trust infrastructure-grade build.",
      details: ["Outbound plumbing", "API integrations", "Salesforce/HubSpot sync"]
    },
    {
      title: "Optimization Loop",
      description: "A system isn't 'done.' We monitor the data, tweak the logic, and refine the targeting until the pipeline is flowing at the desired capacity. We stay on as operators.",
      details: ["Continuous AB testing", "Logic refinement", "Monthly scaling audits"]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-16">
        <h1 className="text-5xl font-bold tracking-tighter mb-6">Built to endure.</h1>
        <p className="text-xl text-neutral-400 max-w-2xl font-medium">
          Our methodology is derived from systems engineering, not marketing textbooks. We build for reliability and scale.
        </p>
      </header>

      <div className="space-y-8">
        {phases.map((phase, i) => (
          <div 
            key={i}
            className="group relative"
            style={{ 
              transform: `translateZ(${i * 10}px)`,
              zIndex: phases.length - i 
            }}
          >
            <div className="p-10 md:p-14 rounded-[2rem] bg-neutral-900/40 border border-white/5 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-neutral-900/60 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                  <div className="text-xs font-bold text-teal-500 mb-4 uppercase tracking-widest">Phase 0{i+1}</div>
                  <h2 className="text-3xl font-bold mb-6">{phase.title}</h2>
                  <p className="text-neutral-400 font-medium leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <ul className="grid grid-cols-1 gap-4">
                    {phase.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300 font-medium">
                        <div className="w-1 h-1 rounded-full bg-teal-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-20 text-center">
        <p className="text-neutral-500 mb-6 italic font-medium">Ready to see the blueprint for your business?</p>
        <Button to="/contact">Schedule Architecture Call</Button>
      </section>
    </div>
  );
};

export default HowItWorks;