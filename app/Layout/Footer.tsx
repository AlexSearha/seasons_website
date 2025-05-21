import ParticulesGeneric from '../Components/ParticulesGenerci';
import Socials from '../Components/Socials';
import { TitleH1 } from '../Components/Titles/Titles';
const date = new Date();

const Footer = () => {
  return (
    <section
      id="footer"
      className="relative flex flex-col justify-center items-center py-20 bg-foreground text-amber-100"
    >
      <ParticulesGeneric />
      <TitleH1 title="Seasons" />
      <Socials />
      <p className="flex w-full absolute bottom-0 left-0 pb-4 justify-center text-sm text-title/35 italic">
        ©{date.getFullYear()} Tous droits réservés
      </p>
    </section>
  );
};

export default Footer;
