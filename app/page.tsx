'use client';
import APropos from './Layout/APropos';
import Contact from './Layout/Contact';
import Ecouter from './Layout/Ecouter';
import Evenements from './Layout/Evenements';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Projet from './Layout/Projet';
import ModalGeneric from './Components/ModalGeneric';
import ButtonHome from './Components/ButtonHome';

const Main = () => {
  return (
    <div className="relative z-0">
      <Header />
      <main id="main" className="flex justify-center py-15 bg-texture">
        <div id="main-content" className="max-w-7xl w-full">
          <Projet />
          <APropos />
          <Ecouter />
          <Evenements />
          <Contact />
        </div>
      </main>
      <Footer />
      <ModalGeneric />
      <ButtonHome />
    </div>
  );
};

export default Main;
