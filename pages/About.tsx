import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-16 text-center">
        <h1 className="text-6xl mb-8 brand-font">ARCH</h1>
        <div className="w-12 h-1 bg-teal-500 mx-auto rounded-full" />
      </header>

      <div className="space-y-16">
        <section>
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-6">The Philosophy</h2>
          <p className="text-3xl font-medium leading-tight text-neutral-200">
            Revenue isn't an event. It's the output of a well-designed system.
          </p>
          <div className="mt-8 space-y-6 text-lg text-neutral-400 font-medium leading-relaxed">
            <p>
              Most B2B companies treat growth as a series of experiments. They try an ad campaign, then a cold email blast, then a new LinkedIn strategy. These are tactics, not systems.
            </p>
            <p>
              ARCH was founded on the belief that revenue infrastructure should be as robust and reliable as your codebase or your accounting. We apply engineering principles to outbound sales and pipeline management.
            </p>
          </div>
        </section>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-6">What we are</h3>
            <ul className="space-y-4 text-neutral-300 font-medium">
              <li className="flex gap-4">
                <span className="text-teal-500">/</span>
                Architectural
              </li>
              <li className="flex gap-4">
                <span className="text-teal-500">/</span>
                Logic-driven
              </li>
              <li className="flex gap-4">
                <span className="text-teal-500">/</span>
                Operational
              </li>
              <li className="flex gap-4">
                <span className="text-teal-500">/</span>
                Infrastructure-grade
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-6">What we aren't</h3>
            <ul className="space-y-4 text-neutral-500 font-medium">
              <li className="flex gap-4">
                <span>-</span>
                An agency selling ads
              </li>
              <li className="flex gap-4">
                <span>-</span>
                A social media service
              </li>
              <li className="flex gap-4">
                <span>-</span>
                A source of AI hype
              </li>
              <li className="flex gap-4">
                <span>-</span>
                A temporary fix
              </li>
            </ul>
          </div>
        </section>

        <section className="p-12 rounded-[3rem] bg-neutral-900/50 border border-white/5 text-center">
          <h2 className="text-2xl font-bold mb-6">Built for the long term.</h2>
          <p className="text-neutral-400 font-medium max-w-xl mx-auto leading-relaxed">
            We don't do short-term sprints. We partner with companies that want to build a revenue machine they can rely on for years to come.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;