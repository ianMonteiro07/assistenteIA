import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Assistente Financeiro IA",
  description: "Sua inteligência. Suas finanças. Nosso controle. Tenha um assistente financeiro disponível 24 horas por dia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-af-black text-af-silver selection:bg-af-green selection:text-black">
        {children}
      </body>
    </html>
  );
}