"use client";

import React, { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { p: "Preciso entender de Inteligência Artificial?", r: "Não. O método foi criado para ensinar de forma simples, mesmo para quem nunca utilizou IA dessa maneira." },
    { p: "Preciso saber programação?", r: "Não. Não é necessário saber programar absolutamente nada." },
    { p: "É um aplicativo?", r: "Não. O produto ensina você a configurar e utilizar um assistente financeiro baseado em IA no seu próprio celular ou computador." },
    { p: "O assistente movimenta meu dinheiro?", r: "Não. Ele é uma ferramenta de organização e acompanhamento. Não realiza transferências ou movimentações bancárias automaticamente." },
    { p: "Posso adaptar o assistente à minha realidade?", r: "Sim. Essa é uma das principais propostas do produto. Você aprende a personalizar o assistente de acordo com sua rotina, fontes de renda e despesas." },
    { p: "O assistente fica disponível 24 horas?", r: "Sim. A ideia é que você possa conversar com ele sempre que precisar, conforme a disponibilidade da ferramenta de IA utilizada." },
    { p: "O produto garante que vou economizar dinheiro?", r: "Não há garantia de resultado financeiro. O objetivo é fornecer uma ferramenta e um método para ajudar na organização e no acompanhamento inteligente das finanças." }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-af-dark relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
              
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center cursor-pointer focus:outline-none touch-manipulation"
              >
                <span className={`font-semibold text-lg pr-4 transition-colors ${openIndex === index ? 'text-af-green' : 'text-white'}`}>
                  {faq.p}
                </span>
                <span className={`text-af-green text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  ▼
                </span>
              </button>
              
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-300 text-base leading-relaxed border-t border-white/5 mt-2 animate-[fadeIn_0.3s_ease-in-out]">
                  {faq.r}
                </div>
              )}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}