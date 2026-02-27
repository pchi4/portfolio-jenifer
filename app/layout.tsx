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
  description: "Psicóloga graduada pela UFBA, pós-graduanda em Saúde Mental e Atenção Psicossocial. Atuação em Redução de Danos, Direitos Humanos e Políticas Públicas em Salvador, Bahia.",
  keywords: ["Psicóloga Salvador", "Saúde Mental", "Redução de Danos", "Jenifer Nascimento Psicologia", "UFBA", "Atenção Psicossocial"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${lora.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}