import React from 'react'

const Card = ({heading, desc, number}) => {
    return (
        <div className='lg:w-[216px] md:w-[216px] w-[325px] mt-10 lg:mt-0 md:mt-0 h-[146px] '>
            <div className="header lg:w-[213px] md:w-[213px] w-[325px] h-[21px] flex justify-between items-center">
                <div className="text-[14px] font-[400] text-black">{number}</div>
                <div className="lg:w-[195px] md:w-[195px] w-[307px] border border-black"></div>
            </div>
            <div className="font-[700] w-[325px] text-[18px] text-black text-start mt-3">
                {heading}
            </div>

            <div className="w-[180px] h-[66px] font-[500] text-[14px] text-[#959595] text-start mt-2">
            {desc}
            </div>
        </div>
    )
}

export default Card
