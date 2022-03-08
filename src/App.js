/** @format */

import './App.css';
import Header from './components/Header';
import Category from './components/Category';

import mobileBannerImage from './assets/home/mobile/image-header.jpg';
import desktopBannerImage from './assets/home/desktop/image-hero.jpg';
import BestAudio from './components/BestAudio';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

      {/* Banner Image Mobile*/}
      <div className="relative w-screen mx-auto md:hidden items-center flex flex-col">
        <div className="absolute flex flex-col items-center text-center top-24 mx-16">
          <h2 className=" text-gray-400 tracking-[10px] text-sm  mb-4">
            NEW PRODUCT
          </h2>
          <h1 className="text-white text-5xl font-extrabold tracking-[2px] mb-6">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-white leading-6 mb-7">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="text-white px-7 py-4 bg-orange-400 font-bold tracking-wider">
            SEE PRODUCT
          </button>
        </div>
        <img
          src={mobileBannerImage}
          className="object-contain max-2-screen"
          alt=" "
        />
      </div>

      {/* banner Image desktop */}
      <div className="hidden relative w-screen mx-auto md:flex flex-col">
        <div className="absolute flex flex-col  items-start text-left top-24 mx-16 w-1/3">
          <h2 className=" text-gray-400 tracking-[10px] text-sm  mb-4">
            NEW PRODUCT
          </h2>
          <h1 className="text-white text-5xl font-extrabold tracking-[2px] mb-6">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-white leading-6 mb-7">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="text-white px-7 py-4 bg-orange-400 font-bold tracking-wider">
            SEE PRODUCT
          </button>
        </div>
        <img
          src={desktopBannerImage}
          className="object-contain w-screen"
          alt=" "
        />
      </div>

      <Category />
      {/* Heros */}
      <BestAudio />
      <Footer />
    </div>
  );
}

export default App;
