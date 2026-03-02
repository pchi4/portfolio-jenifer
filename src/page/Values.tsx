import { motion } from "framer-motion";
import { ethicalPillars } from "@/src/data/content";
import { Scale, Shield, Users } from "lucide-react";

export default function ValuesSection() {
  return (
    <section
      id="valores"
      className="py-20 bg-[#4A2C2A] text-[#F9F5F1] rounded-[2.5rem] mx-4 lg:mx-10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {ethicalPillars.map((pilar, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-[#B8860B]/40 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                {/* ÍCONES EM OURO DENDÊ (Substituindo emerald-500) */}
                <div className="p-3 bg-[#B8860B]/10 rounded-xl text-[#B8860B]">
                  {i === 0 && <Shield size={20} />}
                  {i === 1 && <Users size={20} />}
                  {i === 2 && <Scale size={20} />}
                </div>
                <span className="font-mono text-[10px] text-white/20 tracking-widest font-bold">
                  0{i + 1}
                </span>
              </div>

              {/* TÍTULO EM OURO NO HOVER */}
              <h3 className="text-xl font-serif mb-3 group-hover:text-[#D4AF37] transition-colors font-medium">
                {pilar.title}
              </h3>

              {/* TEXTO EM AREIA COM OPACIDADE (Substituindo emerald-100) */}
              <p className="text-sm text-[#F9F5F1]/60 leading-relaxed line-clamp-4 font-sans">
                {pilar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
