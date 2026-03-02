"use client";
import Link from "next/link";
import { CheckCircle2, MoveLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ObrigadoPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const ticket = sessionStorage.getItem("pode_acessar_obrigado");

    if (!ticket) {
      router.replace("/");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) return null;

  return (
    <main className="min-h-screen bg-[#F9F5F1] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 bg-[#B8860B]/10 text-[#B8860B] rounded-3xl flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 size={40} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-serif text-[#1A1A1A] mb-4"
        >
          Mensagem <span className="italic text-[#8B4513]">enviada!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[#4A2C2A]/70 mb-10 leading-relaxed font-sans"
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
            className="inline-flex items-center gap-2 text-[#8B4513] font-bold hover:gap-4 transition-all uppercase text-xs tracking-widest"
          >
            <MoveLeft size={20} />
            Voltar para o site
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
