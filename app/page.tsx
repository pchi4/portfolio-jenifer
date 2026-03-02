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
      sessionStorage.setItem("pode_acessar_obrigado", "true");

      window.location.href = "/obrigado";
    } else {
      alert("Ops! Houve um erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div className="bg-[#F9F5F1] min-h-screen selection:bg-[#B8860B]/30 selection:text-[#8B4513]">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#B8860B] origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* NAVBAR MINIMALISTA */}
      <nav className="fixed top-6 w-full z-[100] px-4">
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl border border-[#B8860B]/10 shadow-[0_8px_32px_rgba(139,69,19,0.08)] rounded-full px-6 h-16 flex items-center justify-between gap-4">
          <a
            href="#sobre"
            className="flex items-center gap-2 group transition-all"
          >
            {/* LOGO EM TERRACOTA */}
            <div className="w-8 h-8 bg-[#8B4513] rounded-full flex items-center justify-center text-[#F9F5F1] font-serif italic font-bold text-sm group-hover:rotate-12 transition-transform shadow-md shadow-brand-earth/20">
              J
            </div>
            <span className="font-serif font-bold text-sm sm:text-base tracking-tight text-[#1A1A1A]">
              <span className="md:hidden">Nascimento</span>
              <span className="hidden md:inline">{profile.name}</span>
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <a
              href="#sobre"
              className="hover:text-[#8B4513] transition-all relative group"
            >
              Sobre
              {/* UNDERLINE EM OURO */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B8860B] transition-all group-hover:w-full" />
            </a>
            <a
              href="#experiencia"
              className="hover:text-[#8B4513] transition-all relative group"
            >
              Trajetória
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B8860B] transition-all group-hover:w-full" />
            </a>
            <a
              href="#producao"
              className="hover:text-[#8B4513] transition-all relative group"
            >
              Produção
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B8860B] transition-all group-hover:w-full" />
            </a>
          </div>

          <div className="flex sm:hidden items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#sobre">Sobre</a>
            <a href="#producao">Produção</a>
          </div>

          <a
            href="#contato"
            className="bg-[#8B4513] text-[#F9F5F1] px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-[#6D360F] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#8B4513]/20 whitespace-nowrap"
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
        className="relative py-32 bg-[#F9F5F1] border-t border-[#B8860B]/10 px-6 overflow-hidden"
      >
        {/* Decor de fundo em tom Argila/Ouro */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#B8860B]/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] text-[#1A1A1A]">
              Vamos construir uma escuta que faça sentido para o{" "}
              <span className="italic text-[#8B4513]">seu território?</span>
            </h2>
            <p className="text-[#4A2C2A]/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-sans">
              Disponível para colaborações em projetos de impacto social,
              pesquisa acadêmica e clínica psicanalítica em Salvador.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* BOTÃO CONTATO - TERRACOTA */}
              <button
                onClick={() => setIsOpen(true)}
                className="group flex items-center justify-center gap-3 px-10 py-5 bg-[#8B4513] text-[#F9F5F1] rounded-full font-bold text-base hover:bg-[#6D360F] hover:shadow-[0_20px_40px_rgba(139,69,19,0.2)] transition-all duration-500 w-full sm:w-auto"
              >
                <Mail
                  size={20}
                  className="group-hover:-rotate-12 transition-transform"
                />
                Iniciar Conversa
              </button>

              <a
                href="http://lattes.cnpq.br/xxxxxxxx"
                target="_blank"
                className="flex items-center justify-center gap-3 px-10 py-5 bg-white border border-[#B8860B]/20 rounded-full font-bold text-base hover:bg-[#F9F5F1] transition-all w-full sm:w-auto shadow-sm text-[#8B4513]"
              >
                <BookOpen size={20} className="text-[#B8860B]" />
                Currículo Lattes
              </a>
            </div>
          </div>

          {/* Informações de Rodapé */}
          <div className="grid md:grid-cols-4 gap-12 pt-20 border-t border-[#B8860B]/10">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  {profile.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#B8860B] font-bold mt-2">
                  Psicóloga & Pesquisadora
                </p>
              </div>
              <p className="text-sm text-[#4A2C2A]/70 max-w-xs leading-relaxed font-sans">
                Prática clínica e social pautada na ética, no território e na
                escuta das subjetividades contemporâneas.
              </p>
              <div className="flex items-center gap-4 pt-4 text-[#A45D3D]/50">
                <a
                  href="https://www.linkedin.com/in/jenifer-nascimento-41bb4b229/"
                  target="_blank"
                  className="hover:text-[#8B4513] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-[#8B4513] transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A] font-bold">
                Navegação
              </h4>
              <ul className="space-y-4 text-sm text-[#4A2C2A]/70 font-sans font-medium">
                <li>
                  <a
                    href="#sobre"
                    className="hover:text-[#8B4513] transition-colors"
                  >
                    Sobre mim
                  </a>
                </li>
                <li>
                  <a
                    href="#experiencia"
                    className="hover:text-[#8B4513] transition-colors"
                  >
                    Trajetória
                  </a>
                </li>
                <li>
                  <a
                    href="#producao"
                    className="hover:text-[#8B4513] transition-colors"
                  >
                    Produção Científica
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A] font-bold">
                Registro & Local
              </h4>
              <div className="text-sm text-[#4A2C2A]/70 space-y-2 font-sans">
                <p className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#B8860B]" />
                  CRP 03/XXXXX
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#B8860B]" />
                  Salvador, Bahia
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MODAL DE CONTATO AFROCENTRADO */}
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-2xl bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-[#B8860B]/10"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-8 right-8 p-3 hover:bg-[#F9F5F1] rounded-full transition-colors text-[#A45D3D]"
                >
                  <X size={24} />
                </button>

                <div className="p-10 md:p-16">
                  <div className="flex items-center gap-3 mb-8 text-[#8B4513]">
                    <MessageCircle size={20} />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
                      Formulário de Contato
                    </span>
                  </div>

                  <h3 className="text-3xl font-serif mb-10 text-[#1A1A1A]">
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
                        <label className="text-[10px] font-bold text-[#A45D3D] uppercase ml-1">
                          Nome
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-6 py-4 bg-[#F9F5F1] border-none rounded-2xl focus:ring-2 focus:ring-[#B8860B]/20 transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-[#A45D3D] uppercase ml-1">
                          E-mail
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-6 py-4 bg-[#F9F5F1] border-none rounded-2xl focus:ring-2 focus:ring-[#B8860B]/20 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#A45D3D] uppercase ml-1">
                        Finalidade
                      </label>
                      <select
                        name="subject"
                        className="w-full px-6 py-4 bg-[#F9F5F1] border-none rounded-2xl focus:ring-2 focus:ring-[#B8860B]/20 transition-all text-[#4A2C2A] outline-none"
                      >
                        <option>Pesquisa & Acadêmico</option>
                        <option>Atendimento Clínico</option>
                        <option>Projetos Sociais</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#A45D3D] uppercase ml-1">
                        Mensagem
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full px-6 py-4 bg-[#F9F5F1] border-none rounded-2xl focus:ring-2 focus:ring-[#B8860B]/20 transition-all resize-none outline-none"
                      ></textarea>
                    </div>

                    <button className="w-full bg-[#8B4513] text-[#F9F5F1] py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#6D360F] transition-all shadow-lg shadow-[#8B4513]/20">
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
