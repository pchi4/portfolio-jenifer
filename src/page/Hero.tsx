import { profile } from "@/src/data/content";
import { MapPin, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="sobre"
      className="pt-40 pb-24 px-6 relative overflow-hidden bg-[#F9F5F1]"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B8860B]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B4513]/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[#8B4513]/10 border border-[#8B4513]/20 text-[#8B4513] text-[10px] font-bold uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
            Psicóloga Clínica & Pesquisadora | Salvador
          </div>

          <h1 className="text-6xl lg:text-8xl font-serif font-medium leading-[1.05] mb-8 text-[#1A1A1A]">
            Cuidado
            <br />
            <span className="italic text-[#8B4513] font-bold">
              em Saúde Mental
            </span>
          </h1>

          <p className="text-xl text-[#4A2C2A]/80 leading-relaxed max-w-xl mb-10 font-sans border-l-2 border-[#B8860B]/30 pl-6">
            {profile.summary}
          </p>

          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {profile.specialties.map((spec, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#F1ECE7] text-[#4A2C2A] text-[10px] font-bold uppercase tracking-widest rounded-lg border border-[#A45D3D]/10"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#experiencia"
              className="group flex items-center gap-3 bg-[#8B4513] text-[#F9F5F1] px-10 py-5 rounded-full font-bold hover:bg-[#1A1A1A] hover:shadow-2xl hover:shadow-[#8B4513]/20 transition-all duration-500"
            >
              Ver Trajetória
              <MoveRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </a>
            <a
              href="#contato"
              className="flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-[#A45D3D]/20 text-[#1A1A1A] px-10 py-5 rounded-full font-bold hover:bg-[#F9F5F1] transition-all"
            >
              Iniciar Conversa
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-[#B8860B]/40 rounded-tr-[3rem]" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-[#8B4513]/40 rounded-bl-[3rem]" />

          <div className="relative aspect-[4/5] bg-[#4A2C2A] rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(74,44,42,0.4)] group">
            <div className="absolute inset-0 bg-[#8B4513]/10 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent z-20 opacity-80" />

            <Image
              src="/jenifer-psi.jpeg"
              alt="Jenifer Nascimento"
              fill
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            <div className="absolute bottom-10 left-10 text-white z-30">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-2 flex items-center gap-2 text-[#D4AF37]">
                <MapPin size={14} /> Salvador, BA
              </p>
              <h2 className="text-4xl font-serif font-bold italic leading-none">
                {profile.name}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
