import React from 'react'

const MainBlog = () => {
  return (
    <>
      <div className="flex flex-wrap blogContainer lg:mb-0  mb-[20px]">
        <div className="lg:w-[715px] w-[325px] md:w-[500px] ">
          <img className="lg:w-[715px] w-[325] lg:h-[522px] h-[243.75px] rounded-[15px]" src={require('../../../images/image 168.png')} alt="" />
        </div>
        <div className="w-[443px]  m-auto lg:mt-0 md:mt-0 mt-10">
          <p className='text-[14px]  font-[500] text-[#959595]'>New Models and Offers</p>
          <h2 className='lg:text-[36px] text-[18px] font-[700] py-[20px]'>
            New Models Available for Leasing!
          </h2>
          <p className='lg:text-[14px] text-[12px]  font-[500] text-[#959595] lg:w-[444px] w-[325px] '>We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.</p>
          <p className='lg:text-[14px] text-[12px] font-[500] text-[#636363] lg:pt-[30px] pt-[18.6px]'>September 5, 2024</p>

        </div>

      </div>

    </>
  )
}

export default MainBlog