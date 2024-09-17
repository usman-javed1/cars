import React from "react";
import AboutUsHero from "../components/AboutUs/AboutUsHero/AboutUsHero";
import ContainerWraper from "../components/General/ContainerWraper";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Details from '../components/main/Details/Details';
import HowWorks from '../components/main/HowWorks/HowWorks';
import FAQ from '../components/main/FAQ/FAQ';
import Explore from '../components/main/Explore/Explore';
import Features from "../components/main/Features/Features";

const About = () => {
  return(
    <>
    <AboutUsHero></AboutUsHero>
    <div className="w-full max-w-full mx-auto flex flex-col justify-between items-center"> 
      <ContainerWraper>
        <Details></Details>
        <WhyChooseUs></WhyChooseUs> 
        <Features></Features>
        <HowWorks />
          <FAQ />
      </ContainerWraper>
      </div>
      <Explore />
    </>
  );
};

export default About;
