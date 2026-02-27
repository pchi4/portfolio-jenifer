"use client"; // Necessário para animações e interatividade

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
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MoveRight,
  ScrollText,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function ProfessionalPortfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut"
    } 
  }
} as any;

  return (
    <div className="bg-[#F8F9FA] text-[#1A1A1A] font-sans antialiased">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#2D4F43] origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* NAVBAR MINIMALISTA */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-2">
          {/* LOGO: No mobile, usamos apenas a inicial ou o primeiro nome para ganhar espaço */}
          <a
            href="#sobre"
            className="font-serif font-bold text-base sm:text-lg tracking-tight uppercase flex-shrink-0"
          >
            <span className="md:hidden">J. Nascimento</span> {/* Mobile */}
            <span className="hidden md:inline">{profile.name}</span>{" "}
            {/* Desktop */}
          </a>

          {/* MENU DE LINKS: Todos visíveis, mas com texto menor no mobile */}
          <div className="flex items-center gap-3 sm:gap-6 text-[9px] xs:text-[11px] sm:text-sm font-bold uppercase tracking-wider text-slate-400">
            <a href="#sobre" className="hover:text-[#2D4F43] transition-colors">
              Sobre
            </a>
            <a
              href="#experiencia"
              className="hover:text-[#2D4F43] transition-colors"
            >
              Trajetória
            </a>
            <a
              href="#producao"
              className="hover:text-[#2D4F43] transition-colors"
            >
              Produção
            </a>
            <a
              href="#formacao"
              className="hidden xs:block hover:text-[#2D4F43] transition-colors"
            >
              Formação
            </a>
          </div>

          {/* BOTÃO CONTATO: Mais estreito no mobile para não empurrar o menu */}
          <a
            href="mailto:contato@email.com"
            className="bg-[#2D4F43] text-white px-3 sm:px-6 py-2 rounded-full text-[10px] sm:text-sm font-semibold hover:bg-[#1f3a31] transition-all whitespace-nowrap flex-shrink-0"
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

              {/* Caminho da imagem ajustado para Next.js */}
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

      <section
        id="valores"
        className="py-24 bg-[#2D4F43] text-white rounded-[3rem] mx-4 lg:mx-10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {ethicalPillars.map((pilar, i) => (
              <div
                key={i}
                className="space-y-4 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <Heart className="text-emerald-400" />
                <h3 className="text-2xl font-serif">{pilar.title}</h3>
                <p className="text-emerald-100/70 leading-relaxed">
                  {pilar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA - GRID PROFISSIONAL */}
      <section
        id="experiencia"
        className="py-24 bg-white border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-serif font-medium italic">
              Experiência Selecionada
            </h2>
            <div className="text-slate-400 text-sm font-mono uppercase">
              2020 — 2026
            </div>
          </div>

          <div className="grid gap-px bg-slate-100 border border-slate-100 overflow-hidden rounded-3xl">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="bg-white p-10 hover:bg-slate-50 transition-all group"
              >
                <div className="grid md:grid-cols-[1fr_2fr_1fr] items-start gap-8">
                  <div>
                    <span className="text-sm font-mono text-slate-400">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mt-2 group-hover:text-[#2D4F43] transition-colors">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed text-sm lg:text-base">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {exp.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 rounded-md text-[10px] font-bold uppercase text-slate-500 tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAÇÃO E CERTIFICAÇÕES - LAYOUT "CLEAN CARD" */}
      <section id="formacao" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-[2px] bg-[#2D4F43]" />
              <h2 className="text-2xl font-serif font-bold uppercase tracking-widest">
                Formação Acadêmica
              </h2>
            </div>
            <div className="space-y-12">
              {education.map((edu, i) => (
                <div key={i} className="group cursor-default">
                  <p className="text-xs font-mono text-emerald-600 mb-2 font-bold uppercase tracking-widest">
                    {edu.period}
                  </p>
                  <h4 className="text-2xl font-bold mb-1 group-hover:translate-x-2 transition-transform">
                    {edu.degree}
                  </h4>
                  <p className="text-slate-500 flex items-center gap-2">
                    {edu.institution}{" "}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#2D4F43] p-12 rounded-[2.5rem] text-white relative overflow-hidden">
            <ScrollText className="absolute -right-10 -bottom-10 w-64 h-64 opacity-5" />
            <h2 className="text-2xl font-serif font-bold mb-10 italic">
              Certificações & Letramento
            </h2>
            <div className="grid gap-6">
              {certifications.slice(0, 5).map((cert, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-white/10 pb-4 hover:border-white/40 transition-colors"
                >
                  <div>
                    <p className="font-bold text-lg">{cert.title}</p>
                    <p className="text-white/60 text-xs uppercase tracking-wider">
                      {cert.issuer}
                    </p>
                  </div>
                  <Award size={20} className="text-emerald-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA DE EXTENSÃO - LADO HUMANO E VISUAL */}
      <section className="py-24 px-6 bg-[#FDF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold italic">
              Projetos & Territórios
            </h2>
            <p className="text-slate-500 mt-2">
              A interface entre a academia, a arte e a atuação social.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {extensionGallery.map((item, i) => (
              <div
                key={i}
                className={`group relative p-1 bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all`}
              >
                {/* Fundo com toque de "Aquarela" usando gradiente suave */}
                <div
                  className={`h-48 ${item.color} rounded-[2.2rem] flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Formas geométricas decorativas */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  <Sparkles className="text-white/80 w-12 h-12" />
                </div>

                <div className="p-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl font-serif font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
        className="py-24 px-6 bg-[#F1F5F9] rounded-[4rem] mx-4 lg:mx-10 mb-20"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scientificProduction.map((pub, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-md transition-all group border border-transparent hover:border-emerald-100"
            >
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="text-emerald-600" size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {pub.type}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 leading-tight">
                {pub.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {pub.description}
              </p>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-50">
                <span className="text-xs font-bold text-[#2D4F43]">
                  {pub.institution}
                </span>
                <span className="text-xs font-mono text-slate-300">
                  {pub.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER - CHAMADA PARA AÇÃO */}
      <footer className="py-32 bg-white border-t border-slate-100 px-6 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center relative"
        >
          {/* Decoração artística */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60" />

          <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
            Vamos construir uma escuta que faça sentido para o{" "}
            <span className="italic text-[#2D4F43]">seu território?</span>
          </h2>

          <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto">
            Pronta para colaborar em projetos de impacto social, saúde pública
            ou atendimento clínico em Salvador.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:contato@jenifer.com"
              className="flex items-center gap-3 px-12 py-6 bg-[#2D4F43] text-white rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-emerald-900/30 transition-all active:scale-95 w-full sm:w-auto"
            >
              <Mail size={22} /> Iniciar Conversa
            </a>
            <a
              href="http://lattes.cnpq.br/xxxxxxxx" // <-- COLOQUE O LINK DO LATTES AQUI
              target="_blank"
              className="flex items-center gap-3 px-12 py-6 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all w-full sm:w-auto"
            >
              <BookOpen size={22} /> Currículo Lattes
            </a>
          </div>

          {/* BLOCO DE IDENTIDADE PROFISSIONAL (CRP AQUI) */}
          <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
            <div className="text-center md:text-left">
              <p className="text-slate-900 font-bold mb-1">
                Jenifer Nascimento
              </p>
              <p>Psicóloga • CRP 03/XXXXX</p>{" "}
              {/* <-- COLOQUE O NÚMERO DELA AQUI */}
            </div>

            <p className="hidden sm:block text-center">
              Salvador • Bahia • Brasil
            </p>

            <div className="flex items-center gap-2">
              <Sparkles size={12} className="text-emerald-500" />
              <span>Design & Psicologia</span>
            </div>
          </div>

          <p className="mt-8 text-[9px] text-slate-300 font-mono uppercase tracking-widest">
            © 2026 • Todos os direitos reservados
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
