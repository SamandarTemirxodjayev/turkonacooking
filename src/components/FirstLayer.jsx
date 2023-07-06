import React from "react";
import { instagram, telefon, tg, tiktok, youtube } from "../assets/icons";
import { frame1, frame2 } from "../assets/images";

const FirstLayer = () => {
  return (
    <div className="flex lg:flex-row xs:flex-col-reverse xs:pt-10 lg:pt-0 lg:gap-2 text-white lg:ps-16  items-center lg:max-w-screen-lg ">
      <div className="gap-5 lg:flex-col flex before:h-52 before:rounded-lg lg:before:w-1 before:bg-white after:h-52 lg:py-3  after:rounded-lg lg:after:w-1 after:bg-white items-center">
        <a href="https://www.instagram.com/turkona_cooking/">
          <img
            className="w-[60px] h-[32px] object-contain hover:-translate-y-2 transition-all duration-500 "
            src={instagram}
            alt=""
          />
        </a>
        <a href="https://t.me/turkona_cooking">
          <img
            className="w-[32px] h-[32px] object-contain hover:-translate-y-2 transition-all duration-500 "
            src={tg}
            alt=""
          />
        </a>
        <a href="https://www.tiktok.com/@turkonacooking?_t=8dg3gLosz9F&_r=1">
          <img
            className="w-[32px] h-[32px] object-contain hover:-translate-y-2 transition-all duration-500 "
            src={tiktok}
            alt=""
          />
        </a>
        <a href="https://youtube.com/@TurkonaAmilova">
          <img
            className="w-[32px] h-[32px] object-contain hover:-translate-y-2 transition-all duration-500 "
            src={youtube}
            alt=""
          />
        </a>
      </div>
      <div className="font-vollkorn p-5 lg:px-32 lg:max-w-[700px] flex flex-col gap-16 items-start">
        <div className="flex gap-2">
          <h1 className="font-normal xs:text-3xl lg:text-[45px]  ">Amilova</h1>
          <h1 className="font-normal xs:text-3xl lg:text-[45px]  ">Turkona</h1>
        </div>
        <p className="font-verdana lg:text-xl lg:max-w-screen-lg xs:max-w-screen-xs">
          My profession is taking beautiful video with my mobile phone. I want
          share happy moments and beautiful feelings.
        </p>
        <button className="font-inter lg:w-auto xs:w-[100%] lg:bg-secondary lg:text-white xs:bg-white xs:text-secondary mt-6 p-3 border-2 px-10 hover:bg-white hover:text-secondary">
          Hire me
        </button>
      </div>
      <div className="lg:flex xs:hidden justify-between items-center ps-28">
        <img className="w-64 " src={frame1} alt="" />
        <img className="w-[137px] ms-[27.6vh]" src={frame2} alt="" />
      </div>
    </div>
  );
};

export default FirstLayer;
