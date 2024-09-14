import React from 'react'

const Form = () => {
    return (
        <div className='w-[505px] h-[232px]'>
            <div className="row1 flex gap-[20px]">
                <div className="">
                    <input type="text" className='w-[244.94px] h-[54px] border-[0px, 0px, 1px, 0px] border-[#B9B9B9] placeholder:text-[#B9B9B9] p-[16px, 10px, 14px, 0px] bg-transparent border-b outline-none text-[16px] font-[500] text-white' placeholder='Name' />
                </div>
                <div className="">
                    <input type="text" className='w-[244.94px] h-[54px] border-[0px, 0px, 1px, 0px] border-[#B9B9B9] placeholder:text-[#B9B9B9] p-[16px, 10px, 14px, 0px] bg-transparent border-b outline-none text-[16px] font-[500] text-white' placeholder='Email' />
                </div>
            </div>
            <div className="mt-8">
                <input type="text" className='w-[510px] h-[54px] border-[0px, 0px, 1px, 0px] border-[#B9B9B9] placeholder:text-[#B9B9B9] p-[16px, 10px, 14px, 0px] bg-transparent border-b outline-none text-[16px] font-[500] text-white' placeholder='Email' />
            </div>

            <div className="mt-8">
                <input type="text" className='w-[510px] h-[54px] border-[0px, 0px, 1px, 0px] border-[#B9B9B9] placeholder:text-[#B9B9B9] p-[16px, 10px, 14px, 0px] bg-transparent border-b outline-none text-[16px] font-[500] text-white' placeholder='Message' />
            </div>

            <div className="">
                <button
                    className='w-[505px] h-[56px] flex justify-center items-center text-[16px] font-[500] mt-[30.4px] text-black bg-white rounded-[10px] hover:bg-brand-main transition-all duration-300 hover:text-white gap-3'
                >
                    Submit
                    <img src={require("../../images/fullwhitearrow.png")} className='w-[35px] h-[24px]' alt="" />
                </button>
            </div>
        </div>
    )
}

export default Form
