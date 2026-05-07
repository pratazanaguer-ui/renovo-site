"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ background: "#080808" }}>

      {/* Background glow — bottom center */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 800,
          height: 400,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(34,197,94,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Outer container */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 min-h-screen flex items-center">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full py-24">

          {/* LEFT — text */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
              🇧🇷 O app nº1 contra pornografia no Brasil
            </span>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white mb-6">
              <span className="text-green-400">Liberte-se</span> da
              <br />Pornografia.
              <br />Para Sempre.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg max-w-md mb-8 leading-relaxed">
              Mais de 10.000 brasileiros já retomaram o controle. O RENOVO
              oferece as ferramentas para você fazer o mesmo.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <Link
                href="#comecar"
                className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full text-base transition-all duration-200 text-center whitespace-nowrap"
              >
                Começar Agora — É Grátis
              </Link>
              <Link
                href="#como-funciona"
                className="border-2 border-green-500/50 hover:border-green-400 text-green-400 hover:text-green-300 px-8 py-4 rounded-full text-base transition-all duration-200 text-center whitespace-nowrap bg-transparent"
              >
                Ver como funciona
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-gray-400">4.9 de avaliação</span>
              </span>
              <span className="w-px h-4 bg-gray-700" />
              <span className="text-gray-400">10.000+ usuários ativos</span>
            </div>
          </motion.div>

          {/* RIGHT — phones */}
          <div className="relative flex items-center justify-center h-[500px] md:h-[600px]">

            {/* Glow behind phones */}
            <div className="absolute w-96 h-96 rounded-full bg-green-500/20 blur-[80px]" />

            {/* Left phone — desktop only */}
            <motion.div
              className="hidden md:block absolute left-0 bottom-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                transform: "rotate(-12deg) translateY(20px)",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.8))",
              }}
            >
              <img src="/mockup-welcome.png" alt="Tela de boas-vindas do RENOVO" width={200} />
            </motion.div>

            {/* Center phone */}
            <motion.div
              className="relative z-10 mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.img
                src="/mockup-dashboard.png"
                alt="Dashboard do RENOVO"
                width={260}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  filter: "drop-shadow(0 0 30px rgba(34,197,94,0.25)) drop-shadow(0 40px 60px rgba(0,0,0,0.9))",
                }}
              />
            </motion.div>

            {/* Right phone — desktop only */}
            <motion.div
              className="hidden md:block absolute right-0 bottom-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                transform: "rotate(12deg) translateY(20px)",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.8))",
              }}
            >
              <img src="/mockup-welcome.png" alt="Tela de boas-vindas do RENOVO" width={200} />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
