import React from 'react'
import Form from './Form'

const GetInTouch = () => {
    return (
        <div className='flex justify-between' >
            <div className="">
                <div className="text-[45px] font-[700] text-white text-start font-700 w-[570px]">
                {"Let’s Discuss Your Leasing Needs".replace(/’/g, "'")}
                </div>
                <div className="desc text-[16px] mt-[24.8px] text-[#959595] font-[500] w-[320px] text-start">
                Please fill out the form below, and we'll get back to you as soon as possible.
                </div>
            </div>
            <Form />
            
        </div>
    )
}

export default GetInTouch
