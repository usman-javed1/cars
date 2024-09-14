import React from 'react'

const Card = () => {
    return (
        <div className='mainCard w-[400px] h-[580px] p-[18px] rounded-[8px] shadow-[0_4px_20px_0px_rgba(0,0,0,0.1)] my-10' >
            <div className="cardNav text-[#959595] font-[500] text-[12px] flex justify-between items-center">
                <div className=" w-[70px] h-[35px] p-[8px, 10px, 6px, 10px] bg-[#FFE39E] text-[17px] font-[700] text-black rounded-[8px] flex justify-center items-center">
                    -40%
                </div>
                <div className="flex gap-10">
                    <div className=" flex gap-[5px] ">
                        <img src={require('../../images/chair.png')} className='w-[19px] h-[19px]' alt="" />
                        <div className="">
                            4 seats
                        </div>
                    </div>

                    <div className=" flex gap-[5px] ">
                        <img src={require('../../images/automatic.png')} className='w-[19px] h-[19px]' alt="" />
                        <div className="">
                            Automatic
                        </div>
                    </div>
                </div>
            </div>

            <div className="imageSection">
                <img src={require("../../images/blackcar.png")} alt="" className='w-[361px] h-[256px]' />
            </div>

            <div className="details">
                <div className="head text-[#959595] font-[500] text-[14px] flex justify-start mt-[5px]">
                    Sports Cars
                </div>
                <div className="name mt-[5.5px] text-black flex justify-start text-[22px] font-[700]" style={{
                    letterSpacing: "-0.5px"
                }} >
                    2024 Kia Forte LXS 4dr Sedan
                </div>
                <div className="moreDesc w-[280px] flex gap-[18px]"
                    style={{
            letterSpacing: "-0.5px"
        }}
                >
                    <div className="w-[136px]">
                        <div className="head text-[#959595] font-[500] text-[12px] flex justify-start">
                            Lease term: <span className='text-black ml-1 '>39 months</span>
                        </div>
                    </div>
                    <div className="">
                        <div className="head text-[#959595] font-[500] text-[12px] flex justify-start">
                            Miles per year:  <span className='text-black ml-1 '> 8000</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="price flex justify-start mt-[10px] gap-[10px] items-end" style={{
            letterSpacing: "-0.5px"
        }}>
                <div className="digit text-[30px] font-[700]">
                    839$
                </div>
                <div className="text-[12px] font-[500]">/month</div>
            </div>

            <div className="">
                <button className='mainButton w-[340px] h-[44px] rounded-[10px] bg-black text-white flex justify-center items-center text-[14px] mt-[15px] font-[500]  transition-all duration-300'>
                    Request a quote
                </button>
            </div>

            <div className="">
                <button className='w-[340px] h-[44px] rounded-[10px] flex justify-center items-center text-[14px] mt-[10px] hoverAni font-[500] relative'>
                    View Details <div className='relative'> <div className='hoverLine4'></div></div> <img src={require("../../images/cardicon.png")} className='w-[20px] h-[20px] imahe' alt="" />
                </button>
            </div>
        </div>
    )
}

export default Card
