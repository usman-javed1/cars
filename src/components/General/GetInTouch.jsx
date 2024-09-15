import React from 'react'
import Form from './Form'

const GetInTouch = () => {
    return (
        <div className='flex justify-between flex-wrap' >
            <div className="">
                <div className="lg:text-[45px] text-[40px] font-[700] text-white text-start font-700 lg:w-[570px] w-[325px]">
                {"Let’s Discuss Your Leasing Needs".replace(/’/g, "'")}
                </div>
                <div className=" text-[16px] mt-[24.8px] text-[#959595] font-[500] lg:w-[320px] text-start text-wrap overflow-hidden w-[320px] ">
                Please fill out the form below, and we'll get back to you as soon as possible.
                </div>
            </div>
            <Form />
            
        </div>
    )
}

export default GetInTouch
