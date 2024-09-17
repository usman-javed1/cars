import React from 'react'

const MainBlog = () => {
  return (
    <>
        <div className="flex flex-wrap blogContainer">
        <div className="lg:w-[715px] w-[325px] md:w-[500px]">
            <img  className="w-[715px] h-[522px] rounded-[15px]" src={require('../../../images/image 168.png')} alt="" />
        </div> 
        <div className="w-[443px]  m-auto">
            <p className='text-[14px]  font-[500] text-[#959595]'>New Models and Offers</p>
            <h2 className='class-for-h2 py-[20px]'>
            New Models Available for Leasing!
            </h2>
            <p className='text-[14px]  font-[500] text-[#959595] w-[444px] '>We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.</p>
            <p className='text-[14px]  font-[500] text-[#636363] pt-[50px]'>September 5, 2024</p>

        </div>

        </div>
       
    </>
  )
}

export default MainBlog