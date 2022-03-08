/** @format */

import React from 'react';
import portrait from '../assets/shared/desktop/image-best-gear.jpg';

function BestAudio() {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row-reverse  lg:w-[80vw] mx-auto lg:h-[600px]">
      <div className="w-5/6 lg:w-1/2 ">
        <img
          src={portrait}
          alt=""
          className="mx-auto object-cover rounded-lg "
        />
      </div>

      <div className=" text-center w-5/6 mt-10 lg:text-left lg:w-1/2 flex flex-col justify-center items-center lg:pr-32">
        <h1 className=" text-3xl lg:my-auto">
          BRINGING YOU THE <span className="text-orange-400">BEST</span> AUDIO
          GEAR
        </h1>
        <p className="mt-9 mb-32">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default BestAudio;
