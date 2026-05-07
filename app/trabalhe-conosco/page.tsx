"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, ease: "easeOut", delay }} className={className}>
      {children}
    </motion.div>
  );
}

const steps = [
  {
    n: "1",
    title: "Grave um vídeo por dia",
    sub: "Você não precisa publicar em nenhum lugar.",
    color: "#22c55e",
  },
  {
    n: "2",
    title: "Nós veiculamos como anúncio",
    sub: "Via Instagram, TikTok e Facebook.",
    color: "#22c55e",
  },
  {
    n: "3",
    title: "Você recebe 10% de toda a receita",
    sub: "",
    highlight: "10% de toda a receita.",
    color: "#22c55e",
  },
];

const tips = [
  {
    tag: "Seja Identificável",
    title: "Fale sobre a dor real",
    body: "Os vídeos que mais performam tocam em pontos de dor que muitas pessoas vivem — ex.: recaindo repetidamente, sentindo vergonha, tentando esconder o vício.",
    icon: "🎯",
  },
  {
    tag: "Busque Inspiração",
    title: "Adapte o que já funciona",
    body: "Não tenha medo de se inspirar em vídeos que performaram bem em outros apps. Formato de storytelling, depoimento direto, antes e depois — tudo vale.",
    icon: "💡",
  },
  {
    tag: "Ângulos Criativos",
    title: "Explore enquadramentos diferentes",
    body: "Um vídeo gravado andando, em voz over, ou com texto na tela pode performar muito melhor que um talking head padrão. Teste e veja o que ressoa.",
    icon: "🎬",
  },
  {
    tag: "Mostre o App",
    title: "Demonstre o RENOVO em uso",
    body: "Os melhores anúncios mostram o app funcionando logo nos primeiros segundos. Seja direto — não enrole. Mostre a tela e o impacto real.",
    icon: "📱",
  },
];

const faqs = [
  {
    q: "Preciso ter muitos seguidores?",
    a: "Não. Os vídeos são veiculados como anúncios pagos pelo RENOVO — não dependem do seu alcance orgânico. Qualquer pessoa pode participar.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Você recebe 10% de toda a receita gerada pelos anúncios feitos com seus vídeos. Os pagamentos são feitos mensalmente via PIX ou transferência bancária.",
  },
  {
    q: "Que tipo de vídeo devo gravar?",
    a: "Vídeos curtos (15–60 segundos) no estilo UGC: depoimento, storytelling, demonstração do app, ou conteúdo motivacional relacionado à recuperação.",
  },
  {
    q: "Posso participar mesmo sem experiência?",
    a: "Sim. Você vai receber um briefing completo com exemplos e orientações. O mais importante é autenticidade — não é necessário ser editor ou ter equipamento profissional.",
  },
];

