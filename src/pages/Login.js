import React from 'react'
import LeftSide from '../components/login/LeftSide'

const Login = () => {
    return (
        <div className='flex px-[40px] min-h-screen w-full bg-black justify-evenly gap-[150px] items-center'>
            <div className="max-h-[780px] w-[600px] ml-[40px] ">
                <LeftSide />
            </div>
            <img src={require("../images/Mask group (6).png")} className='h-[95vh] max-h-[780px] 2xl:w-[45%] lg:w-[700px]' alt="" />
        </div>
    )
}

export default Login
