'use client';
import React from 'react';
import Menu from './MenuDesktop';
import Button from '../Components/Button';
import useSizeDetection from '@/hooks/sizeDetect';

const Header = () => {
  const isMobileWindowsSize = useSizeDetection({});
  return (
    <header id="home" className="h-screen bg-[url(/background_1.webp)] bg-center bg-cover relative">
      <div
        id="bg-overlay"
        className="absolute flex justify-center top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 from-5% via-transparent via-85%"
      >
        <div className="flex flex-col w-full max-w-7xl">
          <Menu />
          <div className="h-title mt-0 md:mt-25 bg-[url(/pattern_old_paper.webp)] bg-clip-text text-transparent bg-cover">
            <div className="flex flex-col items-center w-full md:w-3/5 p-4">
              <h1 className="text-[11rem] md:text-[17rem]">1871</h1>
              <h2 className="-mt-6 md:-mt-10 uppercase text-5xl md:text-7xl">
                Les cendres et le sang
              </h2>
              <p className="bg-black/10 rounded-2xl p-8 text-xl md:text-2xl text-justify font-mono text-amber-100 mt-8">
                <span className="text-4xl md:text-5xl">I</span>ci s&apos;élève la voix d&apos;un
                soldat. Un témoin de l&apos;Histoire qui, malgré le camp qu&apos;il avait choisi, a
                perçu les voix de celles et ceux qu&apos;on a voulu faire taire à coups de canons.
                <br />
                <br />
                Ce projet est un cri : celui d&apos;un peuple en lutte qui a dressé des barricades,
                celui d&apos;un homme qu&apos;on a envoyé tuer ses compatriotes.
                <br />
                <br />
                Porté par la force de la musique et l&apos;intensité du récit, ce voyage ranime les
                braises de <span className="font-bold text-2xl md:text-3xl">1871</span> : la
                sanglante année où Paris s&apos;est embrasée.
              </p>
              <Button
                href="/#ecouter"
                title="Ecouter l'histoire"
                classSup="mt-4 md:mt-20 scale-75 md:scale-100"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
