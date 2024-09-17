import React from 'react';

const WhyChooseUs = () => {
  const steps = [
    {
      heading: "Wide Selection of Vehicles",
      desc: "Latest models, including popular brands like Mercedes-Benz, BMW, Tesla, and more.",
      number: "1"
    },
    {
      heading: "Competitive Pricing",
      desc: "We offer some of the best leasing rates in the market, ensuring that you get great value for your money.",
      number: "2"
    },
    {
      heading: "Personalized Service",
      desc: "We are here to provide personalized advice and support, from selecting the right vehicle to finalizing the lease agreement.",
      number: "3"
    },
    {
      heading: "Flexible Lease Options",
      desc: "Enjoy flexible lease terms that cater to your specific needs, whether you need a car for a few months or several years.",
      number: "4"
    }
  ];

  return (
    <>
            {/* Heading */}
            <div className="heading font-[700] lg:text-[45px] md:text-[45px] text-[35px] lg:w-[401px] md:w-[401px] w-[100%] text-black text-start lg:pt-[180px] pt-[0px]">
              How it Works?
            </div>

            {/* Combined Card */}
            <div className="combined-card mt-[40px] flex justify-between items-start flex-wrap">
              {steps.map((step, index) => (
                <div key={index} className="card lg:w-[216px] w-[100%] py-[20px] ">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[14px] font-[400] text-black">{step.number}</span>
                    <div className="flex-grow border-b border-black ml-[10px]"></div>
                  </div>
                  <div className="font-[700] text-[18px] text-black mb-2">
                    {step.heading}
                  </div>
                  <div className="text-[14px] font-[500] text-[#959595]">
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </>
  );
};

export default WhyChooseUs;
