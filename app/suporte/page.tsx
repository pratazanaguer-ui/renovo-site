"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SuportePage() {
  return (
    <>
      <Navbar />
      <main
        style={{ backgroundColor: "#080808" }}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-32 text-center"
      >
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          Suporte
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
          Lamentamos que você esteja enfrentando dificuldades com o RENOVO. Nossa equipe está comprometida em te ajudar e vai resolver qualquer problema que você tiver.
        </p>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <a
            href="mailto:suporte@renovoapp.com.br"
            className="w-full py-4 rounded-full font-bold text-base text-black bg-white hover:bg-gray-100 transition-colors duration-200"
          >
            Enviar E-mail
          </a>

          <a
            href="mailto:suporte@renovoapp.com.br?subject=Cancelar%20Assinatura"
            className="w-full py-4 rounded-full font-bold text-base text-black transition-colors duration-200"
            style={{ background: "#22c55e" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#4ade80")}
            onMouseLeave={e => (e.currentTarget.style.background = "#22c55e")}
          >
            Cancelar Assinatura
          </a>

          <a
            href="mailto:suporte@renovoapp.com.br?subject=Solicitar%20Reembolso"
            className="w-full py-4 rounded-full font-bold text-base text-white transition-colors duration-200"
            style={{ background: "#7c3aed" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#6d28d9")}
            onMouseLeave={e => (e.currentTarget.style.background = "#7c3aed")}
          >
            Solicitar Reembolso
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
