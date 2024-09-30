import React from 'react'
import LeftSide from '../components/login/LeftSide'

const Login = () => {
    return (
        <div className='flex pl-20 py-20 px-4 min-h-[100vh] w-full bg-black justify-between items-center'>
            <div className="h-[90vh] max-h-[780px]">
                <LeftSide />
            </div>
            <img src={require("../images/Mask group (6).png")} className='h-[90vh] w-[45%] max-h-[780px]' alt="" />
        </div>
    )
}

export default Login