export default function TrabalheConoscoPage() {
  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#080808" }}>

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-24 pb-20">
          {/* Background gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div style={{
              position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
              width: "100%", height: "60%",
              background: "radial-gradient(ellipse 80% 80% at 50% 100%, rgba(34,197,94,0.18) 0%, transparent 70%)",
              filter: "blur(40px)",
            }} />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-bold tracking-widest uppercase">Programa de Criadores</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6"
                style={{ letterSpacing: "-0.03em" }}
              >
                Crie Vídeos.<br />
                <span className="text-green-400">Seja Pago.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.25 }}
                className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md"
              >
                Crie vídeos para o RENOVO e comece a ganhar <strong className="text-white">10% da receita de anúncios</strong> gerada pelos seus conteúdos.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="mailto:contato@renovoapp.com.br?subject=Quero%20ser%20criador%20RENOVO"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-black px-8 py-4 rounded-full text-base transition-all duration-200"
                  style={{ boxShadow: "0 0 40px rgba(34,197,94,0.35)" }}
                >
                  Candidatar-se agora
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Right — phone */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute pointer-events-none" style={{
                  inset: "-60px -80px",
                  background: "radial-gradient(ellipse at 50% 60%, rgba(34,197,94,0.18) 0%, transparent 65%)",
                  filter: "blur(40px)",
                }} />
                <motion.img
                  src="/mockup-dashboard.png"
                  alt="RENOVO app dashboard"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-64 md:w-72"
                  style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.8)) drop-shadow(0 0 40px rgba(34,197,94,0.15))" }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section className="py-28 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-3xl mx-auto">
            <FadeIn className="text-center mb-16">
              <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-4">Simples assim</p>
              <h2 className="text-4xl md:text-5xl font-black text-white" style={{ letterSpacing: "-0.02em" }}>É fácil</h2>
            </FadeIn>

            <div className="flex flex-col gap-6 relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-10 bottom-10 w-px hidden md:block" style={{ background: "linear-gradient(to bottom, rgba(34,197,94,0.4), rgba(34,197,94,0.1))" }} />

              {steps.map((step, i) => (
                <FadeIn key={step.n} delay={i * 0.12}>
                  <div className="flex items-start gap-6 md:gap-8">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-black text-lg z-10"
                      style={{ background: "rgba(34,197,94,0.15)", border: "2px solid rgba(34,197,94,0.5)", color: "#22c55e" }}>
                      {step.n}
                    </div>
                    <div className="pt-2">
                      <p className="text-white font-black text-xl leading-snug" style={{ letterSpacing: "-0.01em" }}>
                        {step.highlight ? (
                          <>
                            Você recebe{" "}
                            <span className="text-green-400">{step.highlight}</span>
                          </>
                        ) : step.title}
                      </p>
                      {step.sub && <p className="text-gray-500 text-sm mt-1">{step.sub}</p>}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4} className="mt-12 text-center">
              <Link
                href="mailto:contato@renovoapp.com.br?subject=Quero%20ser%20criador%20RENOVO"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-black px-8 py-4 rounded-full text-base transition-all duration-200"
              >
                Candidatar-se
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* ── DICAS — como são os vídeos ── */}
        <section className="py-28 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-16">
              <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-4">Referências</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight" style={{ letterSpacing: "-0.02em" }}>
                Veja como são os <span className="text-green-400">vídeos</span>
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-lg mx-auto">
                Não existe formato certo. Mas existe o que performa — e aqui estão os padrões que funcionam.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip, i) => (
                <FadeIn key={tip.tag} delay={i * 0.1}>
                  <div className="relative rounded-2xl p-7 h-full group overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                      style={{ background: "linear-gradient(90deg, rgba(34,197,94,0.6), transparent)" }} />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(34,197,94,0.06) 0%, transparent 70%)" }} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{tip.icon}</span>
                        <span className="text-green-500 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                          style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}>
                          {tip.tag}
                        </span>
                      </div>
                      <h3 className="text-white font-black text-xl mb-3">{tip.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{tip.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-28 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-3xl mx-auto">
            <FadeIn className="mb-14">
              <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-4">Dúvidas</p>
              <h2 className="text-4xl md:text-5xl font-black text-white" style={{ letterSpacing: "-0.02em" }}>Perguntas frequentes</h2>
            </FadeIn>
            <div className="flex flex-col">
              {faqs.map((f, i) => (
                <FadeIn key={f.q} delay={i * 0.08}>
                  <div className="py-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <h3 className="text-white font-black text-lg mb-3">{f.q}</h3>
                    <p className="text-gray-400 text-base leading-relaxed">{f.a}</p>
                  </div>
                </FadeIn>
              ))}
              <div className="h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-28 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="relative rounded-3xl px-8 md:px-16 py-16 md:py-20 overflow-hidden text-center"
                style={{ background: "linear-gradient(135deg, #0d1f12 0%, #071a0e 50%, #050f08 100%)", border: "1px solid rgba(34,197,94,0.15)", boxShadow: "0 0 100px rgba(34,197,94,0.06)" }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(34,197,94,0.14) 0%, transparent 65%)" }} />
                <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.4), transparent)" }} />
                <div className="relative z-10">
                  <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-6">Programa de Criadores</p>
                  <h2 className="text-white font-black leading-tight mb-4 mx-auto"
                    style={{ fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.03em", maxWidth: 700 }}>
                    Pronto para<br />
                    <span className="text-green-400">começar a criar?</span>
                  </h2>
                  <p className="text-white/40 text-base md:text-lg max-w-md mx-auto mt-6 leading-relaxed">
                    Envie um e-mail com um vídeo de apresentação curto e começamos.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                    <Link
                      href="mailto:contato@renovoapp.com.br?subject=Quero%20ser%20criador%20RENOVO"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500 hover:bg-green-400 text-black font-black text-sm transition-colors duration-200"
                      style={{ boxShadow: "0 0 32px rgba(34,197,94,0.4)" }}
                    >
                      Candidatar-se agora
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
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
