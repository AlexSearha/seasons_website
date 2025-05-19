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

// export const metadata: Metadata = {
//   title: 'Seasons Novel | 1871 : Les Cendres et le Sang',
//   description:
//     'Entre tambours de guerre et murmures de doute, une fresque musicale qui donne vie aux cicatrices de l’Histoire.',
// };

const Main = () => {
  return (
    <>
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
      <ButtonHome />
    </>
  );
};

export default Main;
