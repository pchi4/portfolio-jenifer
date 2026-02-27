import { AnimatePresence, motion } from "framer-motion";
import { extensionGallery, manifesto } from "@/src/data/content";
import { useState } from "react";
import { ArrowUpRight, Sparkles, Target } from "lucide-react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      <section id="projetos" className="py-32 px-6 bg-[#FDF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl font-serif font-bold italic text-slate-900">
              Projetos & Territórios
            </h2>
            <p className="text-slate-500 mt-4 text-lg max-w-2xl">
              A interface entre a pesquisa acadêmica da UFBA e a atuação social
              em Salvador.
            </p>
          </div>

          {/* GRID DE CARDS */}
          <div className="grid md:grid-cols-3 gap-10">
            {extensionGallery.map((item, i) => (
              <motion.div
                key={i}
                layoutId={`card-${item.id}`}
                onClick={() => setSelectedProject(item)}
                className="group bg-white rounded-[3rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-emerald-100"
              >
                {/* AREA DA IMAGEM NO CARD */}
                <div className="h-64 rounded-[2.5rem] relative overflow-hidden bg-slate-100">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div
                      className={`w-full h-full ${item.color} flex items-center justify-center`}
                    >
                      <Sparkles className="text-white/40 w-8 h-8" />
                    </div>
                  )}
                  {/* Overlay para dar um brilho extra no hover */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4 block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-900 group-hover:text-emerald-700 transition-colors">
                    <ArrowUpRight size={14} /> Detalhes do Projeto
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MODAL EDITORIAL ROBUSTO COM IMAGEM */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl"
              />

              <motion.div
                layoutId={`card-${selectedProject.id}`}
                className="bg-white w-full max-w-6xl h-full md:h-[90vh] rounded-none md:rounded-[3.5rem] overflow-hidden relative z-10 flex flex-col shadow-2xl"
              >
                {/* HEADER DO MODAL */}
                <div className="flex justify-between items-center p-6 md:p-8 border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-3 h-3 rounded-full ${selectedProject.color}`}
                    />
                    <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">
                      Documentação Acadêmica • {selectedProject.year}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-3 hover:bg-slate-100 rounded-full transition-all"
                  >
                    <X size={20} className="text-slate-400" />
                  </button>
                </div>

                {/* CONTEÚDO DO MODAL */}
                <div className="overflow-y-auto">
                  <div className="grid lg:grid-cols-2">
                    {/* IMAGEM NO MODAL */}
                    <div className="h-[350px] md:h-auto bg-slate-200 relative overflow-hidden">
                      {selectedProject.image ? (
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div
                          className={`w-full h-full ${selectedProject.color} flex items-center justify-center`}
                        >
                          <Sparkles
                            size={120}
                            className="opacity-20 text-white"
                          />
                        </div>
                      )}
                    </div>

                    <div className="p-10 md:p-20 flex flex-col justify-center bg-white">
                      <h3 className="text-4xl md:text-5xl font-serif text-slate-900 leading-[1.1] mb-8">
                        {selectedProject.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-4 py-1.5 bg-slate-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="max-w-5xl mx-auto p-10 md:p-20 grid md:grid-cols-12 gap-16">
                    {/* TEXTO DETALHADO */}
                    <div className="md:col-span-7 space-y-12">
                      <section>
                        <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-6 text-balance">
                          A Proposta
                        </h4>
                        <p className="text-xl font-serif text-slate-700 leading-relaxed italic">
                          {selectedProject.fullDescription}
                        </p>
                        <div className="h-8" />
                        <p className="text-xl font-serif text-slate-700 leading-relaxed italic">
                          {selectedProject.methodology}
                        </p>
                        <div className="h-8" />
                        <p className="text-xl font-serif text-slate-700 leading-relaxed italic">
                          {selectedProject.results}
                        </p>
                      </section>
                    </div>

                    {/* CARDS LATERAIS DE OBJETIVOS */}
                    <div className="md:col-span-5 space-y-8">
                      <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                        <h4 className="text-xs font-bold text-slate-900 uppercase mb-6">
                          Objetivos & Impacto
                        </h4>
                        <ul className="space-y-4">
                          {selectedProject.objectives.map(
                            (obj: string, idx: number) => (
                              <li
                                key={idx}
                                className="flex gap-4 items-start text-sm text-slate-600 leading-tight"
                              >
                                <Target
                                  size={16}
                                  className="text-emerald-600 shrink-0 mt-0.5"
                                />
                                {obj}
                              </li>
                            ),
                          )}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-slate-200">
                          <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">
                            Impacto Final
                          </p>
                          <p className="text-sm text-slate-900 font-medium italic">
                            "{selectedProject.impact}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BOTÃO DE FECHAR NO FINAL */}
                  <div className="p-10 border-t border-slate-100 text-center bg-slate-50/50">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-12 py-5 bg-[#2D4F43] text-white rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-xl shadow-emerald-900/10"
                    >
                      Fechar Galeria
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
      <section className="py-32 px-6 bg-white overflow-hidden relative">
        {/* Toque de Arte: Formas geométricas suaves de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-50/50 rounded-[100%] blur-3xl -z-0" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-xs font-mono tracking-[0.4em] text-slate-400 uppercase mb-8 block">
            Manifesto Profissional
          </span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight text-slate-900 italic">
            {manifesto.quote}
          </h2>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-emerald-200" />
            <span className="font-serif text-xl text-emerald-800">
              {manifesto.author}
            </span>
            <div className="h-[1px] w-12 bg-emerald-200" />
          </div>
        </div>
      </section>
    </>
  );
}
