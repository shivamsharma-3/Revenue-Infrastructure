import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 mt-16 border-t border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl mb-6 block brand-font text-white">
              ARCH
            </Link>
            <p className="text-neutral-500 max-w-sm font-medium leading-relaxed">
              ARCH designs and operates revenue systems that help B2B companies get customers in a predictable way. Infrastructure for growth.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-6">Explore</h4>
            <ul className="space-y-3 text-sm text-neutral-500 font-medium">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/system-examples" className="hover:text-white transition-colors">System Examples</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-neutral-500 font-medium">
              <li><Link to="/contact" className="hover:text-white transition-colors">Book Audit</Link></li>
              <li className="hover:text-white transition-colors cursor-pointer">Support</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-4 md:mb-0">
            © {new Date().getFullYear()} ARCH REVENUE SYSTEMS LLC
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-neutral-600 font-bold">
            <span className="hover:text-neutral-400 cursor-pointer">LinkedIn</span>
            <span className="hover:text-neutral-400 cursor-pointer">X</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;