import APropos from "./Layout/APropos";
import Ecouter from "./Layout/Ecouter";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Projet from "./Layout/Projet";

function Main() {
  return (
    <>
      <Header />
      <main id="main" className="flex justify-center py-15">
        <div id="main-content" className="max-w-7xl w-full">
          <Projet />
          <APropos />
          <Ecouter />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Main;
