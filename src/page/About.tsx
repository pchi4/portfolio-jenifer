import { BookOpen, ChevronRight, FileText, Hash } from "lucide-react";
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
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-emerald-600 mb-4 font-bold">
              Metodologia
            </h2>
            <p className="text-4xl font-serif italic text-slate-900">
              Como desenvolvo o cuidado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-[#FDF8F3] border border-transparent hover:border-emerald-100 transition-all">
              <h3 className="text-xl font-bold mb-4">Clínica Ampliada</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Uma prática que transcende o consultório, considerando os
                determinantes sociais, políticos e econômicos que atravessam o
                sofrimento mental.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FDF8F3] border border-transparent hover:border-emerald-100 transition-all">
              <h3 className="text-xl font-bold mb-4">Redução de Danos</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Estratégia ética focada na liberdade e na dignidade, construindo
                percursos de cuidado possíveis e singulares para cada contexto.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FDF8F3] border border-transparent hover:border-emerald-100 transition-all">
              <h3 className="text-xl font-bold mb-4">Saúde Coletiva</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Atuação pautada no fortalecimento das redes de atenção
                psicossocial e na defesa intransigente das políticas públicas de
                saúde.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="producao"
        className="py-24 px-6 bg-[#F1F5F9] rounded-[4rem] mx-4 lg:mx-10 mb-20 mt-20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
          <BookOpen size={400} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 ml-4">
            <h2 className="text-5xl font-serif font-bold italic text-slate-900">
              Produção <br />{" "}
              <span className="italic text-emerald-800">
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
                className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all group cursor-pointer border border-transparent hover:border-emerald-100 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-slate-50 rounded-2xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <FileText size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    {pub.type}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold mb-4 leading-tight text-slate-800">
                  {pub.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {pub.description}
                </p>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {pub.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                      Instituição
                    </span>
                    <span className="text-xs font-bold text-[#2D4F43]">
                      {pub.institution}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                    <ChevronRight
                      size={14}
                      className="text-slate-400 group-hover:text-emerald-600"
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
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />

              <motion.div
                layoutId={`pub-${selectedPub.id}`}
                className="bg-white w-full max-w-3xl max-h-[85vh] rounded-[3rem] overflow-hidden relative z-10 flex flex-col shadow-2xl"
              >
                {/* Barra de Topo do Modal */}
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-20">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-emerald-600" />
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-widest">
                      Leitura Técnica
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedPub(null)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X size={20} className="text-slate-400" />
                  </button>
                </div>

                {/* Conteúdo Acadêmico */}
                <div className="p-8 md:p-16 overflow-y-auto">
                  <div className="max-w-2xl mx-auto">
                    <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-[10px] font-bold uppercase mb-6 tracking-widest">
                      {selectedPub.year} • {selectedPub.institution}
                    </span>

                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight mb-10">
                      {selectedPub.title}
                    </h3>

                    <div className="space-y-12">
                      <section>
                        <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-4">
                          Abstract / Resumo
                        </h4>
                        <p className="text-xl font-serif text-slate-700 leading-relaxed">
                          {selectedPub.fullAbstract}
                        </p>
                      </section>

                      <section className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                          Análise Detalhada
                        </h4>
                        <p className="text-base text-slate-600 leading-relaxed italic">
                          {selectedPub.analysis}
                        </p>
                      </section>

                      <div className="grid md:grid-cols-2 gap-12 pt-8">
                        <div className="space-y-4">
                          <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">
                            Metodologia Aplicada
                          </h4>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {selectedPub.methodology}
                          </p>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">
                            Contribuições Acadêmicas
                          </h4>
                          <ul className="space-y-2">
                            {selectedPub.contributions?.map(
                              (item: string, index: number) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-2 text-sm text-slate-500"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                  {item}
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>

                      <div className="pt-8 border-t border-slate-100">
                        <p className="text-[9px] font-mono text-slate-400 uppercase mb-2">
                          Referência Bibliográfica (ABNT)
                        </p>
                        <p className="text-[11px] font-mono text-slate-900 bg-slate-50 p-4 rounded-lg">
                          {selectedPub.citation}
                        </p>
                      </div>

                      <section>
                        <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                          {selectedPub.keywords?.map((tag: string) => (
                            <div
                              key={tag}
                              className="flex items-center gap-1 px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] text-slate-500 font-medium"
                            >
                              <Hash size={10} className="text-emerald-400" />
                              {tag}
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>

                    <button
                      onClick={() => setSelectedPub(null)}
                      className="mt-16 w-full py-5 bg-slate-900 text-white rounded-[2rem] font-bold text-xs uppercase tracking-[0.3em] hover:bg-emerald-900 transition-colors shadow-xl"
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
