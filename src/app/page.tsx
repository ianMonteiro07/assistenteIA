import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problemas from "@/components/Problemas";
import ComoFunciona from "@/components/ComoFunciona";
import Conteudo from "@/components/Conteudo";
import InvestMais from "@/components/InvestMais";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen relative z-0">
      <Navbar />
      <Hero />
      <Problemas />
      <ComoFunciona />
      <Conteudo />
      <InvestMais />
      <Faq />
      <Footer />
    </main>
  );
}