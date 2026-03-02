import { ArrowUpRight, Award, ScrollText } from "lucide-react";
import { certifications, education } from "../data/content";

export function EducationSection() {
  return (
    <section id="formacao" className="py-32 px-6 bg-[#F9F5F1]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-16">
              {/* TÍTULO EM ÉBANO */}
              <h2 className="text-5xl font-serif font-bold italic text-[#1A1A1A]">
                Educação Formal
              </h2>
            </div>

            <div className="space-y-16">
              {education.map((edu, i) => (
                <div key={i} className="group relative pl-8">
                  {/* LINHA LATERAL - OURO DENDÊ (Substituindo emerald/slate) */}
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-[#B8860B]/10 group-hover:bg-[#B8860B] transition-colors" />

                  {/* PERÍODO EM TERRACOTA */}
                  <span className="text-xs font-mono text-[#8B4513] mb-3 block font-bold tracking-widest">
                    {edu.period}
                  </span>

                  <h4 className="text-3xl font-serif font-medium mb-3 text-[#1A1A1A] leading-tight group-hover:text-[#8B4513] transition-colors">
                    {edu.degree}
                  </h4>

                  <div className="flex items-center gap-2 text-[#4A2C2A]/60 font-medium mb-4">
                    <span className="text-lg">{edu.institution}</span>
                    <div className="w-1 h-1 rounded-full bg-[#B8860B]/30" />
                    <span className="text-sm italic font-serif">
                      Salvador, BA
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <p className="text-sm text-[#4A2C2A]/80 leading-relaxed max-w-md italic font-sans">
                      "{edu.description}"
                    </p>

                    {edu.institution === "UFBA" && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/50 border border-[#B8860B]/10 rounded-md">
                        {/* DOT EM OURO */}
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
                        <span className="text-[10px] font-bold text-[#A45D3D] uppercase tracking-widest">
                          Pesquisa & Extensão Pública
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LADO DIREITO: CERTIFICAÇÕES (O CARD ESCURO) */}
          <div className="relative">
            {/* FUNDO CAFÉ PROFUNDO (Substituindo o verde 2D4F43) */}
            <div className="bg-[#4A2C2A] p-10 md:p-14 rounded-[3rem] text-[#F9F5F1] shadow-2xl shadow-[#1A1A1A]/20 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#B8860B]/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-12">
                  {/* ÍCONE EM OURO */}
                  <Award className="text-[#B8860B]" size={24} />
                  <h2 className="text-2xl font-serif font-medium tracking-tight">
                    Certificações & Letramento
                  </h2>
                </div>

                <div className="space-y-8">
                  {certifications.slice(0, 5).map((cert, i) => (
                    <a
                      key={i}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block cursor-pointer border-b border-white/5 pb-6 last:border-0 hover:border-[#B8860B]/30 transition-all relative"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          {/* TEXTO EM OURO NO HOVER */}
                          <p className="font-bold text-lg leading-snug group-hover:text-[#D4AF37] transition-colors">
                            {cert.title}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F9F5F1]/40">
                              {cert.issuer}
                            </span>
                            {cert.date && (
                              <>
                                <div className="w-1 h-1 rounded-full bg-white/10" />
                                <span className="text-[10px] font-mono text-[#F9F5F1]/30">
                                  {cert.date}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <ArrowUpRight
                            size={18}
                            className="text-[#F9F5F1]/20 group-hover:text-[#B8860B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                          />
                          <span className="text-[8px] font-mono uppercase tracking-widest text-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity">
                            Validar
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4 text-[#F9F5F1]/30">
                  <ScrollText size={32} strokeWidth={1} />
                  <p className="text-[10px] font-mono uppercase tracking-widest leading-tight">
                    Pesquisa Acadêmica & <br />
                    Extensão Universitária
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
