import React from 'react'
import Breadcrumb from '../../Blog/Breadcrumb/Breadcrumb';
import ContainerWraper from '../../General/ContainerWraper';
const AboutUsHero = ({ heading = "About Us: The Wheel Deal", desc = "Welcome to The Wheel Deal, your trusted partner in car leasing. We are dedicated to offering you the best deals, the newest models, and a seamless leasing experience tailored to your needs.", btnContent = "Contact us", imageUrl }) => {
  return (
    <>



      <div className="mainimagehero h-[700px] ">
        <ContainerWraper>
          <div className='aboutuscontact' style={{ zIndex: 999 }}>
            <Breadcrumb ></Breadcrumb>
            <div >
              <h2 className='class-for-h1 py-[20px] lg:w-[540px] w-[100%] text-[#FFFFFF] '>
                {heading}
              </h2>
              <p className='text-[14px]  font-[500] text-[#B9B9B9] lg:w-[400px] w-[100%] '>{desc} </p>
            </div>
            <div className="button pt-[45px]">
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