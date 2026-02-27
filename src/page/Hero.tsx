import { profile } from "@/src/data/content";
import { MapPin, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
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
              Ver Trajetória
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
  );
}
