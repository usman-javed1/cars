import React from "react";
import HeroSection from '../components/main/HeroSection/HeroSection';
import Features from '../components/main/Features/Features';
import Details from '../components/main/Details/Details';
import Categories from '../components/main/Categories/Categories';
import HowWorks from '../components/main/HowWorks/HowWorks';
import FAQ from '../components/main/FAQ/FAQ';
import Explore from '../components/main/Explore/Explore';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <div className="w-full max-w-full mx-auto">
        <Features />
        <Details />
        <Categories />
        <HowWorks />
        <FAQ />
      </div>
      <Explore />
    </>
  );
};

export default LandingPage;
