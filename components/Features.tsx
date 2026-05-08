"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ─── SVG icons (faithful to the app screenshots) ─── */
const Icons = {
  shield: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 6.5v5C3 16.75 7 21.35 12 23c5-1.65 9-6.25 9-11.5v-5L12 2z"
        stroke="white" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
  ),
  target: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="6"  stroke="white" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="2"  stroke="white" strokeWidth="1.8"/>
    </svg>
  ),
  mirror: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="11" rx="5.5" ry="8" stroke="white" strokeWidth="1.8"/>
      <path d="M9 22h6M12 19v3" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  warning: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
      <line x1="12" y1="9"  x2="12"   y2="13"   stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="12" y1="17" x2="12.01" y2="17"  stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  book: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"  stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  ),
  users: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.8"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  graduation: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"
        stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"
        stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  wind: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M9.59 4.59A2 2 0 1111 8H2"  stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M11 12H2"                    stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M10.59 19.41A2 2 0 1012 16H2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  panic: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.8"/>
      <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

/* ─── Single app-faithful card ─── */
type AppCardProps = {
  gradient: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  pill: string;
  ghostSize?: number;
};

function AppCard({ gradient, icon, title, subtitle, pill, ghostSize = 80 }: AppCardProps) {
  return (
    <div
      className="relative flex items-center gap-4 rounded-2xl px-4 py-4 overflow-hidden flex-shrink-0"
      style={{
        background: gradient,
        boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
      }}
    >
      {/* Ghost icon bottom-right */}
      <div
        className="absolute bottom-0 right-4 opacity-[0.12] pointer-events-none"
        style={{ width: ghostSize, height: ghostSize }}
        aria-hidden
      >
        {icon}
      </div>

      {/* Icon pill */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)" }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <span className="text-white font-bold text-base leading-tight">{title}</span>
        <span className="text-white/70 text-xs leading-snug">{subtitle}</span>
        <span
          className="self-start mt-1 text-white/90 text-[11px] font-semibold px-3 py-1 rounded-full"
          style={{ background: "rgba(255,255,255,0.18)" }}
        >
          {pill}
        </span>
      </div>

      {/* Chevron */}
      <svg className="flex-shrink-0 opacity-50" width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

/* ─── Preview contents per section ─── */

const allTools = [
  { gradient: "linear-gradient(135deg,#c62828,#8b0000)", icon: Icons.shield,      label: "Estou em Crise",        subtitle: "Emergência imediata" },
  { gradient: "linear-gradient(135deg,#e65100,#bf360c)", icon: Icons.warning,     label: "Conheça Seus Inimigos", subtitle: "Mapeie gatilhos" },
  { gradient: "linear-gradient(135deg,#2e7d32,#1b5e20)", icon: Icons.shield,      label: "Plano de Fuga",         subtitle: "Proteção ativa" },
  { gradient: "linear-gradient(135deg,#00838f,#006064)", icon: Icons.wind,        label: "Acalme-se",             subtitle: "Respiração guiada" },
  { gradient: "linear-gradient(135deg,#6a1b9a,#4a148c)", icon: Icons.target,      label: "Busque Propósito",      subtitle: "Encontre sentido" },
  { gradient: "linear-gradient(135deg,#1565c0,#0d47a1)", icon: Icons.book,        label: "Biblioteca de Ações",   subtitle: "42 rotas de fuga" },
  { gradient: "linear-gradient(135deg,#4527a0,#311b92)", icon: Icons.mirror,      label: "Modo Espelho",          subtitle: "Auto-conhecimento" },
  { gradient: "linear-gradient(135deg,#1976d2,#1565c0)", icon: Icons.graduation,  label: "Universidade",          subtitle: "Educação progressiva" },
  { gradient: "linear-gradient(135deg,#7b1fa2,#6a1b9a)", icon: Icons.users,       label: "Comunidade",            subtitle: "Membros ativos" },
];

type ToolChip = typeof allTools[0];

/* ─── Triggers (left panel) ─── */
const triggers = [
  { label: "Solidão",    color: "#6a1b9a", emoji: "🌙" },
  { label: "Tédio",      color: "#1565c0", emoji: "📱" },
  { label: "Estresse",   color: "#c62828", emoji: "😤" },
  { label: "Noite",      color: "#37474f", emoji: "🌆" },
  { label: "Ansiedade",  color: "#e65100", emoji: "💭" },
  { label: "Cansaço",    color: "#2e7d32", emoji: "😓" },
];

const recommended = [
  { tool: allTools[0] }, // Estou em Crise
  { tool: allTools[1] }, // Conheça Inimigos
  { tool: allTools[2] }, // Plano de Fuga
  { tool: allTools[3] }, // Acalme-se
  { tool: allTools[4] }, // Busque Propósito
];

function ToolsPreview() {
  return (
    <div className="absolute inset-0 pt-11 flex overflow-hidden">

      {/* ── LEFT: trigger tags ── */}
      <div className="flex-1 flex flex-col p-4 pt-3 min-w-0">
        <p className="text-white/35 text-[10px] font-bold tracking-widest uppercase mb-3">
          Suas situações
        </p>
        <div className="flex flex-wrap gap-2">
          {triggers.map((t) => (
            <motion.span
              key={t.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: Math.random() * 0.5 }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-white text-[11px] font-semibold"
              style={{ background: t.color + "cc" }}
            >
              <span>{t.emoji}</span>
              {t.label}
            </motion.span>
          ))}
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="w-px self-stretch my-4" style={{ background: "rgba(255,255,255,0.07)" }} />

      {/* ── CENTER: processing ── */}
      <div className="w-20 sm:w-28 flex flex-col items-center justify-center gap-3 px-2 sm:px-3 flex-shrink-0">
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Spinning ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{ border: "2px solid transparent", borderTopColor: "#22c55e", borderRightColor: "#22c55e44" }}
          />
          {/* Icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="text-white/50 text-[10px] text-center leading-snug font-medium">
          Criando seu plano...
        </p>
        {/* Animated dots */}
        <div className="flex gap-1">
          {[0,1,2].map(i => (
            <motion.div key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
              className="w-1 h-1 rounded-full bg-green-400"
            />
          ))}
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="w-px self-stretch my-4" style={{ background: "rgba(255,255,255,0.07)" }} />

      {/* ── RIGHT: tools — 3×3 icon grid + overflow hint ── */}
      <div className="flex-1 flex flex-col pt-3 pb-2 px-2 sm:px-3 min-w-0 overflow-hidden relative">
        <p className="text-white/35 text-[10px] font-bold tracking-widest uppercase mb-2">
          Ferramentas
        </p>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { gradient: "linear-gradient(135deg,#c62828,#8b0000)", icon: Icons.shield,      label: "Estou em Crise" },
            { gradient: "linear-gradient(135deg,#e65100,#bf360c)", icon: Icons.warning,     label: "Inimigos"       },
            { gradient: "linear-gradient(135deg,#2e7d32,#1b5e20)", icon: Icons.shield,      label: "Plano de Fuga"  },
            { gradient: "linear-gradient(135deg,#00838f,#006064)", icon: Icons.wind,        label: "Acalme-se"      },
            { gradient: "linear-gradient(135deg,#6a1b9a,#4a148c)", icon: Icons.target,      label: "Propósito"      },
            { gradient: "linear-gradient(135deg,#1565c0,#0d47a1)", icon: Icons.book,        label: "Biblioteca"     },
            { gradient: "linear-gradient(135deg,#4527a0,#311b92)", icon: Icons.mirror,      label: "Espelho"        },
            { gradient: "linear-gradient(135deg,#1976d2,#1565c0)", icon: Icons.graduation,  label: "Universidade"   },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex flex-col items-center gap-1.5"
            >
              <div
                className="w-full aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{ background: t.gradient, boxShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
              >
                <div className="absolute top-0 inset-x-0 h-px"
                  style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)" }} />
                <div className="absolute -bottom-1 -right-1 opacity-[0.15] w-7 h-7">{t.icon}</div>
                <div className="scale-75">{t.icon}</div>
              </div>
              <span className="text-white/70 text-[9px] font-medium text-center leading-tight">{t.label}</span>
            </motion.div>
          ))}

          {/* +X mais tile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 8 * 0.05 }}
            className="flex flex-col items-center gap-1.5"
          >
            <div
              className="w-full aspect-square rounded-2xl flex flex-col items-center justify-center relative overflow-hidden gap-0.5"
              style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.12), rgba(34,197,94,0.04))",
                border: "1.5px solid rgba(34,197,94,0.25)",
              }}
            >
              <span className="text-green-400 font-black text-lg leading-none">+</span>
              <span className="text-green-400/80 font-bold text-[10px] leading-none">muito</span>
              <span className="text-green-400/80 font-bold text-[10px] leading-none">mais</span>
            </div>
            <span className="text-green-500/60 text-[9px] font-medium text-center leading-tight">no app</span>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-8 pointer-events-none z-10"
          style={{ background: "linear-gradient(to top, #101010, transparent)" }} />
      </div>

    </div>
  );
}

function CommunityPreview() {
  const [tab, setTab] = useState<"timeline" | "perfil">("timeline");
  const [profileTab, setProfileTab] = useState<"posts" | "curtidas" | "reposts">("posts");

  const posts = [
    { user: "Gabriel C.", streak: "67d limpo", text: "2 meses e parece que a líbido volta do nada essa semana. É normal? To tentando e entra em pânico", likes: 74,  comments: 8 },
    { user: "Matheus R.", streak: "21d limpo", text: "3 semanas!! primeira vez q passo de 2 dias em ANOS. to assustado mas feliz 🙏",                     likes: 124, comments: 31 },
    { user: "Anônimo",    streak: "8d limpo",  text: "Não consegui dormir mas não recaí. Isso conta como vitória?",                                         likes: 58,  comments: 14 },
  ];

  return (
    <div className="absolute inset-0 pt-12 px-4 pb-4 flex flex-col overflow-hidden">
      {/* Tab bar */}
      <div className="flex gap-4 mb-2">
        <button
          onClick={() => setTab("timeline")}
          className={`text-xs font-bold pb-1 transition-colors ${tab === "timeline" ? "text-green-400 border-b-2 border-green-400" : "text-white/30"}`}
        >
          Timeline
        </button>
        <button
          onClick={() => setTab("perfil")}
          className={`text-xs font-bold pb-1 transition-colors ${tab === "perfil" ? "text-green-400 border-b-2 border-green-400" : "text-white/30"}`}
        >
          Seu perfil
        </button>
      </div>

      {/* ── TIMELINE ── */}
      {tab === "timeline" && (
        <motion.div
          key="timeline"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-2.5"
        >
          {posts.map((p, i) => (
            <div key={i} className="rounded-2xl p-3.5 flex flex-col gap-2"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-white text-xs font-bold">
                    {p.user[0]}
                  </div>
                  <span className="text-white/90 text-xs font-semibold">{p.user}</span>
                </div>
                <span className="text-green-400 text-xs font-semibold">{p.streak}</span>
              </div>
              <p className="text-white/70 text-xs leading-relaxed">{p.text}</p>
              <div className="flex items-center gap-3 text-white/30 text-[11px]">
                <span className="flex items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  {p.likes}
                </span>
                <span className="flex items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  {p.comments}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* ── PERFIL ── */}
      {tab === "perfil" && (
        <motion.div
          key="perfil"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-0 -mx-4"
        >
          {/* Header: banner + avatar + button all together via absolute */}
          <div className="relative" style={{ height: 96 }}>
            {/* Banner background */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(160deg, #0d4a3a 0%, #082e22 60%, #071a13 100%)" }}
            />
            {/* Avatar — absolute, bottom-left */}
            <div
              className="absolute left-4 flex items-center justify-center rounded-full border-2"
              style={{
                bottom: 8,
                width: 52,
                height: 52,
                background: "linear-gradient(135deg, #2dd4bf, #0d9488)",
                borderColor: "#101010",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.8"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            {/* Novo post — absolute, bottom-right */}
            <button
              className="absolute right-4 text-white/90 text-[11px] font-semibold px-3 py-1.5 rounded-full"
              style={{ bottom: 16, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.14)" }}
            >
              Novo post
            </button>
          </div>

          {/* Name + handle + bio */}
          <div className="px-4 flex flex-col gap-0.5 mb-2.5">
            <span className="text-white font-black text-sm">Bernardo Soares</span>
            <span className="text-white/40 text-[11px]">@bernardo_soares</span>
            <span className="text-white/60 text-[11px] mt-1">Um dia de cada vez.</span>
          </div>

          {/* Pills */}
          <div className="px-4 flex gap-2 flex-wrap mb-3">
            <span className="text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-full"
              style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)" }}>
              17 dias limpo
            </span>
            <span className="text-white/60 text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
              Perfil da comunidade
            </span>
          </div>

          {/* Stats row */}
          <div className="px-4 grid grid-cols-3 gap-2 mb-3">
            {[{ n: 0, label: "POSTS" }, { n: 1, label: "CURTIDAS" }, { n: 1, label: "REPOSTS" }].map((s) => (
              <div key={s.label} className="flex flex-col items-center py-2 rounded-xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-white font-black text-base leading-none">{s.n}</span>
                <span className="text-white/30 text-[9px] font-bold tracking-wider mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Sub-tabs */}
          <div className="px-4 flex gap-0 border-b mb-2" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            {(["posts", "curtidas", "reposts"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setProfileTab(t)}
                className={`capitalize text-[11px] font-bold px-3 py-2 transition-colors ${profileTab === t ? "text-green-400 border-b-2 border-green-400" : "text-white/30"}`}
              >
                {t === "curtidas" ? "Curtidas 1" : t === "reposts" ? "Reposts 1" : "Posts"}
              </button>
            ))}
          </div>

          {/* Empty state */}
          <div className="px-4 py-4 flex flex-col items-center gap-1">
            <span className="text-white/20 text-[11px] text-center">
              {profileTab === "posts" ? "Nenhum post ainda. Compartilhe sua jornada." : profileTab === "curtidas" ? "Posts que você curtiu." : "Posts que você republicou."}
            </span>
          </div>
        </motion.div>
      )}

      <div className="absolute bottom-0 inset-x-0 h-16 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent, #101010)" }} />
    </div>
  );
}

function PanicPreview() {
  const options = [
    "Timer de Urge",
    "Desafio Relâmpago",
    "Ouvir Minha Voz",
    "Modo Zen",
    "Orar Antes de Agir",
    "Ligar Agora",
  ];

  const rows = Array.from({ length: 8 }, (_, row) =>
    Array.from({ length: 5 }, (_, col) => options[(row * 3 + col) % options.length])
  );

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* ── Background pill grid ── */}
      <div className="absolute inset-0 flex flex-col justify-around py-12 px-1 pointer-events-none">
        {rows.map((row, ri) => (
          <div
            key={ri}
            className="flex gap-2"
            style={{ marginLeft: ri % 2 === 0 ? 0 : -36 }}
          >
            {row.map((label, ci) => (
              <span
                key={ci}
                className="px-3 py-1 rounded-full text-[10px] font-semibold whitespace-nowrap flex-shrink-0"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* ── Red radial focus overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 52%, rgba(185,28,28,0.55) 0%, rgba(8,8,8,0.65) 55%, rgba(8,8,8,0.92) 100%)",
        }}
      />

      {/* ── Central panic button ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            boxShadow: [
              "0 0 24px rgba(220,38,38,0.5)",
              "0 0 64px rgba(220,38,38,0.9)",
              "0 0 24px rgba(220,38,38,0.5)",
            ],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white font-black text-sm"
          style={{ background: "linear-gradient(135deg,#ef4444,#b91c1c)" }}
        >
          {Icons.panic}
          Estou em Crise
        </motion.div>
      </div>

    </div>
  );
}

const luigiMsgs = [
  { from: "user",  text: "Estou lutando há semanas. Hoje recaí de novo e não sei mais o que fazer." },
  { from: "luigi", text: "Você está aqui, pedindo ajuda — isso já é força. O que aconteceu antes da recaída?" },
  { from: "user",  text: "Estava sozinho, ansioso. Tentei resistir mas cedi." },
  { from: "luigi", text: "Solidão + ansiedade é uma das combinações mais difíceis. Vamos montar seu plano para esse momento agora." },
  { from: "user",  text: "Acha que consigo mesmo?" },
  { from: "luigi", text: "Sem dúvida. Você já resistiu antes. Vamos fazer isso juntos, um passo de cada vez." },
];

// depth: oldest = most faded & slightly smaller
const depthStyles = [
  { opacity: 0.28, scale: 0.88 },
  { opacity: 0.45, scale: 0.92 },
  { opacity: 0.62, scale: 0.95 },
  { opacity: 0.78, scale: 0.97 },
  { opacity: 0.90, scale: 0.99 },
  { opacity: 1.00, scale: 1.00 },
];

function LuigiPreview() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Subtle green ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 70% 100%, rgba(34,197,94,0.07) 0%, transparent 70%)" }} />

      {/* ── Chat messages — full width ── */}
      <div className="absolute inset-0 pt-12 px-5 pb-16 flex flex-col gap-2 overflow-hidden">
        {luigiMsgs.map((m, i) => {
          const d = depthStyles[i] ?? depthStyles[depthStyles.length - 1];
          return (
            <div
              key={i}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              style={{ opacity: d.opacity, transform: `scale(${d.scale})`, transformOrigin: m.from === "user" ? "right center" : "left center" }}
            >
              {m.from === "luigi" && (
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center text-white font-black text-[8px] mr-1.5 mt-0.5 flex-shrink-0">
                  L
                </div>
              )}
              <div
                className="text-[11px] leading-relaxed px-3.5 py-2.5"
                style={{
                  background: m.from === "user" ? "rgba(34,197,94,0.22)" : "rgba(255,255,255,0.09)",
                  color: "rgba(255,255,255,0.95)",
                  borderRadius: m.from === "luigi" ? "4px 14px 14px 14px" : "14px 4px 14px 14px",
                  maxWidth: "74%",
                }}
              >
                {m.text}
              </div>
            </div>
          );
        })}

        {/* Typing dots */}
        <div className="flex items-center gap-1.5 mt-0.5" style={{ opacity: 1 }}>
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center text-white font-black text-[8px] flex-shrink-0">L</div>
          <div className="rounded-2xl px-3 py-2 flex gap-1 items-center" style={{ background: "rgba(255,255,255,0.09)", borderRadius: "4px 14px 14px 14px" }}>
            {[0,1,2].map(i => (
              <motion.div key={i}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.18 }}
                className="w-1.5 h-1.5 rounded-full bg-white/50"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Luigi — floating over chat, bottom-right, intrinsic ── */}
      <div className="absolute bottom-10 right-0 pointer-events-none z-10" style={{ width: 130 }}>
        {/* Glow pool under feet */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-12 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.25) 0%, transparent 70%)", filter: "blur(12px)" }} />
        <motion.img
          src="/luigi.png"
          alt="Luigi"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-full object-contain"
          style={{ filter: "drop-shadow(0 12px 28px rgba(34,197,94,0.35))" }}
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-none z-20"
        style={{ background: "linear-gradient(to top, #101010 30%, transparent)" }} />

      {/* ── CTA ── */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center pb-4 z-30">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-5 py-2.5 rounded-full text-xs transition-colors"
          style={{ boxShadow: "0 0 24px rgba(34,197,94,0.45)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-black/50 animate-pulse" />
          Converse com o Terapeuta Luigi
        </motion.button>
      </div>
    </div>
  );
}

function UniversidadePreview() {
  const cards2 = [
    { gradient: "linear-gradient(135deg,#1565c0,#0d47a1)", icon: Icons.graduation, title: "Universidade da Renovação", subtitle: "Educação progressiva sobre recuperação", pill: "Módulos disponíveis" },
    { gradient: "linear-gradient(135deg,#4527a0,#311b92)", icon: Icons.mirror,     title: "Modo Espelho",            subtitle: "Veja quem você está se tornando",    pill: "Auto-conhecimento" },
    { gradient: "linear-gradient(135deg,#7b1fa2,#6a1b9a)", icon: Icons.users,      title: "Comunidade",              subtitle: "Timeline com posts, apoio e interação", pill: "Membros ativos" },
    { gradient: "linear-gradient(135deg,#1976d2,#1565c0)", icon: Icons.book,       title: "Biblioteca de Ações",     subtitle: "42 rotas de fuga disponíveis",      pill: "42 ações" },
  ];
  return (
    <div className="absolute inset-0 pt-12 px-4 pb-4 flex flex-col gap-2.5 overflow-hidden">
      {cards2.map((c, i) => (
        <AppCard key={i} {...c} ghostSize={70} />
      ))}
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #101010)" }} />
    </div>
  );
}

/* ─── Feature card wrappers ─── */
const featureCards = [
  {
    id: "ferramentas",
    title: "Ferramentas de Combate",
    description: "Dezenas de ferramentas para cada frente da batalha — do momento de crise ao planejamento estratégico de longo prazo. E sempre crescendo.",
    preview: <ToolsPreview />,
    accent: "#22c55e",
  },
  {
    id: "comunidade",
    title: "Comunidade",
    description: "Mais de 900 homens na mesma jornada. Posts reais, vitórias reais, apoio real — porque ninguém vence sozinho.",
    preview: <CommunityPreview />,
    accent: "#a855f7",
  },
  {
    id: "panico",
    title: "Botão de Pânico",
    description: "Um toque quando o impulso bate. O RENOVO ativa o protocolo de emergência e interrompe o ciclo nos primeiros segundos.",
    preview: <PanicPreview />,
    accent: "#ef4444",
  },
  {
    id: "luigi",
    title: "Terapeuta Luigi",
    description: "IA especializada em vício em pornografia. Disponível 24/7, sem julgamento — te guia no momento mais difícil.",
    preview: <LuigiPreview />,
    accent: "#22c55e",
  },
];

function FeatureCard({ card, index }: { card: (typeof featureCards)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay: (index % 2) * 0.1 }}
      className="flex flex-col gap-4 pb-6"
    >
      {/* Text — above the card */}
      <div className="px-1">
        <h3 className="text-white font-black text-xl mb-1.5">{card.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
      </div>

      {/* Container card */}
      <motion.div
        whileHover={{ scale: 1.015, transition: { duration: 0.22 } }}
        className="relative rounded-3xl overflow-hidden cursor-pointer"
        style={{
          background: "#101010",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.6), 0 24px 48px rgba(0,0,0,0.4)",
          height: 400,
        }}
      >
        {/* Label */}
        <div className="absolute top-4 left-4 z-20">
          <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)" }}>
            TOQUE PARA EXPLORAR
          </span>
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 inset-x-0 pointer-events-none" style={{
          height: 180,
          background: `radial-gradient(ellipse at 50% 100%, ${card.accent}1a 0%, transparent 70%)`,
        }} />

        {/* Preview */}
        {card.preview}

        {/* Top shine */}
        <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="funcionalidades" style={{ backgroundColor: "#080808" }} className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-4">FUNCIONALIDADES</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Explore o que o <span className="text-green-400">RENOVO</span> oferece
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Cada ferramenta foi construída para um momento específico da sua batalha.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featureCards.map((card, i) => (
            <FeatureCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
