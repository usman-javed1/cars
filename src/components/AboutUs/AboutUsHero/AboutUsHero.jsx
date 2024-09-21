import React from 'react'
import Breadcrumb from '../../Blog/Breadcrumb/Breadcrumb';
import ContainerWraper from '../../General/ContainerWraper';
const AboutUsHero = ({ heading = "About Us: The Wheel Deal", desc = "Welcome to The Wheel Deal, your trusted partner in car leasing. We are dedicated to offering you the best deals, the newest models, and a seamless leasing experience tailored to your needs.", btnContent = "Contact us", imageUrl, breadCrumbs, activeCrumb, isSpecial = false }) => {

  const scrollToBottomOffset = () => {
    // const offsetFromBottom = 1142;
    // Calculate the position to scroll to
    const isMobile = window.innerWidth < 786;
    const offsetFromBottom = isMobile ? 2100 : 1142
    const scrollToPosition = document.body.scrollHeight - offsetFromBottom;

    // Scroll to the calculated position smoothly
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  };
  return (
    <>

      <div className="mainimagehero h-[700px] ">
        <ContainerWraper>
          <div className='aboutuscontact lg:pl-0 pl-[5%] lg:mt-0 -mt-6' style={{ zIndex: 999 }}>
            <Breadcrumb crumbs={breadCrumbs} activeCrumb={activeCrumb} isOnImage={true} ></Breadcrumb>
            <div >
              <div className={`py-[20px] lg:w-[540px]  ${isSpecial ? "lg:mt-[20px]" : "lg:mt-14"}   ${isSpecial ? "mt-[50px]" : "mt-[90px]"} 
               lg:px-0`}>
                {isSpecial && <p className='text-[14px] text-[#FFB600] font-[500] mb-3'>
                  Special Lease Offers:
                </p>}
                <h2 className='class-for-h1   w-[100%] text-[#FFFFFF] '>
                  {heading}
                </h2>
              </div>
              <p className='text-[14px]  font-[500] text-[#B9B9B9] lg:w-[400px] w-[100%] '>{desc} </p>
            </div>
            
              <div className="button pt-[45px]" onClick={scrollToBottomOffset}>
                <button className='w-[151px] h-[56px]  flex justify-center items-center p-[22px, 18px, 18px, 18px] rounded-[10px] bg-white text-black text-[16px] font-[500] transition-all duration-300 hover:bg-[#F6B000] hover:text-white'>
                  {btnContent}
                </button>
              </div>
            
          </div>
        </ContainerWraper>
      </div>
    </>
  )
}

export default AboutUsHero