import React from 'react'
import LeftSide from '../components/login/LeftSide'

const Login = () => {
    return (
        <div className='flex p-[40px] min-h-screen w-full bg-black justify-between items-center'>
            <div className="h-[calc(100%-80px)] max-h-[780px] mt-[20px] ml-[40px]">
                <LeftSide />
            </div>
            <img src={require("../images/Mask group (6).png")} className='h-[calc(100%-80px)] 2xl:w-[45%] lg:w-[50%]' alt="" />
        </div>
    )
}

export default Login
