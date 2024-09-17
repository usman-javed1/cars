import React from "react";
import Breadcrumb from "../components/Blog/Breadcrumb/Breadcrumb";
import Newscontact from "../components/Newscontact/Newscontact";
import ContainerWraper from "../components/General/ContainerWraper";
import NewsContactAll from "../components/NewsContactAll/NewsContactAll";
import ImageFullWidth from "../components/ImageFullWidth/ImageFullWidth";
import HowWorks from "../components/main/HowWorks/HowWorks";

const News = () => {
  return(
    <>
    <div className="w-full max-w-full mx-auto flex flex-col justify-between items-center">
    <ContainerWraper>
      <Breadcrumb></Breadcrumb>
      <Newscontact></Newscontact>
      </ContainerWraper>
      <ImageFullWidth></ImageFullWidth>
      <ContainerWraper>
        <NewsContactAll></NewsContactAll>
        <HowWorks></HowWorks>
      </ContainerWraper>

      </div>
    </>
  );
};

export default News;
