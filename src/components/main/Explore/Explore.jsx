import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Explore = () => {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='w-full h-[600px] mt-[10%]'>
            <div className="image relative">
                <img
                    src={require("../../../images/image 162.png")}
                    alt=""
                    className='h-[600px] w-full object-cover lg:block hidden'
                    style={{ filter: 'brightness(0.4)' }}
                />
                <img
                    src={require("../../../images/responsiveImageExplore.png")}
                    alt=""
                    className='h-[600px] w-full object-cover lg:hidden'
                    style={{ filter: 'brightness(0.4)' }}
                />
                <div className="lg:w-full md:w-full w-[350px] lg:px-[10px] px-[25px]">
                    <div className="container">
                        <div className="absolute  lg:top-[30%] top-[15%]">
                            <div className="lg:text-[45px] md:text-[45px] text-[35px] font-[700] text-white text-start font-700 lg:w-auto md:w-[auto] w-[325px]">
                                Explore Our Latest News
                            </div>
                            <div className="mt-[24px] text-white font-[500] lg:text-[16px] md:text-[16px] text-[14px] text-start lg:w-[400px] md:w-[400px] w-[325px]">
                                Stay informed and up-to-date with the latest happenings in the world of auto leasing!
                            </div>
                            <Link to={'/view'}>
                                <div className="font-[500] text-[16px] text-white text-start mt-10">
                                    <div className="flex justify-center items-center">
                                        <button className=' h-[44px] rounded-[10px] flex justify-start  items-center mt-[10px] hoverAni5 font-[500] absolute left-[0px] hover:text-brand-main text-start' onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                        >
                                            See more <div className='relative'> <div className='hoverLine2'></div></div>{isHovered ? (<img src={require(`../../../images/${"coloricon"}.png`)} className={`w-[10px] h-[18px] imahe1`} alt="" />) : (<img src={require(`../../../images/${"whiteicon"}.png`)} className={`${"w-[25px] h-[25px]"} imahe1`} alt="" />)}
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Explore
