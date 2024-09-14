import React from 'react'

import Section from './Section1'

const FAQ = () => {
    return (
        <div className='mx-auto mt-[10%] w-[90%] flex justify-between min-h-[349px] '>
            <div className="flex flex-col justify-start items-start">
                <div className="heading font-[700] text-[45px] w-[401px] text-black text-start font-700" style={{letterSpacing: "-1px"}}>
                    Frequently Asked Questions
                </div>
                <div className="w-[505px] font-[500] text-[16px] text-[#959595] flex justify-start">
                    If you have more questions, please contact us
                </div>
                <div className="">
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

        </div>
    )
}

export default FAQ
