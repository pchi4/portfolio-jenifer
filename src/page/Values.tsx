import { motion } from "framer-motion";
import { ethicalPillars } from "@/src/data/content";
import { Scale, Shield, Users } from "lucide-react";

export default function ValuesSection() {
  return (
    <section
      id="valores"
      className="py-20 bg-[#2D4F43] text-white rounded-[2.5rem] mx-4 lg:mx-10 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {ethicalPillars.map((pilar, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-[2rem] bg-white/[0.04] border border-white/10 hover:border-emerald-400/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                  {i === 0 && <Shield size={20} />}
                  {i === 1 && <Users size={20} />}
                  {i === 2 && <Scale size={20} />}
                </div>
                <span className="font-mono text-[10px] text-white/20 tracking-widest font-bold">
                  0{i + 1}
                </span>
              </div>

              <h3 className="text-xl font-serif mb-3 group-hover:text-emerald-300 transition-colors">
                {pilar.title}
              </h3>

              <p className="text-sm text-emerald-100/60 leading-relaxed line-clamp-4">
                {pilar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
