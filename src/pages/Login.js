import React from 'react'
import LeftSide from '../components/login/LeftSide'

const Login = () => {
    return (
        <div className='flex pl-20 px-4 min-h-[100vh] w-full bg-black justify-between items-center'>
            <div className="h-[90vh]">
                <LeftSide />
            </div>
            <img src={require("../images/Mask group (6).png")} className='h-[90vh] ' alt="" />
        </div>
    )
}

export default Login
