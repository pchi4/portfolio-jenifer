import { profile, experiences } from "@/src/data/content";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* HEADER / HERO */}
      <section className="max-w-4xl mx-auto pt-20 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 mb-4">
          {profile.name}
        </h1>
        <p className="text-xl text-emerald-700 font-medium mb-6">{profile.role}</p>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {profile.summary}
        </p>
      </section>

      {/* EXPERIÊNCIAS */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold border-b-2 border-emerald-100 pb-2 mb-8 text-emerald-900">
          Experiência Profissional
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative pl-8 border-l-2 border-slate-200 hover:border-emerald-500 transition-colors">
              <div className="absolute w-3 h-3 bg-slate-200 rounded-full -left-[7.5px] top-1.5 group-hover:bg-emerald-500 transition-colors" />
              <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
                {exp.period}
              </span>
              <h3 className="text-xl font-bold text-slate-800 mt-1">{exp.title}</h3>
              <p className="text-slate-500 font-medium mb-3">{exp.company}</p>
              <p className="text-slate-600 leading-relaxed text-md">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RODAPÉ SIMPLES */}
      <footer className="text-center py-12 text-slate-400 text-sm">
        © 2026 • Desenvolvido com carinho para {profile.name}
      </footer>
    </main>
  );
}