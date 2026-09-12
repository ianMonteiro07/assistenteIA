"use client";

import React, { useState } from 'react';

export default function Problemas() {
  const dores = [
    "Onde foi parar meu dinheiro?",
    "Quanto eu gastei esse mês?",
    "Quanto ainda posso gastar?",
    "Quanto eu tenho disponível?",
    "Quanto já consegui guardar?",
    "Será que estou gastando demais?"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPergunta = () => {
    // Avança apenas se não estiver na última pergunta
    if (currentIndex < dores.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="py-24 px-6 bg-af-dark relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Estilo local para garantir a animação suave da troca de texto */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-pop { animation: popIn 0.4s ease-out forwards; }
      `}} />

      <div className="max-w-3xl mx-auto text-center relative z-10 w-full">
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Você costuma se fazer essas perguntas?
        </h2>
        
        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          Muitas pessoas desistem de controlar as finanças porque o modelo tradicional de planilhas não funciona na correria do dia a dia.
        </p>

        {/* Card Interativo Principal */}
        <div className="relative max-w-xl mx-auto mb-16">
          
          {/* O "Flashcard" */}
          <div className="bg-[#0a0a0f] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative z-10 flex flex-col items-center justify-center min-h-[220px] transition-colors hover:border-af-green/30">
            
            {/* Indicador de progresso (Pontinhos) */}
            <div className="flex gap-2 absolute top-6">
              {dores.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-af-green shadow-[0_0_10px_rgba(0,224,84,0.5)]' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>

            {/* A Pergunta (com animação que reseta ao mudar o key) */}
            <div key={currentIndex} className="animate-pop text-center w-full mt-4">
              <span className="text-af-green text-5xl font-serif leading-none absolute -top-4 -left-2 opacity-20">"</span>
              <p className="text-2xl md:text-3xl text-white font-medium italic relative z-10 px-4">
                {dores[currentIndex]}
              </p>
              <span className="text-af-green text-5xl font-serif leading-none absolute -bottom-8 -right-2 opacity-20 rotate-180">"</span>
            </div>

          </div>

          {/* Botão de Interação Flutuante: Muda de Botão para Link no final */}
          {currentIndex === dores.length - 1 ? (
            <a 
              href="https://pay.cakto.com.br/mja4uim_1081508"
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-af-green text-black px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(0,224,84,0.4)] flex items-center gap-3 hover:scale-105 active:scale-95 transition-all z-20 whitespace-nowrap"
            >
              Resolver isso agora
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
          ) : (
            <button 
              onClick={nextPergunta}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-af-green text-black px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(0,224,84,0.4)] flex items-center gap-3 hover:scale-105 active:scale-95 transition-all z-20 whitespace-nowrap"
            >
              Me identifico
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          )}
        </div>

        {/* Chamada Final */}
        <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-af-green/50 to-transparent mt-4">
          <div className="px-6 py-3 bg-[#050505] rounded-full flex items-center gap-3">
            <div className="w-2 h-2 bg-af-green rounded-full animate-pulse shadow-[0_0_8px_rgba(0,224,84,1)]"></div>
            <p className="text-gray-300 font-medium text-sm md:text-base">
              Com o <span className="text-white font-bold">Assistente IA</span>, você não precisa calcular nada. <span className="text-af-green">Só perguntar.</span>
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}