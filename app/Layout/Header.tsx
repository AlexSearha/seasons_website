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
                {`Ici s’élève la voix des oubliés, des insurgés qu’on a voulu
                faire taire à coups de canons. Ce projet musical est un cri : celui d’un
                peuple en lutte, d’hommes et de femmes qui ont dressé des
                barricades contre l’injustice. Porté par la musique et la
                puissance du récit, ce voyage musical ranime les braises de 1871
                — là où Paris s’est embrasée pour rêver plus fort.`}
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
