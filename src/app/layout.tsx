import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Meu Portfólio | Web Developer",
  description: "Transformando ideias em soluções digitais inovadoras e funcionais. Confira meus projetos e entre em contato para desenvolver algo incrível juntos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-montserrat  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
