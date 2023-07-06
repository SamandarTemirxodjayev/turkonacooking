import React from "react";
import { turkona } from "../assets/images";

const ThirdLayer = () => {
  return (
    <div className="font-verdana py-10 lg:px-64  flex lg:flex-row xs:flex-col gap-10 justify-center bg-white items-center xs:px-6">
      <img className="lg:w-[355px] w-[100%] " src={turkona} alt="" />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="font-[1000] font-verdana xs:text-[20px] lg:text-[28px] pb-6 tracking-[0.40px]  ">
            About me
          </p>
          <p className="font-verdana font-normal xs:text-sm lg:text-base">
            I think I am a good humored, very responsible, hard working and
            emotional person. I like creativity and appreciate this feeling in
            others.
          </p>
          <p className="font-verdana font-normal xs:text-sm lg:text-base">
            I don’t like to be and I feel when others do. I try not to be late
            and I hate when others don’t come on time. I prefer to associate
            with clever and polite people. It is very annoying when somebody who
            I trust turns out to be unreliable.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <b className="font-verdana xs:text-[20px] lg:text-[28px] pb-6 tracking-[0.40px]  ">
            My favourite hobbies{" "}
          </b>
          <div className="flex flex-col gap-2 lg:text-base xs:text-sm">
            <h1 className="circle">Making delicious food</h1>
            <h1 className="circle">Travelling</h1>
            <h1 className="circle">Walking</h1>
            <h1 className="circle">Making amazing videos with my phone</h1>
            <h1 className="circle">Wild animals</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdLayer;
