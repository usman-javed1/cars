import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='top-0 left-0 sticky w-[15%] h-[100vh] bg-black rounded-r-[20px] flex flex-col justify-between  items-center pt-14 pb-8'>
            <div className="w-full">
                <div className="logo mb-20 flex justify-center">
                    <Link to='/'>
                        <img src={require("../../images/logo.png")} alt="logo" width={142} height={42} />
                    </Link>
                </div>
                <div className="w-full flex justify-center items-center gap-2 py-2 text-[#F6B000] fotn-[500] text-[16px]" style={{ borderLeft: "4px solid #F6B000" }}>
                    <img src={require("../../images/Frame-car.png")} alt="" />
                    Your vehicles
                </div>
            </div>
            <div className="w-full flex justify-center items-center gap-4 py-2 text-[#fff] fotn-[500] text-[16px]" >
                <img src={require("../../images/Frame (6).png")} alt="" />
                <div className="">
                    Logout
                </div>
            </div>
        </div>
    )
}

export default Sidebar
