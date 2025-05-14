import React from "react";
import Menu from "./Menu";
import Button from "../Components/Button";

const Header = () => {
  return (
    <header
      id="home"
      className="h-screen bg-[url(/background_1.webp)] bg-center bg-cover relative"
    >
      <div
        id="bg-overlay"
        className="absolute flex justify-center top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 from-5% via-transparent via-85%"
      >
        <div className="flex flex-col w-full max-w-7xl">
          <Menu />
          <div className="h-title mt-25 bg-[url(/pattern_old_paper.webp)] bg-clip-text text-transparent bg-cover">
            <div className="flex flex-col items-center w-3/5">
              <p className="md:text-[18rem]">1871</p>
              <h1 className="-mt-10 uppercase">Les cendres et le sang</h1>
              <p className="bg-black/10 rounded-3xl p-10 text-lg md:text-2xl text-justify font-mono text-amber-100 mt-8">
                Ici résonne la voix d&apos;un témoin. Celle d&apos;un soldat
                envoyé pour faire taire les insurgés, mais qui, au fil des
                flammes et des balles, vacille entre devoir et doute.
                <br />
                Ce projet musical est un cri — pas celui des vainqueurs, mais
                celui d&apos;un homme confronté à la guerre fratricide. Porté
                par la force du récit et la puissance de la musique, ce voyage
                ranime les braises de 1871,{" "}
                <span className="font-bold">
                  là où Paris s&apos;est consumée dans le feu de ses
                  contradictions.
                </span>
              </p>
              <Button
                href="https://www.google.com"
                title="Ecouter l'histoire"
                classSup="mt-20"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
