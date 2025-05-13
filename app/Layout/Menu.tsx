import { menuLinks } from "@/data/menu-data";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex justify-center">
      <ul className="relative flex justify-end items-center text-2xl font-mono gap-8 md:max-w-7xl w-full h-25 px-6">
        {menuLinks.map((menuLink, index) => {
          return (
            <li key={index}>
              <Link
                className="transition duration-300 ease-in-out text-amber-50 hover:text-amber-200"
                href={menuLink.url}
              >
                {menuLink.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
