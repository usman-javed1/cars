import React from "react";
import AboutUsHero from "../components/AboutUs/AboutUsHero/AboutUsHero";
import HowWorks from "../components/main/HowWorks/HowWorks";
import ContainerWraper from "../components/General/ContainerWraper";
import FAQ from "../components/main/FAQ/FAQ";
import Explore from "../components/main/Explore/Explore";
import Tabs from "../components/Special/Tabs";

const SpecialDeals = () => {
  const cards = [
    {
      heading: "Lower Monthly Payments",
      desc: "Reduced monthly payments compared to traditional financing",
      number: "1"
    },

    {
      heading: "Flexible Terms",
      desc: "Choose from a variety of lease terms that fit your needs",
      number: "2"
    },

    {
      heading: "Minimal Upfront Costs",
      desc: "Most of our special leases come with little or no down payment, making it easier for you to get behind the wheel sooner.",
      number: "3"
    },

    {
      heading: "Enjoy Your New Vehicle",
      desc: "Leasing allows you to drive the newest models with the latest technology, safety features, and fuel efficiency.",
      number: "4"
    },
  ]
  return (
    <>
      <div className="special">
        <AboutUsHero heading="Drive Your Dream Car Today!" desc="Welcome to our Special Lease page, where you can find exclusive offers tailored to suit your lifestyle and budget. At The Wheel Deal, we believe that everyone deserves to drive the car they've always dreamed of. " breadCrumbs={["Home", "Special Deals"]} activeCrumb={"Special Deals"} isSpecial={true} />
      </div>
      <ContainerWraper>
        <div className="lg:pl-0 pl-[5%]">
          <div className="w-[350px]">
            <Tabs />
          </div>
          <HowWorks heading="Why Choose a Special Lease Offer?" desc="Our special lease offers are designed to provide you with exceptional value and flexibility:" cards={cards} />
          <FAQ />
        </div>
      </ContainerWraper>
      <Explore />
    </>
  );
};

export default SpecialDeals;
