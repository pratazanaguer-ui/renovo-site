"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "/sobre", label: "Sobre" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              background:
                "linear-gradient(180deg, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.80) 100%)",
              boxShadow:
                "inset 0 -1px 0 rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.4)",
            }
          : { background: "transparent" }
      }
    >
      {/* Scrolled glow bloom — reflects green accent */}
      {scrolled && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% -10%, rgba(34,197,94,0.10) 0%, transparent 70%)",
          }}
        />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="RENOVO" height={40} width={120} className="object-contain h-10 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="#comecar"
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-green text-navy font-semibold text-sm hover:brightness-110 active:scale-95 transition-all duration-200"
            >
              Baixar o App
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg text-white"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-0.5 bg-current origin-center"
              />
              <motion.span
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
                className="block w-6 h-0.5 bg-current"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-6 h-0.5 bg-current origin-center"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-panel border-t border-white/5"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-slate-300 hover:text-white transition-colors py-1"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="#comecar"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-green text-navy font-semibold text-sm hover:brightness-110 transition-all duration-200"
              >
                Baixar o App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
