"use client";

import { useState } from "react";
import Brand from "./Brand";
import NavLinks from "./NavLinks";
import MenuIcon from "./MenuIcon";
import AsideLinks from "./AsideLinks";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <header className="w-full fixed top-0 z-50 h-17.5 bg-[#1e488f]">
        <div className="w-full h-full flex flex-row justify-evenly items-center relative">
          <Brand />
          <NavLinks />
          <MenuIcon openMenu={openMenu} />
        </div>
      </header>
      <AsideLinks menuOpen={menuOpen} closeMenu={closeMenu} />
    </>
  );
};

export default NavBar;
