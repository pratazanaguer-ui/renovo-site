"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ── Side orb levels ── */
const sideOrbs = [
  { name: "Faísca",    days: "1d",  gradient: "radial-gradient(circle at 35% 35%, #e5e7eb 0%, #9ca3af 55%, #4b5563 100%)", glow: "#9ca3af80", size: 28, pos: { bottom: "28%", left: "8%"  } },
  { name: "Guerreiro", days: "30d", gradient: "radial-gradient(circle at 35% 35%, #fca5a5 0%, #ef4444 55%, #991b1b 100%)", glow: "#ef444480", size: 36, pos: { top: "30%",    left: "6%"  } },
  { name: "Mestre",    days: "90d", gradient: "radial-gradient(circle at 35% 35%, #86efac 0%, #22c55e 55%, #14532d 100%)", glow: "#22c55e80", size: 36, pos: { top: "30%",    right: "6%" } },
  { name: "Lenda",     days: "365d",gradient: "radial-gradient(circle at 35% 35%, #fde68a 0%, #f59e0b 55%, #92400e 100%)", glow: "#f59e0b80", size: 28, pos: { bottom: "28%", right: "8%" } },
];

function OrbIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L13.6 9.6L21 12L13.6 14.4L12 22L10.4 14.4L3 12L10.4 9.6Z" fill="white" fillOpacity={0.9}/>
    </svg>
  );
}

