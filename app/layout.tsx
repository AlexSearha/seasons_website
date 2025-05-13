import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "@/Fonts/Fonts";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
