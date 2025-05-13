import { menuLinks } from "@/data/menu-data";
import Link from "next/link";

const Menu = () => {
  return (
    <ul className="flex gap-2 justify-center w-full bg-pink-300 px-12 relative">
      {menuLinks.map((menuLink, index) => {
        return (
          <li key={index}>
            <Link href={menuLink.url}>{menuLink.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
