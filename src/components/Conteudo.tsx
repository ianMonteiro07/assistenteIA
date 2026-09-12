"use client";

import React, { useState } from 'react';

export default function Conteudo() {
  const [activeSlide, setActiveSlide] = useState(0);

  const trilhas = [
    {
      icone: "⚙️",
      titulo: "A Base do Assistente",
      itens: [
        "Como configurar o assistente financeiro", 
        "Como personalizar para sua realidade", 
        "Comandos e prompts prontos"
      ]
    },
    {
      icone: "💰",
      titulo: "Rotina Simplificada",
      itens: [
        "Como cadastrar suas receitas", 
        "Como registrar despesas do dia a dia", 
        "Como acompanhar o saldo atualizado"
      ]
    },
    {
      icone: "📊",
      titulo: "Organização Profunda",
      itens: [
        "Como organizar e controlar cartões", 
        "Como criar e monitorar metas", 
        "Como acompanhar suas reservas"
      ]
    },
    {
      icone: "📈",
      titulo: "Análise e Constância",
      itens: [
        "Como fazer o fechamento mensal", 
        "Como analisar seus gastos de forma simples", 
        "Como manter o controle sem falhar"
      ]
    }
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % trilhas.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + trilhas.length) % trilhas.length);

  return (
    <section className="py-24 px-6 bg-[#070709] relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* O Grande Diferencial */}
        <div className="bg-gradient-to-r from-af-green/20 to-transparent p-[1px] rounded-3xl mb-24 shadow-[0_0_40px_rgba(0,224,84,0.1)]">
          <div className="bg-[#0a0a0f] p-8 md:p-12 rounded-3xl border border-af-green/10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="text-af-green font-bold tracking-wider uppercase text-sm mb-2 block">O Grande Diferencial</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                Você não recebe apenas um modelo pronto. Você aprende a <span className="text-af-green">criar o seu</span>.
              </h3>
              <p className="text-gray-400 text-lg">
                Cada pessoa tem uma realidade diferente. Você vai aprender a adaptar a Inteligência Artificial para a sua rotina: 
                <span className="text-white font-medium"> salário + renda extra + cartão + contas + metas + reservas</span>.
              </p>
            </div>
            <div className="w-24 h-24 shrink-0 bg-af-green/10 rounded-full flex items-center justify-center border border-af-green/30">
              <svg className="w-10 h-10 text-af-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Título da Seção */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tudo o que você vai aprender</h2>
          <p className="text-gray-400 mt-3 text-lg">Navegue pelas 4 fases do método interativo.</p>
        </div>
        
        {/* O Card Interativo (Estilo Tablet/Dashboard) */}
        <div className="max-w-2xl mx-auto bg-[#0a0a0f] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative">
          
          {/* Header do Card */}
          <div className="bg-white/5 border-b border-white/10 px-8 py-5 flex justify-between items-center backdrop-blur-sm">
            <span className="text-af-green font-mono text-sm font-bold tracking-widest uppercase">Fase 0{activeSlide + 1}</span>
            <div className="flex gap-2">
              {trilhas.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeSlide === idx ? 'w-6 bg-af-green' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Ir para fase ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Área de Conteúdo Trocável */}
          <div className="p-8 md:p-10 min-h-[320px] flex flex-col justify-center relative">
            
            {/* O key={activeSlide} força o React a recriar o elemento, dando um leve reset visual natural */}
            <div key={activeSlide} className="animate-[float_0.5s_ease-out]">
              <div className="text-5xl mb-6">{trilhas[activeSlide].icone}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">{trilhas[activeSlide].titulo}</h3>
              
              <ul className="space-y-5">
                {trilhas[activeSlide].itens.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                    <svg className="w-5 h-5 text-af-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-200 text-[15px] md:text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Controles Inferiores */}
          <div className="px-8 py-6 bg-black/40 flex justify-between items-center border-t border-white/5">
            <button 
              onClick={prevSlide}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              Anterior
            </button>
            <button 
              onClick={nextSlide}
              className="px-6 py-2.5 rounded-full bg-af-green hover:bg-af-green/80 text-black font-bold flex items-center gap-2 transition-colors"
            >
              Próxima Fase
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

        </div>
        
      </div>
    </section>
  );
}