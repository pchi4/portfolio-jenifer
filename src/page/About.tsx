import { BookOpen, ChevronRight, FileText, Hash, X } from "lucide-react"; // Adicionado X
import { scientificProduction } from "../data/content";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [selectedPub, setSelectedPub] = useState<any>(null);

  return (
    <>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* LABEL EM TERRACOTA */}
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-[#8B4513] mb-4 font-bold">
              Metodologia
            </h2>
            <p className="text-4xl font-serif italic text-[#1A1A1A]">
              Como desenvolvo o cuidado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* CARDS DE METODOLOGIA EM AREIA */}
            {[
              {
                title: "Clínica Ampliada",
                desc: "Uma prática que transcende o consultório, considerando os determinantes sociais, políticos e econômicos que atravessam o sofrimento mental.",
              },
              {
                title: "Redução de Danos",
                desc: "Estratégia ética focada na liberdade e na dignidade, construindo percursos de cuidado possíveis e singulares para cada contexto.",
              },
              {
                title: "Saúde Coletiva",
                desc: "Atuação pautada no fortalecimento das redes de atenção psicossocial e na defesa intransigente das políticas públicas de saúde.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F9F5F1] border border-transparent hover:border-[#B8860B]/20 transition-all group"
              >
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A] group-hover:text-[#8B4513] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#4A2C2A]/70 text-sm leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO PRODUÇÃO CIENTÍFICA - FUNDO AREIA ESCURO/ARGILA */}
      <section
        id="producao"
        className="py-24 px-6 bg-[#F1ECE7] rounded-[4rem] mx-4 lg:mx-10 mb-20 mt-20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-20 opacity-[0.05] text-[#8B4513] pointer-events-none">
          <BookOpen size={400} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 ml-4">
            <h2 className="text-5xl font-serif font-bold italic text-[#1A1A1A]">
              Produção <br />{" "}
              <span className="italic text-[#8B4513]">
                Científica & Acadêmica
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scientificProduction.map((pub, i) => (
              <motion.div
                key={i}
                layoutId={`pub-${pub.id}`}
                onClick={() => setSelectedPub(pub)}
                className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-transparent hover:border-[#B8860B]/20 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-[#F9F5F1] text-[#8B4513] group-hover:bg-[#8B4513] group-hover:text-[#F9F5F1] transition-colors rounded-2xl">
                    <FileText size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#A45D3D]">
                    {pub.type}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold mb-4 leading-tight text-[#1A1A1A] group-hover:text-[#8B4513] transition-colors">
                  {pub.title}
                </h3>

                <p className="text-[#4A2C2A]/60 text-sm leading-relaxed mb-8 line-clamp-3 font-sans">
                  {pub.description}
                </p>

                <div className="mt-auto pt-6 border-t border-[#F9F5F1] flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#B8860B] uppercase tracking-tighter">
                      Instituição
                    </span>
                    <span className="text-xs font-bold text-[#8B4513]">
                      {pub.institution}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F9F5F1] flex items-center justify-center group-hover:bg-[#8B4513] transition-colors">
                    <ChevronRight
                      size={14}
                      className="text-[#8B4513] group-hover:text-white"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MODAL DE LEITURA ACADÊMICA */}
        <AnimatePresence>
          {selectedPub && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPub(null)}
                className="absolute inset-0 bg-[#1A1A1A]/70 backdrop-blur-md"
              />

              <motion.div
                layoutId={`pub-${selectedPub.id}`}
                className="bg-white w-full max-w-3xl max-h-[85vh] rounded-[3rem] overflow-hidden relative z-10 flex flex-col shadow-2xl"
              >
                {/* BARRA TOPO MODAL */}
                <div className="p-6 border-b border-[#F9F5F1] flex justify-between items-center bg-white sticky top-0 z-20">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-[#B8860B]" />
                    <span className="text-[10px] font-mono font-bold uppercase text-[#A45D3D] tracking-widest">
                      Leitura Técnica
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedPub(null)}
                    className="p-2 hover:bg-[#F9F5F1] rounded-full transition-colors group"
                  >
                    <X
                      size={20}
                      className="text-[#A45D3D] group-hover:text-[#8B4513]"
                    />
                  </button>
                </div>

                <div className="p-8 md:p-16 overflow-y-auto bg-white">
                  <div className="max-w-2xl mx-auto">
                    <span className="inline-block px-3 py-1 bg-[#F9F5F1] text-[#8B4513] rounded-lg text-[10px] font-bold uppercase mb-6 tracking-widest border border-[#B8860B]/10">
                      {selectedPub.year} • {selectedPub.institution}
                    </span>

                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1A1A1A] leading-tight mb-10">
                      {selectedPub.title}
                    </h3>

                    <div className="space-y-12">
                      <section>
                        <h4 className="text-[10px] font-bold text-[#B8860B] uppercase tracking-widest mb-4">
                          Abstract / Resumo
                        </h4>
                        <p className="text-xl font-serif text-[#4A2C2A] leading-relaxed italic">
                          {selectedPub.fullAbstract}
                        </p>
                      </section>

                      <section className="p-8 bg-[#F9F5F1] rounded-[2rem] border border-[#B8860B]/10">
                        <h4 className="text-[10px] font-bold text-[#A45D3D] uppercase tracking-widest mb-4">
                          Análise Detalhada
                        </h4>
                        <p className="text-base text-[#4A2C2A]/80 leading-relaxed italic font-sans">
                          {selectedPub.analysis}
                        </p>
                      </section>

                      <div className="grid md:grid-cols-2 gap-12 pt-8">
                        <div className="space-y-4">
                          <h4 className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest">
                            Metodologia Aplicada
                          </h4>
                          <p className="text-sm text-[#4A2C2A]/70 leading-relaxed font-sans">
                            {selectedPub.methodology}
                          </p>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest">
                            Contribuições Acadêmicas
                          </h4>
                          <ul className="space-y-2">
                            {selectedPub.contributions?.map(
                              (item: string, index: number) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2 text-sm text-[#4A2C2A]/70 font-sans"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] mt-1.5 shrink-0" />
                                  {item}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* CITAÇÃO ABNT */}
                      <div className="pt-8 border-t border-[#F9F5F1]">
                        <p className="text-[9px] font-mono text-[#A45D3D] uppercase mb-2">
                          Referência Bibliográfica (ABNT)
                        </p>
                        <p className="text-[11px] font-mono text-[#1A1A1A] bg-[#F9F5F1] p-4 rounded-lg border border-[#B8860B]/5">
                          {selectedPub.citation}
                        </p>
                      </div>

                      <section>
                        <div className="flex flex-wrap gap-2 pt-6 border-t border-[#F9F5F1]">
                          {selectedPub.keywords?.map((tag: string) => (
                            <div
                              key={tag}
                              className="flex items-center gap-1 px-3 py-1 bg-white border border-[#B8860B]/20 rounded-full text-[10px] text-[#8B4513] font-medium"
                            >
                              <Hash size={10} className="text-[#B8860B]" />
                              {tag}
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>

                    <button
                      onClick={() => setSelectedPub(null)}
                      className="mt-16 w-full py-5 bg-[#8B4513] text-[#F9F5F1] rounded-[2rem] font-bold text-xs uppercase tracking-[0.3em] hover:bg-[#1A1A1A] transition-all shadow-xl shadow-[#8B4513]/20"
                    >
                      Concluir Leitura
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
