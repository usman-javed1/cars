import React from "react";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Features from "../components/main/Features/Features";
import ContainerWraper from "../components/General/ContainerWraper";
import HowWorks from "../components/main/HowWorks/HowWorks";
import FAQ from "../components/main/FAQ/FAQ";
import Explore from "../components/main/Explore/Explore";
import AboutUsHero from "../components/AboutUs/AboutUsHero/AboutUsHero";
import OurTeamCard from "../components/OurTeam/OurTeamCard";

const OurTeam = () => {
  return (
    <>
      <div className="ourteam">
        <AboutUsHero heading="Meet our team" desc="we are a dedicated team of professionals passionate about helping you find the perfect vehicle that fits your needs and lifestyle. Our team consists of experienced experts in leasing, finance, customer service, and automotive industries." />
      </div>

      <div className="w-full max-w-full mx-auto flex flex-col justify-between items-center">

        <ContainerWraper>
        <OurTeamCard></OurTeamCard>
          <WhyChooseUs></WhyChooseUs>
          <Features heading="Explore our special deals" ></Features>
          <HowWorks></HowWorks>
          <FAQ></FAQ>
        </ContainerWraper>
      </div>
      <Explore></Explore>
    </>
  );
};

export default OurTeam;
