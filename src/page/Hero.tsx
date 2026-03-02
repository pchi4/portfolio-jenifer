import { profile } from "@/src/data/content";
import { MapPin, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="sobre" className="pt-40 pb-24 px-6 relative overflow-hidden">
      {/* BLOB DE FUNDO - Agora em tom de Argila Suave */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A45D3D]/5 rounded-full blur-3xl opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          {/* BADGE - Terracota e Ouro */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-[#8B4513]/5 border border-[#8B4513]/10 text-[#8B4513] text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
            Psicóloga | CRP Ativo
          </div>

          <h1 className="text-6xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8 text-[#1A1A1A]">
            Cuidado com <br />
            <span className="italic text-[#8B4513]">propósito social.</span>
          </h1>

          <p className="text-xl text-[#4A2C2A]/80 leading-relaxed max-w-xl mb-10 font-sans">
            {profile.summary}
          </p>

          {/* ESPECIALIDADES - Tons de Barro e Areia */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {profile.specialties.map((spec, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#F9F5F1] text-[#8B4513] text-xs font-bold rounded-xl border border-[#A45D3D]/20"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#experiencia"
              className="group flex items-center gap-2 bg-[#8B4513] text-[#F9F5F1] px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-[#8B4513]/30 transition-all"
            >
              Ver Trajetória
              <MoveRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="mailto:email@exemplo.com"
              className="flex items-center gap-2 bg-white border border-[#A45D3D]/20 text-[#8B4513] px-8 py-4 rounded-full font-bold hover:bg-[#F9F5F1] transition-all"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="relative group">
          {/* Moldura Decorativa - Agora em Ouro Dendê suave */}
          <div className="absolute -inset-4 border border-[#B8860B]/20 rounded-[2.5rem] -z-10 group-hover:inset-0 transition-all duration-500" />

          <div className="aspect-[4/5] bg-[#4A2C2A] rounded-[2rem] overflow-hidden relative shadow-2xl">
            {/* Camada de Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 opacity-90" />

            <Image
              src="/jenifer.jpeg"
              alt="Jenifer Nascimento"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-8 left-8 text-white z-20">
              <p className="text-xs font-mono opacity-80 uppercase tracking-[0.2em] mb-1 flex items-center gap-2 text-[#D4AF37]">
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
  );
}
