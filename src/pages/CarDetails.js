import React from "react";
import Breadcrumb from "../components/Blog/Breadcrumb/Breadcrumb";
import ContainerWraper from "../components/General/ContainerWraper";

const CarDetails = () => {
  return (
    <>
      <ContainerWraper>
        <Breadcrumb crumbs={["Home", "Car for lease", "Mercedes-AMG GT Coupé"]} activeCrumb="Mercedes-AMG GT Coupé" />
      </ContainerWraper>
    </>
  );
};

export default CarDetails;
