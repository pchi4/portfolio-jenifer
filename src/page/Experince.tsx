import { experiences } from "@/src/data/content";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experiencia" className="py-32 bg-[#F8FAFA] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Lado Esquerdo: Título Fixo (Sticky) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="text-[#2D4F43] font-mono text-xs uppercase tracking-[0.3em] font-bold">
                Trajetória
              </span>
              <h2 className="text-5xl font-serif mt-6 mb-8 leading-tight">
                Experiência <br />
                <span className="italic">Profissional</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Consolidando a escuta clínica no serviço público e em projetos
                de intervenção psicossocial no território baiano.
              </p>

              <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-sm font-bold text-slate-900 mb-2">
                  Foco de Atuação:
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li className="flex items-center gap-2">
                    • Saúde Coletiva (SUS)
                  </li>
                  <li className="flex items-center gap-2">
                    • Redução de Danos
                  </li>
                  <li className="flex items-center gap-2">
                    • Psicologia Hospitalar
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Lado Direito: A Linha do Tempo Robusta */}
          <div className="lg:col-span-8 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-slate-200 hover:border-[#2D4F43] transition-colors pb-4"
              >
                {/* O "Ponto" na linha do tempo */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-[#2D4F43]" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div className="flex flex-col">
                    <span className="text-[#2D4F43] font-mono text-[10px] font-bold uppercase tracking-widest">
                      {exp.company}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                      {exp.title}
                    </h3>
                  </div>
                  <span className="inline-block px-4 py-1 bg-white border border-slate-200 text-slate-500 rounded-full text-[10px] font-bold font-mono whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-50 group hover:shadow-md transition-all">
                  <p className="text-slate-600 leading-relaxed mb-6 italic">
                    {exp.description}
                  </p>

                  {/* Realizações em Tópicos (Deixa o CV muito mais forte) */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                      Principais Contribuições:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {/* Verificamos se existe o array de destaques no seu JSON */}
                      {exp.highlights?.map((highlight, hIndex) => (
                        <div
                          key={hIndex}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags?.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-emerald-50 text-[#2D4F43] text-[9px] rounded-md font-bold uppercase tracking-tighter"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
