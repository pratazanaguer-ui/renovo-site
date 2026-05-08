"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const TARGET = 900;
const DURATION = 1.4; // seconds — feel free to tweak

function useCountUp(to: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1], // expo-out — fast burst then settles
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [to, duration, start]);

  return value;
}

export default function UserCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp(TARGET, DURATION, inView);

  return (
    <section
      style={{ backgroundColor: "#080808" }}
      className="py-16 px-6"
    >
      <div className="max-w-4xl mx-auto flex justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-xl rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 0 60px rgba(34,197,94,0.06), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Green glow blob */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none"
            style={{
              height: 160,
              background:
                "radial-gradient(ellipse at 50% 100%, rgba(34,197,94,0.14) 0%, transparent 70%)",
              filter: "blur(24px)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center py-12 px-8 gap-4">
            {/* Live pill */}
            <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              AO VIVO
            </span>

            {/* Counter */}
            <div className="flex items-end gap-1 leading-none">
              <span
                className="text-7xl md:text-8xl font-black tabular-nums"
                style={{ color: "#22c55e" }}
              >
                {count.toLocaleString("pt-BR")}
              </span>
              <span className="text-4xl md:text-5xl font-black text-green-400 mb-2">
                +
              </span>
            </div>

            {/* Label */}
            <p className="text-white font-bold text-lg md:text-xl tracking-wide">
              Homens usando o RENOVO
            </p>

            {/* Sub-label */}
            <p className="text-gray-500 text-sm text-center max-w-xs">
              e crescendo a cada dia — junte-se ao movimento.
            </p>

            {/* CTA */}
            <motion.a
              href="#comecar"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3.5 rounded-full text-sm transition-colors duration-200"
            >
              Quero fazer parte
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
