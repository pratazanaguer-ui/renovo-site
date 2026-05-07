"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── Animated SVG icons ── */
function IconLightning() {
  return (
    <motion.svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      animate={{ filter: ["drop-shadow(0 0 3px #fbbf24)", "drop-shadow(0 0 14px #fbbf24)", "drop-shadow(0 0 3px #fbbf24)"] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M13 2L3 14h8l-1 8 11-12h-8z" fill="#fbbf24" />
    </motion.svg>
  );
}

function IconFire() {
  return (
    <motion.svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      animate={{ scaleY: [1, 1.12, 0.96, 1.06, 1], scaleX: [1, 0.96, 1.04, 0.98, 1] }}
      transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "50% 95%" }}
    >
      <path d="M12 2S6.5 7 6.5 13A5.5 5.5 0 0012 18.5 5.5 5.5 0 0017.5 13C17.5 10 16 8 16 8s-.6 2.5-2 2.5c-1.8 0-2-4.5-2-8.5z" fill="#f97316" />
      <path d="M12 14.5s-1.5 1-1.5 2.5a1.5 1.5 0 003 0c0-1.5-1.5-2.5-1.5-2.5z" fill="#fde68a" />
    </motion.svg>
  );
}

function IconTarget() {
  return (
    <motion.svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <motion.circle cx="12" cy="12" r="10" stroke="#60a5fa" strokeWidth="1.5"
        animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
      <circle cx="12" cy="12" r="6" stroke="#60a5fa" strokeWidth="1.5" />
      <motion.circle cx="12" cy="12" r="2.5" fill="#60a5fa"
        animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.6, repeat: Infinity }} />
    </motion.svg>
  );
}

