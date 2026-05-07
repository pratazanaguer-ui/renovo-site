"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Data ── */
const stats = [
  { value: "900+", label: "Membros ativos" },
  { value: "2025", label: "Fundado no Brasil" },
  { value: "100%", label: "Independente" },
  { value: "1", label: "Missão" },
];

const pillars = [
  {
    color: "#22c55e",
    title: "Sequência Diária",
    body: "Cada dia limpo é registrado e celebrado. Ver o número crescer ativa o mecanismo mais poderoso de motivação que existe — o de não querer quebrar o que você construiu.",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    color: "#ef4444",
    title: "Estou em Crise",
    body: "Quando o impulso aparece, você tem segundos. Um toque ativa um protocolo com 6 intervenções imediatas — do Timer de Urge ao Modo Zen — para quebrar o ciclo no momento mais crítico.",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    color: "#3b82f6",
    title: "Luigi — IA Terapeuta",
    body: "Um terapeuta treinado em metodologias reais de recuperação, disponível às 3h da manhã quando o impulso bate e não há ninguém para ligar. Sem julgamento. Sem horário.",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    color: "#f59e0b",
    title: "Comunidade",
    body: "Homens reais, em jornadas reais, sem julgamento. A comunidade do RENOVO é o lugar onde a honestidade sobre a luta não é fraqueza — é força compartilhada.",
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
];

const values = [
  { n: "01", title: "Sem Julgamento", body: "A vergonha alimenta o vício. Ela não o cura. Cada funcionalidade, cada palavra, cada decisão de produto no RENOVO foi construída com essa premissa no centro." },
  { n: "02", title: "Ciência, Não Moral", body: "Vício em pornografia é uma condição neurológica — os mesmos mecanismos de dopamina e tolerância de qualquer outra dependência. Tratamos como um problema de saúde, não uma falha de caráter." },
  { n: "03", title: "Brasileiro de Verdade", body: "O RENOVO não é uma tradução. Foi construído desde o zero para a realidade emocional, cultural e linguística do homem brasileiro." },
  { n: "04", title: "Missão Sobre Monetização", body: "Somos independentes. Sem investidores externos ditando o produto. Cada decisão é guiada por uma pergunta: isso ajuda o usuário a se recuperar? Se não, não fazemos." },
  { n: "05", title: "Vulnerabilidade Com Força", body: "Pedir ajuda não é fraqueza. Reconhecer que você precisa de suporte é o ato mais corajoso que existe. O RENOVO foi construído para os homens que tiveram essa coragem." },
];

/* ── Scroll animation ── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut", delay }} className={className}>
      {children}
    </motion.div>
  );
}

/* ── Phone frame shell ── */
function PhoneFrame({ children, tiltY = 0 }: { children: React.ReactNode; tiltY?: number }) {
  return (
    <div style={{ perspective: 1200 }}>
      <div
        className="relative mx-auto overflow-hidden"
        style={{
          width: 260,
          borderRadius: "44px",
          background: "#0e0e0e",
          border: "2px solid rgba(255,255,255,0.10)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.85), 0 0 0 1px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
          aspectRatio: "9/19.5",
          transform: tiltY ? `rotateY(${tiltY}deg) rotateX(3deg)` : undefined,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Dynamic Island */}
        <div className="absolute z-20 left-1/2 -translate-x-1/2" style={{ top: 13, width: 100, height: 26, background: "#000", borderRadius: 20 }} />
        {/* Side buttons */}
        <div className="absolute left-0 top-24 w-0.5 h-10 rounded-r-full" style={{ background: "rgba(255,255,255,0.07)", marginLeft: -1 }} />
        <div className="absolute right-0 top-20 w-0.5 h-14 rounded-l-full" style={{ background: "rgba(255,255,255,0.07)", marginRight: -1 }} />
        {/* Screen */}
        <div className="absolute inset-0">{children}</div>
      </div>
    </div>
  );
}


/* ── Crisis options ── */
const crisisOptions = [
  { label: "Timer de Urge",       icon: "⏱", color: "#22c55e" },
  { label: "Desafio Relâmpago",   icon: "⚡", color: "#f59e0b" },
  { label: "Ouvir Minha Voz",     icon: "🎧", color: "#3b82f6" },
  { label: "Modo Zen",            icon: "🌿", color: "#a855f7" },
  { label: "Orar Antes de Agir",  icon: "✝",  color: "#60a5fa" },
  { label: "Ligar Agora",         icon: "📞", color: "#22c55e" },
];


/* ── Page ── */
export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#080808" }}>

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-24 pb-20">
          <div className="absolute inset-0 pointer-events-none">
            <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 700, height: 500, background: "radial-gradient(ellipse, rgba(34,197,94,0.12) 0%, transparent 65%)", filter: "blur(60px)" }} />
            <div style={{ position: "absolute", bottom: "10%", left: "10%", width: 300, height: 300, background: "radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)", filter: "blur(40px)" }} />
          </div>
          {[...Array(12)].map((_, i) => (
            <motion.div key={i} className="absolute rounded-full pointer-events-none"
              style={{ width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2, background: i % 2 === 0 ? "#22c55e" : "#4ade80", left: `${8 + (i * 8) % 84}%`, bottom: "5%", opacity: 0.4 }}
              animate={{ y: [0, -300 - i * 30], opacity: [0, 0.6, 0] }}
              transition={{ duration: 5 + i * 0.5, repeat: Infinity, delay: i * 0.7, ease: "easeOut" }}
            />
          ))}

          <div className="relative z-10 max-w-5xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-green-500/50" />
              <span className="text-green-500 text-xs font-bold tracking-widest uppercase">Sobre o RENOVO</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}>
              Existimos para que{" "}
              <span className="text-green-400">nenhum homem</span>
              <br />brasileiro enfrente{" "}
              <br className="hidden md:block" />isso sozinho.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-16">
              O RENOVO é o primeiro app brasileiro construído especificamente para homens que querem se libertar do vício em pornografia — com ciência, comunidade e ferramentas que funcionam.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              {stats.map((s, i) => (
                <div key={s.label} className="flex flex-col items-center justify-center py-7 px-4 text-center"
                  style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.015)" }}>
                  <span className="text-3xl md:text-4xl font-black text-white" style={{ letterSpacing: "-0.02em" }}>{s.value}</span>
                  <span className="text-white/35 text-xs mt-1 font-medium">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── APP PREVIEW ── */}
        <section className="py-24 px-6 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Phone mockup */}
            <FadeIn delay={0.1} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute pointer-events-none" style={{ inset: "-60px -80px", background: "radial-gradient(ellipse at 50% 50%, rgba(34,197,94,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
                <PhoneFrame tiltY={-8}>
                  <img
                    src="/dashboard-app.png"
                    alt="RENOVO app dashboard"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                  />
                </PhoneFrame>
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span className="text-white/50 text-xs font-semibold">Nossa origem</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6" style={{ letterSpacing: "-0.02em" }}>
                Construímos o que<br />
                <span className="text-green-400">não existia.</span>
              </h2>
              <div className="space-y-4 text-gray-400 text-base leading-relaxed">
                <p>Em 2025, procuramos um app sério — em português, feito para a realidade brasileira — que ajudasse homens a se libertarem do vício em pornografia. Não encontramos.</p>
                <p>Os apps existentes eram todos em inglês, genéricos, construídos para outro contexto cultural. Nenhum entendia a dimensão emocional específica do homem brasileiro.</p>
                <p>O RENOVO nasceu dessa frustração. De uma pergunta que todo homem que já tentou parar conhece bem: <em className="text-white/70">por que é tão difícil, mesmo quando eu genuinamente quero parar?</em></p>
                <p>A resposta está no cérebro. E a solução está em construir um sistema — não apenas força de vontade.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── ESTOU EM CRISE — SIGNATURE FEATURE ── */}
        <section className="py-24 px-6 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                <span className="text-red-400 text-xs font-bold tracking-wider uppercase">Funcionalidade Central</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6" style={{ letterSpacing: "-0.02em" }}>
                Estou em Crise.
              </h2>
              <div className="space-y-5 text-gray-400 text-base leading-relaxed">
                <p>
                  Quando o impulso aparece, você não tem minutos para pensar. Você tem <strong className="text-white">segundos</strong>. Foi exatamente para esse momento que construímos o "Estou em Crise".
                </p>
                <p>
                  Um único toque ativa um protocolo de intervenção imediata com 6 opções — cada uma projetada para quebrar o ciclo automático antes que ele se complete. Timer de Urge, Desafio Relâmpago, Modo Zen, Ouvir Minha Voz, Orar Antes de Agir, Ligar Agora.
                </p>
                <p>
                  O impulso não é uma decisão. <strong className="text-white">Sua resposta a ele é.</strong> O RENOVO existe para que essa resposta seja sempre uma escolha consciente — não uma reação automática.
                </p>
              </div>

              {/* Options preview */}
              <div className="flex flex-wrap gap-2 mt-6">
                {crisisOptions.map((opt) => (
                  <div key={opt.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: `${opt.color}12`, border: `1px solid ${opt.color}30`, color: opt.color }}>
                    <span style={{ fontSize: 11 }}>{opt.icon}</span>
                    {opt.label}
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Phone mockup */}
            <FadeIn delay={0.2} className="flex justify-center lg:justify-start">
              <img
                src="/estouemcrise.png"
                alt="Funcionalidade Estou em Crise — RENOVO"
                className="w-full max-w-sm"
              />
            </FadeIn>
          </div>
        </section>

        {/* ── PILLARS ── */}
        <section className="py-32 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-16">
              <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-4">O que nos diferencia</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight" style={{ letterSpacing: "-0.02em" }}>
                Quatro pilares.{" "}<span className="text-green-400">Uma jornada.</span>
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pillars.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.1}>
                  <div className="relative rounded-2xl p-7 h-full overflow-hidden group"
                    style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" style={{ background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${p.color}0d 0%, transparent 70%)` }} />
                    <div className="relative z-10">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>{p.icon}</div>
                      <h3 className="text-white font-black text-lg mb-3">{p.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="py-32 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-5xl mx-auto">
            <FadeIn className="mb-16">
              <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-4">O que acreditamos</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-xl" style={{ letterSpacing: "-0.02em" }}>Os valores que guiam cada decisão.</h2>
            </FadeIn>
            <div className="flex flex-col">
              {values.map((v, i) => (
                <FadeIn key={v.n} delay={i * 0.08}>
                  <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-green-500/40 font-black text-4xl md:text-5xl leading-none" style={{ letterSpacing: "-0.03em" }}>{v.n}</span>
                    <div>
                      <h3 className="text-white font-black text-xl md:text-2xl mb-3">{v.title}</h3>
                      <p className="text-gray-400 text-base leading-relaxed max-w-2xl">{v.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
              <div className="h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>
          </div>
        </section>

        {/* ── MANIFESTO ── */}
        <section className="py-32 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="relative rounded-3xl px-8 md:px-16 py-16 md:py-20 overflow-hidden text-center"
                style={{ background: "linear-gradient(135deg, #0d1f12 0%, #071a0e 50%, #050f08 100%)", border: "1px solid rgba(34,197,94,0.15)", boxShadow: "0 0 100px rgba(34,197,94,0.06)" }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(34,197,94,0.14) 0%, transparent 65%)" }} />
                <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.4), transparent)" }} />
                <div className="relative z-10">
                  <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-8">Nosso manifesto</p>
                  <p className="text-white font-black leading-tight mb-4 mx-auto"
                    style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.03em", maxWidth: 800 }}>
                    A liberdade não é a ausência do impulso.<br />
                    <span className="text-green-400">É a capacidade de escolher</span><br />
                    o que fazer com ele.
                  </p>
                  <p className="text-white/40 text-base md:text-lg max-w-lg mx-auto mt-8 leading-relaxed">
                    Isso é o que construímos. Não um contador de dias — uma ferramenta de reconstrução de quem você é.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                    <Link href="#comecar" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500 hover:bg-green-400 text-black font-black text-sm transition-colors duration-200"
                      style={{ boxShadow: "0 0 32px rgba(34,197,94,0.4)" }}>
                      Começar agora
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                    <Link href="/" className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white/60 hover:text-white font-bold text-sm transition-colors duration-200"
                      style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
                      Ver o produto
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
