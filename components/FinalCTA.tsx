"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ backgroundColor: "#080808" }} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden px-8 py-16 md:py-20 text-center"
          style={{
            background: "linear-gradient(135deg, #0d1f12 0%, #071a0e 40%, #050f08 100%)",
            border: "1px solid rgba(34,197,94,0.18)",
            boxShadow: "0 0 80px rgba(34,197,94,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Background glow blobs */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: 0,
              background:
                "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(34,197,94,0.18) 0%, transparent 65%)",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              top: -60,
              left: "50%",
              transform: "translateX(-50%)",
              width: 400,
              height: 200,
              background: "radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Top shine */}
          <div
            className="absolute top-0 inset-x-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.4), transparent)" }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <p className="text-green-500 text-xs font-bold tracking-widest uppercase">
              COMECE HOJE
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-2xl">
              Torne-se a versão que{" "}
              <span className="text-green-400">você sempre foi</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
              Cada dia limpo é um tijolo. O RENOVO está aqui para que você não precise construir sozinho.
            </p>

            <p className="text-white/30 text-sm italic">
              "Os benefícios são reais. Confie no processo." — Time RENOVO
            </p>

            <motion.a
              href="#comecar"
              whileHover={{ scale: 1.05, boxShadow: "0 0 48px rgba(34,197,94,0.55)" }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-black font-black px-10 py-4 rounded-full text-base transition-colors duration-200"
              style={{ boxShadow: "0 0 32px rgba(34,197,94,0.4)" }}
            >
              Quero me libertar agora
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
