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
        <Breadcrumb crumbs={["Home", "Financing"]} />
          <Financing1 />
        </ContainerWraper>
        <Explore />
      </div>
    </>
  );
};

export default Financing;