function IconMoon() {
  return (
    <motion.svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      animate={{ filter: ["drop-shadow(0 0 2px #818cf8)", "drop-shadow(0 0 10px #818cf8)", "drop-shadow(0 0 2px #818cf8)"] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="#818cf8" />
      <motion.circle cx="17" cy="5" r="1" fill="#c7d2fe"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
      <motion.circle cx="19" cy="9" r="0.7" fill="#c7d2fe"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
    </motion.svg>
  );
}

function IconRocket() {
  return (
    <motion.svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" fill="#4ade80" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" fill="#22c55e" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" fill="#15803d" />
      <motion.path d="M11 13l-2 4" stroke="#fde68a" strokeWidth="1" strokeLinecap="round"
        animate={{ opacity: [0, 0.8, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
    </motion.svg>
  );
}

function IconShield() {
  return (
    <motion.svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M12 2L3 6.5v5C3 16.75 7 21.35 12 23c5-1.65 9-6.25 9-11.5v-5L12 2z" fill="#a855f7" />
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}

function IconBrain() {
  return (
    <motion.svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <motion.path
        d="M9.5 2A2.5 2.5 0 007 4.5v.05A4.5 4.5 0 003 9a4.5 4.5 0 003.5 4.4V15a2.5 2.5 0 002.5 2.5h2A2.5 2.5 0 0013.5 15v-1.6A4.5 4.5 0 0017 9a4.5 4.5 0 00-4-4.45V4.5A2.5 2.5 0 0010.5 2h-1z"
        stroke="#22d3ee" strokeWidth="1.4"
        animate={{ filter: ["drop-shadow(0 0 0px #22d3ee)", "drop-shadow(0 0 8px #22d3ee)", "drop-shadow(0 0 0px #22d3ee)"] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path d="M10 7v5M8 9h4" stroke="#22d3ee" strokeWidth="1.4" strokeLinecap="round"
        animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.8, repeat: Infinity }} />
    </motion.svg>
  );
}

function IconDumbbell() {
  return (
    <motion.svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      animate={{ rotate: [0, -8, 8, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x="2" y="10" width="3" height="4" rx="1" fill="#f59e0b" />
      <rect x="5" y="9" width="2" height="6" rx="0.5" fill="#f59e0b" />
      <rect x="7" y="11" width="10" height="2" rx="1" fill="#fcd34d" />
      <rect x="17" y="9" width="2" height="6" rx="0.5" fill="#f59e0b" />
      <rect x="19" y="10" width="3" height="4" rx="1" fill="#f59e0b" />
    </motion.svg>
  );
}

function IconHeart() {
  return (
    <motion.svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      animate={{ scale: [1, 1.18, 1, 1.1, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, times: [0, 0.15, 0.3, 0.45, 1] }}
    >
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="#f43f5e" />
    </motion.svg>
  );
}

function IconStar() {
  return (
    <motion.svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      animate={{
        rotate: [0, 20, -20, 10, 0],
        filter: ["drop-shadow(0 0 2px #fbbf24)", "drop-shadow(0 0 12px #fbbf24)", "drop-shadow(0 0 2px #fbbf24)"],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" fill="#fbbf24" strokeLinejoin="round" />
    </motion.svg>
  );
}

/* ── Benefits list ── */
const benefits = [
  { Icon: IconLightning, bg: "linear-gradient(135deg,#78350f,#3d1a03)", label: "Energia explosiva",     sub: "Vitalidade que multiplica a cada dia"         },
  { Icon: IconTarget,    bg: "linear-gradient(135deg,#1e3a5f,#0a1f3d)", label: "Foco inabalável",       sub: "Concentração que não quebra"                  },
  { Icon: IconFire,      bg: "linear-gradient(135deg,#7c1d04,#3d0e02)", label: "Testosterona em alta",  sub: "Hormônios equilibrados, força de volta"       },
  { Icon: IconHeart,     bg: "linear-gradient(135deg,#5b1238,#2d0a1e)", label: "Relacionamentos reais", sub: "Conexões mais profundas e genuínas"           },
  { Icon: IconMoon,      bg: "linear-gradient(135deg,#1e1b4b,#0d0a2e)", label: "Sono restaurador",      sub: "Descanso profundo e regenerativo"             },
  { Icon: IconBrain,     bg: "linear-gradient(135deg,#0c3344,#050f1a)", label: "Clareza mental",        sub: "Sem névoa, sem confusão, sem distração"       },
  { Icon: IconShield,    bg: "linear-gradient(135deg,#3b1060,#1a072e)", label: "Confiança renovada",    sub: "Presença que comanda respeito"                },
  { Icon: IconRocket,    bg: "linear-gradient(135deg,#052e16,#011a0c)", label: "Produtividade máxima",  sub: "Horas de foco sem esforço"                   },
  { Icon: IconDumbbell,  bg: "linear-gradient(135deg,#431407,#1c0803)", label: "Autocontrole total",    sub: "Você comanda seus impulsos"                  },
  { Icon: IconStar,      bg: "linear-gradient(135deg,#3d2a00,#1a1100)", label: "Motivação renovada",    sub: "Impulso para conquistar cada dia"            },
];

function BenefitCard({ b, active }: { b: (typeof benefits)[0]; active?: boolean }) {
  return (
    <div
      className="flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all"
      style={{
        background: active ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${active ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.05)"}`,
        boxShadow: active ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
      }}
    >
      {/* Icon box */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: b.bg }}
      >
        <b.Icon />
      </div>
      {/* Text */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className={`font-bold text-sm leading-tight ${active ? "text-white" : "text-white/70"}`}>
          {b.label}
        </span>
        <span className={`text-xs leading-snug ${active ? "text-white/50" : "text-white/25"}`}>
          {b.sub}
        </span>
      </div>
    </div>
  );
}

function ScrollingList() {
  const doubled = [...benefits, ...benefits];
  const itemH = 68; // px per card (including gap)
  const totalH = benefits.length * itemH;

  return (
    <>
      <style>{`
        @keyframes scrollBenefits {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-${totalH}px); }
        }
      `}</style>

      {/* Masked container */}
      <div
        className="relative overflow-hidden"
        style={{
          height: 360,
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 12%, black 28%, black 72%, rgba(0,0,0,0.6) 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 12%, black 28%, black 72%, rgba(0,0,0,0.6) 88%, transparent 100%)",
        }}
      >
        {/* Highlight bar for center item */}
        <div
          className="absolute inset-x-0 pointer-events-none z-10"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            height: itemH,
            background: "rgba(34,197,94,0.04)",
            borderTop: "1px solid rgba(34,197,94,0.1)",
            borderBottom: "1px solid rgba(34,197,94,0.1)",
          }}
        />

        {/* Scrolling track */}
        <div
          className="flex flex-col"
          style={{
            gap: 4,
            animation: `scrollBenefits ${benefits.length * 1.4}s linear infinite`,
          }}
        >
          {doubled.map((b, i) => (
            <BenefitCard key={i} b={b} active={false} />
          ))}
        </div>
      </div>
    </>
  );
}

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ backgroundColor: "#080808" }} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* ── LEFT: text ── */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <p className="text-green-500 text-xs font-bold tracking-widest uppercase">
              TRANSFORMAÇÃO
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Experimente o que a{" "}
              <span className="text-green-400">liberdade</span>{" "}
              traz
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Quando você abandona a pornografia, seu corpo e mente se reorganizam — e os resultados aparecem mais rápido do que você imagina.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { n: "72h", label: "primeiros ganhos" },
                { n: "30d", label: "transformação visível" },
                { n: "90d", label: "mudança permanente" },
              ].map((s) => (
                <div
                  key={s.n}
                  className="flex flex-col px-4 py-2.5 rounded-2xl"
                  style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.18)" }}
                >
                  <span className="text-green-400 font-black text-lg leading-none">{s.n}</span>
                  <span className="text-white/40 text-[11px] mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#comecar"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex self-start items-center gap-2.5 bg-green-500 hover:bg-green-400 text-black font-bold px-7 py-3.5 rounded-full text-sm transition-colors duration-200"
              style={{ boxShadow: "0 0 32px rgba(34,197,94,0.35)" }}
            >
              Quero me libertar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </motion.div>

          {/* ── RIGHT: scrolling list ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <ScrollingList />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
