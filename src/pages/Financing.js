import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContainerWraper from "../components/General/ContainerWraper";


const Financing = () => {
  return(
    <>
     <div className="w-full max-w-full mx-auto flex flex-col justify-between items-center">
     <ContainerWraper>
      <ContactForm></ContactForm>
      </ContainerWraper>
      
      </div>
    </>
  );
};

export default Financing;
