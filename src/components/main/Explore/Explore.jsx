import React, { useState } from 'react'

const Explore = () => {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='w-full h-[600px] mt-[10%]'>
            <div className="image relative">
                <img
                    src={require("../../../images/image 162.png")}
                    alt=""
                    className='h-[600px] w-full'
                    style={{ filter: 'brightness(0.4)' }} // Added filter to make the image dull
                />
                <div className="absolute left-[100px] top-[30%]">
                    <div className="text-[45px] font-[700] text-white text-start font-700">
                        Explore Our Latest News
                    </div>
                    <div className="mt-[24px] text-white font-[500] text-[16px] text-start w-[400px]">
                        Stay informed and up-to-date with the latest happenings in the world of auto leasing!
                    </div>
                    <div className="font-[500] text-[16px] text-white text-start mt-10">
                        <div className="flex justify-center items-center">
                            <button className=' h-[44px] rounded-[10px] flex justify-start  items-center mt-[10px] hoverAni5 font-[500] absolute left-[0px] hover:text-brand-main text-start' onMouseEnter={()=> setIsHovered(true)}
                            onMouseLeave={()=> setIsHovered(false)}
                            >
                                See more <div className='relative'> <div className='hoverLine2'></div></div>{isHovered ?(<img src={require(`../../../images/${"coloricon"}.png`)} className={`w-[10px] h-[18px] imahe1`} alt="" />):( <img src={require(`../../../images/${"whiteicon"}.png`)} className={`${"w-[25px] h-[25px]"} imahe1`} alt="" />)}
                            </button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Explore
