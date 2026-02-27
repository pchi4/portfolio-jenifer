import { certifications } from "@/src/data/content";
import { Award, ShieldCheck, GraduationCap } from "lucide-react"; // Se não tiver, pode usar emojis 🎓

export default function CertificationsSection() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-bold border-b-2 border-emerald-100 pb-2 mb-8 text-emerald-900 flex items-center gap-2">
        <Award className="text-emerald-600" /> Certificações e Formação Complementar
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
          >
            <div className="bg-emerald-50 p-2 rounded-lg">
              <ShieldCheck className="text-emerald-600 w-5 h-5" />
            </div>
            
            <div>
              <h3 className="font-bold text-slate-800 leading-tight text-sm md:text-base">
                {cert.title}
              </h3>
              <p className="text-emerald-700 text-xs font-medium mt-1 uppercase tracking-wide">
                {cert.issuer} • {cert.date}
              </p>
              {cert.code && (
                <p className="text-[10px] text-slate-400 mt-2 font-mono break-all">
                  Cod: {cert.code}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}