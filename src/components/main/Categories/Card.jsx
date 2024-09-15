import React from 'react'

const Card = ({ image, heading }) => {
    return (
        <div className='lg:w-[295px] md:w-[295px] w-[158px]  lg:h-[255px] md:h-[255px] h-[137px] flex flex-col justify-evenly items-center catCard transition-all duration-300 hover:bg-lightgray rounded-[30px] lg:mt-0 md:mt-0 mt-10' >
            <div className="lg:w-[232px] lg:h-[154px] md:w-[232px] md:h-[154px] h-[82.74px] w-[123.47px] flex items-center">
                <img src={image} alt=""  className=''/>
                </div>
            <div className="font-[500] text-[16px] flex justify-center items-center text-[#000] relative textSection transition-all duration-500 mt-[7px]" style={{ letterSpacing: '-3%' }}>
                <span className='w-[90px]  flex justify-center items-center'>
                    {heading}
                </span>
                <span className=' opacity-0 transition-all duration-300 imageInCatCard lg:flex md:flex hidden'>
                    <img src={require("../../../images/fullarrow.png")} className='w-[48px] h-[22px]' alt="" />
                    
                </span>
            </div>
        </div>
    )
}

export default Card
