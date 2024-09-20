import React from "react";
import Breadcrumb from "../components/Blog/Breadcrumb/Breadcrumb";
import ContainerWraper from "../components/General/ContainerWraper";
import Header from "../components/view-car/Header";

const ViewCars = () => {
  return (
    <>
      <div className="lg:px-0 pl-[5%]">
        <ContainerWraper>
          <Breadcrumb crumbs={["Home", "Cars for lease"]} activeCrumb="Cars for lease" />
          <Header />
        </ContainerWraper>
      </div>
    </>
  );
};

export default ViewCars;
