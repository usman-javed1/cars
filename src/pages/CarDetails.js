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



const CarDetails = () => {
  return (
    <>
      <ContainerWraper>
        <Breadcrumb crumbs={["Home", "Car for lease", "Mercedes-AMG GT Coupé"]} activeCrumb="Mercedes-AMG GT Coupé" />
        </ContainerWraper>
        <KeyFeature></KeyFeature>
        <ContainerWraper>
        <WhyThisCar></WhyThisCar>
        </ContainerWraper>
        <Imageslider></Imageslider>
        <ContainerWraper>
        <CarDiscription></CarDiscription>
        <Features></Features>
        <HowWorks></HowWorks>
        <FAQ></FAQ>
        
      </ContainerWraper>
      <Explore></Explore>
    </>
  );
};

export default CarDetails;
