'use client';
import './globals.css';
import { ebGarmond, girassol } from '@/Fonts/Fonts';
import { ModalProvider } from '@/providers/ModalProviders';
import QueryProvider from '@/providers/QueryProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ModalProvider>
      <QueryProvider>
        <html lang="fr" className="scroll-smooth">
          <body
            id="body"
            className={`${girassol.variable} ${ebGarmond.variable} antialiased relative`}
          >
            {children}
          </body>
        </html>
      </QueryProvider>
    </ModalProvider>
  );
}
