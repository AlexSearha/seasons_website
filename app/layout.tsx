import type { Metadata } from "next";
import "./globals.css";
import { ebGarmond, girassol } from "@/Fonts/Fonts";
import ButtonHome from "./Components/ButtonHome";

export const metadata: Metadata = {
  title: "Seasons Novel | GUERRE",
  description:
    "Entre tambours de guerre et murmures de doute, une fresque musicale qui donne vie aux cicatrices de l’Histoire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${girassol.variable} ${ebGarmond.variable} antialiased relative`}
      >
        {children}
        <ButtonHome />
      </body>
    </html>
  );
}
