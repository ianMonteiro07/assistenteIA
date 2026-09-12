import React from 'react';

export default function ComoFunciona() {
  const passos = [
    {
      numero: "01",
      titulo: "Configure",
      descricao: "Aprenda a configurar seu assistente financeiro com as instruções corretas.",
      exemplo: "Defina sua realidade: salário, metas e limites de gastos."
    },
    {
      numero: "02",
      titulo: "Registre",
      descricao: "Envie mensagens simples no seu dia a dia, como se falasse com um secretário.",
      exemplo: '"Recebi R$ 1.500" ou "Gastei R$ 80 de combustível".'
    },
    {
      numero: "03",
      titulo: "Acompanhe",
      descricao: "Pergunte ao assistente e receba resumos precisos em tempo real.",
      exemplo: '"Quanto tenho disponível?" ou "Como está minha meta?"'
    }
  ];

  return (
    <section id="como-funciona" className="py-24 px-6 bg-af-black relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-af-green/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Como funciona na prática?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Esqueça softwares complexos. A organização acontece através de uma conversa intuitiva.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          {passos.map((passo, index) => (
            <div key={index} className="relative group">
              {index < 2 && (
                <div className="hidden lg:block absolute top-12 left-[80%] w-[60%] h-[2px] bg-gradient-to-r from-af-green/30 to-transparent z-0"></div>
              )}
              
              <div className="bg-[#0a0a0f] border border-white/10 p-8 md:p-10 rounded-3xl h-full flex flex-col relative z-10 hover:border-af-green/40 transition-all duration-300 hover:-translate-y-2 shadow-xl">
                <div className="text-6xl font-black text-white/5 mb-2 pointer-events-none select-none">
                  {passo.numero}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-af-green animate-pulse"></span>
                  {passo.titulo}
                </h3>
                
                <p className="text-gray-400 mb-8 flex-1 text-base md:text-lg">
                  {passo.descricao}
                </p>
                
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5 backdrop-blur-sm">
                  <p className="text-xs text-af-green font-bold uppercase tracking-wider mb-2">Exemplo na prática:</p>
                  <p className="text-gray-300 text-sm md:text-base font-medium italic">
                    {passo.exemplo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}