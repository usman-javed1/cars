import React from "react";
import Breadcrumb from "../components/Blog/Breadcrumb/Breadcrumb";
import ContainerWraper from "../components/General/ContainerWraper";
import CarDiscription from "../components/CarDetail/CarDiscription/CarDiscription";
import Features from "../components/main/Features/Features";
import HowWorks from "../components/main/HowWorks/HowWorks";
import FAQ from "../components/main/FAQ/FAQ";
import Explore from "../components/main/Explore/Explore";
import Imageslider from "../components/CarDetail/ImageSlider/Imageslider";
import WhyThisCar from "../components/CarDetail/WhyThisCar/WhyThisCar";
import KeyFeature from "../components/CarDetail/KeyFeature/KeyFeature";
import CarDetailsHero from "../components/CarDetail/main/CarDetailsHero";



const CarDetails = () => {
  return (
    <>
      <ContainerWraper>
        <Breadcrumb crumbs={["Home", "Car for lease", "Mercedes-AMG GT Coupé"]} activeCrumb="Mercedes-AMG GT Coupé" isCar={ true} />
        <CarDetailsHero />
      </ContainerWraper>
      <KeyFeature></KeyFeature>
      <div className="">
        <ContainerWraper>
          <WhyThisCar></WhyThisCar>
        </ContainerWraper>
      </div>
      <Imageslider></Imageslider>
      <ContainerWraper>
        <div className="">
          <CarDiscription></CarDiscription>
          <Features></Features>
          <HowWorks></HowWorks>
          <FAQ></FAQ>
        </div>
      </ContainerWraper>

      <Explore></Explore>
    </>
  );
};

export default CarDetails;
