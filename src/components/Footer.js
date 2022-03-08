/** @format */

import React from 'react';
import logo from '../assets/shared/desktop/logo.svg';
import facebook from '../assets/shared/desktop/icon-facebook.svg';
import twitter from '../assets/shared/desktop/icon-twitter.svg';
import instagram from '../assets/shared/desktop/icon-instagram.svg';

function Footer() {
  return (
    <div className="w-screen h-[654px] bg-black relative">
      <div className="bg-orange-400 h-[4px] w-[100px] mx-auto"></div>
      <div className="flex flex-col items-center mt-14 ">
        <img src={logo} alt="" className=" mb-10" />
        <h1 className="text-white font-bold mb-4 cursor-pointer">HOME</h1>
        <h1 className="text-white font-bold mb-4 cursor-pointer">HEADPHONES</h1>
        <h1 className="text-white font-bold mb-4 cursor-pointer">SPEAKERS</h1>
        <h1 className="text-white font-bold cursor-pointer mb-12">EARPHONES</h1>
      </div>

      <div className="text-white w-5/6 text-center mx-auto">
        <p className="mb-12">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <p className="mb-12">Copyright 2021. All Rights Reserved</p>
      </div>

      <div className="flex flex-row items-center w-28 justify-between mx-auto">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
      </div>
    </div>
  );
}

export default Footer;
