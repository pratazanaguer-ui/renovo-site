"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stories = [
  {
    user: "Rafael M.",
    day: "Dia 18",
    title: "18 dias. Nunca cheguei tão longe.",
    text: "Nos últimos 4 anos, nunca passei de uma semana. Hoje estou no dia 18 e não é coincidência — é o RENOVO. Cada vez que o impulso bate, abro o app. Às vezes uso o Timer de Urge, às vezes só leio os posts da comunidade. O simples fato de ver que outros homens passam pelo mesmo me dá força. Pela primeira vez na vida, acredito que vou chegar no dia 90.",
  },
  {
    user: "Thiago S.",
    day: "Dia 47",
    title: "A névoa foi embora.",
    text: "Dia 47. Parece que alguém ligou a luz. Meu chefe comentou que minha produtividade melhorou sem eu ter dito nada. Minha namorada disse que estou mais presente. O vício roubava mais do que eu percebia — não só tempo, mas quem eu era. Não volto mais.",
  },
  {
    user: "Bruno A.",
    day: "Dia 9 (pós-recaída)",
    title: "Recaí no dia 31. Estou no dia 9 de novo.",
    text: "Fui honesto com a comunidade quando recaí no mês passado. Esperava julgamento — recebi apoio. Isso me surpreendeu. Voltei no dia seguinte. Hoje sei exatamente o que me derrubou: solidão + sexta à noite + celular na mão. Já sei o que fazer quando isso aparecer. O RENOVO não me deu só a sequência — me deu autoconhecimento.",
  },
];

function StoryCard({ story, index }: { story: (typeof stories)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
      className="rounded-3xl p-6 flex flex-col gap-3"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-white/35 text-xs">Postado por</span>
        <span className="text-white/80 text-xs font-bold">u/{story.user}</span>
        <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
        <span className="text-green-500 text-xs font-semibold">{story.day}</span>
      </div>

      {/* Title */}
      <h3 className="text-white font-black text-lg leading-snug">{story.title}</h3>

      {/* Body */}
      <p className="text-white/50 text-sm leading-relaxed">{story.text}</p>
    </motion.div>
  );
}

export default function Stories() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section id="depoimentos" style={{ backgroundColor: "#080808" }} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-4">DEPOIMENTOS</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Histórias reais da comunidade{" "}
            <span className="text-green-400">RENOVO</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_290px] gap-5 items-start">

          {/* ── Left: story cards ── */}
          <div className="flex flex-col gap-4">
            {stories.map((s, i) => (
              <StoryCard key={i} story={s} index={i} />
            ))}
          </div>

          {/* ── Right: community stats card ── */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 28 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
            className="relative rounded-3xl p-6 flex flex-col gap-5 md:sticky md:top-24 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 60px rgba(34,197,94,0.06)",
            }}
          >
            {/* Subtle green glow */}
            <div
              className="absolute bottom-0 inset-x-0 pointer-events-none"
              style={{
                height: 140,
                background:
                  "radial-gradient(ellipse at 50% 100%, rgba(34,197,94,0.12) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Top shine */}
            <div
              className="absolute top-0 inset-x-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
            />

            <div className="relative z-10 flex flex-col gap-5">
              <h3 className="text-white font-black text-lg">Estatísticas da Comunidade</h3>

              {/* Stats list */}
              <div className="flex flex-col">
                {[
                  { label: "Membros Ativos",        value: "912+" },
                  { label: "Posts Hoje",             value: "47"  },
                  { label: "Dias limpos (média)",    value: "23"  },
                  { label: "Recaídas evitadas hoje", value: "138" },
                ].map((s, i, arr) => (
                  <div
                    key={s.label}
                    className="flex justify-between items-center py-3"
                    style={{
                      borderBottom:
                        i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}
                  >
                    <span className="text-white/45 text-sm">{s.label}</span>
                    <span className="text-white font-black text-base">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#comecar"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full text-center bg-green-500 hover:bg-green-400 text-black font-bold py-3.5 rounded-full text-sm transition-colors duration-200"
                style={{ boxShadow: "0 0 24px rgba(34,197,94,0.3)" }}
              >
                Quero fazer parte
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
