import React from 'react'

const Newscontact = () => {
  return (
    <>
    <div className="textfirst p-[5%]">
         <p className='text-[14px]  font-[500] text-[#959595]'>New Models and Offers</p>
            <h2 className='class-for-h2 py-[20px]'>
            New Models Available for Leasing!
            </h2>
            <p className='text-[14px]  font-[500] text-[#959595] w-[444px] '>We are excited to announce the addition of the latest models from top brands to our leasing options! Discover the new Mercedes-Benz, BMW, Audi, and Tesla models now available for lease.</p>
            <p className='text-[14px]  font-[500] text-[#636363] pt-[50px]'>September 5, 2024</p>
            </div>
            <img  className="w-[100%] h-[100%] rounded-[15px]" src={require('../../../src/images/315_isolated_realistic_metallic_white_high_performance_racing_super_car_from_left_side_view 1.png')} alt="" />

    </>
  )
}

export default Newscontact