function StreakScreen() {
  return (
    <div className="absolute inset-0 overflow-hidden flex flex-col items-center"
      style={{ background: "linear-gradient(170deg, #07050f 0%, #050310 60%, #080808 100%)" }}>

      {/* Ambient glow pools */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", top: "18%", left: "50%", transform: "translateX(-50%)",
          width: 240, height: 240,
          background: "radial-gradient(ellipse, rgba(168,85,247,0.24) 0%, transparent 70%)",
          filter: "blur(35px)" }} />
        <div style={{ position: "absolute", bottom: "12%", left: "28%",
          width: 110, height: 110,
          background: "radial-gradient(ellipse, rgba(59,130,246,0.14) 0%, transparent 70%)",
          filter: "blur(22px)" }} />
        <div style={{ position: "absolute", bottom: "12%", right: "22%",
          width: 110, height: 110,
          background: "radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 70%)",
          filter: "blur(22px)" }} />
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2,
            background: i % 2 === 0 ? "#a855f7" : "#c084fc",
            left: `${15 + (i * 11) % 70}%`, bottom: "5%", opacity: 0.6,
          }}
          animate={{ y: [0, -180 - i * 20], opacity: [0, 0.8, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
        />
      ))}

      {/* SEQUÊNCIA ATIVA chip */}
      <div className="relative z-10 mt-14 flex items-center gap-2 px-4 py-2 rounded-full"
        style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.3)" }}>
        <motion.div className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#c084fc" }}
          animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <span className="font-bold tracking-widest uppercase" style={{ color: "#c084fc", fontSize: 10 }}>Sequência Ativa</span>
      </div>

      {/* Side level orbs */}
      {sideOrbs.map((orb) => (
        <div key={orb.name} className="absolute z-10 flex flex-col items-center gap-1" style={orb.pos as React.CSSProperties}>
          <div style={{ filter: `drop-shadow(0 0 6px ${orb.glow})`, opacity: 0.75 }}>
            <div style={{ width: orb.size, height: orb.size, borderRadius: "50%", background: orb.gradient, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <OrbIcon size={Math.round(orb.size * 0.52)} />
            </div>
          </div>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 8, fontWeight: 700, letterSpacing: "0.05em" }}>{orb.name}</span>
          <span style={{ color: "rgba(255,255,255,0.28)", fontSize: 7 }}>{orb.days}</span>
        </div>
      ))}

      {/* Main Sentinela orb */}
      <div className="relative z-10 flex flex-col items-center mt-4">
        {/* Outer rotating ring */}
        <div className="absolute" style={{ width: 140, height: 140, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
          <motion.div className="w-full h-full rounded-full"
            animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{ border: "1px dashed rgba(168,85,247,0.22)" }} />
        </div>
        <div className="absolute" style={{ width: 112, height: 112, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
          <motion.div className="w-full h-full rounded-full"
            animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ border: "1px dashed rgba(168,85,247,0.12)" }} />
        </div>

        {/* The orb itself */}
        <motion.div
          animate={{ filter: [
            "drop-shadow(0 0 12px #a855f7) drop-shadow(0 0 32px rgba(168,85,247,0.55))",
            "drop-shadow(0 0 22px #a855f7) drop-shadow(0 0 60px rgba(168,85,247,0.75))",
            "drop-shadow(0 0 12px #a855f7) drop-shadow(0 0 32px rgba(168,85,247,0.55))",
          ]}}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 96, height: 96, borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #f0abfc 0%, #c084fc 40%, #7e22ce 75%, #3b0764 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <OrbIcon size={44} />
        </motion.div>

        {/* Badge */}
        <div className="mt-3 px-5 py-1.5 rounded-full"
          style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.38)" }}>
          <span className="font-black tracking-widest uppercase" style={{ color: "#c084fc", fontSize: 11 }}>Sentinela</span>
        </div>
      </div>

      {/* Counter */}
      <div className="relative z-10 flex flex-col items-center mt-4 gap-0.5">
        <div className="flex items-end gap-1 leading-none">
          <span className="text-white font-black" style={{ fontSize: 52, lineHeight: 1 }}>22</span>
          <span className="font-semibold mb-2" style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>dias limpos</span>
        </div>
      </div>

      {/* Progress to next level */}
      <div className="relative z-10 w-4/5 mt-3 flex flex-col gap-1.5">
        <div className="flex justify-between" style={{ fontSize: 9 }}>
          <span style={{ color: "rgba(192,132,252,0.6)" }}>Sentinela</span>
          <span style={{ color: "rgba(251,191,36,0.75)" }}>Guerreiro em 8d</span>
        </div>
        <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
          <motion.div className="h-full rounded-full"
            initial={{ width: "0%" }} animate={{ width: "30%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            style={{ background: "linear-gradient(90deg, #a855f7, #c084fc)" }} />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none z-20"
        style={{ background: "linear-gradient(to bottom, transparent, #080808)" }} />
    </div>
  );
}

/* ── Community screen for step 2 ── */
const communityPosts = [
  {
    user: "Gabriel C.", streak: "67d limpo", color: "#22c55e",
    title: "67 dias e sem olhar pra trás",
    body: "Nunca me senti mais eu mesmo. A libido voltou, o foco voltou, minha namorada percebeu a diferença sem eu dizer nada.",
    tag: "Conquista", tagColor: "#22c55e",
    likes: 84,
  },
  {
    user: "Matheus R.", streak: "21d limpo", color: "#f59e0b",
    title: "Passei dos 21 dias!",
    body: "Nunca tinha chegado tão longe. Cada vez que quero desistir, abro os posts aqui e lembro que não estou sozinho.",
    tag: "Vitória", tagColor: "#f59e0b",
    likes: 52,
  },
  {
    user: "Bruno A.", streak: "9d limpo", color: "#60a5fa",
    title: "Recaí, mas voltei.",
    body: "Desta vez sei exatamente o que me derrubou. Não vou deixar acontecer de novo. Obrigado pelo apoio de todos.",
    tag: "Recomeço", tagColor: "#60a5fa",
    likes: 37,
  },
];

function CommunityScreen() {
  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{ background: "linear-gradient(170deg, #06100a 0%, #040804 60%, #080808 100%)" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-14 pb-3">
        <span className="text-white/80 text-xs font-black tracking-wider uppercase">Comunidade</span>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-[9px] font-bold">912 ativos</span>
        </div>
      </div>

      {/* Fan of cards */}
      <div className="relative flex-1 flex items-center justify-center" style={{ marginTop: -8 }}>

        {/* Left card */}
        <div
          className="absolute rounded-2xl p-3 flex flex-col gap-1.5 overflow-hidden"
          style={{
            width: 170, background: "#111a14",
            border: "1px solid rgba(255,255,255,0.10)",
            transform: "rotate(-7deg) translateX(-68px) translateY(8px) scale(0.88)",
            transformOrigin: "bottom center",
            boxShadow: "0 8px 32px rgba(0,0,0,0.8)",
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
              style={{ background: `${communityPosts[1].color}33`, border: `1px solid ${communityPosts[1].color}66` }}>
              {communityPosts[1].user[0]}
            </div>
            <div>
              <p className="text-white/80 text-[10px] font-bold leading-none">{communityPosts[1].user}</p>
              <p className="text-[9px] font-semibold" style={{ color: communityPosts[1].color }}>{communityPosts[1].streak}</p>
            </div>
          </div>
          <p className="text-white font-black text-xs leading-tight">{communityPosts[1].title}</p>
          <p className="text-white/40 text-[9px] leading-snug line-clamp-2">{communityPosts[1].body}</p>
          <span className="self-start text-[8px] font-bold px-2 py-0.5 rounded-full mt-0.5"
            style={{ background: `${communityPosts[1].tagColor}22`, color: communityPosts[1].tagColor }}>
            ★ {communityPosts[1].tag}
          </span>
        </div>

        {/* Right card */}
        <div
          className="absolute rounded-2xl p-3 flex flex-col gap-1.5 overflow-hidden"
          style={{
            width: 170, background: "#111a14",
            border: "1px solid rgba(255,255,255,0.10)",
            transform: "rotate(7deg) translateX(68px) translateY(8px) scale(0.88)",
            transformOrigin: "bottom center",
            boxShadow: "0 8px 32px rgba(0,0,0,0.8)",
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
              style={{ background: `${communityPosts[2].color}33`, border: `1px solid ${communityPosts[2].color}66` }}>
              {communityPosts[2].user[0]}
            </div>
            <div>
              <p className="text-white/80 text-[10px] font-bold leading-none">{communityPosts[2].user}</p>
              <p className="text-[9px] font-semibold" style={{ color: communityPosts[2].color }}>{communityPosts[2].streak}</p>
            </div>
          </div>
          <p className="text-white font-black text-xs leading-tight">{communityPosts[2].title}</p>
          <p className="text-white/40 text-[9px] leading-snug line-clamp-2">{communityPosts[2].body}</p>
          <span className="self-start text-[8px] font-bold px-2 py-0.5 rounded-full mt-0.5"
            style={{ background: `${communityPosts[2].tagColor}22`, color: communityPosts[2].tagColor }}>
            ★ {communityPosts[2].tag}
          </span>
        </div>

        {/* Center card — main */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative rounded-2xl p-4 flex flex-col gap-2 overflow-hidden"
          style={{
            width: 190, background: "#142019",
            border: "1px solid rgba(34,197,94,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.9), 0 0 0 1px rgba(34,197,94,0.12)",
          }}
        >
          {/* Shine */}
          <div className="absolute top-0 inset-x-0 h-px"
            style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)" }} />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black"
                style={{ background: `${communityPosts[0].color}33`, border: `1px solid ${communityPosts[0].color}66` }}>
                {communityPosts[0].user[0]}
              </div>
              <div>
                <p className="text-white/90 text-[11px] font-bold leading-none">{communityPosts[0].user}</p>
                <p className="text-[9px] font-semibold" style={{ color: communityPosts[0].color }}>{communityPosts[0].streak}</p>
              </div>
            </div>
            <span className="text-white/25 text-[9px]">2h atrás</span>
          </div>

          <p className="text-white font-black text-sm leading-tight">{communityPosts[0].title}</p>
          <p className="text-white/55 text-[10px] leading-relaxed line-clamp-3">{communityPosts[0].body}</p>

          <div className="flex items-center justify-between mt-0.5">
            <span className="text-[9px] font-bold px-2.5 py-1 rounded-full"
              style={{ background: `${communityPosts[0].tagColor}20`, color: communityPosts[0].tagColor }}>
              ★ {communityPosts[0].tag}
            </span>
            <span className="text-white/30 text-[10px] flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              {communityPosts[0].likes}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Input bar */}
      <div className="px-4 pb-5 pt-3">
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <span className="text-white/30 text-xs flex-1">Fale com a comunidade...</span>
          <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "#22c55e" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-6 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #080808)" }} />
    </div>
  );
}

/* ── Tools screen for step 3 ── */
const toolPills = [
  { label: "Luigi — IA Terapeuta", color: "#22c55e", bg: "#0d3320", size: "lg", delay: 0 },
  { label: "Botão de Pânico",      color: "#ef4444", bg: "#3a0d0d", size: "md", delay: 0.07 },
  { label: "Biblioteca de Ações",  color: "#f59e0b", bg: "#3a2a00", size: "md", delay: 0.14 },
  { label: "Universidade",         color: "#3b82f6", bg: "#0d1f3a", size: "lg", delay: 0.21 },
  { label: "Modo Zen",             color: "#a855f7", bg: "#2a0d3a", size: "md", delay: 0.28 },
  { label: "Timer de Urge",        color: "#22c55e", bg: "#0d2a1a", size: "md", delay: 0.35 },
  { label: "Diário de Gatilhos",   color: "#60a5fa", bg: "#0d1f2a", size: "lg", delay: 0.42 },
];

function ToolsScreen() {
  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{ background: "linear-gradient(170deg, #060e08 0%, #040804 60%, #080808 100%)" }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)",
          width: 200, height: 200,
          background: "radial-gradient(ellipse, rgba(34,197,94,0.18) 0%, transparent 70%)",
          filter: "blur(30px)",
        }} />
      </div>

      {/* Header */}
      <div className="px-5 pt-14 pb-4">
        <p className="text-white/50 text-[10px] font-bold tracking-widest uppercase mb-0.5">RENOVO</p>
        <p className="text-white font-black text-sm">Suas ferramentas</p>
      </div>

      {/* Pills */}
      <div className="flex-1 flex flex-col items-center justify-center gap-3 px-5" style={{ marginTop: -8 }}>
        {[
          [toolPills[0]],
          [toolPills[1], toolPills[2]],
          [toolPills[3]],
          [toolPills[4], toolPills[5]],
          [toolPills[6]],
        ].map((row, ri) => (
          <div key={ri} className="flex gap-2.5 items-center">
            {row.map((pill) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: pill.delay }}
                className="flex items-center justify-center rounded-full font-black"
                style={{
                  background: pill.bg,
                  border: `1px solid ${pill.color}55`,
                  color: pill.color,
                  fontSize: pill.size === "lg" ? 12 : 10,
                  paddingLeft: pill.size === "lg" ? 18 : 13,
                  paddingRight: pill.size === "lg" ? 18 : 13,
                  paddingTop: pill.size === "lg" ? 12 : 9,
                  paddingBottom: pill.size === "lg" ? 12 : 9,
                  boxShadow: `0 0 16px ${pill.color}22`,
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                {pill.label}
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom tagline */}
      <div className="px-5 pb-6 text-center">
        <p className="text-white/25 text-[9px] tracking-wide">E muito mais no app</p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-8 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #080808)" }} />
    </div>
  );
}

/* ── Progress dashboard screen for step 4 ── */
const lifeMetrics = [
  { label: "Energia",     icon: "⚡", value: 87, color: "#22c55e", delay: 0.1 },
  { label: "Foco",        icon: "🎯", value: 74, color: "#3b82f6", delay: 0.2 },
  { label: "Sono",        icon: "🌙", value: 91, color: "#a855f7", delay: 0.3 },
  { label: "Confiança",   icon: "🔥", value: 68, color: "#f59e0b", delay: 0.4 },
  { label: "Presença",    icon: "💚", value: 82, color: "#22c55e", delay: 0.5 },
];

function ProgressScreen() {
  return (
    <div
      className="absolute inset-0 flex flex-col"
      style={{ background: "linear-gradient(170deg, #060e08 0%, #040804 60%, #080808 100%)" }}
    >
      {/* Ambient glow */}
      <div className="absolute pointer-events-none" style={{
        top: "10%", left: "50%", transform: "translateX(-50%)",
        width: 220, height: 180,
        background: "radial-gradient(ellipse, rgba(34,197,94,0.15) 0%, transparent 70%)",
        filter: "blur(30px)",
      }} />

      {/* Header */}
      <div className="px-5 pt-14 pb-2">
        <p className="text-white/40 text-[9px] font-bold tracking-widest uppercase">Sua evolução</p>
      </div>

      {/* Overall score ring */}
      <div className="flex items-center justify-center py-3">
        <div className="relative flex items-center justify-center" style={{ width: 90, height: 90 }}>
          <svg width="90" height="90" viewBox="0 0 90 90" className="absolute inset-0" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="45" cy="45" r="38" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
            <motion.circle
              cx="45" cy="45" r="38" fill="none"
              stroke="url(#scoreGrad)" strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 38}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 38 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 38 * (1 - 0.80) }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
            />
            <defs>
              <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex flex-col items-center leading-none">
            <motion.span
              className="text-white font-black"
              style={{ fontSize: 26, lineHeight: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              80
            </motion.span>
            <span className="text-green-400 font-bold" style={{ fontSize: 8, letterSpacing: "0.08em" }}>SCORE</span>
          </div>
        </div>

        <div className="ml-4 flex flex-col gap-0.5">
          <p className="text-white font-black text-sm leading-tight">Dia 22 limpo</p>
          <p className="text-white/40 text-[10px]">↑ 34 pts esse mês</p>
          <div className="flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full w-fit"
            style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)" }}>
            <span className="text-green-400 text-[9px] font-bold">Conquistador</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 mb-3" style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

      {/* Metrics */}
      <div className="flex flex-col gap-3 px-5">
        {lifeMetrics.map((m) => (
          <div key={m.label} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span style={{ fontSize: 11 }}>{m.icon}</span>
                <span className="text-white/70 text-[10px] font-semibold">{m.label}</span>
              </div>
              <motion.span
                className="font-black text-[10px]"
                style={{ color: m.color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: m.delay + 0.3 }}
              >
                {m.value}%
              </motion.span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
              <motion.div
                className="h-full rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${m.value}%` }}
                transition={{ duration: 0.9, ease: "easeOut", delay: m.delay }}
                style={{ background: `linear-gradient(90deg, ${m.color}99, ${m.color})` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #080808)" }} />
    </div>
  );
}

const steps = [
  {
    label: "PASSO 01",
    title: "Acompanhe sua sequência diária",
    description:
      "Visualize cada dia de progresso em tempo real. O RENOVO transforma sua jornada em dados concretos — quantos dias limpos, qual foi sua melhor sequência e onde você está agora. Ver o número crescer é o combustível que mantém você na trilha.",
    image: "/mockup-step-1.png",
    alt: "Tela de sequência diária do RENOVO",
    content: <StreakScreen />,
  },
  {
    label: "PASSO 02",
    title: "Entenda seus gatilhos",
    description:
      "Cada recaída tem uma causa. O RENOVO te ajuda a mapear os padrões — horários, estados emocionais, situações — para que você pare de reagir e comece a antecipar. Consciência é a primeira arma.",
    image: "/mockup-step-2.png",
    alt: "Tela de análise de gatilhos do RENOVO",
    content: <CommunityScreen />,
  },
  {
    label: "PASSO 03",
    title: "Ferramentas no momento crítico",
    description:
      "Quando o impulso aparece, você tem segundos para agir. O RENOVO entrega exercícios de respiração, redirecionamento de foco e técnicas de bloqueio cognitivo direto na tela — exatamente quando você mais precisa.",
    image: "/mockup-step-3.png",
    alt: "Tela de ferramentas de emergência do RENOVO",
    content: <ToolsScreen />,
  },
  {
    label: "PASSO 04",
    title: "Torne-se a versão que você sempre foi",
    description:
      "Disciplina, foco, presença — não são traços de personalidade, são músculos. O RENOVO foi construído para que, dia após dia, você sinta a diferença: mais energia, mais clareza, mais controle. Essa é a versão que sempre esteve dentro de você.",
    image: "/mockup-step-4.png",
    alt: "Tela de evolução pessoal do RENOVO",
    content: <ProgressScreen />,
  },
];

function PhoneMockup({ src, alt, children }: { src: string; alt: string; children?: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative mx-auto" style={{ width: 300 }}>
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-40px -60px",
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(34,197,94,0.15) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Phone shell — only top rounded corners, bottom is open/cropped */}
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: "44px 44px 0 0",
          background: "#0e0e0e",
          border: "2px solid rgba(255,255,255,0.1)",
          borderBottom: "none",
          boxShadow:
            "0 0 0 1px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
          // show roughly top 68% of a full phone
          aspectRatio: "9/13",
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute z-10 left-1/2 -translate-x-1/2"
          style={{
            top: 14,
            width: 112,
            height: 28,
            background: "#000",
            borderRadius: 20,
          }}
        />

        {/* Side buttons (decorative) */}
        <div
          className="absolute left-0 top-20 w-0.5 h-10 rounded-r-full"
          style={{ background: "rgba(255,255,255,0.08)", marginLeft: -1 }}
        />
        <div
          className="absolute right-0 top-16 w-0.5 h-14 rounded-l-full"
          style={{ background: "rgba(255,255,255,0.08)", marginRight: -1 }}
        />

        {/* Screen content */}
        <div className="absolute inset-0 bg-[#0a0a0a]">
          {/* Custom React content (overrides image) */}
          {children ? children : (
            <>
              {!errored && (
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover object-top"
                  style={{ display: "block" }}
                  onLoad={() => setLoaded(true)}
                  onError={() => setErrored(true)}
                />
              )}
              {(!loaded || errored) && (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "linear-gradient(160deg, #0d1a10 0%, #080808 60%)" }}
                >
                  <div className="flex flex-col items-center gap-3 opacity-25">
                    <div className="w-14 h-14 rounded-2xl border border-green-500/50 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="4" stroke="#22c55e" strokeWidth="1.5" />
                        <circle cx="12" cy="10" r="3" stroke="#22c55e" strokeWidth="1.5" />
                        <path d="M6 20c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-green-500/50 text-xs font-mono tracking-wide">em breve</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Bottom fade — blends into section background */}
        <div
          className="absolute bottom-0 inset-x-0 pointer-events-none z-20"
          style={{
            height: "35%",
            background: "linear-gradient(to bottom, transparent 0%, #080808 100%)",
          }}
        />
      </div>
    </div>
  );
}

function Step({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0; // even → phone left; odd → phone right

  const phoneCol = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      className="flex justify-center"
    >
      <PhoneMockup src={step.image} alt={step.alt}>
        {step.content}
      </PhoneMockup>
    </motion.div>
  );

  const textCol = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="flex flex-col justify-center gap-4"
    >
      <span className="text-green-500 text-xs font-bold tracking-widest uppercase">
        {step.label}
      </span>
      <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
        {step.title}
      </h3>
      <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
        {step.description}
      </p>

      {/* Step progress dots */}
      <div className="flex gap-2 mt-2">
        {steps.map((_, i) => (
          <div
            key={i}
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: i === index ? 28 : 8,
              background: i === index ? "#22c55e" : "rgba(255,255,255,0.12)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      {isEven ? (
        <>
          {phoneCol}
          {textCol}
        </>
      ) : (
        <>
          {/* on mobile always phone first, on desktop text first */}
          <div className="order-2 md:order-1">{textCol}</div>
          <div className="order-1 md:order-2">{phoneCol}</div>
        </>
      )}
    </div>
  );
}

export default function HowItWorks() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="como-funciona" style={{ backgroundColor: "#080808" }} className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-4">
            COMO FUNCIONA
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Como o RENOVO te{" "}
            <span className="text-green-400">liberta</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Quatro pilares que trabalham juntos para transformar intenção em resultado permanente.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-28 md:gap-36">
          {steps.map((step, i) => (
            <Step key={i} step={step} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
