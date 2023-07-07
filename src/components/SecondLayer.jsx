import React from "react";
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
          <video
            controls
            autoPlay
            muted
            loop
            className="object-contain rounded-[24px]"
          >
            <source
              src="https://video-psi-mocha.vercel.app/IMG_6424%20(1).mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="lg:w-[320px] xs:w-[100%] lg:h-[569px] lg:rounded-[32px]">
          {/* Video 1 */}
          <video
            controls
            autoPlay
            muted
            loop
            className="object-contain rounded-[24px]"
          >
            <source
              src="https://video-psi-mocha.vercel.app/IMG_7963.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="lg:w-[320px] xs:w-[100%] lg:h-[569px] lg:rounded-[32px]">
          {/* Video 1 */}
          <video
            controls
            autoPlay
            muted
            loop
            className="object-contain rounded-[24px]"
          >
            <source
              src="https://video-psi-mocha.vercel.app/IMG_8028.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="lg:justify-end xs:justify-center xs:px-4 lg:px-0 flex w-[66%] mt-10"></div>
    </div>
  );
};

export default SecondLayer;
