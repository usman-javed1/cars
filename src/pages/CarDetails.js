import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";



const CarDetails = () => {
  const [car, setCar] = useState({})

  const { id } = useParams();
  useEffect(() => {
    const init = async () => {
      try {
        const url = `http://localhost:3333/car/public/${id}`
        const response = await fetch(url);
        if (!response.ok) {
          alert("error in fetching data");
        }
        const data = await response.json();
        setCar(data.data);
      } catch (error) {
        console.log("Error is", error);
      }
    }
    init();
  }, [])
  return (
    <>
      <ContainerWraper>
        <Breadcrumb crumbs={["Home", "Car for lease", car.name]} activeCrumb={car.name} isCar={true} />
        <CarDetailsHero car={car} />
      </ContainerWraper>
      <KeyFeature></KeyFeature>
      <div className="">
        <ContainerWraper>
          {/* <WhyThisCar></WhyThisCar> */}
        </ContainerWraper>
      </div>
      {/* <Imageslider></Imageslider> */}
      <ContainerWraper>
        <div className="">
          {/* <CarDiscription></CarDiscription> */}
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
