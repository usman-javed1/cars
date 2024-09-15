import React from 'react'

import Section from './Section1'

const FAQ = () => {
    return (
        <div className='lg:mx-auto md:mx-auto mt-[10%] lg:w-[90%] md:w-[90%] w-[100%] flex justify-between min-h-[349px] flex-wrap '>
            <div className="flex flex-col justify-start items-start lg:ml-0 md:ml-0 ml-[25px]">
                <div className="heading font-[700] lg:text-[45px] md:text-[45px] text-[35px] lg:w-[401px] md:w-[401px]  text-black text-start font-700">
                    Frequently Asked Questions
                </div>
                <div className="lg:w-[505px] md:w-[505px] w-[325px] font-[500] lg:text-[16px] md:text-[16px] text-[13px] text-[#959595] flex justify-start mt-[21px]">
                    If you have more questions, please contact us
                </div>
                <div className="lg:block md:block hidden">
                    <button className='min-w-[162px] min-h-[56px] bg-black flex justify-center items-center rounded-[10px] text-[16px] text-white font-[500] p-[22px, 18px, 18px, 18px] mt-10 p-5 button21'>
                        Get free consultation
                        <span className='flex  transition-all duration-300 ml-4' >
                            <img src={require("../../../images/whitefullarrow.png")} className='w-[0px]  h-[0px]' alt="" />
                        </span>
                    </button>
                </div>
            </div>
            <div className="w-[600px]">
                <Section />
            </div>

            <div className="lg:hidden md:hidden block my-5 mx-[35px] mb-[100px] mt-[25px]">
                    <button className='min-w-[325px] min-h-[56px] bg-black flex justify-center items-center rounded-[10px] text-[16px] text-white font-[500] p-[22px, 18px, 18px, 18px] mt-10 p-5 button21'>
                        Get free consultation
                        <span className='flex  transition-all duration-300 ml-4' >
                            <img src={require("../../../images/whitefullarrow.png")} className='w-[0px]  h-[0px]' alt="" />
                        </span>
                    </button>
                </div>
        </div>
    )
}

export default FAQ
