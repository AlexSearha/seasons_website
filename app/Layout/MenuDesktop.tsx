import { menuLinks } from '@/data/menu-data';
import Link from 'next/link';

const MenuDesktop = () => {
  return (
    <ul className="relative w-full flex justify-end items-center text-lg fhd:text-xl 2k:text-2xl 4k:text-3xl font-mono gap-8 4k:gap-12 h-25 px-6">
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

export default MenuDesktop;
