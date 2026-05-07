"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const articles = [
  {
    image: "/blog-ajudar.png",
    title: "Como parar o vício em pornografia",
    slug: "/blog/como-parar-o-vicio-em-pornografia",
  },
  {
    image: "/blog-beneficios.png",
    title: "Como superar o vício em pornografia e se livrar totalmente",
    slug: "/blog/como-superar-o-vicio-em-pornografia",
  },
  {
    image: "/blog-parar.png",
    title: "Como ajudar alguém com vício em pornografia",
    slug: "/blog/como-ajudar-alguem-com-vicio-em-pornografia",
  },
  {
    image: "/blog-superar.png",
    title: "Descubra os benefícios completos de parar com o vício — etapa por etapa na jornada",
    slug: "/blog/beneficios-de-parar-com-pornografia",
  },
];

function ArticleCard({ article, index }: { article: (typeof articles)[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href={article.slug}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay: (index % 2) * 0.1 }}
      whileHover="hover"
      className="group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: "#111",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <motion.img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover object-center"
          variants={{ hover: { scale: 1.05 } }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* Dark gradient over image bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.7) 100%)",
          }}
        />
        {/* Green glow on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(34,197,94,0.18) 0%, transparent 70%)" }}
          variants={{ hover: { opacity: 1 } }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Title */}
      <div className="px-5 py-5 flex items-start justify-between gap-3">
        <h3 className="text-white font-black text-base md:text-lg leading-snug flex-1">
          {article.title}
        </h3>
        {/* Arrow */}
        <motion.div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
          style={{ background: "rgba(255,255,255,0.07)" }}
          variants={{ hover: { background: "rgba(34,197,94,0.25)", x: 2 } }}
          transition={{ duration: 0.2 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
}

export default function BlogGuide() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const btnRef = useRef<HTMLDivElement>(null);
  const btnInView = useInView(btnRef, { once: true, margin: "-40px" });

  return (
    <section style={{ backgroundColor: "#080808" }} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div
            className="inline-block px-4 py-2 rounded-full text-white/60 text-xs font-semibold mb-6"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            Do Blog
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Guia sobre o{" "}
            <span className="text-green-400">vício em pornografia</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Entenda o vício, identifique os padrões e aprenda a se libertar de vez.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {articles.map((article, i) => (
            <ArticleCard key={i} article={article} index={i} />
          ))}
        </div>

        {/* Read more button */}
        <motion.div
          ref={btnRef}
          initial={{ opacity: 0, y: 20 }}
          animate={btnInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center mt-10"
        >
          <motion.a
            href="/blog/como-parar-o-vicio-em-pornografia"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-3.5 rounded-full text-white font-bold text-sm transition-colors duration-200"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            Ver mais artigos
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
