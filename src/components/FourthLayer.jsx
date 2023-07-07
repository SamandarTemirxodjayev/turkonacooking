import React from "react";
import { product1, product2, product3, product4 } from "../assets/images";
import { useTranslation } from "react-i18next";

const FourthLayer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col py-6 bg-white justify-center items-center">
      <h1 className="font-verdana xs:text-[24px] lg:text-[32px] py-8">
        {t("fourth-layer")}
      </h1>
      <div className="grid xs:grid-cols-2 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-28  lg:py-28 xs:py-10  xs:gap-x-8 xs:px-6 lg:px-0 xs:gap-y-24 ">
        <div className="  xs:h-[100px] lg:w-[290px] lg:h-[290px] rounded-[24px] shadow-xl hover-cont object-cover">
          <img
            className="image rounded-[24px]  xs:h-[100px] lg:w-[290px] lg:h-[290px] object-cover"
            src="https://video-psi-mocha.vercel.app/IMG_0322.jpg"
            alt=""
          />
          <div className="meals flex   rounded-b-[24px] shadow-lg py-2 justify-center font-verdana font-bold lg:text-[32px] relative bottom-[65px] -z-10 transition-all ease-in-out duration-700">
            Pahlava
          </div>
        </div>
        <div className="  xs:h-[100px] lg:w-[290px] lg:h-[290px] rounded-[24px] shadow-xl hover-cont object-cover">
          <img
            className="image rounded-[24px]  xs:h-[100px] lg:w-[290px] lg:h-[290px] object-cover"
            src="https://video-psi-mocha.vercel.app/-2147483648_-212087.jpg"
            alt=""
          />
          <div className="meals flex   rounded-b-[24px] shadow-lg py-2 justify-center font-verdana font-bold lg:text-[32px] relative bottom-[65px] -z-10 transition-all ease-in-out duration-700">
            Keks lotus
          </div>
        </div>
        <div className="  xs:h-[100px] lg:w-[290px] lg:h-[290px] rounded-[24px] shadow-xl hover-cont object-cover">
          <img
            className="image rounded-[24px]  xs:h-[100px] lg:w-[290px] lg:h-[290px] object-cover"
            src="https://video-psi-mocha.vercel.app/-2147483648_-212095.jpg"
            alt=""
          />
          <div className="meals flex   rounded-b-[24px] shadow-lg py-2 justify-center font-verdana font-bold lg:text-[32px] relative bottom-[65px] -z-10 transition-all ease-in-out duration-700">
            Baqlajonli salat
          </div>
        </div>
        <div className="  xs:h-[100px] lg:w-[290px] lg:h-[290px] rounded-[24px] shadow-xl hover-cont object-cover">
          <img
            className="image rounded-[24px]  xs:h-[100px] lg:w-[290px] lg:h-[290px] object-cover"
            src="https://video-psi-mocha.vercel.app/IMG_1463.JPG"
            alt=""
          />
          <div className="meals flex   rounded-b-[24px] shadow-lg py-2 justify-center font-verdana font-bold lg:text-[32px] relative bottom-[65px] -z-10 transition-all ease-in-out duration-700">
            Pizza
          </div>
        </div>
        <div className="  xs:h-[100px] lg:w-[290px] lg:h-[290px] rounded-[24px] shadow-xl hover-cont object-cover">
          <img
            className="image rounded-[24px]  xs:h-[100px] lg:w-[290px] lg:h-[290px] object-cover"
            src="https://video-psi-mocha.vercel.app/IMG_7292.JPG"
            alt=""
          />
          <div className="meals flex   rounded-b-[24px] shadow-lg py-2 justify-center font-verdana font-bold lg:text-[32px] relative bottom-[65px] -z-10 transition-all ease-in-out duration-700">
            Ekler
          </div>
        </div>
        <div className="  xs:h-[100px] lg:w-[290px] lg:h-[290px] rounded-[24px] shadow-xl hover-cont object-cover">
          <img
            className="image rounded-[24px]  xs:h-[100px] lg:w-[290px] lg:h-[290px] object-cover"
            src="https://video-psi-mocha.vercel.app/IMG_7293.JPG"
            alt=""
          />
          <div className="meals flex   rounded-b-[24px] shadow-lg py-2 justify-center font-verdana font-bold lg:text-[32px] relative bottom-[65px] -z-10 transition-all ease-in-out duration-700">
            Tartaletki
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthLayer;
