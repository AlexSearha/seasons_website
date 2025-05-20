import './globals.css';
import { ebGarmond, girassol } from '@/Fonts/Fonts';
import MainProvider from '@/providers/MainProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seasons Novel | 1871 : Les Cendres et le Sang',
  description:
    'Entre tambours de guerre et murmures de doute, une fresque musicale qui donne vie aux cicatrices de l’Histoire.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainProvider>
      <html lang="fr" className="scroll-smooth">
        <body id="body" className={`${girassol.variable} ${ebGarmond.variable} antialiased`}>
          {children}
        </body>
      </html>
    </MainProvider>
  );
}
