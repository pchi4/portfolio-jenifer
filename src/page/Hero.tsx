import { profile } from "@/src/data/content";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-slate-50 pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge de Disponibilidade */}
        <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Disponível para Oportunidades
        </span>
        
        <h1 className="mt-6 text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
          {profile.name} <span className="text-xl font-normal text-slate-400">({profile.pronouns})</span>
        </h1>
        
        <p className="mt-4 text-lg md:text-xl text-emerald-700 font-medium max-w-2xl mx-auto">
          {profile.role}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {profile.specialties.map(skill => (
            <span key={skill} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 shadow-sm">
              {skill}
            </span>
          ))}
        </div>

        <p className="mt-10 text-slate-600 leading-relaxed max-w-3xl mx-auto text-lg italic">
          "{profile.summary}"
        </p>
      </div>
    </section>
  );
}