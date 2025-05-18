'use client';
import { ModalProvider } from '@/providers/ModalProviders';
import APropos from './Layout/APropos';
import Contact from './Layout/Contact';
import Ecouter from './Layout/Ecouter';
import Evenements from './Layout/Evenements';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Projet from './Layout/Projet';
import ModalGeneric from './Components/ModalGeneric';

const Main = () => {
  return (
    <ModalProvider>
      <Header />
      <main id="main" className="flex justify-center py-15 bg-title">
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
    </ModalProvider>
  );
};

export default Main;
