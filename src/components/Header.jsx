import React from "react";
import { logo } from "../assets/images";
import { telefon } from "../assets/icons";

const Header = () => {
  return (
    <>
      <div className="flex items-center lg:px-44 py-5 xs:justify-around lg:justify-between">
        <img className="w-40 " src={logo} alt="" />
        <div className="flex lg:gap-20">
          <a href="tel:+998909355905" className="lg:flex xs:hidden gap-2 items-center text-white font-poppins ">
            <img src={telefon} className="w-6" alt="" />
            <h1>+998 90 935-59-05</h1>
          </a>
          <div className="gap-2 flex items-end font-poppins text-[#ffffff60]  text-base font-medium">
            <h1>UZ</h1>
            <h1 className="text-xl text-white ">EN</h1>
            <h1>RU</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
