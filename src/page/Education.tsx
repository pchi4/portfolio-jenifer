import { ArrowUpRight, Award, GraduationCap, ScrollText } from "lucide-react";
import { certifications, education } from "../data/content";

export function EducationSection() {
  return (
    <section id="formacao" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-5xl font-serif font-bold italic text-slate-900">
                Educação Formal
              </h2>
            </div>

            <div className="space-y-16">
              {education.map((edu, i) => (
                <div key={i} className="group relative pl-8">
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-slate-100 group-hover:bg-[#2D4F43] transition-colors" />

                  <span className="text-xs font-mono text-emerald-700 mb-3 block font-bold tracking-widest">
                    {edu.period}
                  </span>

                  <h4 className="text-3xl font-serif font-medium mb-3 text-slate-900 leading-tight">
                    {edu.degree}
                  </h4>

                  <div className="flex items-center gap-2 text-slate-500 font-medium mb-4">
                    <span className="text-lg">{edu.institution}</span>
                    <div className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-sm italic">Salvador, BA</span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <p className="text-sm text-slate-600 leading-relaxed max-w-md italic">
                      "{edu.description}"
                    </p>

                    {edu.institution === "UFBA" && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-md">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Pesquisa & Extensão Pública
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LADO DIREITO: CERTIFICAÇÕES & LETRAMENTO */}
          <div className="relative">
            <div className="bg-[#2D4F43] p-10 md:p-14 rounded-[3rem] text-white shadow-2xl shadow-emerald-950/20 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-12">
                  <Award className="text-emerald-400" size={24} />
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
                      className="group block cursor-pointer border-b border-white/10 pb-6 last:border-0 hover:border-white/30 transition-all relative"
                    >
                      <div
                        key={i}
                        className="group cursor-default border-b border-white/10 pb-6 last:border-0 hover:border-white/30 transition-all"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <p className="font-bold text-lg leading-snug group-hover:text-emerald-300 transition-colors">
                              {cert.title}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
                                {cert.issuer}
                              </span>
                              {cert.date && (
                                <>
                                  <div className="w-1 h-1 rounded-full bg-white/20" />
                                  <span className="text-[10px] font-mono text-white/40">
                                    {cert.date}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <ArrowUpRight
                              size={18}
                              className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                            />
                            <span className="text-[8px] font-mono uppercase tracking-widest text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                              Validar
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4 text-white/40">
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
