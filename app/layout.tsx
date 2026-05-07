import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RENOVO — Supere o vício em pornografia",
  description:
    "RENOVO é o app brasileiro que te ajuda a superar o vício em pornografia com ciência, comunidade e propósito.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.className}>
      <body className="bg-navy text-white antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
