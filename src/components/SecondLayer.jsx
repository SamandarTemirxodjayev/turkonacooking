import React from "react";
import Loader from "../components/Loader";
import video1 from "../assets/videos/IMG_6424 (1) (1).mp4";
import video2 from "../assets/videos/IMG_7963 (1).mp4";
import video3 from "../assets/videos/IMG_8028 (1).mp4";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
const SecondLayer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col bg-white justify-center items-center py-4 font-normal">
      <h1 className="font-verdana xs:text-[24px] lg:text-[32px] py-8">
        {t("second-layer")}
      </h1>
      <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-6 xs:px-6 lg:px-0">
        <div className="lg:w-[320px] xs:w-[100%] lg:h-[569px] lg:rounded-[32px]">
          {/* Video 1 */}
          <LazyLoadComponent effect="blur">
            <iframe
              style={{width: "100%", height: "568px", }}
              src="https://www.youtube.com/embed/j5KK7L3YU3w?playlist=j5KK7L3YU3w&loop=1&autoplay=1&controls=0&&showinfo=0&autohide=1&mute=1"
              title="Qisqacha men haqimda"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </LazyLoadComponent>
        </div>
        <div className="lg:w-[320px] xs:w-[100%] lg:h-[569px] lg:rounded-[32px]">
          {/* Video 1 */}
          <LazyLoadComponent effect="blur">
            <iframe
              style={{ width: "100%", height: "568px", }}
              src="https://www.youtube.com/embed/HTY9klHu1Pk?playlist=HTY9klHu1Pk&loop=1&autoplay=1&controls=0&&showinfo=0&autohide=1&mute=1"
              title="#asmr muzqaymoq"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </LazyLoadComponent>
        </div>
        <div className="lg:w-[320px] xs:w-[100%] lg:h-[569px] ">
          {/* Video 1 */}
          <LazyLoadComponent effect="blur">
            <iframe
              style={{ width: "100%", height: "568px",rounded: "32px" }}
              src="https://www.youtube.com/embed/xmFRRtmtpAc?playlist=xmFRRtmtpAc&loop=1&autoplay=1&controls=0&&showinfo=0&autohide=1&mute=1"
              title="Qisqacha men haqimda"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </LazyLoadComponent>
        </div>
      </div>
    </div>
  );
};

export default SecondLayer;
