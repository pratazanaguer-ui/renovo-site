"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MISSION_TEXT =
  "Construímos o RENOVO para ajudar homens brasileiros a se libertarem do vício em pornografia, reconquistarem o controle da própria mente e se tornarem a versão mais disciplinada, focada e poderosa de si mesmos — a versão que eles sempre souberam que eram capazes de ser.";

const words = MISSION_TEXT.split(" ");

function Word({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const isRenovo = word === "RENOVO";

  // Each word lights up as scroll progresses through its slice of the range.
  // We use a 0.1–0.9 window so the highlight starts/ends before the section
  // is fully off-screen.
  const start = 0.1 + (index / total) * 0.7;
  const end = start + 0.08;

  const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1]);
  const color = useTransform(
    scrollYProgress,
    [start, end],
    isRenovo ? ["#374151", "#22c55e"] : ["#374151", "#ffffff"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.35em] transition-colors"
    >
      {word}
    </motion.span>
  );
}

export default function MissionStatement() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <section
      ref={containerRef}
      style={{ backgroundColor: "#080808" }}
      className="py-32 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-8">
          NOSSA MISSÃO
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {words.map((word, i) => (
            <Word
              key={i}
              word={word}
              index={i}
              total={words.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
