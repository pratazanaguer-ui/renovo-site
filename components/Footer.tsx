"use client";

import Link from "next/link";
import Image from "next/image";

const nav = [
  {
    heading: "Sobre",
    links: [
      { label: "O que é o RENOVO", href: "#" },
      { label: "Como funciona",    href: "#como-funciona" },
      { label: "Funcionalidades",  href: "#funcionalidades" },
      { label: "Benefícios",       href: "#" },
      { label: "Blog",             href: "#" },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { label: "Sobre nós",         href: "/sobre" },
      { label: "Trabalhe conosco",  href: "/trabalhe-conosco" },
      { label: "Suporte",           href: "/suporte" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Termos de Uso",           href: "/termos-de-uso" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Termos de Assinatura",    href: "/termos-de-assinatura" },
    ],
  },
  {
    heading: "Redes Sociais",
    links: [
      { label: "Instagram", href: "#" },
      { label: "TikTok",    href: "#" },
      { label: "YouTube",   href: "#" },
      { label: "X",         href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#080808" }} className="pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 pb-16 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>

          {/* Left: logo + tagline + store buttons */}
          <div className="flex flex-col gap-6">
            <Image src="/logo.png" alt="RENOVO" width={120} height={40} className="object-contain h-10 w-auto" />
            <p className="text-white/40 text-sm leading-relaxed max-w-[180px]">
              O aplicativo brasileiro para se libertar do vício em pornografia.
            </p>
            {/* App Store */}
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl w-fit transition-colors"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-white/50 text-[9px] uppercase tracking-wider">Baixar na</span>
                  <span className="text-white font-semibold text-sm">App Store</span>
                </div>
              </a>
              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl w-fit transition-colors"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.76c.3.17.64.24.99.2L15.34 12 11.52 8.18 3.18 23.76z" fill="#EA4335"/>
                  <path d="M20.47 10.27L17.3 8.48l-3.54 3.54 3.54 3.54 3.2-1.8c.91-.51.91-1.99-.03-2.49z" fill="#FBBC05"/>
                  <path d="M3.18.24C2.83.2 2.49.27 2.19.44L13.76 12 17.3 8.48 4.17.44c-.3-.17-.67-.24-.99-.2z" fill="#4285F4"/>
                  <path d="M2.19 23.56c.3.17.64.24.99.2l13.12-8.04-3.54-3.54L2.19 23.56z" fill="#34A853"/>
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-white/50 text-[9px] uppercase tracking-wider">Disponível no</span>
                  <span className="text-white font-semibold text-sm">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {nav.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <span className="text-white font-bold text-sm">{col.heading}</span>
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-white/40 text-sm hover:text-white/70 transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="py-5 flex items-center justify-between flex-wrap gap-3">
          <span className="text-white/25 text-xs">© {new Date().getFullYear()} RENOVO. Todos os direitos reservados.</span>
          <span className="text-white/20 text-xs">Feito no Brasil 🇧🇷</span>
        </div>
      </div>

      {/* Big brand name */}
      <div
        className="w-full overflow-hidden select-none pointer-events-none"
        style={{ marginTop: -8 }}
      >
        <p
          className="text-center font-black leading-none tracking-tighter"
          style={{
            fontSize: "clamp(80px, 18vw, 260px)",
            color: "rgba(255,255,255,0.04)",
            letterSpacing: "-0.03em",
          }}
        >
          RENOVO
        </p>
      </div>
    </footer>
  );
}
