import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Sidebar = ({item}) => {
    const [selectedItem, setSelectedItem] = useState(1);
    const navigate = useNavigate()

    const onChangeSidebarItem = (val) => {
        setSelectedItem(val);
    }

    return (

        <div className='top-0 left-0 sticky w-[15%] h-[100vh] bg-black rounded-r-[20px] flex flex-col py-14'>
            <div className="logo mb-20 pl-[40px]">
                <Link to='/'>
                    <img src={require("../../images/logo.png")} alt="logo" width={142} height={42} />
                </Link>
            </div>
            <div className={`w-full flex items-center py-2 font-[500] text-[16px] ${item === 1 ? "text-[#F6B000]" : "text-[#959595]"}`}>
                <div className={`w-[5px] h-[40px] rounded-r-[6px] bg-[#F6B000] ${item === 1 ? "opacity-100" : "opacity-0"}`}></div>
                <div className='flex items-center cursor-pointer' onClick={() => { onChangeSidebarItem(1);  navigate("/dashboard")}}>
                    <img src={require(`../../images/${item === 1 ? "Frame-car.png" : "Frame-car-disable.png"}`)} alt="" className={`${item === 1 ? "pl-[40px] pr-[6px]" : "pl-[40px] pr-[7px]"}`} />
                    Your vehicles
                </div>
            </div>
            <div className={`w-full flex items-center py-2 font-[500] text-[16px] pt-2 ${item === 2 ? "text-[#F6B000]" : "text-[#959595]"}`}>
                <div className={`w-[5px] h-[40px] rounded-r-[6px] bg-[#F6B000] ${item === 2 ? "opacity-100" : "opacity-0"}`}></div>
                <div className='flex items-center cursor-pointer' onClick={() => { onChangeSidebarItem(2);  navigate("/blogdashboard")}}>
                    <img src={require(`../../images/${item === 2 ? "blog-item-enable.png" : "blog-item.png"}`)} alt="" className={`pr-[7px] ${item === 2 ? "pl-[40px]" : "pl-[40px]"}`} />
                    Blog
                </div>
            </div>
            <div className={`w-full flex items-center py-2 font-[500] text-[16px] pt-2 text-white absolute bottom-[70px]`} onClick={()=>{ window.localStorage.removeItem('token'); navigate('/admin') }}>
                <div className='flex items-center cursor-pointer'>
                    <img src={require(`../../images/logout.png`)} alt="" className={`pr-[7px] pl-[40px]`} />
                    Logout
                </div>
            </div>
            {/* <div className="w-full flex justify-center items-center gap-2 py-2 text-[#F6B000] fotn-[500] text-[16px]" style={{ borderLeft: "4px solid #F6B000" }}>
                <img src={require("../../images/Frame-car.png")} alt="" />
                Logout
            </div> */}
        </div>
    )
}

export default Sidebar
