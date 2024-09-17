import React from "react";
import Breadcrumb from "../components/Blog/Breadcrumb/Breadcrumb";
import Newscontact from "../components/Newscontact/Newscontact";
import ContainerWraper from "../components/General/ContainerWraper";
import NewsContactAll from "../components/NewsContactAll/NewsContactAll";
import ImageFullWidth from "../components/ImageFullWidth/ImageFullWidth";
import HowWorks from "../components/main/HowWorks/HowWorks";
import FAQ from '../components/main/FAQ/FAQ';
import Articles from "../components/NewsContactAll/Articles";

const News = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto flex flex-col justify-between items-center">
        <ContainerWraper>
          <Breadcrumb></Breadcrumb>
          <Newscontact></Newscontact>
        </ContainerWraper>
        <ImageFullWidth></ImageFullWidth>
        <ContainerWraper>
          <NewsContactAll></NewsContactAll>
          <Articles />
          <div className="lg:mt-[50px] mt-[10px] ">
            <HowWorks></HowWorks>
          </div>
          <div className="lg:mb-[100px] mb-[10px]">
            <FAQ></FAQ>
          </div>
        </ContainerWraper>

      </div>
    </>
  );
};

export default News;
