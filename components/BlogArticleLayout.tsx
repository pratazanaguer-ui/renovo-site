"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export type Section = {
  id: string;
  heading: string;
  content: React.ReactNode;
};

export type RelatedArticle = {
  title: string;
  image: string;
  href: string;
};

type Props = {
  title: string;
  heroImage: string;
  readTime: string;
  date: string;
  intro: string;
  sections: Section[];
  related: RelatedArticle[];
};

export default function BlogArticleLayout({ title, heroImage, readTime, date, intro, sections, related }: Props) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-25% 0px -65% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#080808", minHeight: "100vh" }}>

        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ height: "clamp(280px, 42vw, 500px)" }}>
          <img src={heroImage} alt={title} className="w-full h-full object-cover object-center" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(8,8,8,0.25) 0%, rgba(8,8,8,0.65) 55%, #080808 100%)" }}
          />
          <div className="absolute bottom-0 inset-x-0 pb-10 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4 text-white/40 text-xs">
                <Link href="/" className="hover:text-white/60 transition-colors">Início</Link>
                <span>/</span>
                <Link href="/#blog" className="hover:text-white/60 transition-colors">Blog</Link>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl"
              >
                {title}
              </motion.h1>
              <div className="flex items-center gap-4 mt-4 text-white/40 text-xs">
                <span>{date}</span>
                <span>·</span>
                <span>{readTime} de leitura</span>
                <span>·</span>
                <span className="text-green-500/70 font-semibold">RENOVO Blog</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-16">

            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-white/30 text-[10px] font-bold tracking-widest uppercase mb-4">Neste artigo</p>
                <nav className="flex flex-col gap-0.5">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="text-[13px] py-1.5 px-3 rounded-lg transition-all duration-200 leading-snug"
                      style={{
                        color: activeSection === s.id ? "#22c55e" : "rgba(255,255,255,0.35)",
                        background: activeSection === s.id ? "rgba(34,197,94,0.08)" : "transparent",
                        borderLeft: `2px solid ${activeSection === s.id ? "#22c55e" : "transparent"}`,
                      }}
                    >
                      {s.heading}
                    </a>
                  ))}
                </nav>

                {/* Sidebar CTA */}
                <div
                  className="mt-10 rounded-2xl p-5 flex flex-col gap-3"
                  style={{ background: "linear-gradient(135deg, #0d1f12, #071a0e)", border: "1px solid rgba(34,197,94,0.2)" }}
                >
                  <p className="text-white font-black text-sm leading-tight">Pronto para se libertar?</p>
                  <p className="text-white/50 text-xs leading-relaxed">O RENOVO te acompanha em cada passo da jornada.</p>
                  <a
                    href="#comecar"
                    className="w-full text-center py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-black font-black text-xs transition-colors duration-200"
                  >
                    Baixar o RENOVO
                  </a>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article>
              {/* Intro paragraph */}
              <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-14 font-medium border-l-2 border-green-500/40 pl-5">
                {intro}
              </p>

              <div className="flex flex-col gap-14">
                {sections.map((s, i) => (
                  <div key={s.id}>
                    <section id={s.id}>
                      <h2 className="text-xl md:text-2xl font-black text-white mb-5 flex items-start gap-3">
                        <span
                          className="text-green-500 font-black flex-shrink-0 mt-0.5"
                          style={{ fontSize: 12, letterSpacing: "0.05em", minWidth: 24 }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.heading}
                      </h2>
                      <div className="text-gray-400 leading-relaxed text-base space-y-4">
                        {s.content}
                      </div>
                    </section>

                    {/* Inline CTA after section 3 */}
                    {i === 2 && (
                      <div
                        className="mt-10 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
                        style={{ background: "linear-gradient(135deg, #0d1f12, #071a0e)", border: "1px solid rgba(34,197,94,0.18)", boxShadow: "0 0 40px rgba(34,197,94,0.05)" }}
                      >
                        <div className="flex-1">
                          <p className="text-white font-black text-base">Não enfrente isso sozinho.</p>
                          <p className="text-white/50 text-sm mt-1 leading-relaxed">
                            O RENOVO foi construído para este momento exato — com ferramentas para o impulso, o terapeuta Luigi disponível 24h e uma comunidade que entende você.
                          </p>
                        </div>
                        <a
                          href="#comecar"
                          className="flex-shrink-0 px-6 py-3 rounded-full bg-green-500 hover:bg-green-400 text-black font-black text-sm transition-colors duration-200 whitespace-nowrap"
                          style={{ boxShadow: "0 0 24px rgba(34,197,94,0.3)" }}
                        >
                          Experimentar grátis
                        </a>
                      </div>
                    )}

                    {/* Divider between sections */}
                    {i < sections.length - 1 && (
                      <div className="mt-14 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div
                className="mt-16 rounded-3xl px-8 py-12 text-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0d1f12 0%, #071a0e 40%, #050f08 100%)", border: "1px solid rgba(34,197,94,0.18)", boxShadow: "0 0 80px rgba(34,197,94,0.06)" }}
              >
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 110%, rgba(34,197,94,0.15) 0%, transparent 65%)" }} />
                <div className="relative z-10">
                  <p className="text-green-500 text-xs font-bold tracking-widest uppercase mb-3">COMECE HOJE</p>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                    Torne-se a versão que você sempre foi
                  </h3>
                  <p className="text-white/50 text-sm mb-7 max-w-md mx-auto leading-relaxed">
                    Cada dia limpo é um tijolo. O RENOVO está aqui para que você não precise construir sozinho.
                  </p>
                  <a
                    href="#comecar"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-green-500 hover:bg-green-400 text-black font-black text-sm transition-colors duration-200"
                    style={{ boxShadow: "0 0 32px rgba(34,197,94,0.4)" }}
                  >
                    Quero me libertar agora
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <div className="mt-24 pt-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <h2 className="text-xl font-black text-white mb-8">Leia também</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="group flex flex-col rounded-2xl overflow-hidden"
                    style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.7) 100%)" }} />
                    </div>
                    <div className="px-4 py-4">
                      <p className="text-white font-bold text-sm leading-snug group-hover:text-green-400 transition-colors duration-200">
                        {r.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
