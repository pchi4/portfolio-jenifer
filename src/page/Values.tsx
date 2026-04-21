import { motion } from "framer-motion";
import { ethicalPillars } from "@/src/data/content";
import {  Heart,  } from "lucide-react";

export default function ValuesSection() {
  return (
<section
  id="valores"
  className="py-24 bg-[#4A2C2A] text-[#F9F5F1] rounded-[2.5rem] mx-4 lg:mx-10 overflow-hidden relative shadow-2xl"
>
  {/* Detalhe decorativo sutil de fundo */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8860B]/5 blur-[100px] rounded-full" />
  
  <div className="max-w-7xl mx-auto px-8 relative z-10">
    <div className="mb-16 text-center lg:text-left">
      <span className="text-[#B8860B] font-mono text-xs tracking-[0.3em] uppercase">Ética e Compromisso</span>
      <h2 className="text-4xl font-serif mt-4 text-[#F9F5F1]">Pilares da Clínica</h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {ethicalPillars.map((pilar, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -8 }}
          className="group p-10 rounded-[2.5rem] bg-[#F9F5F1]/[0.02] border border-white/5 hover:border-[#B8860B]/30 hover:bg-[#F9F5F1]/[0.04] transition-all duration-500"
        >
          <div className="flex justify-between items-start mb-8">
            {/* Ícone com cores coordenadas ao tema Lattes/Escrita */}
            <div className="p-4 bg-[#B8860B]/10 rounded-2xl text-[#B8860B] group-hover:scale-110 transition-transform duration-500">
              {i === 0 && <Heart size={24} strokeWidth={1.5} />}
              {i === 1 && <Heart size={24} strokeWidth={1.5} />}
              {i === 2 && <Heart size={24} strokeWidth={1.5} />}
            </div>
            

          </div>

          <h3 className="text-2xl font-serif mb-4 group-hover:text-[#F9F5F1] transition-colors">
            {pilar.title}
          </h3>

          <p className="text-base text-[#F9F5F1]/50 leading-relaxed font-sans group-hover:text-[#F9F5F1]/70 transition-colors">
            {pilar.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}
