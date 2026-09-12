import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-[100svh] px-6 pt-[12vh] lg:pt-0 pb-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 lg:left-1/4 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-[radial-gradient(circle,rgba(0,224,84,0.12)_0%,transparent_70%)] rounded-full pointer-events-none transform-gpu"></div>
      
      {/* Lado Esquerdo - Textos e CTA */}
      <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-10">
        
        <div className="relative w-32 h-32 md:w-48 md:h-48 mb-2 mix-blend-screen pointer-events-none animate-float">
          <Image src="/logo1.png" alt="Logo Assistente Financeiro IA" fill className="object-contain" priority />
        </div>

        <div className="inline-block px-4 py-1.5 mb-6 border border-af-green/30 bg-af-green/5 rounded-full backdrop-blur-sm">
          <span className="text-af-green text-sm font-semibold tracking-wide">Disponível 24 horas por dia</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6">
          Seu dinheiro merece atenção. <br className="hidden lg:block"/> 
          Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-af-green to-emerald-400">Assistente IA</span> também.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
          Aprenda a criar e utilizar um assistente financeiro com IA para registrar, organizar e acompanhar sua vida financeira de forma simples.
        </p>

        <a href="https://pay.cakto.com.br/mja4uim_1081508" className="group relative overflow-hidden px-6 py-4 md:px-10 md:py-5 bg-af-green text-black font-extrabold rounded-2xl text-[15px] md:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,224,84,0.4)] flex items-center justify-center gap-3 w-full lg:w-auto cursor-pointer">
          <span className="relative z-10">QUERO TER MEU ASSISTENTE FINANCEIRO IA</span>
          <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
      </div>

      {/* Lado Direito - Mockup do Celular */}
      <div className="relative z-10 flex-1 w-full flex justify-center lg:justify-end mt-16 lg:mt-24 xl:mt-32 animate-[float_6s_ease-in-out_infinite]">
        <div className="w-[320px] h-[640px] bg-[#09090b] border-[8px] border-[#1f1f22] rounded-[3rem] shadow-[0_0_50px_rgba(0,224,84,0.15)] relative overflow-hidden flex flex-col ring-1 ring-white/10">
          
          {/* Top Bar Phone */}
          <div className="absolute top-0 inset-x-0 h-7 flex justify-between items-center px-6 pt-2 z-20">
            <span className="text-[11px] text-white/90 font-semibold tracking-wide">09:41</span>
            <div className="w-24 h-6 bg-black rounded-b-3xl mx-auto absolute left-1/2 -translate-x-1/2 top-0"></div>
            <div className="flex gap-1.5 items-center">
              <div className="w-5 h-2.5 border border-white/50 rounded-sm p-[1px]"><div className="bg-white h-full w-[80%] rounded-[1px]"></div></div>
            </div>
          </div>

          {/* Header Chat */}
          <div className="bg-white/5 border-b border-white/10 pt-10 pb-4 px-5 flex items-center gap-3 backdrop-blur-md z-10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-af-green to-emerald-500 flex items-center justify-center text-black font-bold shadow-lg">
              IA
            </div>
            <div>
              <p className="text-[14px] font-bold text-white leading-none">Assistente Financeiro</p>
              <p className="text-[11px] text-af-green mt-1.5 font-medium">● Online agora</p>
            </div>
          </div>

          {/* Chat Flow */}
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 relative bg-[radial-gradient(ellipse_at_center,rgba(0,224,84,0.03)_0%,transparent_100%)] scrollbar-hide">
            
            <div className="bg-af-green text-black p-3 rounded-2xl rounded-tr-sm ml-auto max-w-[85%] shadow-md">
              <p className="text-[13px] font-semibold leading-tight">Recebi R$ 2.500 de salário.</p>
            </div>
            
            <div className="bg-[#18181b] border border-white/10 p-4 rounded-2xl rounded-tl-sm mr-auto max-w-[90%] shadow-md">
              <p className="text-[13px] text-gray-200 leading-relaxed">
                ✅ Recebimento de <span className="text-af-green font-bold">R$ 2.500</span> registrado.<br/><br/>
                Seu saldo atualizado é de R$ 3.100,00.
              </p>
            </div>

            <div className="bg-af-green text-black p-3 rounded-2xl rounded-tr-sm ml-auto max-w-[85%] shadow-md mt-2">
              <p className="text-[13px] font-semibold leading-tight">Gastei R$ 150 com combustível.</p>
            </div>
            
            <div className="bg-[#18181b] border border-white/10 p-4 rounded-2xl rounded-tl-sm mr-auto max-w-[90%] shadow-md">
              <p className="text-[13px] text-gray-200 leading-relaxed">
                ⛽ Gasto de <span className="text-white font-bold">R$ 150</span> registrado na categoria Combustível.<br/><br/>
                Você ainda tem R$ 250 disponíveis nessa categoria para o mês.
              </p>
            </div>
            
          </div>

          {/* Input Box */}
          <div className="p-4 bg-[#09090b] border-t border-white/10 pb-6 z-10">
            <div className="w-full bg-[#18181b] border border-white/10 rounded-full h-12 flex items-center px-4 justify-between">
              <p className="text-[14px] text-gray-500 font-medium">Mensagem...</p>
              <div className="w-8 h-8 bg-af-green rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-black ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14M12 5l7 7-7 7"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}