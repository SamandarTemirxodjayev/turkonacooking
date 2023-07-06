import React from "react";
import Header from "../components/Header";
import FirstLayer from "../components/FirstLayer";
import SecondLayer from "../components/SecondLayer";
import ThirdLayer from "../components/ThirdLayer";
import FourthLayer from "../components/FourthLayer";
import FifthLayer from "../components/FifthLayer";
import SixthLayer from "../components/SixthLayer";
import Footer from "../components/Footer";

const Website = () => {
  return (
    <div className="bg-secondary">
      <Header />
      <FirstLayer/>
      <SecondLayer/>
      <ThirdLayer/>
      <FourthLayer/>
      <FifthLayer/>
      <SixthLayer/>
      <Footer/>
    </div>
  );
};

export default Website;
