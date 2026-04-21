import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Jenifer Nascimento | Psicóloga Clínica e Social em Salvador",
  description:
    "Psicóloga graduada pela UFBA, pós-graduanda em Saúde Mental e Atenção Psicossocial. Atuação em Redução de Danos, Direitos Humanos e Políticas Públicas em Salvador, Bahia.",
  keywords: [
    "Psicóloga Salvador",
    "Saúde Mental",
    "Saúde Coletiva",
    "Redução de Danos",
    "Jenifer Nascimento Psicologia",
    "UFBA",
    "Atenção Psicossocial",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html lang="pt-br" className="scroll-smooth">
      <body className="bg-[#F9F5F1] text-[#1A1A1A] antialiased">
        {children}
      </body>
    </html>
  );
}
