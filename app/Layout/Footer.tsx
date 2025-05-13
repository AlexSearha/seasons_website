import Socials from "../Components/Socials";
const date = new Date();

const Footer = () => {
  return (
    <section
      id="footer"
      className="relative flex flex-col justify-center items-center py-20 bg-foreground text-amber-100"
    >
      <h1>SEASONS</h1>
      <Socials />
      <p className="flex w-full absolute bottom-0 left-0 pb-4 justify-center text-sm text-title/25 italic">
        ©{date.getFullYear()} Tous droits réservés
      </p>
    </section>
  );
};

export default Footer;
