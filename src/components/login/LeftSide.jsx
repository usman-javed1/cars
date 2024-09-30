import React from 'react'
import { Link } from 'react-router-dom'

const LeftSide = () => {
    return (
        <div className=' text-white'>
            <div className="logo mb-20">
                <Link to='/'>
                    <img src={require("../../images/logo.png")} alt="logo" width={142} height={42} />
                </Link>
            </div>
            <div className="my-auto">
                <div className="text-[45px] font-[700]">
                    Log in to WheelDeal
                </div>
                <div className="mt-[11px] text-[#767676] text-[14px] font-[500]">
                    Log in to manage your vehicles
                </div>
            </div>
            <div className="mt-[20px]">
                <div className="mt-[40px]">
                    <div className=" text-[12px] font-[500]">
                        Email / Username
                    </div>

                    <input type='text' placeholder='john@gmail.com' className="flex items-center justify-between  cursor-pointer  w-[400px] h-[50px] rounded-xl px-5 text-[14px] font-[400] mt-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                </div>

                <div className="mt-[20px]">
                    <div className=" text-[12px] font-[500]">
                        Password
                    </div>

                    <input type='text' placeholder='Enter Password' className="flex items-center justify-between  cursor-pointer  w-[400px] h-[50px] rounded-xl px-5 text-[14px] font-[400] mt-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                </div>


                <div className="">
                    <button
                        className='submitButton lg:w-[400px] md:w-[510px] w-[325px] h-[50px] flex justify-center items-center text-[16px] font-[500] mt-[30.4px] text-black bg-white rounded-[10px] hover:bg-brand-main transition-all duration-300 hover:text-white gap-3 relative'
                    >
                        Submit
                    </button>
                </div>

                <div className="text-[14px] font-[500]"></div>
            </div>
        </div>
    )
}

export default LeftSide
