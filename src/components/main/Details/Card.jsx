import React from 'react'

const Card = ({ image, heading, desc, reverse }) => {
    return (
        <div className='flex justify-between items-center' style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
            <div className="imageInCard w-[609px] h-[455px] flex justify-center">
                <img src={image} alt="" className='h-[455px]' />
            </div>
            <div className="w-[506px] flex-col flex justify-start items-start">
                <div className="text-[36px] font-[700] text-black text-left">
                    {heading}
                </div>
                <br />
                <div className="desc text-[16px] text-[#959595] font-[500] text-left">
                    {desc}
                </div>
                <div className="flex justify-start w-[506px]">
                    <button className=' h-[44px] rounded-[10px] flex justify-center items-center text-[14px] mt-[10px] hoverAni2 font-[500] relative'>
                        Get free consultation <div className='relative '> <div className='hoverLine4 '></div></div> <img src={require("../../../images/cardicon.png")} className='w-[20px] h-[20px] imahe2 ' alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
