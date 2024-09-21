import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContainerWraper from "../components/General/ContainerWraper";
import Explore from "../components/main/Explore/Explore";
import Financing1 from '../components/financing/Financing'
import Breadcrumb from "../components/Blog/Breadcrumb/Breadcrumb";

const Financing = () => {
  return (
    <>

      <div className="w-full max-w-full flex-col justify-between items-center">
        <ContainerWraper>
          <div className="lg:pl-0">
            <Breadcrumb crumbs={["Home", "Financing"]} activeCrumb="Financing" />
            </div>
          <Financing1 />
        </ContainerWraper>
        <img className="lg:hidden block mt-20 w-[100vw]" src={require("../images/image 172.png")} alt="" />
        <div className="lg:mt-0  -mt-12">
          <Explore />
          </div>
      </div>
    </>
  );
};

export default Financing;
