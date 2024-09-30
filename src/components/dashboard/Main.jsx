import React, { useState } from 'react';
import Row from './Row';
import Modal from './Modal';

const Main = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeSort, setActiveSort] = useState('All Categories');
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    // Dropdown options
    const dropdownOptions = ['All Categories', 'Price', 'Model', 'Mileage'];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* Search and User Info */}
            <div className="h-[60px] flex justify-between items-center w-[78vw] px-10" style={{ borderBottom: "1px solid #E9E9E9" }}>
                <div className="flex items-center relative">
                    <img src={require("../../images/Frame (4).png")} alt="Search icon" className='absolute top-[19%] left-[10px]' />
                    <input type="text" placeholder='Search' style={{ border: "none", outline: 'none' }} className='text-[16px] ml-10 py-2 w-[500px]' />
                </div>
                <div className="flex gap-5 font-[500] text-[14px] items-center">
                    <div className="">
                        <img src={require("../../images/Mask group (5).png")} alt="User icon" className='' />
                    </div>
                    <div className="flex items-center">John Smith</div>
                </div>
            </div>

            {/* Heading */}
            <div className="pl-10 mt-[45px] flex justify-between">
                <div className="font-[700] text-[36px]">
                    Your vehicles
                </div>
                <div className="flex gap-5 relative">

                    {/* Filter dropdown button */}
                    <div className="p-4 gap-3 text-[14px] font-[500] border rounded-[10px] border-[#E9E9E9] lg:flex hidden" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img src={require("../../images/filter icon.png")} className='w-[20px] h-[20px]' alt="Filter icon" />
                        <div className="flex gap-10">
                            <div className="text-[14px] font-[500]">
                                {activeSort}
                            </div>
                            <img src={require("../../images/Frame (2).png")} className='w-[20px] h-[20px]' alt="Dropdown arrow" />
                        </div>
                    </div>

                    {/* Dropdown Menu */}
                    <div className={`sortDropdown w-[252px] flex flex-col justify-center items-center absolute bg-white top-16 rounded-[20px] transition-all duration-300 ${isDropdownOpen ? 'block' : 'hidden'}`} style={{ zIndex: 9999 }}>
                        {dropdownOptions.map((value, index) => (
                            <div key={index} className="text-[#636363] text-[14px] font-[500] py-4 px-3 w-[220px] items-center flex cursor-pointer" onClick={() => {
                                setActiveSort(value);
                                setIsDropdownOpen(false); // Close dropdown on selection
                            }}>
                                {value}
                            </div>
                        ))}
                    </div>

                    {/* Add new vehicle button */}
                    <div
                        className="px-4 flex gap-3 bg-[#FFB600] rounded-[10px] text-white hover:text-black hover:bg-white transition-all duration-300 justify-center items-center cursor-pointer"
                        onClick={openModal} // Open modal on click
                    >
                        <img src={require("../../images/Frame (5).png")} className='w-[20px] h-[20px]' alt="Add icon" />
                        <div className="text-[14px]">
                            Add new vehicle
                        </div>
                    </div>
                </div>
            </div>

            {/* Vehicle Table */}
            <div className="px-10 w-full mt-14">
                <div className="header w-full bg-[#F8F8F8] h-[40px] px-5 flex items-center">
                    <div className="w-[22%] text-[14px] font-[500] text-[#767676] flex items-center">
                        Vehicle Name
                    </div>
                    <div className="w-[18%] text-[14px] font-[500] text-[#767676] flex items-center">
                        Horsepower
                    </div>
                    <div className="w-[18%] text-[14px] font-[500] text-[#767676] flex items-center">
                        Engine Details
                    </div>
                    <div className="w-[18%] text-[14px] font-[500] text-[#767676] flex items-center">
                        Price/per month
                    </div>
                    <div className="w-[18%] text-[14px] font-[500] text-[#767676] flex items-center">
                        Category
                    </div>
                </div>
                <Row />

                {/* Modal Component */}
                {isModalOpen && <Modal closeModal={closeModal} />}
            </div>
        </div>
    );
};

export default Main;
