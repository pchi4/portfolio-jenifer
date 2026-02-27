import { Briefcase } from "lucide-react";
import { experiences } from "../data/content";

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-10 flex items-center gap-3">
        <Briefcase className="text-emerald-600" /> Experiência Profissional
      </h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-2 border-slate-200 group hover:border-emerald-500 transition-colors"
          >
            <div className="absolute w-4 h-4 bg-white border-2 border-slate-300 rounded-full -left-[9px] top-1 group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-all" />

            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
              {exp.period}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              {exp.title}
            </h3>
            <p className="text-slate-500 font-medium mb-4">{exp.company}</p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded uppercase font-bold tracking-tighter"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
