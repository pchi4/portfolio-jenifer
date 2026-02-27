import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "../data/content";

export function EducationSection() {
  return (
<section className="bg-slate-100 py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Educação */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <GraduationCap className="text-emerald-600" /> Formação
            </h2>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
                  <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                  <p className="text-sm text-emerald-700">{edu.institution}</p>
                  <p className="text-xs text-slate-400 mt-1">{edu.period} • {edu.status}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificados */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Award className="text-emerald-600" /> Certificações
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {certifications.slice(0, 6).map((cert, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-slate-200">
                  <div className="min-w-[8px] h-2 w-2 rounded-full bg-emerald-400" />
                  <div className="overflow-hidden">
                    <p className="text-sm font-bold text-slate-800 truncate">{cert.title}</p>
                    <p className="text-[10px] text-slate-500 uppercase">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
  );
}