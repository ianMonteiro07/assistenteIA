"use client";

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'O Assistente', href: '#assistente' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Invest+', href: '#investmais' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contatos', href: '#contatos' },
  ];

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 w-[92%] md:w-[90%] max-w-5xl z-[9999] transition-all duration-300 rounded-full ${
      isScrolled 
        ? 'top-4 bg-[#050505]/70 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
        : 'top-4 bg-white/5 backdrop-blur-md border border-white/10'
    }`}>
      <div className="px-3 md:px-6 py-3 md:py-4 flex justify-between items-center w-full relative z-20">
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-8 w-full">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-af-green text-sm font-medium transition-colors">
              {link.name}
            </a>
          ))}
          <a href="https://pay.cakto.com.br/mja4uim_1081508" className="ml-4 px-6 py-2 bg-af-green/10 border border-af-green/50 text-af-green rounded-full text-sm font-bold hover:bg-af-green hover:text-black transition-all">
            COMEÇAR
          </a>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center justify-between w-full pl-1 pr-1">
          <button 
            type="button"
            className="flex items-center gap-2 group cursor-pointer touch-manipulation focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="p-2.5 bg-white/5 border border-white/10 rounded-full group-active:bg-white/10 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </div>
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">Menu</span>
          </button>
          <a href="https://pay.cakto.com.br/mja4uim_1081508" className="px-5 py-2.5 bg-af-green text-black rounded-full text-xs font-extrabold shadow-[0_0_15px_rgba(0,224,84,0.3)] active:scale-95 transition-transform cursor-pointer">
            COMEÇAR
          </a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[115%] left-0 w-full bg-[#0a0a0f]/95 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-40 rounded-3xl overflow-hidden p-3">
          <div className="flex flex-col space-y-1 text-center">
            {links.map((link) => (
              <a 
                key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} 
                className="text-white active:text-af-green active:bg-white/10 text-base font-semibold block w-full py-4 rounded-2xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}