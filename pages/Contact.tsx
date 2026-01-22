
import React, { useState } from 'react';
import Button from '../components/Button';
import { CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-6 py-40 text-center animate-fade-in">
        <div className="w-20 h-20 rounded-full bg-teal-500/10 flex items-center justify-center mx-auto mb-8 border border-teal-500/20">
          <CheckCircle className="w-10 h-10 text-teal-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Request Received.</h1>
        <p className="text-neutral-400 text-lg font-medium leading-relaxed mb-12">
          A partner will review your current revenue infrastructure and contact you within 24 hours to schedule your audit.
        </p>
        <Button to="/">Return Home</Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-20">
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">
          Request your Revenue<br />System Audit.
        </h1>
        <p className="text-xl text-neutral-400 font-medium leading-relaxed mb-12">
          We offer a complimentary audit for qualified B2B companies looking to architect a predictable outbound engine.
        </p>
        
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded bg-teal-500/20 text-teal-500 flex items-center justify-center text-xs font-bold">1</div>
            <div>
              <h3 className="font-bold text-white">Full infrastructure review</h3>
              <p className="text-sm text-neutral-500">We analyze your CRM, data quality, and tech stack.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded bg-teal-500/20 text-teal-500 flex items-center justify-center text-xs font-bold">2</div>
            <div>
              <h3 className="font-bold text-white">Market targeting logic</h3>
              <p className="text-sm text-neutral-500">We verify the precision of your ideal customer profile.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded bg-teal-500/20 text-teal-500 flex items-center justify-center text-xs font-bold">3</div>
            <div>
              <h3 className="font-bold text-white">System blueprint</h3>
              <p className="text-sm text-neutral-500">We provide a high-level plan for your custom machine.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-[2rem] bg-neutral-900/40 border border-white/5 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Full Name</label>
              <input 
                required
                className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all outline-none text-white font-medium"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Work Email</label>
              <input 
                required
                type="email"
                className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all outline-none text-white font-medium"
                placeholder="john@company.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Company Name</label>
            <input 
              required
              className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all outline-none text-white font-medium"
              placeholder="Acme Corp"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Company Size</label>
            <select className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 outline-none text-white font-medium appearance-none">
              <option>1-10 employees</option>
              <option>11-50 employees</option>
              <option>51-200 employees</option>
              <option>200+ employees</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 ml-4">Current CRM</label>
            <input 
              className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/5 focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all outline-none text-white font-medium"
              placeholder="HubSpot, Salesforce, Pipedrive, etc."
            />
          </div>

          <div className="pt-4">
            <Button className="w-full">Request Audit</Button>
          </div>
          
          <p className="text-[10px] text-center text-neutral-500 font-medium">
            Your data is handled securely and will never be shared.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
