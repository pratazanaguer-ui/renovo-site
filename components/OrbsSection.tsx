"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const orbs = [
  { name: "Faísca",        days: "1d",   glow: "#94a3b8", dayColor: "#94a3b8", gradient: "radial-gradient(circle at 38% 30%, #f8fafc 0%, #cbd5e1 30%, #64748b 65%, #1e293b 100%)" },
  { name: "Brasa",         days: "3d",   glow: "#ef4444", dayColor: "#f87171", gradient: "radial-gradient(circle at 38% 30%, #fee2e2 0%, #fca5a5 28%, #dc2626 62%, #7f1d1d 100%)" },
  { name: "Despertar",     days: "7d",   glow: "#14b8a6", dayColor: "#2dd4bf", gradient: "radial-gradient(circle at 38% 30%, #ccfbf1 0%, #5eead4 28%, #0d9488 62%, #134e4a 100%)" },
  { name: "Raízes",        days: "14d",  glow: "#38bdf8", dayColor: "#38bdf8", gradient: "radial-gradient(circle at 38% 30%, #e0f2fe 0%, #7dd3fc 28%, #0284c7 62%, #0c4a6e 100%)" },
  { name: "Sentinela",     days: "21d",  glow: "#a855f7", dayColor: "#c084fc", gradient: "radial-gradient(circle at 38% 30%, #fae8ff 0%, #e879f9 28%, #a855f7 62%, #581c87 100%)" },
  { name: "Guerreiro",     days: "30d",  glow: "#f59e0b", dayColor: "#fbbf24", gradient: "radial-gradient(circle at 38% 30%, #fefce8 0%, #fde047 28%, #d97706 62%, #78350f 100%)" },
  { name: "Fortaleza",     days: "45d",  glow: "#f97316", dayColor: "#fb923c", gradient: "radial-gradient(circle at 38% 30%, #ffedd5 0%, #fdba74 28%, #ea580c 62%, #7c2d12 100%)" },
  { name: "Conquistador",  days: "60d",  glow: "#22c55e", dayColor: "#4ade80", gradient: "radial-gradient(circle at 38% 30%, #dcfce7 0%, #86efac 28%, #16a34a 62%, #14532d 100%)" },
  { name: "Mestre",        days: "90d",  glow: "#3b82f6", dayColor: "#60a5fa", gradient: "radial-gradient(circle at 38% 30%, #dbeafe 0%, #93c5fd 28%, #2563eb 62%, #1e3a8a 100%)" },
  { name: "Soberano",      days: "120d", glow: "#8b5cf6", dayColor: "#a78bfa", gradient: "radial-gradient(circle at 38% 30%, #ede9fe 0%, #c4b5fd 28%, #7c3aed 62%, #3b0764 100%)" },
  { name: "Titânico",      days: "180d", glow: "#7c3aed", dayColor: "#a78bfa", gradient: "radial-gradient(circle at 38% 30%, #ddd6fe 0%, #a78bfa 28%, #6d28d9 62%, #2e1065 100%)" },
  { name: "Lenda",         days: "240d", glow: "#ec4899", dayColor: "#f472b6", gradient: "radial-gradient(circle at 38% 30%, #fce7f3 0%, #f9a8d4 28%, #db2777 62%, #831843 100%)" },
  { name: "Ascendente",    days: "300d", glow: "#06b6d4", dayColor: "#22d3ee", gradient: "radial-gradient(circle at 38% 30%, #cffafe 0%, #67e8f9 28%, #0891b2 62%, #164e63 100%)" },
  { name: "Imortal",       days: "365d", glow: "#eab308", dayColor: "#facc15", gradient: "radial-gradient(circle at 38% 30%, #fefce8 0%, #fde047 28%, #ca8a04 62%, #713f12 100%)" },
  { name: "Transcendente", days: "540d", glow: "#d946ef", dayColor: "#e879f9", gradient: "radial-gradient(circle at 38% 30%, #fae8ff 0%, #f0abfc 28%, #c026d3 62%, #701a75 100%)" },
  { name: "Eterno",        days: "730d", glow: "#f59e0b", dayColor: "#fcd34d", gradient: "radial-gradient(circle at 38% 30%, #fffbeb 0%, #fcd34d 28%, #b45309 62%, #451a03 100%)" },
];

