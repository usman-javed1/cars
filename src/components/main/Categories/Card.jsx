import React from 'react'

const Card = ({ image, heading }) => {
    return (
        <div className='w-[295px] h-[255px] flex flex-col justify-evenly items-center catCard transition-all duration-300 hover:bg-lightgray rounded-[30px]' >
            <div className="w-[232px] h-[154px]">
                <img src={image} alt="" />
                </div>
            <div className="font-[500] text-[16px] flex justify-center items-center text-[#000] relative textSection transition-all duration-500 mt-[7px]" style={{ letterSpacing: '-3%' }}>
                <span className='w-[90px]  flex justify-center items-center'>
                    {heading}
                </span>
                <span className='flex opacity-0 transition-all duration-300 imageInCatCard'>
                    <img src={require("../../../images/fullarrow.png")} className='w-[48px] h-[22px]' alt="" />
                    
                </span>
            </div>
        </div>
    )
}

export default Card
