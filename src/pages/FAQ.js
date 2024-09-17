import React from "react";
import FAQ from "../components/main/FAQ/FAQ";
import Explore from "../components/main/Explore/Explore";
import Features from "../components/main/Features/Features";
import ContainerWraper from "../components/General/ContainerWraper";

const FAQ1 = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto flex flex-col justify-between items-center">
        <ContainerWraper>
          <FAQ></FAQ>
          <Features></Features>
        </ContainerWraper>
        <Explore></Explore>
      </div>
    </>
  );
};

export default FAQ1;
