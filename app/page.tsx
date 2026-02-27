"use client";

import { profile } from "@/src/data/content";
import About from "@/src/page/About";
import { EducationSection } from "@/src/page/Education";
import Experience from "@/src/page/Experince";
import Hero from "@/src/page/Hero";
import ProjectsSection from "@/src/page/Projects";
import ValuesSection from "@/src/page/Values";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  BookOpen,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";
import { useState } from "react";

export default function ProfessionalPortfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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
      <Hero />

      {/* VALORES */}
      <ValuesSection />

      {/* EXPERIÊNCIA - GRID PROFISSIONAL */}
      <Experience />

      {/* FORMAÇÃO E CERTIFICAÇÕES - LAYOUT "CLEAN CARD" */}
      <EducationSection />

      {/* GALERIA DE EXTENSÃO - LADO HUMANO E VISUAL */}

      <ProjectsSection />
      {/* SEÇÃO ABORDAGEM TÉCNICA */}

      <About />

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
