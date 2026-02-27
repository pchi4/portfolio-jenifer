"use client";

import {
  profile,
  experiences,
  education,
  certifications,
  ethicalPillars,
  scientificProduction,
  manifesto,
  extensionGallery,
} from "@/src/data/content";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  ChevronRight,
  FileText,
  Hash,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  MoveRight,
  Quote,
  Scale,
  ScrollText,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProfessionalPortfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedPub, setSelectedPub] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xnjbrpqb", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      window.location.href = "/obrigado";
    } else {
      alert("Ops! Houve um erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div className="bg-[#F8F9FA] text-[#1A1A1A] font-sans antialiased">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#2D4F43] origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* NAVBAR MINIMALISTA */}
      <nav className="fixed top-6 w-full z-[100] px-4">
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0,05)] rounded-full px-6 h-16 flex items-center justify-between gap-4">
          <a
            href="#sobre"
            className="flex items-center gap-2 group transition-all"
          >
            <div className="w-8 h-8 bg-[#2D4F43] rounded-full flex items-center justify-center text-white font-serif italic font-bold text-sm group-hover:rotate-12 transition-transform">
              J
            </div>
            <span className="font-serif font-bold text-sm sm:text-base tracking-tight text-slate-900">
              <span className="md:hidden">Nascimento</span>
              <span className="hidden md:inline">{profile.name}</span>
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a
              href="#sobre"
              className="hover:text-[#2D4F43] transition-all relative group"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full" />
            </a>
            <a
              href="#experiencia"
              className="hover:text-[#2D4F43] transition-all relative group"
            >
              Trajetória
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full" />
            </a>
            <a
              href="#producao"
              className="hover:text-[#2D4F43] transition-all relative group"
            >
              Produção
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all group-hover:w-full" />
            </a>
          </div>

          <div className="flex sm:hidden items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#sobre">Sobre</a>
            <a href="#producao">Produção</a>
          </div>

          <a
            href="#contato"
            className="bg-[#2D4F43] text-white px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-[#1f3a31] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-900/20 whitespace-nowrap"
          >
            Contato
          </a>
        </div>
      </nav>

      {/* HERO SECTION - ESTILO EDITORIAL */}
      <section id="sobre" className="pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Detalhe artístico de fundo (Blob) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-40 -z-10" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[#2D4F43] text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Psicóloga | CRP Ativo
            </div>

            <h1 className="text-6xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8 text-slate-900">
              Cuidado com <br />
              <span className="italic text-[#2D4F43]">propósito social.</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-10 font-sans">
              {profile.summary}
            </p>

            {/* ESPECIALIDADES COM DESIGN CLEAN */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-2">
                {profile.specialties.map((spec, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#f4f7f5] text-[#2D4F43] text-xs font-bold rounded-xl border border-emerald-100/50"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#experiencia"
                className="group flex items-center gap-2 bg-[#2D4F43] text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-emerald-900/20 transition-all"
              >
                Ver Trajetória{" "}
                <MoveRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="mailto:email@exemplo.com"
                className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all"
              >
                Entrar em contato
              </a>
            </div>
          </div>

          <div className="relative group">
            {/* Moldura Decorativa (Toque de Artes) */}
            <div className="absolute -inset-4 border border-emerald-100 rounded-[2.5rem] -z-10 group-hover:inset-0 transition-all duration-500" />

            <div className="aspect-[4/5] bg-slate-200 rounded-[2rem] overflow-hidden relative shadow-2xl">
              {/* Camada de Gradiente para legibilidade do texto branco */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-80" />

              <Image
                src="/1771856073338.jpg"
                alt="Jenifer Nascimento"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-8 left-8 text-white z-20">
                <p className="text-xs font-mono opacity-80 uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
                  <MapPin size={12} /> Salvador, BA
                </p>
                <p className="text-3xl font-serif font-bold tracking-tight italic">
                  {profile.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
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

      {/* EXPERIÊNCIA - GRID PROFISSIONAL */}
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

      {/* FORMAÇÃO E CERTIFICAÇÕES - LAYOUT "CLEAN CARD" */}
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

      {/* GALERIA DE EXTENSÃO - LADO HUMANO E VISUAL */}
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

      {/* SEÇÃO ABORDAGEM TÉCNICA */}
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

      <footer
        id="contato"
        className="relative py-32 bg-[#F8FAFC] border-t border-slate-200 px-6 overflow-hidden"
      >
        {/* Background Decor */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-100/40 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] text-slate-900">
              Vamos construir uma escuta que faça sentido para o{" "}
              <span className="italic text-[#2D4F43]">seu território?</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Disponível para colaborações em projetos de impacto social,
              pesquisa acadêmica e clínica psicanalítica em Salvador.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* BOTÃO QUE ABRE O MODAL */}
              <button
                onClick={() => setIsOpen(true)}
                className="group flex items-center justify-center gap-3 px-10 py-5 bg-[#2D4F43] text-white rounded-full font-bold text-base hover:shadow-[0_20px_40px_rgba(45,79,67,0.3)] transition-all duration-500 w-full sm:w-auto"
              >
                <Mail
                  size={20}
                  className="group-hover:-rotate-12 transition-transform"
                />
                Iniciar Conversa
              </button>

              <a
                href="http://lattes.cnpq.br/xxxxxxxx" // Substituir pelo link real quando tiver
                target="_blank"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-white border border-slate-200 rounded-full font-bold text-base hover:bg-slate-50 transition-all w-full sm:w-auto shadow-sm text-slate-700"
              >
                <BookOpen size={20} className="text-emerald-600" />
                Currículo Lattes
              </a>
            </div>
          </div>

          {/* Informações de Rodapé */}
          <div className="grid md:grid-cols-4 gap-12 pt-20 border-t border-slate-200">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  {profile.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-600 font-bold mt-2">
                  Psicóloga & Pesquisadora
                </p>
              </div>
              <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                Prática clínica e social pautada na ética, no território e na
                escuta das subjetividades contemporâneas.
              </p>
              <div className="flex items-center gap-4 pt-4 text-slate-400">
                <a
                  href="https://www.linkedin.com/in/jenifer-nascimento-41bb4b229/"
                  target="_blank"
                  className="hover:text-[#2D4F43] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-[#2D4F43] transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-900 font-bold">
                Navegação
              </h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li>
                  <a
                    href="#sobre"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Sobre mim
                  </a>
                </li>
                <li>
                  <a
                    href="#experiencia"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Trajetória
                  </a>
                </li>
                <li>
                  <a
                    href="#producao"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Produção Científica
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-900 font-bold">
                Registro & Local
              </h4>
              <div className="text-sm text-slate-500 space-y-2">
                <p className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  CRP 03/XXXXX
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={14} className="text-emerald-500" />
                  Salvador, Bahia
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MODAL DE CONTATO REFINADO */}
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900"
                >
                  <X size={24} />
                </button>

                <div className="p-10 md:p-16">
                  <div className="flex items-center gap-3 mb-8 text-emerald-700">
                    <MessageCircle size={20} />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                      Formulário de Contato
                    </span>
                  </div>

                  <h3 className="text-3xl font-serif mb-10 text-slate-900">
                    Como posso te ajudar?
                  </h3>

                  <form
                    method="POST"
                    className="space-y-6"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="hidden"
                      name="_next"
                      value="https://jenifer-psicologia.vercel.app/obrigado"
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
                          Nome
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-100 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
                          E-mail
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-100 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
                        Finalidade
                      </label>
                      <select
                        name="subject"
                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-100 transition-all text-slate-600"
                      >
                        <option>Pesquisa & Acadêmico</option>
                        <option>Atendimento Clínico</option>
                        <option>Projetos Sociais</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
                        Mensagem
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-100 transition-all resize-none"
                      ></textarea>
                    </div>

                    <button className="w-full bg-[#2D4F43] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-900 transition-all">
                      Enviar Mensagem
                      <Send size={18} />
                    </button>

                    <input type="hidden" name="_captcha" value="false" />
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </footer>
    </div>
  );
}
