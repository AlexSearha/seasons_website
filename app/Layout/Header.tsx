'use client';
import React from 'react';
import Button from '../Components/Button';
import useSizeDetection from '@/hooks/sizeDetect';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import ParagrapheSpace from '../Components/ParagrapheSpace';
import ParticulesGeneric from '../Components/ParticulesGeneric';

const Header = () => {
  const isMobileWindowsSize = useSizeDetection({});
  return (
    <header
      id="home"
      className="relative h-auto fhd:h-screen bg-[url('/background_1.webp')] bg-cover bg-position-[59%,41%] md:bg-center bg-no-repeat flex justify-center"
    >
      <div
        id="bg-overlay"
        className="absolute top-0 left-0 w-full h-full  bg-gradient-to-b from-black from-5% via-transparent via-85% z-10"
      ></div>
      <ParticulesGeneric classname="pointer-events-none" />
      <div className="relative flex flex-col z-20 mb-15 h-auto w-full hd:max-w-6xl fhd:max-w-7xl 4k:max-w-[130rem]">
        {isMobileWindowsSize ? <MenuMobile /> : <MenuDesktop />}
        <div className="h-title mt-0 md:mt-25 bg-[url(/pattern_old_paper.webp)] bg-clip-text text-transparent bg-cover">
          <div className="flex flex-col items-center w-full md:w-3/5 p-4">
            <h1 className="-mt-10 text-[8rem] hd:text-[10rem] fhd:text-[13rem] 2k:text-[16rem] 4k:text-[25rem]">
              1871
            </h1>
            <h2 className="-mt-6 md:-mt-10 uppercase text-2xl hd:text-6xl 2k:text-7xl 4k:text-9xl">
              Les cendres et le sang
            </h2>
            <p className="bg-black/10 rounded-2xl p-3 fhd:p-6 text-lg md:text-xl 2xl:text-2xl 4k:text-5xl text-justify font-mono text-amber-100 mt-8">
              <span className="text-4xl md:text-5xl 2xl:text-6xl">I</span>ci s&apos;élève la voix
              d&apos;un soldat. Un témoin de l&apos;Histoire qui, malgré le camp qu&apos;il avait
              choisi, a perçu les voix de celles et ceux qu&apos;on a voulu faire taire à coups de
              canons.
              <ParagrapheSpace />
              Ce projet est un cri : celui d&apos;un peuple en lutte qui a dressé des barricades,
              celui d&apos;un homme qu&apos;on a envoyé tuer ses compatriotes.
              <ParagrapheSpace />
              Porté par la force de la musique et l&apos;intensité du récit, ce voyage ranime les
              braises de <span className="font-bold text-2xl 2xl:text-3xl">1871</span> : la
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

      {/* </div> */}
    </header>
  );
};

export default Header;
