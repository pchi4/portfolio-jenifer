import { Linkedin, Mail } from "lucide-react";

export default function Footer(){

    return(
        <footer className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Vamos nos conectar?</h2>
          <p className="text-slate-600 mb-8">
            Estou em busca de novas oportunidades e parcerias em Salvador e região.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:seu-email@exemplo.com" className="flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200">
              <Mail size={18} /> E-mail
            </a>
            <a href="https://linkedin.com/in/jenifer-nascimento" target="_blank" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition shadow-lg shadow-slate-200">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    )
}