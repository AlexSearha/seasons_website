'use client';
import { menuLinks } from '@/data/menu-data';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import Socials from '../Components/Socials';

const MenuMobile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleCloseMenu = () => {
    if (isOpenMenu) {
      setIsOpenMenu(false);
    }
  };

  const handleToggleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-foreground z-50 shadow-xl shadow-black transition-transform ease-in-out duration-300 ${
          isOpenMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="relative w-full flex flex-col items-center text-lg font-mono gap-4 mt-20">
          {menuLinks.map((menuLink, index) => {
            return (
              <li key={index} className="uppercase">
                <Link
                  className="transition duration-300 ease-in-out text-title hover:text-amber-200"
                  href={menuLink.url}
                  onClick={handleCloseMenu}
                >
                  {menuLink.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center mt-10">
          <Socials />
        </div>
      </div>
      <div className="h-15 p-6 z-50">
        <div
          className={`${isOpenMenu ? 'fixed top-0 right-0 p-6' : 'flex justify-end items-center'}`}
        >
          <FontAwesomeIcon
            icon={isOpenMenu ? faXmark : faBars}
            className={`text-title cursor-pointer transform transition-transform duration-300 ${
              isOpenMenu ? 'rotate-0' : 'rotate-180'
            }`}
            size="2xl"
            onClick={handleToggleOpenMenu}
          />
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
