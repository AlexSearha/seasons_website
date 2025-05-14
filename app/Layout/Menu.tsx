import { menuLinks } from "@/data/menu-data";
import Link from "next/link";

const Menu = () => {
  return (
    <ul className="relative w-full flex justify-end items-center text-xl font-mono gap-8 h-25 px-6">
      {menuLinks.map((menuLink, index) => {
        return (
          <li key={index} className="uppercase">
            <Link
              className="transition duration-300 ease-in-out text-title hover:text-amber-200"
              href={menuLink.url}
            >
              {menuLink.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
