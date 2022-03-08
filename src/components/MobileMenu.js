/** @format */

import React from 'react';

import headphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import arrowRight from '../assets/shared/desktop/icon-arrow-right.svg';
import speaker from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphones from '../assets/shared/desktop/image-category-thumbnail-earphones.png';

function MobileMenu() {
  return (
    <div>
      {/* Mobile contianer */}
      <div className=" bg-white mb-20 w-screen absolute z-10 left-0 flex flex-col justify-center items-center mt-6 shadow-2xl">
        {/* Headphones */}
        <div className="relative bg-gray-100 w-[80vw] pt-20 pb-6 rounded-lg flex flex-col justify-center items-center mt-28">
          <img src={headphones} className="absolute w-44 h-auto bottom-20" />

          <div className="items-center flex flex-col">
            <h1 className="mb-4 font-bold text-black">HEADPHONES</h1>
            <div className="flex flex-row items-center cursor-pointer">
              <p className=" text-gray-400">SHOP</p>
              <img src={arrowRight} className="h-3 ml-2" />
            </div>
          </div>
        </div>

        {/* Speakers */}
        <div className="relative bg-gray-100 w-[80vw] pt-20 pb-6 rounded-lg flex flex-col justify-center items-center mt-28 mx-6">
          <img src={speaker} className="absolute w-44 h-auto bottom-20" />

          <div className="items-center flex flex-col">
            <h1 className="mb-4 font-bold text-black">SPEAKERS</h1>
            <div className="flex flex-row items-center cursor-pointer">
              <p className=" text-gray-400">SHOP</p>
              <img src={arrowRight} className="h-3 ml-2" />
            </div>
          </div>
        </div>

        {/* Earphones */}
        <div className="relative bg-gray-100 w-[80vw] pt-20 pb-6 rounded-lg flex flex-col justify-center items-center mt-28 mb-12">
          <img src={earphones} className="absolute w-44 h-auto bottom-20" />

          <div className="items-center flex flex-col">
            <h1 className="mb-4 font-bold text-black">EARPHONES</h1>
            <div className="flex flex-row items-center cursor-pointer">
              <p className=" text-gray-400">SHOP</p>
              <img src={arrowRight} className="h-3 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
