import React from 'react'

const Card = ({heading, desc, number}) => {
    return (
        <div className='w-[216px] h-[146px] '>
            <div className="header w-[213px] h-[21px] flex justify-between items-center">
                <div className="text-[14px] font-[400] text-black">{number}</div>
                <div className="w-[195px] border border-black"></div>
            </div>
            <div className="w-[216px] font-[700] text-[18px] text-black text-start mt-3">
                {heading}
            </div>

            <div className="w-[180px] h-[66px] font-[500] text-[14px] text-[#959595] text-start mt-2">
            {desc}
            </div>
        </div>
    )
}

export default Card