function OrbCard({ orb }: { orb: typeof orbs[0] }) {
  return (
    <div
      className="group flex flex-col items-center gap-4 flex-shrink-0"
      style={{
        width: 176,
        padding: "28px 16px 22px",
        borderRadius: 24,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        cursor: "default",
        transition: "border-color 0.3s, background 0.3s",
      }}
    >
      {/* Orb sphere */}
      <div className="relative flex-shrink-0" style={{ width: 108, height: 108 }}>

        {/* Colored blur glow behind */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%", left: "50%",
            width: 140, height: 140,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: orb.glow,
            filter: "blur(30px)",
            opacity: 0.5,
          }}
        />

        {/* Outer ring — slow CW */}
        <svg
          viewBox="0 0 148 148"
          style={{
            position: "absolute",
            width: 148, height: 148,
            top: "50%", left: "50%",
            animation: "orb-cw 11s linear infinite",
            pointerEvents: "none",
          }}
        >
          <circle cx="74" cy="74" r="69" fill="none" stroke={orb.glow} strokeWidth="1" strokeDasharray="14 12" strokeOpacity="0.3" />
        </svg>

        {/* Inner ring — faster CCW */}
        <svg
          viewBox="0 0 132 132"
          style={{
            position: "absolute",
            width: 132, height: 132,
            top: "50%", left: "50%",
            animation: "orb-ccw 7s linear infinite",
            pointerEvents: "none",
          }}
        >
          <circle cx="66" cy="66" r="61" fill="none" stroke={orb.glow} strokeWidth="0.8" strokeDasharray="6 18" strokeOpacity="0.2" />
        </svg>

        {/* Sphere */}
        <div
          className="absolute inset-0 rounded-full transition-transform duration-300 group-hover:scale-105"
          style={{
            background: orb.gradient,
            boxShadow: `0 8px 32px ${orb.glow}77, 0 2px 8px ${orb.glow}44, inset -4px -4px 12px rgba(0,0,0,0.4), inset 2px 2px 6px rgba(255,255,255,0.18)`,
          }}
        />
        {/* Specular highlight */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "11%", left: "19%",
            width: "34%", height: "27%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.72) 0%, transparent 70%)",
            filter: "blur(1.5px)",
          }}
        />
        {/* Sparkle icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L13.6 9.6L21 12L13.6 14.4L12 22L10.4 14.4L3 12L10.4 9.6Z"
              fill="white"
              fillOpacity={0.88}
            />
          </svg>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-white font-bold text-sm text-center leading-tight">{orb.name}</span>
        <span className="font-bold text-xs" style={{ color: orb.dayColor }}>{orb.days}</span>
      </div>
    </div>
  );
}

export default function OrbsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true, margin: "-60px" });

  const doubled = [...orbs, ...orbs];

  return (
    <section style={{ backgroundColor: "#080808" }} className="py-32 overflow-hidden">

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .orbs-track {
          animation: marquee 48s linear infinite;
        }
        .orbs-track:hover {
          animation-play-state: paused;
        }
        @keyframes orb-cw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes orb-ccw {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(-360deg); }
        }
      `}</style>

      {/* Header */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-14 px-6"
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <span className="text-white/50 text-xs font-bold tracking-widest uppercase">Conquistas</span>
        </div>

        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5"
          style={{ letterSpacing: "-0.03em" }}
        >
          Desbloqueie{" "}
          <span className="text-green-400">
            orbes únicas
          </span>
        </h2>

        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Cada dia limpo é uma conquista real. Ao longo da sua jornada, você desbloqueia 16 orbes — cada uma representa um nível de liberdade que você alcançou.
        </p>
      </motion.div>

      {/* Infinite marquee */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: 120, background: "linear-gradient(to right, #080808, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: 120, background: "linear-gradient(to left, #080808, transparent)" }}
        />

        <div className="overflow-hidden">
          <div className="orbs-track flex gap-5 w-max px-6">
            {doubled.map((orb, i) => (
              <OrbCard key={i} orb={orb} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-center mt-10 px-6"
        style={{ color: "rgba(255,255,255,0.18)", fontSize: 12 }}
      >
        730 dias. 16 orbes. Uma jornada de liberdade.
      </motion.p>
    </section>
  );
}
