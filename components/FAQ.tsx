"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "O que é o RENOVO?",
    a: "O RENOVO é um aplicativo brasileiro criado para homens que querem se libertar do vício em pornografia. Ele combina rastreamento de progresso, ferramentas de combate ao impulso, um terapeuta com inteligência artificial e uma comunidade de apoio — tudo num único lugar, disponível 24 horas por dia.",
  },
  {
    q: "O RENOVO é pago?",
    a: "Sim. O RENOVO é um aplicativo premium com investimento acessível. Ao assinar, você tem acesso completo a todas as ferramentas — incluindo o Terapeuta Luigi, a Universidade da Renovação, o Botão de Pânico, a Comunidade e muito mais.",
  },
  {
    q: "O Luigi é uma IA ou um humano?",
    a: "Luigi é uma inteligência artificial especializada em vício em pornografia, treinada com metodologias terapêuticas reais. Ele não é um humano, mas é capaz de acolher, questionar e guiar você com profundidade — sem julgamento, disponível a qualquer hora, inclusive às 3h da manhã quando o impulso bate.",
  },
  {
    q: "O que é o Botão de Pânico?",
    a: "É o recurso de emergência do RENOVO. Quando o impulso aparece, você pressiona o botão e o app ativa imediatamente um protocolo com 6 opções de intervenção: Timer de Urge, Desafio Relâmpago, Ouvir Minha Voz, Modo Zen, Orar Antes de Agir e Ligar Agora. O objetivo é quebrar o ciclo nos primeiros segundos — que são os mais críticos.",
  },
  {
    q: "O que acontece quando eu recaio?",
    a: "O RENOVO não te abandona na recaída. Você registra o ocorrido, o app te ajuda a identificar o que aconteceu — o gatilho, o horário, o estado emocional — e você recomeça com mais autoconhecimento do que antes. A sequência zera, mas o progresso real não some. Cada recaída analisada é uma arma contra a próxima.",
  },
  {
    q: "O que são os gatilhos e como o RENOVO me ajuda com eles?",
    a: "Gatilhos são as situações que aumentam o risco de recaída: solidão, tédio, estresse, noite, ansiedade, cansaço. O RENOVO te ajuda a mapear os seus padrões específicos ao longo do tempo — e, com isso, você para de reagir e começa a antecipar. Consciência do gatilho é a primeira arma.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "As primeiras mudanças costumam aparecer entre 3 e 7 dias: sono melhor, menos névoa mental, mais energia pela manhã. Entre 30 e 60 dias, mudanças mais profundas se tornam visíveis — foco, confiança, presença social. Cada organismo responde no seu ritmo, mas os relatos da nossa comunidade são consistentes: quem usa o app de forma ativa sente diferença.",
  },
  {
    q: "O RENOVO substitui terapia profissional?",
    a: "Não. O RENOVO é uma ferramenta de suporte diário poderosa, mas não substitui o acompanhamento de um psicólogo ou terapeuta profissional quando necessário. Para casos de vício grave, o ideal é usar o RENOVO como complemento a um suporte profissional.",
  },
  {
    q: "O que é a Biblioteca de Ações?",
    a: "São 42 rotas de fuga catalogadas para o momento de impulso: atividades físicas, técnicas mentais, ações sociais, redirecionamentos de foco. A ideia é que você nunca fique sem opção quando o impulso aparecer. Quanto mais você usa, mais descobre o que funciona para o seu perfil.",
  },
  {
    q: "O que é a Universidade da Renovação?",
    a: "É o módulo educacional do RENOVO. Conteúdos progressivos sobre como a pornografia afeta o cérebro, a dopamina, os relacionamentos e a autoestima — explicados de forma clara e direta. Entender o mecanismo do vício é parte essencial da cura.",
  },
  {
    q: "Meus dados são privados?",
    a: "Sim. O RENOVO foi construído com privacidade como prioridade. Seus registros, conversas com Luigi e dados de progresso são seus — não são compartilhados publicamente nem com terceiros. Na comunidade, você pode usar um nome de usuário anônimo se preferir.",
  },
  {
    q: "A comunidade é segura?",
    a: "Sim. A comunidade do RENOVO é moderada e composta exclusivamente por homens que estão na mesma jornada. Não há espaço para julgamento — o ambiente é de apoio mútuo, honestidade e crescimento. Você pode participar anonimamente ou com seu nome real.",
  },
  {
    q: "O RENOVO funciona para qualquer nível de vício?",
    a: "Sim. O app foi desenvolvido para atender desde quem quer reduzir o consumo até quem luta contra um vício há anos. As ferramentas se adaptam ao seu contexto — você não precisa estar no fundo do poço para buscar ajuda, e não é tarde demais se estiver.",
  },
  {
    q: "Como funciona a sequência de dias?",
    a: "A cada dia sem pornografia, sua sequência cresce. O RENOVO mostra quantos dias limpos você acumulou, qual foi sua melhor sequência histórica e onde você está agora. Ver o número crescer é um dos mecanismos mais poderosos de motivação — e o app foi desenhado para que você não queira quebrar.",
  },
];

function FAQItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut", delay: Math.min(index * 0.04, 0.3) }}
      className="border-b last:border-b-0"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span
          className="text-sm md:text-base font-semibold leading-snug transition-colors duration-200"
          style={{ color: open ? "#22c55e" : "rgba(255,255,255,0.85)" }}
        >
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: open ? "rgba(34,197,94,0.15)" : "rgba(255,255,255,0.06)",
            border: `1px solid ${open ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.1)"}`,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke={open ? "#22c55e" : "white"} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm leading-relaxed pb-5 pr-10">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="faq" style={{ backgroundColor: "#080808" }} className="py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Perguntas{" "}
            <span className="text-green-400">frequentes</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4">
            Tudo o que você precisa saber antes de começar.
          </p>
        </motion.div>

        {/* Accordion container */}
        <div
          className="rounded-3xl px-6 md:px-8"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 0 60px rgba(34,197,94,0.04)",
          }}
        >
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
