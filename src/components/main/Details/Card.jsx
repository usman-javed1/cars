import React from 'react'

const Card = ({ image, heading, desc, reverse }) => {
    return (
        <div className={`flex justify-between items-center w-full max-w-full flex-wrap-reverse lg:mb-0 md:mb-0 mb-[100px] ${reverse ? 'lg:flex-row-reverse' : ''} `}>
            <div className="imageInCard  lg:w-[609px] md:w-[609px] w-[325px] lg:h-[455px] md:h-[455px] h-[240px] flex justify-center lg:mt-0 md:mt-0 mt-5 ">
                <img src={image} alt="" className='lg:w-full md:w-full w-[325px]' />
            </div>
            <div className="lg:w-[609px] md:w-[609px] w-[325px] lg:h-auto md:h-auto min-h-[240px] flex-col flex justify-start items-start">
                <div className="lg:text-[36px] md:text-[36px] text-[25px] font-[700] text-black text-left lg:mb-[35px] md:mb-[20px]">
                    {heading}
                </div>
                <div className="lg:w-[506px] md:w-[506px] w-[325px] lg:text-[16px] md:text-[16px] text-[14px] text-[#959595] font-[500] text-left lg:my-0 md:my-0 my-5 " >
                    {desc}
                </div>
                <div className="flex justify-start lg:w-[506px] md:w-[506px] w-[325px]">
                    <button className=' h-[44px] rounded-[10px] flex justify-center items-center text-[14px] lg:mt-[10px]  hoverAni2 font-[500] relative transition-all duration-300 hover:text-[#F6B000] '>
                        Get free consultation <div className='relative -mt-1'> <div className='hoverLine4'></div></div> <img src={require("../../../images/cardicon.png")} className='w-[20px] h-[20px] -mt-1 imahe2 ' alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card


