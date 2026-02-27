"use client";
import Link from "next/link";
import { CheckCircle2, MoveLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF9] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 size={40} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-serif text-slate-900 mb-4"
        >
          Mensagem enviada!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-500 mb-10 leading-relaxed"
        >
          Agradeço pelo contato. Em breve retornarei sua mensagem para darmos
          continuidade a essa conversa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#2D4F43] font-bold hover:gap-4 transition-all"
          >
            <MoveLeft size={20} />
            Voltar para o site
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
