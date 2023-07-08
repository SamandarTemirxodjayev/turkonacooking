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
            <video
              preload={
                <div className="w-[100%] h-[100%] flex items-center justify-center relative top-56">
                  <Loader />
                </div>
              }
              controls
              autoPlay
              muted
              loop
              className="object-contain
            rounded-[24px]"
            >
              <source src={video1} type="video/mp4" />
            </video>
          </LazyLoadComponent>
        </div>
        <div className="lg:w-[320px] xs:w-[100%] lg:h-[569px] lg:rounded-[32px]">
          {/* Video 1 */}
          <LazyLoadComponent effect="blur">
            <video
              preload={
                <div className="w-[100%] h-[100%] flex items-center justify-center relative top-56">
                  <Loader />
                </div>
              }
              controls
              autoPlay
              muted
              loop
              className="object-contain
            rounded-[24px]"
            >
              <source src={video2} type="video/mp4" />
            </video>
          </LazyLoadComponent>
        </div>
        <div className="lg:w-[320px] xs:w-[100%] lg:h-[569px] lg:rounded-[32px]">
          {/* Video 1 */}
          <LazyLoadComponent effect="blur">
            <video
              preload={
                <div className="w-[100%] h-[100%] flex items-center justify-center relative top-56">
                  <Loader />
                </div>
              }
              controls
              autoPlay
              muted
              loop
              className="object-contain
            rounded-[24px]"
            >
              <source src={video3} type="video/mp4" />
            </video>
          </LazyLoadComponent>
        </div>
      </div>
    </div>
  );
};

export default SecondLayer;
