/** @format */

import React from 'react';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from '../assets/shared/desktop/logo.svg';
import { useState } from 'react';

import MobileMenu from './MobileMenu';
import Cart from './Cart';

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  return (
    <div className=" bg-black flex justify-between px-6 py-8 items-center w-screen">
      {/* Left */}
      <div className=" lg:hidden">
        <MenuRoundedIcon
          className="text-white cursor-pointer"
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        {toggleMenu && <MobileMenu />}
      </div>

      {/* Middle */}
      <div>
        <img src={logo} />
      </div>

      <div className="hidden lg:flex">
        <div className="text-white list-none font-bold tracking-widest flex-row flex ">
          <li className="mx-9">HOME</li>
          <li className="mx-9">HEADPHONES</li>
          <li className="mx-9">SPEAKERS</li>
          <li className="mx-9">EARPHONES</li>
        </div>
      </div>

      {/* Right */}
      <div className=" text-white">
        <ShoppingCartOutlinedIcon onClick={() => setToggleCart(!toggleCart)} />
        {toggleCart && <Cart />}
      </div>
    </div>
  );
}

export default Header;
